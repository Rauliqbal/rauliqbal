import express from "express";
import router from "./router.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = 8080;
const apiKeys =
  "S9s8OP1lxy5z1smZ4ftCkYntzu3Rc8bCy47ZBbhFNRgJ1w2DBZZZHkaP2xLSyWaU";

const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["api-key"];
  if (apiKeys.includes(apiKey)) {
    next();
  } else {
    res.status(401).json({ message: "Invalid API Key" });
  }
};

app.get("/", checkApiKey, (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Hello World👋",
  });
});

app.use("/api", router);

app.listen(port, () => console.log(`Server berjalan di port ${port}`));

export default app;
