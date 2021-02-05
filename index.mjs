import { info } from "./info.mjs";


const { description: { name: {fName} }, } = info;
const { description: { bio: {profession} } } = info;
const { description: { profiles: {github} } } = info;

console.log(fName, profession, github)     