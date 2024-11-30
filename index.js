require("dotenv").config();

const server = require("./temp/server.js");

const port = process.env.PORT;

server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));
