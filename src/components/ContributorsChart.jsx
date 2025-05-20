import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ContributorsChart = ({ contributors }) => {
  const topContributors = contributors
    .slice(0, 10)
    .map((user) => ({
      name: user.login,
      contributions: user.contributions,
    }));

  return (
    <div className="mt-6 bg-white/80 dark:bg-gray-800/60 p-4 rounded-lg shadow text-gray-800 dark:text-gray-200">
      <h2 className="text-lg font-semibold mb-2">Top Contributors</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={topContributors} layout="vertical" margin={{ left: 40 }}>
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="contributions" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContributorsChart;
