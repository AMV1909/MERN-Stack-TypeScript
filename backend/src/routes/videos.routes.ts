import { Router } from "express";

import {
    getVideos,
    getVideo,
    createVideo,
    updateVideo,
    deleteVideo,
} from "../controllers/videos.controller";

const router = Router();

router.get("/videos", getVideos);
router.get("/videos/:id", getVideo);

router.post("/videos", createVideo);

router.put("/videos/:id", updateVideo);

router.delete("/videos/:id", deleteVideo);

export default router;
