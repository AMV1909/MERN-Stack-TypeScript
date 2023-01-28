import "./database/db";
import { app } from "./app";

// Start the server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});
