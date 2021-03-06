import { Field, ArgsType, InputType } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class LoginInput {
    @Field(type => String)
    username: string

    @Field(type => String)
    @Length(8)
    password: string
}