import axios from "axios";

import { Video } from "../../Types/Video";

export const getVideos = async () => {
	return await axios.get<Video[]>("/api/videos").then((res) => res.data);
};

export const getVideo = async (id: string) => {
	return await axios.get<Video>(`/api/videos/${id}`).then((res) => res.data);
};

export const createVideo = async (video: Video) => {
	return await axios.post("/api/videos", video).then((res) => res.data);
};

export const updateVideo = async (id: string, video: Video) => {
	return await axios.put(`/api/videos/${id}`, video).then((res) => res.data);
};

export const deleteVideo = async (id: string) => {
	return await axios.delete(`/api/videos/${id}`).then((res) => res.data);
};
