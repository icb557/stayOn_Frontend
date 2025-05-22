export interface Comment {
    id: number,
    message: string,
    date: string,
    userId: number,
    postId?: number
}