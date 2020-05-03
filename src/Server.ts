import app from './App';

const port = process.env.PORT || app.PORT;

app.debug = !!+process.env.DEBUG; // Debug

app.server.listen(port, () => {
    console.info(`Server running in  ${port}...`);
});
