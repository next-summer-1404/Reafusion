import { GetDashboardFinance } from "@/core/Apis/Dashboard/GetDashboardFinance";

const IncomeChart = async () => {
  const response = (await GetDashboardFinance());
  const data = response;

  const total = data.totalAmount || 1;
  const current = data.totalCurrentMonthAmount || 0;
  const previous = total - current;

  const baseHeight = 100;
  const maxHeight = 85;

  const points = [
    { x: 50, y: baseHeight - (previous > 0 ? 10 : 5) },
    { x: 100, y: baseHeight - (previous > 0 ? 35 : 20) },
    { x: 180, y: baseHeight - (previous > 0 ? 15 : 40) },
    { x: 280, y: baseHeight - (previous > 0 ? 45 : 15) },
    { x: 350, y: baseHeight - (current / total) * maxHeight },
  ];

  const pointsString = points.map(p => `${p.x},${p.y}`).join(" ");

  return (
    <div className="flex flex-col w-[50%] max-sm:w-full bg-whiteColor dark:bg-background rounded-3xl p-5">
      {/* هدر */}
      <div className="flex max-md:flex-col justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-dark dark:text-whiteColor">نمودار درآمد</h3>
          <p className="text-sm text-gray mt-1  dark:text-lightGray">از تاریخ ۱ تا ۳۱ آبان ۱۴۰۴</p>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray dark:text-lightGray">درآمد کل:</span>{' '}
          <span className="text-lg font-bold text-primary dark:text-thidary">
            {data.totalAmount.toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>

      {/* نمودار SVG */}
      <div className="relative flex-1 mt-4">
        <svg viewBox="0 0 400 140" className="w-full h-36">
          {/* خط پایه */}
          <line x1="50" y1="100" x2="350" y2="100" stroke="#f0f0f0" strokeWidth="2" />

          {/* خط اصلی با انیمیشن */}
          <polyline
            fill="none"
            stroke="#0d3b66"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={pointsString}
            className="drop-shadow-md"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0,1000"
              to="1000,0"
              dur="2s"
              fill="freeze"
            />
          </polyline>

          {/* نقطه‌ها با انیمیشن */}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={i === points.length - 1 ? 9 : 5}
              fill={i === points.length - 1 ? "#0d3b66" : "#e6edf5"}
              opacity={i === points.length - 1 ? 1 : 0.6}
            >
              <animate
                attributeName="r"
                from="0"
                to={i === points.length - 1 ? 9 : 5}
                dur="0.8s"
                begin={`${i * 0.15}s`}
                fill="freeze"
              />
            </circle>
          ))}

          {/* مقدار نهایی این ماه */}
          <text
            x="350"
            y={points[4].y - 15}
            textAnchor="middle"
            className="text-sm font-bold fill-primary"
          >
            {current.toLocaleString("fa-IR")}
          </text>
        </svg>
      </div>

      {/* لجند پایین */}
      <div className="flex max-md:flex-col justify-between mt-8 px-4">
        {/* قبل از این ماه */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-primary dark:bg-thidary rounded-full shadow" />
          <div>
            <p className="text-xs text-gray dark:text-whiteColor">قبل از این ماه</p>
            <p className="font-bold text-dark  dark:text-whiteColor">
              {previous > 0 ? previous.toLocaleString("fa-IR") : "۰"} تومان
            </p>
          </div>
        </div>

        {/* این ماه */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-primary dark:bg-thidary rounded-full shadow" />
          <div className="text-right">
            <p className="text-xs text-gray dark:text-whiteColor">این ماه</p>
            <p className="font-bold text-lg text-primary dark:text-thidary">
              {current.toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeChart;