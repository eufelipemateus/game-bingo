import app from "./app";
import { Server } from 'http';

const port = process.env.PORT || app.PORT;

app.debug = true;
app.server.listen(port, function () {
    console.log(`Server running in + ${port}`);
});