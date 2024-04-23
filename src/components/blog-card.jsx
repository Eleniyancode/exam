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

  const blogCardResult = await octokit.request('GET /repos/Eleniyancode/blog-card', {
    owner: 'Eleniyancode',
    repo: 'blog-card',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  
  const blogCardData = blogCardResult.data
  // console.log(blogCardData)
  
function BlogCard() {
  return (
    <> <Box className="container"> 
    <Box bg="blue" w="300px" h="100px" margin="auto" mt="20px" display="flex" flexDirection="column" justifyContent="center">
      <h1 style={{  color: "white", fontSize: "20px", textAlign: "center", paddingTop: "20px" }}>
            GitHub Repositories
          </h1>

          <Link to="src/repospages/blog-card.jsx" style={{textAlign:"center", color: "white", fontSize: "20px", backgroundColor: "yellow"}} >{blogCardData.name}</Link>
      </Box>
      </Box></>
  );
};

export default BlogCard
        