import fetchApi from "@/lib/Interceptor/serverApi";

interface IsecurityDatas {
  currentPassword: string;
  newPassword: string;
}

export const UpdateUserPassword = async (securityDatas: IsecurityDatas) => {
  const response = await fetchApi(`/api/users/change-password`, {
    method: "PUT",
    body: securityDatas,
  });
  return response;
}
