import { QUESTION_QUERY } from "../graphql/leetcode.queries";
import { fetchLeetCodeProblem } from "../utils/httpClient";

export const getProblemBySlug = async (slug: string) => {
  const data = await fetchLeetCodeProblem(QUESTION_QUERY, JSON.stringify({
    titleSlug: slug
  }));

  return data.question;
};