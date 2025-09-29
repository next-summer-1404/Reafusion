import Footer from "@/components/Ui/Footer/Footer";
import Header from "@/components/Ui/Header/Header";
import React, { FC, Fragment, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />

          {children}
          
      <Footer />
    </Fragment>
  );
};

export default MainLayout;