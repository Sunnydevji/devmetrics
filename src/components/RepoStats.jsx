const RepoStats = ({ repo }) => {
  return (
    <div className="mt-6 bg-white/80 dark:bg-gray-800/60 p-4 rounded-lg shadow text-gray-800 dark:text-gray-200">
      <h2 className="text-xl font-semibold mb-4">{repo.full_name}</h2>
      <ul className="grid grid-cols-2 gap-4 text-gray-700">
        <li className="text-gray-800 dark:text-gray-200">🌟 Stars: {repo.stargazers_count}</li>
        <li className="text-gray-800 dark:text-gray-200">🍴 Forks: {repo.forks_count}</li>
        <li className="text-gray-800 dark:text-gray-200">🐞 Open Issues: {repo.open_issues_count}</li>
        <li className="text-gray-800 dark:text-gray-200">👁️ Watchers: {repo.watchers_count}</li>
        <li className="text-gray-800 dark:text-gray-200">🧬 Default Branch: {repo.default_branch}</li>
        <li className="text-gray-800 dark:text-gray-200">🕒 Last Updated: {new Date(repo.updated_at).toLocaleString()}</li>
      </ul>
    </div>
  );
};

export default RepoStats;
