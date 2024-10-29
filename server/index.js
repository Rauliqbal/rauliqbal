import express from "express";
import router from "./router.js";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// Check API KEY
const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["api-key"];
  if (process.env.API_KEY.includes(apiKey)) {
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

const port = 8080;

app.listen(port, () => console.log(`Server berjalan di port ${port}`));

export default app;
