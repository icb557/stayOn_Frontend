import { Post } from "./post";
import { User } from "./user";

export interface Profile {
    email: string,
    firstName: string,
    middleName: string,
    lastName: string,
    secondLastName: string,
    major: string,
    role: string,
    age: number,
    Posts: Post[],
    Followers: User[],
    Following: User[]
}

