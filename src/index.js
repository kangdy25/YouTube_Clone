import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const PORT = 4000;

const logger = morgan("dev");
app.use(logger);


app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => 
    console.log(`✔️ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);  