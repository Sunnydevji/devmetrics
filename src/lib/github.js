const BASE_URL = "https://api.github.com/repos";

/**
 * Fetch general repo info
 * @param {string} owner
 * @param {string} repo
 */
export const fetchRepoInfo = async (owner, repo) => {
  const res = await fetch(`${BASE_URL}/${owner}/${repo}`);
  if (!res.ok) throw new Error("Repo not found");
  return await res.json();
};

/**
 * Fetch contributors
 * @param {string} owner
 * @param {string} repo
 */
export const fetchContributors = async (owner, repo) => {
  const res = await fetch(`${BASE_URL}/${owner}/${repo}/contributors`);
  if (!res.ok) throw new Error("Could not load contributors");
  return await res.json();
};

/**
 * Fetch languages used in the repo
 * @param {string} owner
 * @param {string} repo
 */
export const fetchLanguages = async (owner, repo) => {
  const res = await fetch(`${BASE_URL}/${owner}/${repo}/languages`);
  if (!res.ok) throw new Error("Could not load languages");
  return await res.json();
};

/**
 * Fetch latest commits (last 30)
 * @param {string} owner
 * @param {string} repo
 */
export const fetchCommits = async (owner, repo) => {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=10`);
  if (!res.ok) {
    throw new Error("Failed to fetch commits");
  }
  return res.json();
};
