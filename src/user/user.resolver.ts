// user.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';
import { CreateUserDto } from './create-user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Query(() => User)
  async getUserById(@Args('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Mutation(() => User)
  async createUser(@Args('createUserDto') createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: number) {
    return this.userService.deleteUser(id);
  }

  @Mutation(() => User)
  async editUser(
    @Args('id') id: number,
    @Args('createUserDto') createUserDto: CreateUserDto,
  ) {
    return this.userService.editUser(id, createUserDto);
  }
}
