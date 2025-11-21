export interface ICommentsDatas {
  id: string;
  house_id: string;
  user_id: string;
  title: string;
  caption: string;
  rating: string;
  created_at: string;
  parent_comment_id: string;
}

export interface IAllCommentsList {
  data: ICommentsDatas[];
  totalCount: number;
}