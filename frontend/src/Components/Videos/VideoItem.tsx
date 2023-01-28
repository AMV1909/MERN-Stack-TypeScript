import { MouseEvent } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Video } from "../../../Types/Video";
import { deleteVideo } from "../../api/Videos";

import "./VideoItem.css";

interface Props {
	video: Video;
	loadVideos: () => void;
}

export function VideoItem({ video, loadVideos }: Props) {
	const navigate = useNavigate();

	const handleDelete = async (e: MouseEvent<HTMLSpanElement>, id: string) => {
		e.stopPropagation();

		await deleteVideo(id).then(() => {
			toast.success("Video deleted");
			loadVideos();
		});
	};

	return (
		<div className="col-md-4">
			<div
				className="card card-body video-card"
				onClick={() => navigate(`/update/${video._id}`)}
			>
				<div className="d-flex justify-content-between">
					<h1>{video.title}</h1>
					<span
						className="text-danger"
						onClick={(e) => video._id && handleDelete(e, video._id)}
					>
						X
					</span>
				</div>
				<ReactPlayer url={video.url} width="100%" />
			</div>
		</div>
	);
}
