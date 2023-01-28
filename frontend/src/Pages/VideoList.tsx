import { useEffect, useState } from "react";

import { getVideos } from "../api/Videos";
import { Video } from "../../Types/Video";
import { VideoItem } from "../Components/Videos/VideoItem";

export function VideoList() {
	const [videos, setVideos] = useState<Video[]>([]);

	const loadVideos = async () => {
		await getVideos().then((videos) => {
			setVideos(
				videos
					.map((video: Video) => {
						return {
							...video,
							createdAt: video.createdAt
								? new Date(video.createdAt)
								: new Date(),
							updatedAt: video.updatedAt
								? new Date(video.updatedAt)
								: new Date(),
						};
					})
					.sort(
						(a, b) => b.createdAt.getTime() - a.createdAt.getTime()
					)
			);
		});
	};

	useEffect(() => {
		loadVideos();
	}, []);

	return (
		<div className="row">
			{videos.map((video: Video) => (
				<VideoItem key={video._id} video={video} loadVideos={loadVideos} />
			))}
		</div>
	);
}
