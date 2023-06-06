import express from "express";

import events from "events";

const app = express();

const em = new events.EventEmitter();

let eventC = 0;

em.on("Event Set",(req,res)=>{
  eventC++;
})

app.get("",(req,res)=>{
  res.send("Hi");
})

app.get("/event",(req,res)=>{
  em.emit("Event Set","My First Emitter");
  res.send(`Event Called ${eventC} times`);
})

app.listen(3000);