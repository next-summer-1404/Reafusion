import { ChartCandlestick, House, List, ListCheck, ListRestart, ListX, MessageSquareText, UserLock, UserRoundCog, Users, UserStar } from "lucide-react";
import IncomeChart from "@/components/Pages/DashboardPages/InComeCart";
import ProfileCompletionChart from "@/components/Pages/DashboardPages/ProfileCompletionChart";
import StatusCard from "@/components/Ui/StatusCard";
import { GetSummaryStatus } from "@/core/Apis/Dashboard/SummaryStatus";
import {GetUserInformation} from "@/core/Apis/Dashboard/UserInformation";
import { IUserInformation } from "@/core/types/IUserInformation";
import { AxiosResponse } from "axios";
import Link from "next/link";
import LastReserveHousesTable from "../../../components/Pages/DashboardPages/LastReserveHouseTable";

const Dashboard = async () => {
  const response = await GetSummaryStatus();
  const userInformations = await GetUserInformation() as AxiosResponse<IUserInformation>
  const { user, additionalPercentage } = userInformations.data;
  console.log(user, additionalPercentage) 

  const StatusDatas = [
    { Icon: House, label: "کل خانه ها", value: response.houses },
    { Icon: Users, label: "کل کاربران", value: response.users.userCount },
    { Icon: UserLock, label: "تعداد خریداران", value: response.users.sellers },
    { Icon: UserStar, label: "تعداد فروشندگان", value: response.users.buyers },
    { Icon: UserRoundCog, label: "تعداد ادمین ها", value: response.users.admins },
    { Icon: List, label: "کل رزرو ها", value: response.bookings.bookingCount },
    { Icon: ListCheck, label: "رزرو های تایید شده", value: response.bookings.conformedBookings },
    { Icon: ListX, label: "رزرو های کنسل شده", value: response.bookings.canceledBookings },
    { Icon: ListRestart, label: "رزروهای جاری", value: response.bookings.pendingBookings },
    { Icon: MessageSquareText, label: "کل کامنت ها", value: response.comments },
    { Icon: ChartCandlestick, label: "درصد تکمیل پروفایل", value: additionalPercentage + '%' },
    { Icon: ChartCandlestick, label: "میانگین امتیاز", value: response.averageRating },
  ];

  return (
    <div>
      {/* summary of the site status */}
      <div className="flex justify-between flex-wrap space-y-10">
        {StatusDatas.map((items, index) => (
          <StatusCard
            key={index}
            Icon={items.Icon}
            label={items.label}
            value={items.value}
          />
        ))}
      </div>
      {/* summary of the site status end */}
      {/* the chart of the compelet userInfo & Income chart */}
      <div className="flex justify-between">
        <IncomeChart />
        <ProfileCompletionChart additionalPercentage={additionalPercentage}/>
      </div>
      {/* the chart of the compelet userInfo & Income chart end */}
      {/* last reserve houses */}
      <div className="bg-whiteColor rounded-[24px] border border-lightGray w-full px-6 py-6 mt-6">
        <div className="flex justify-between">
            <h3 className="text-[20px] text-dark font-bold">رزرو های اخیر</h3>
            <Link href={'/dashboard/reservesManagment'} className="text-gray text-[16px] hover:text-primary cursor-pointer">مشاهده همه</Link>
        </div>
        <LastReserveHousesTable />
      </div>
      {/* last reserve houses end */}
    </div>
  );
};

export default Dashboard;