import * as moment from 'moment';
import {Job} from "./Job"

let n = moment().format("Y-M-D H:m:s");

console.log("Now: ", n);
let j1 =  new Job("J-001");
