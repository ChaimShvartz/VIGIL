import http from "http";
import routes from "./routes.js";
import { send, status } from "./services/utils.js";

const server = http.createServer();

server.on("request", (req, res) => {
    const urlObj = new URL(req.url, "http://" + req.headers.host);

    const { method } = req;
    let url = urlObj.pathname;
    req.queries = Object.fromEntries(urlObj.searchParams);

    if (["GET", "DELETE"].includes(method)) req.resume();

    let body = "";
    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", () => {
        req.body = body ? JSON.parse(body) : null;
        res.status = status;
        res.send = send;

        //  happy path
        let handler = routes[method]?.[url];
        if (handler) return handler(req, res);

        //  for path params
        const lastSlaדh = url.lastIndexOf("/");
        const param = url.slice(lastSlaדh + 1);
        const cleanPath = url.slice(0, lastSlaדh);

        //  path + path params
        for (const curUrl in routes[method]) {
            if (curUrl.startsWith(cleanPath + "/:")) {
                const paramName = curUrl.split(":")[1];
                req.params = { [paramName]: param };
                return routes[method][curUrl](req, res);
            }
        }

        res.status(404).send({success: false, message: "Path not found"});
    });
});

server.listen(3000, () => {
    console.log("Listening on port 3000...");
});
