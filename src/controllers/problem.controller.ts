import { Response, Request } from "express";
import { getProblemBySlug } from "../services/leetcode.service";

export const getProblem = async (
  req: Request,
  res: Response,
) => {
  try {
    const slug = req.query.title as string;

    if (!slug) {
      return res
        .status(400)
        .json({ error: "title query param is required" });
    }

    const problem = await getProblemBySlug(slug);

    return res.json(problem);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Something went wrong" });
  }
};
