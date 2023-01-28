import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Video } from "../../Types/Video";
import { createVideo, getVideo, updateVideo } from "../api/Videos";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export function VideoForm() {
	const navigate = useNavigate();
	const params = useParams();

	const [video, setVideo] = useState<Video>({
		title: "",
		url: "",
		description: "",
	});

	useEffect(() => {
		if (params.id) {
			getVideo(params.id).then((video) => {
				setVideo(video);
			});
		}
	}, [params.id]);

	const onChange = (e: InputChange) => {
		setVideo({ ...video, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!params.id) {
			await createVideo(video);
			toast.success("New video added");
		} else {
			await updateVideo(params.id, video);
			toast.success("Video updated");
		}

		navigate("/");
	};

	return (
		<div className="row">
			<div className="col-md-4 offset-md-4">
				<div className="card">
					<div className="card-body">
						<h3>New Video</h3>
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								name="title"
								placeholder="Wrtie a title for this video"
								className="form-control my-3"
								onChange={onChange}
								value={video.title}
								autoFocus
							/>

							<input
								type="url"
								name="url"
								placeholder="https://www.youtube.com/video"
								className="form-control my-3"
								onChange={onChange}
								value={video.url}
							/>

							<textarea
								name="description"
								rows={3}
								className="form-control my-3"
								placeholder="Write a description"
								onChange={onChange}
								value={video.description}
							></textarea>

							{params.id ? (
								<button className="btn btn-info">
									Update video
								</button>
							) : (
								<button className="btn btn-primary">
									Create a video
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
