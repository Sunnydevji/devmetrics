import { useState } from "react";

const RepoInput = ({ onFetch }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const [owner, repo] = input.split("/");
    if (!owner || !repo) {
      setError("Please enter in format: owner/repo");
      return;
    }
    setError("");
    onFetch(owner.trim(), repo.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 mt-6">
      <input
        type="text"
        className="w-full max-w-md p-2 border border-gray-300 rounded dark:text-gray-400"
        placeholder="Enter GitHub repo (e.g., vercel/next.js)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gradient-to-br from-gray-900 to-blue-100 dark:from-blue-100 dark:to-gray-900 text-white rounded cursor-pointer transition"
      >
        Fetch Analytics
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default RepoInput;
