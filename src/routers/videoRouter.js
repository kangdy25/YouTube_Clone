import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => {
    res.send("<h1>Watch Video</h1>");
}
const handleEditVideo = (req, res) => {
    res.send("<h1>Edit Video</h1>");
}

videoRouter.get("/watch", handleWatchVideo);
videoRouter.get("/edit", handleEditVideo);

export default videoRouter;