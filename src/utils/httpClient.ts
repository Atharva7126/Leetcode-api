export const fetchLeetCodeProblem = async (
  query: string,
  variables: string,
) => {
  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
      "User-Agent": "Mozilla/5.0",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
    throw new Error("LeetCode request failed");
  }

  const json = await res.json();
  return json.data;
};
