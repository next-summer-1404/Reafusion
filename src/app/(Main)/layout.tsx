import Footer from "@/components/Ui/Footer/Footer";
import Header from "@/components/Ui/Header/Header";
import { cookies } from "next/headers";
import React, { FC, Fragment, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = async ({ children }) => {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value;

  return (
    <Fragment>
      <Header userToken={token} />

      {children}

      <Footer />
    </Fragment>
  );
};

export default MainLayout;