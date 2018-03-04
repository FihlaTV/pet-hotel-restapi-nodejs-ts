import "reflect-metadata";
import {createConnection, useContainer} from "typeorm";
import {Container} from "typedi";
import {createExpressServer} from "routing-controllers";

useContainer(Container);
createConnection().then(async connection => {

    console.log("Connected. Now run express app");
    createExpressServer({
        cors: {
            credentials: true,
            origin: true
            // options from cors documentation
        },
        controllers: [__dirname + "/controllers/*.js"],
    }).listen(3000, "127.0.0.1");
    console.log("Server is up and running on port 3000. Now send requests to check if everything works.");

}).catch(error => console.log("Error: ", error));