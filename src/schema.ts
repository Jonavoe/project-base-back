import {
  Resolver,
  Query as GraphQLQuery,
  Mutation as GraphQLMutation,
} from '@nestjs/graphql';

@Resolver('Query')
export class QueryResolver {
  @GraphQLQuery(() => String)
  hello(): string {
    return 'Hello World';
  }
}

@Resolver('Mutation')
export class MutationResolver {
  @GraphQLMutation(() => String)
  createUser(): string {
    return 'User created';
  }
}
