import UserPersonalInfo from "@/components/Pages/DashboardPages/ProfilePage/UserPersonalInfo";
import UserSecurityInfo from "@/components/Pages/DashboardPages/ProfilePage/UserSecurityInfo";
import UserTab from "@/components/Pages/DashboardPages/ProfilePage/UserTab";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import { GetUserInformation } from "@/core/Apis/Dashboard/UserInformation";
import { FC } from "react";

interface IProps {
  searchParams: { tab?: string };
}

const Profile: FC<IProps> = async ({ searchParams }) => {
  const tab = searchParams.tab === "امنیتی" ? "اطلاعات امنیتی" : "اطلاعات شخصی";
  const userInformations =
    (await GetUserInformation());
  const { user } = userInformations;

  return (
    <ScrollReveal className="flex flex-col gap-8">
      <h3 className="text-[24px] text-dark dark:text-whiteColor font-bold">اطلاعات کاربری</h3>
      <div className="flex gap-7">
        <UserTab href="/dashboard/profile" TabName="اطلاعات شخصی" active={tab === "اطلاعات شخصی"} />
        <UserTab href="/dashboard/profile?tab=امنیتی" TabName="اطلاعات امنیتی" active={tab === "اطلاعات امنیتی"} />
      </div>
      {tab === "اطلاعات شخصی" && (
        <UserPersonalInfo ProfileImage={user.profilePicture}/> 
      )}
      {tab === "اطلاعات امنیتی" && <UserSecurityInfo />}
    </ScrollReveal>
  );
};

export default Profile;
