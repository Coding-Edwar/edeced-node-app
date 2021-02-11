#!/usr/bin/env node

import { info } from "./info.mjs";

const { basic: {bio: {fName,lName, email, summary } } } = info;
const { basic: { profiles: [ { network, username, profileURL }, { network2, username2, profileURL2 }, {network3, username3, profileURL3 } ] } } = info;
const { basic: { work: [ { company, position, website, highlights: [ { project, contribution } ] }, { company2, position2, website2, highlights2: [ { project2, contribution2 } ] } ] } } = info;
const { basic: { skills: [ { skill, exampleURL, tools }, { skill2, exampleURL2, tools2 } ] } } = info;
const { basic: { languages: [ { languageS, fluency }, { languageE } ] } } = info;
const { basic: { references: [ { ref, reference }, { ref2, reference2 } ] } } = info;
const { basic: { interest: [ { title, keywords }, { title2, keywords2 }, { title3, keywords3 }, { title4, keywords4 } ] } } = info;

console.log(`
Hello, thanks for viewing my npm package. My name is ${fName} ${lName}. 

${summary}

  
If you have any questions email me at ${email}.`)


console.log(`
OR 

Visit my online profiles:                                 
-------------------------------------------------------------
| Network       | Username                  | Link          |
-------------------------------------------------------------
* ${network}        | ${username}                    | ${profileURL}
-------------------------------------------------------------
* ${network2}      | ${username2}    | ${profileURL2}
-------------------------------------------------------------
* ${network3}       | ${username3}                   | ${profileURL3}
-------------------------------------------------------------
`);

console.log(`
Jobs:
    - Position: ${position}
    - Company: ${company}
    - Website: ${website}
        Highligts: ${contribution} for ${project}

    - Position: ${position2}
    - Company: ${company2}
    - Website: ${website2}
        Highligts: ${contribution2} for ${project2}


Skills:
    - ${skill}
        Tools:      ${tools}
        Reference:  ${exampleURL}

    - ${skill2}
        Tools:      ${tools2}
        Reference:  ${exampleURL2}
`);

console.log(`
Bilingual speaker 
- ${fluency} ${languageS} fluency
- ${fluency} ${languageE} fluency
`);

console.log(`
References:
* ${ref}      -   ${reference}
* ${ref2}   -   ${reference2}
`);

console.log(`
Interests:
* ${title}
    - ${keywords}
* ${title2}
    - ${keywords2}
* ${title3}
    - ${keywords3}
* ${title4}
    - ${keywords4}
`);