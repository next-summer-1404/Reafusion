import Api from "@/lib/Interceptor"

interface IsecurityDatas {
  currentPassword: string;
  newPassword: string;
}

export const UpdateUserPassword = async (securityDatas: IsecurityDatas, token: string) => {
  const response = await Api.put(`/api/users/change-password`, securityDatas, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data
}
