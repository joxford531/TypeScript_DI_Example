import "reflect-metadata";
import {createExpressServer, useContainer} from "routing-controllers";
import {Container} from "typedi";

useContainer(Container);

const app = createExpressServer({
  controllers: [__dirname + "/controllers/*.js"]
});

app.listen(3000);

console.log("Express Server running on port 3000");