"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const Job_1 = require("./Job");
let n = moment().format("Y-M-D H:m:s");
console.log("Now: ", n);
let j1 = new Job_1.Job("J-001");
