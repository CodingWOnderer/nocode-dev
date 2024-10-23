export interface Blog {
    id: string;
    title: string;
}

interface User {
    imageUrl: string;
    username: string;
}

interface LikeDislike {
    id: string;
}

interface Reply {
    likesCount: number;
    dislikesCount: number;
    user: User;
    likes: LikeDislike[];
    dislikes: LikeDislike[];
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    commentId: string;

}
export interface Comment {
    likesCount: number;
    dislikesCount: number;
    replies: Reply[];
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    user: User;
}