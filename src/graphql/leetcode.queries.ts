export const QUESTION_QUERY = `
query selectProblem($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionId
    title
    titleSlug
    content
    difficulty
    likes
    dislikes
    topicTags {
      name
      slug
    }
    hints
  }
}
`;