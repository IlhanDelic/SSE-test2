const http = require('http');
import express, {Response, Request, Application} from "express";

const app: Application  = express();
app.get("/", (req: Request, res: Response) => {
    res.status(200).set({
        "connection": "keep alive",
        "cache-control": "no-cache",
        "content-Type": "application/json",
    });
    let id = 0;
    setInterval(() => {
        res.write(`welcome\n id:${id} \n\n`)
        id++;
        if (id > 10){
            res.write(`id: -1\n are you a sleep? \n\n\n`);
            res.end();
        }
    }, 1000);

});
app.get("/countdown", (req: Request, res: Response) =>{
    res.status(200).set({
        "connection": "keep alive",
        "cache-control": "no-cache",
        "content-Type": "application/json",
    });
countdown(res, 13)
});
function countdown(res: Response, count: number){
    res.write(`data: time left ${count} \n\n`);
    if (count){
        setTimeout(() => countdown(res, count-1), 1000)
    }
    else {
        res.write(`times up! \n\n`);
        res.end();
    }
}

app.listen(5000, () => console.log("go to http://localhost:5000"));