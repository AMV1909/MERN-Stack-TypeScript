import { RequestHandler } from "express";
import videoSchema from "../models/Video";

export const getVideos: RequestHandler = async (req, res) => {
    await videoSchema
        .find()
        .then((videos) => res.json(videos))
        .catch((err) => res.json(err));
};

export const getVideo: RequestHandler = async (req, res) => {
    await videoSchema
        .findById(req.params.id)
        .then((video) => res.json(video))
        .catch((err) => res.json(err));
};

export const createVideo: RequestHandler = async (req, res) => {
    const video = new videoSchema(req.body);

    await video
        .save()
        .then((video) => res.json(video))
        .catch((err) => res.json({ message: "The video already exists" }));
};

export const updateVideo: RequestHandler = async (req, res) => {
    await videoSchema
        .findByIdAndUpdate(req.params.id, req.body)
        .then((video) => res.json("Video updated"))
        .catch((err) => res.json(err));
};

export const deleteVideo: RequestHandler = async (req, res) => {
    await videoSchema
        .findByIdAndDelete(req.params.id)
        .then((video) => res.json("Video deleted"))
        .catch((err) => res.json(err));
};
