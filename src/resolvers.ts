// resolvers.ts
import { Resolver, Query, Mutation } from '@nestjs/graphql'; // Asegúrate de tener un modelo User definido
import { User } from './user/user.model';

@Resolver()
export class QueryResolver {
  @Query(() => [User])
  async users() {
    // Lógica para obtener usuarios
    return [];
  }
}

@Resolver()
export class MutationResolver {
  @Mutation(() => User)
  async createUser() {
    // Lógica para crear un usuario
    return {};
  }
}
