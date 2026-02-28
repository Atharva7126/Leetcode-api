import express from 'express';
import cors from 'cors'
import apicache from 'apicache'
import problemRoutes from "./routes/problem.routes";
import rateLimit from 'express-rate-limit';

const app = express();
const cache = apicache.middleware;

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  limit: 120,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: 'Too many request from this IP, try again in 1 hour',
});

app.use(cors());
app.use(express.json())
app.use(limiter);
app.use(cache("5 minutes"))

app.get("/", (_req, res) => {
  res.json({
    name: "LeetCode Proxy API",
    version: "1.0.0",
    description: "Fetch LeetCode problem data via REST API",
    endpoints: {
      "/problem": {
        method: "GET",
        url: "/problem?title=two-sum",
        description: "Fetch full problem data by title slug"
      },
    }
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/problem", problemRoutes)

export default app;