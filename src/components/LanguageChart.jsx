import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const COLORS = [
  "#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c", "#d0ed57", "#8dd1e1"
];

const LanguageChart = ({ languages }) => {
  const data = Object.entries(languages).map(([lang, bytes]) => ({
    name: lang,
    value: bytes,
  }));

  return (
    <div className="mt-6 bg-white/80 dark:bg-gray-800/60 p-4 rounded-lg shadow text-gray-800 dark:text-gray-200">
      <h2 className="text-lg font-semibold mb-2">Language Usage</h2>
      <PieChart width={500} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="40%"
          cy="40%"
          outerRadius={100}
          label
        >
          {data.map((_, index) => (
            <Cell key={index}  fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend/>
      </PieChart>
    </div>
  );
};

export default LanguageChart;
