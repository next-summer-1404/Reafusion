import Api from "@/lib/Interceptor";

export const UpdateUserProfileImage = async (formData: FormData, tokenValue: string) => {
  const response = await Api.put(`/api/users/upload/picture`, formData, {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${tokenValue}`,
    },
  });
  return response.data;
};
