import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

interface IEditUsersDatas {
  email: string;
  fullName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailVerified: string;
  membershipDate: string;
  profilePicture: string;
}

export const EditAllUsersDatas = async (EditUsersDatas: IEditUsersDatas, id: string) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get('token')?.value as string
  const response = await Api.put(`/api/admin/users/${id}`, EditUsersDatas, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data
}
