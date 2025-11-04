export interface IUserInformation {
    user: {
    id: string;
    role: string;
    membershipDate: string;
    email: string;
    phoneNumber: string;
    emailVerified: boolean;
    verificationCode: string;
    verificationCodeExpires: string;
    resetCode: string;
    resetCodeExpires: string;
        fullName: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    createdAt: string;
    updatedAt: string;
    },
    additionalPercentage: number;
}