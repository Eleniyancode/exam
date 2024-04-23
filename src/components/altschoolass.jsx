import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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

  const altschoolassResult = await octokit.request('GET /repos/Eleniyancode/altschoolass', {
    owner: 'Eleniyancode',
    repo: 'altschoolass',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  
  const altschoolassData = altschoolassResult.data
  // console.log(altschoolassData)
  
function Altschoolass() {
  return (
    <> <Box className="container"> 
    <Box bg="blue" w="300px" h="100px" margin="auto" mt="20px" display="flex" flexDirection="column" justifyContent="center">
      <h1 style={{ color: "white", fontSize: "20px", textAlign: "center", paddingTop: "20px"}}>
            GitHub Repositories
          </h1>
          
          <Link to="src/repospages/altschoolass.jsx" style={{textAlign:"center", color: "white", fontSize: "20px", backgroundColor: "yellow"}} >{altschoolassData.name}</Link>
      </Box>
      
      </Box></>
  );
};

export default Altschoolass
        