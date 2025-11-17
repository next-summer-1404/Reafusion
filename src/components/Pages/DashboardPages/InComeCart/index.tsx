import { GetDashboardFinance } from "@/core/Apis/Dashboard/GetDashboardFinance";
import { AxiosResponse } from "axios";
import { Box, Typography } from "@mui/material";

interface IFinancialData {
  totalAmount: number;
  totalBookings: number;
  totalPayments: number;
  totalPerviousMonthAmount: number;
  totalCurrentMonthAmount: number;
}

const IncomeChart = async () => {
  const response = (await GetDashboardFinance()) as AxiosResponse<IFinancialData>;
  const data = response.data;

  const total = data.totalAmount || 1;
  const current = data.totalCurrentMonthAmount || 0;
  const previous = total - current;

  const baseHeight = 100;
  const maxHeight = 85;

  const points = [
    { x: 50,  y: baseHeight - (previous > 0 ? 10 : 5) },         
    { x: 100, y: baseHeight - (previous > 0 ? 35 : 20) },         
    { x: 180, y: baseHeight - (previous > 0 ? 15 : 40) },          
    { x: 280, y: baseHeight - (previous > 0 ? 45 : 15) },          
    { x: 350, y: baseHeight - (current / total) * maxHeight },     
  ];

  // تبدیل به string برای polyline
  const pointsString = points.map(p => `${p.x},${p.y}`).join(" ");

  return (
    <Box sx={{ height: 354, width: "48%", bgcolor: "white", borderRadius: 6, p: 3 }}>
      {/* هدر */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box>
          <Typography fontWeight="bold" fontSize={20}>نمودار درآمد</Typography>
          <Typography fontSize={14} color="text.secondary" mt={0.5}>
            از تاریخ ۱ تا ۳۱ آبان ۱۴۰۴
          </Typography>
        </Box>
        <Box>
          درآمد کل: <span className="text-primary font-semibold">{data.totalAmount}  تومان </span>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, position: "relative" }}>
        <svg width="100%" height="140" viewBox="0 0 400 140">
          <line x1="50" y1="100" x2="350" y2="100" stroke="#f0f0f0" strokeWidth="2" />
          <polyline
            fill="none"
            className=""
            stroke="#0d3b66"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={pointsString}
          >
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="1.8s" fill="freeze" />
          </polyline>

          {/* نقطه‌های روی خط برای طبیعی‌تر شدن */}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={i === points.length - 1 ? 9 : 5}
              fill={i === points.length - 1 ? "#0d3b66" : "#e6edf5"}
              opacity={i === points.length - 1 ? 1 : 0.6}
            >
              <animate attributeName="r" from="0" to={i === points.length - 1 ? 9 : 5} dur="1s" begin={`${i * 0.2}s`} />
            </circle>
          ))}

          {/* مقدار نهایی روی نقطه آخر */}
          <text
            x="350"
            y={points[4].y - 15}
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#0d3b66"
          >
            {current.toLocaleString("fa-IR")}
          </text>
        </svg>
      </Box>

      {/* لجند */}
      <Box display="flex" justifyContent="space-between" mt={3} px={2}>
        <Box display="flex" alignItems="center" gap={1.5}>
          <Box sx={{ width: 14, height: 14, bgcolor: "#0d3b66", borderRadius: "50%" }} />
          <Box>
            <Typography fontSize={13} color="text.secondary">قبل از این ماه</Typography>
            <Typography fontWeight="bold" fontSize={14}>
              {previous > 0 ? previous.toLocaleString("fa-IR") : "۰"} تومان
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap={1.5}>
          <Box sx={{ width: 14, height: 14, bgcolor: "#0d3b66", borderRadius: "50%" }} />
          <Box textAlign="right">
            <Typography fontSize={13} color="text.secondary">این ماه</Typography>
            <Typography fontWeight="bold" fontSize={15}>
              {current.toLocaleString("fa-IR")} تومان
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IncomeChart;