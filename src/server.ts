import express, { Request, Response } from "express";
// import { userRoutes } from "./app/user/routes";
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 8080;

// app.use("/user", userRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Not Found !!",
  });
});

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
