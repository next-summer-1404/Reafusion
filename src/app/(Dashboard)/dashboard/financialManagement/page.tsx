import FinanceTable from "@/components/Pages/DashboardPages/FinancePage/FinanceTable";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import StatusCard from "@/components/Ui/StatusCard";
import { GetDashboardFinance } from "@/core/Apis/Dashboard/GetDashboardFinance";
import { AxiosResponse } from "axios";
import { Eye, Hourglass, House, ListChecks } from "lucide-react";
import { cookies } from "next/headers";
import React, { FC } from "react";

interface IFinancialData {
  totalAmount: number;
  totalBookings: number;
  totalPayments: number;
  totalPerviousMonthAmount: number;
  totalCurrentMonthAmount: number;
}

interface IFinancePage {
  searchParams: {
    page?: string;
    paymentStatus: string;
  }
}

const FinancialManagement: FC<IFinancePage> = async ({ searchParams }) => {
  const response = (await GetDashboardFinance()) as AxiosResponse<IFinancialData>;
  const data = response.data

  const StatusDatas = [
    { Icon: House, label: "درآمد ماه جاری", value: data.totalCurrentMonthAmount },
    { Icon: ListChecks, label: "درآمد ماه قبل", value: data.totalPerviousMonthAmount },
    { Icon: Hourglass, label: "درآمد کل", value: data.totalAmount },
    { Icon: Eye, label: "قابل برداشت", value: data.totalAmount },
  ];

  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value as string;

  return (
    <ScrollReveal className="space-y-4">
      <div className="flex gap-4 flex-wrap">
        {StatusDatas.map((items, index) => (
          <StatusCard
            key={index}
            Icon={items.Icon}
            label={items.label}
            value={items.value}
            moneyName="تومان"
          />
        ))}
      </div>
      <FinanceTable searchParams={searchParams} token={token} />
    </ScrollReveal>
  );
};

export default FinancialManagement;
