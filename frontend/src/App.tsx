import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { VideoForm } from "./Pages/VideoForm";
import { VideoList } from "./Pages/VideoList";
import { Navbar } from "./Components/Navbar/Navbar";

import "bootswatch/dist/pulse/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<Router>
			<Navbar />

			<div className="container p-4">
				<Routes>
					<Route path="*" element={<h1>Page Not Found!</h1>} />
					<Route path="/" element={<VideoList />} />
					<Route path="/newVideo" element={<VideoForm />} />
					<Route path="/update/:id" element={<VideoForm />} />
				</Routes>

				<ToastContainer />
			</div>
		</Router>
	);
}

export default App;
