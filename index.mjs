#!/usr/bin/env node

import { info } from "./info.mjs";

const { basic: {bio: {fName,lName, email, summary}} } = info;

const { basic: {profiles: { github, linkedin, twitter}} } = info;

const { basic: { work: { profession, experience, highlights} } } = info;

const { basic: { techStack: { programLang, frameworks, otherTools}}} = info;

const {basic: {interest: {sports, art, relaxing}}} = info; 

console.log(`
Hello, thanks for viewing my npm app. My name is ${fName}, ${lName}. 
--------------------------------------------------- 

    ${summary}

----------------------------------------------------  
If you have any comments, questions or concerns please email me at ${email}. Thank you,
---------------------------------------------------- 
    

    You can visit my online profiles here:

        - ${github}
        - ${linkedin}
        - ${twitter}


    Career
----------------------------------------------------
        ${profession}

Certified by:
    ${experience}

Highlights:
    ${highlights}

    Proficient Pgramming Skills:
    ----------------------------------------------------
        Languages: ${programLang}
        Frameworks: ${frameworks}

----------------------------------------------------
My Perosnal Interests:
        Sports: ${sports}
        Art: ${art}
        Realaxing: ${relaxing}`)