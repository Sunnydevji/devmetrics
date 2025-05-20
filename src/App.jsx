import { useState } from "react";
import RepoInput from "./components/RepoInput";
import RepoStats from "./components/RepoStats";
import LanguageChart from "./components/LanguageChart";
import ContributorsChart from "./components/ContributorsChart";
import CommitsTable from "./components/CommitsTable";

import {
  fetchRepoInfo,
  fetchLanguages,
  fetchContributors,
  fetchCommits
} from "./lib/github";
import DarkToggle from "./components/DarkToggle";

function App() {
  const [repoData, setRepoData] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [contributors, setContributors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [commits, setCommits] = useState(null);

  const handleFetch = async (owner, repo) => {
    setLoading(true);
    setError("");
    try {
      const commitData = await fetchCommits(owner, repo);
      const repoInfo = await fetchRepoInfo(owner, repo);
      const langs = await fetchLanguages(owner, repo);
      const contribs = await fetchContributors(owner, repo);
      setCommits(commitData);
      setRepoData(repoInfo);
      setLanguages(langs);
      setContributors(contribs);
    } catch (err) {
      setError(err.message || "Failed to fetch data");
      setRepoData(null);
      setLanguages(null);
      setContributors(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 to-neutral-100 dark:from-neutral-400 dark:to-gray-900 p-4 relative">
      <DarkToggle/>
      <div className="max-w-4xl mx-auto mt-6 rounded-xl backdrop-blur-md bg-white/30 dark:bg-white/10 shadow-xl p-6">


      <h1 className="text-3xl dark:text-gray-200 font-bold text-center text-gray-800">
        GitInsight Lite 🔍
      </h1>
      <p className="text-center dark:text-gray-300 text-gray-600 mt-2">
        Analyze GitHub repos visually without login
      </p>

      <RepoInput onFetch={handleFetch} />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-600 mt-4">{error}</p>}
      {repoData && (
        <>
          <RepoStats repo={repoData} />
          {languages && <LanguageChart languages={languages} />}
          {contributors && <ContributorsChart contributors={contributors} />}
          {commits && <CommitsTable commits={commits} />}
        </>
      )}
            </div>
    </div>
  );
}

export default App;
