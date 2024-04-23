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
  
//   console.log(result);
  
  const data = result.data;

  const webProjectResult = await octokit.request('GET /repos/Eleniyancode/web-projects', {
    owner: 'Eleniyancode',
    repo: 'web-projects',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  
  const webProjectData = webProjectResult.data
  console.log(webProjectData)
  
function WebProject() {
  const myJSON = JSON.stringify(webProjectData)
  return (
    <div>
      {myJSON}
    </div>
  )
  return (
    <div>
      {myJSON}
    </div>
  );
};

export default WebProject
        