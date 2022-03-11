import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
  return res.send("I still love you.");
};
const handleLogin = (req, res) => {
  return res.send("Login here.");
};

app.get("/", logger, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
