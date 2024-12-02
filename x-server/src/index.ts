import {stServer} from "./app";

async function init() {
    const app = await stServer();
    app.listen(4000, () => console.log(`Server started at PORT:4000`));
}

init();