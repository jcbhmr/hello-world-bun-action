import * as core from "@actions/core";
import * as github from "@actions/github";

console.log("github.context.payload", github.context.payload);
console.log(`Hello ${core.getInput("name")}!`);
core.setOutput("time", new Date().toLocaleTimeString());
