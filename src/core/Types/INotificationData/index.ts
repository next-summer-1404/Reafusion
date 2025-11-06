export interface INotificationData {
    id: string;
    userId: string;
    title: string;
    message: string;
    type: string;
    data: {
      offerId: string;
    };
    isRead: boolean;
    createdAt: string;
    updatedAt: string;
}