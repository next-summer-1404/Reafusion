import NotificationCard from "@/components/Pages/DashboardPages/NotificationPage/NotificationCard";
import NotificationTopBar from "@/components/Pages/DashboardPages/NotificationPage/NotificationTopBar";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import CustomPagination2 from "@/components/Ui/CustomPagination2";
import { GetUserNotifications } from "@/core/Apis/Dashboard/GetUserNotifications";
import { INotificationData } from "@/core/types/INotificationData";
import { AxiosResponse } from "axios";
import React, { FC } from "react";

interface INotificationResponse {
  data: INotificationData[];
  totalCount: number;
}

interface INotificationList {
  searchParams: {
    page: string;
  }
}

const Notifications: FC<INotificationList> = async ({ searchParams }) => {
  const limit = 5;
  const currentPage = parseInt(searchParams.page || "1", 5);
  // list of the unReadNotification
  const response = (await GetUserNotifications(false, limit, currentPage)) as AxiosResponse<INotificationResponse>;
  const unreadNotifications = response.data.data;
  console.log(unreadNotifications)
  // list of the unReadNotification end
  // list of the ReadNotification
  const response2 = (await GetUserNotifications(true, limit, currentPage)) as AxiosResponse<INotificationResponse>;
  const readNotifications = response2.data.data;
  const { totalCount } = response2.data;
  // list of the ReadNotification end
  // calculet the page count for pagination
  const totalPages = Math.ceil((totalCount as number) / limit);
  // calculet the page count for pagination end 

  return (
    <ScrollReveal className="space-y-5">
      <NotificationTopBar />
      <div className="bg-whiteColor border border-borderColor py-6 px-6 rounded-[24px] space-y-7">
        <div className="flex justify-between text-dark text-[20px] font-bold">
          <h3>عنوان اعلان</h3>
          <h3>پیام اعلان</h3>
          <h3></h3>
        </div>
        <h3 className="text-[20px] text-gray">اعلان های خوانده نشده</h3>
        {unreadNotifications.length > 0 ? (
          unreadNotifications.map((items) => (
            <NotificationCard
              key={items.id}
              id={items.id}
              title={items.title}
              message={items.message}
              isRead={items.isRead}
            />
          ))
        ) : (
          <p className="text-[16px] text-dark">اعلان خوانده نشده ای وجود ندارد</p>
        )}
        <h3 className="text-[20px] text-gray">اعلان های خوانده شده</h3>
        {readNotifications.length > 0 ? (
          readNotifications.map((items) => (
            <NotificationCard
              id={items.id}
              key={items.id}
              title={items.title}
              message={items.message}
              isRead={items.isRead}
            />
          ))
        ) : (
          <p className="text-[16px] text-dark">اعلان خوانده شده ای وجود ندارد</p>
        )}
        {totalPages > 1 && <CustomPagination2 totalPages={totalPages} currentPage={currentPage} />}
      </div>
    </ScrollReveal>
  );
};

export default Notifications;