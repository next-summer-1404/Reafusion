import fetchApi from "@/lib/Interceptor/serverApi";

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
  const response = await fetchApi(`/api/admin/users/${id}`, {
     method: 'PUT',
     body: EditUsersDatas
  });
  return response;
}
