import { Box } from "@chakra-ui/react";
import { Octokit } from "octokit";

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: "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",
});

const result = await octokit.request("GET /users/Eleniyancode/repos", {
    username: "Eleniyancode",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  
  // console.log(result);
  
  const data = result.data;

  const aboutResult = await octokit.request('GET /repos/Eleniyancode/about', {
    owner: 'Eleniyancode',
    repo: 'about',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  
  const aboutData = aboutResult.data
  // console.log(aboutData)
  // console.log(typeof(aboutData))
  
  // function ListObjectContent () {
  //   for (let prop in aboutData) {
  //     if (aboutData.hasOwnProperty(prop)) {
  //       return (
  //         <li>{prop + ": " + aboutData[prop]}</li>
  //       )
  //     }
  //   }
  // }

function About() {

  // let aboutValue = Object.entries(aboutData)
  // console.log(typeof(aboutValue))

  // const ListAboutValue = aboutValue.map(key => {
  //     return <p>{key}</p>
  //   })
 const myJSON = JSON.stringify(aboutData)
  return (
    <div>
      {myJSON}
    </div>
  )
}

export default About
        