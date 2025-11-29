export interface IComment {
    id: string;
    house_id: string;
    user_id: string;
    title: string;
    caption: string;
    rating: string;
    created_at: object; // ✅ Object نه String
    parent_comment_id: string;
}
