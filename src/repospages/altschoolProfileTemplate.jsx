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

  const altschoolProfileTemplateResult = await octokit.request('GET /repos/Eleniyancode/altschool-profile-template', {
    owner: 'Eleniyancode',
    repo: 'altschool-profile-template',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  
  const altschoolProfileTemplateData = altschoolProfileTemplateResult.data
  // console.log(altschoolProfileTemplateData)
  
function AltschoolProfileTemplate() {
  const myJSON = JSON.stringify(altschoolProfileTemplateData)
  console.log(myJSON)
  return (
    <div>
      {myJSON}
    </div>
  )
 
};

export default AltschoolProfileTemplate
        