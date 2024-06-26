import express from "express";
import bodyparser from "body-parser";
import ReadFile from "./readFile";
import eventEmitter from "events";
import rateLimiter from "./rateLimiter";

const event = new eventEmitter()

const app = express()
const port = 3001

// Event Emitter
event.on("start", () => {
    console.log("Event emitter received")
})

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// Middleware example 1
let count = 0
app.use(function(req, res, next) {
    console.log("Rate limiter called - " + req.ip)
    try{
        count ++
        req.body.count = count
        const status = rateLimiter(req, res, next)
        if(status == 429) {
            setTimeout(() => {
                req.body.count = 0
                console.log("Cool down period of 5 seconds.")
            },5000)
            res.status(429).send("Too many errors.")
        }
        next()
    } catch (e) {
        console.log("Ratelimiter error")
    }
    
})

app.get("/", (req, res) => {
    event.emit("start")
    res.send("You may need to hit an API.")
})

app.get("/readFile", async (req, res) => {
    const file = new ReadFile()
    try {
        let data = await file.start()
        res.send("DATA in FILE - " + data)
    } catch(e) {
        console.log("Error occured")
        res.status(404).send("Error occured - " + e)
    }
})

// Middleware example 2
const requestLogger = (req: any, res: any, next: any) => {
    console.log("Data - ", req.method, req.url)
    req.body.name = "malwe"
    next()
}

app.get("/welcome", requestLogger, (req, res) => {
    console.log(req.body)
    res.send("Hello World - ")
})

app.post("/getData", (req, res) => {
    console.log(req.body.email)
    res.status(200).send("Data pulled")
})

app.listen(port, () => {
   
    console.log("App is listening at " + port)
})