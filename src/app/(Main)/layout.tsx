import Footer from "@/components/Ui/Footer/Footer";
import Header from "@/components/Ui/Header/Header";
import { GetUserInformation } from "@/core/Apis/Dashboard/UserInformation";
import { IUserInformation } from "@/core/types/IUserInformation";
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import React, { FC, Fragment, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = async ({ children }) => {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value;
  let user = null;
  if (token) {
    const userInformations = (await GetUserInformation()) as AxiosResponse<IUserInformation>;
    user = userInformations?.data?.user || null;
  }
  


  return (
    <Fragment>
      <Header userToken={token} UserName={user?.fullName} UserImage={user?.profilePicture} />

      {children}

      <Footer />
    </Fragment>
  );
};

export default MainLayout;