import { Box } from "@chakra-ui/react";
import { Octokit } from "octokit";
import { Link } from "react-router-dom";
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
  // console.log(webProjectData)
  
function WebProject() {
  return (
    <> <Box className="container"> 
    <Box bg="blue" w="300px" h="100px" margin="auto" mt="20px" display="flex" flexDirection="column" justifyContent="center">
      <h1 style={{  color: "white", fontSize: "20px", textAlign: "center", paddingTop: "20px" }}>
            GitHub Repositories
          </h1>

          <Link to="src/repospages/web-project.jsx" style={{textAlign:"center", color: "white", fontSize: "20px", backgroundColor: "yellow"}} >{webProjectData.name}</Link>
      </Box>
      </Box></>
  );
};

export default WebProject
        