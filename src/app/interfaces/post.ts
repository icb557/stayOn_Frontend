import { Comment } from "./comment";
import { Material } from "./material";
import { Topic } from "./topic";

export interface Post {
    id: number,
    message: string,
    date: string,
    userId: string,
    Comments: Comment[],
    Materials: Material[],
    Topic: Topic
}

export interface PostCreate {
    id: number,
    message: string,
    date: string,
    topicId: number,
    userId: string,
    materials: {
        name: string,
        uri: string,
        type: string,
    }[]
}

export interface PostUpdate {
    message: string,
    date: string,
    topicId: number,
}

