const CommitsTable = ({ commits }) => {
  return (
    <div className="mt-6 bg-white/80 dark:bg-gray-800/60 p-4 rounded-lg shadow text-gray-800 dark:text-gray-200">
      <h2 className="text-lg font-semibold mb-2">Recent Commits</h2>
      <div className="overflow-x-auto rounded-md border">
        <table className="min-w-full text-sm text-left bg-white">
          <thead className="dark:bg-gray-300 dark:text-gray-800 bg-gray-100">
            <tr>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {commits.map((commitObj, idx) => {
              const { message } = commitObj.commit;
              const author = commitObj.author?.login || "Unknown";
              const date = new Date(commitObj.commit.author.date).toLocaleString();

              return (
                <tr key={idx} className="border-t dark:bg-gray-900 dark:text-gray-100">
                  <td className="px-4 py-2">{message.split("\n")[0]}</td>
                  <td className="px-4 py-2">{author}</td>
                  <td className="px-4 py-2">{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommitsTable;
