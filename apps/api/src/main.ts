import 'reflect-metadata';
import { Injectable, Module, OnModuleDestroy } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Field, GraphQLModule, ID, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';

@Injectable()
class RideService implements OnModuleDestroy {
  private readonly prisma = new PrismaClient();

  listUpcoming() {
    return this.prisma.event.findMany({
      where: { status: 'PUBLISHED', startsAt: { gte: new Date() } },
      orderBy: [{ startsAt: 'asc' }, { id: 'asc' }],
      take: 24,
      select: { id: true, title: true, location: true, startsAt: true },
    });
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}

@ObjectType()
class Ride {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  location!: string;

  @Field(() => Date)
  startsAt!: Date;
}

@Resolver(() => Ride)
class RideResolver {
  constructor(private readonly rides: RideService) {}

  @Query(() => [Ride])
  upcomingRides() {
    return this.rides.listUpcoming();
  }
}

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      introspection: false,
    }),
  ],
  providers: [RideService, RideResolver],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.listen(4000, '0.0.0.0');
}

bootstrap().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
