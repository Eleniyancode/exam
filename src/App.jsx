import { Box } from "@chakra-ui/react";
import { Octokit } from "octokit";
import { Link, Routes, Route } from "react-router-dom";
import About from "./repospages/about";
import Altschoolass from "./components/altschoolass";
import AltschoolProfileTemplate from "./components/altschoolProfileTemplate";
import Assignment from "./components/assignment";
import Assignmenttwo from "./components/assignmenttwo";
import GitTest from "./components/git-test";
import Huckelberry from "./components/huckelberry";
import Testing from "./components/testing";
import WebProject from "./components/web-project";
import BlogCard from "./components/blog-card";
import Ethereum from "./components/etherum";

 
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

// console.log(data);

// Octokit.js
// https://github.com/octokit/core.js#readme

const aboutResult = await octokit.request('GET /repos/Eleniyancode/about', {
  owner: 'Eleniyancode',
  repo: 'about',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})

const aboutData = aboutResult.data
// console.log(aboutData)

const altschoolProfileTemplateResult = await octokit.request('GET /repos/Eleniyancode/altschool-profile-template', {
  owner: 'Eleniyancode',
  repo: 'altschool-profile-template',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})

const altschoolProfileTemplateData = altschoolProfileTemplateResult.data
// console.log(altschoolProfileTemplateData)

const altschoolassResult = await octokit.request('GET /repos/Eleniyancode/altschoolass', {
  owner: 'Eleniyancode',
  repo: 'altschoolass',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})

const altschoolassData = altschoolassResult.data
// console.log(altschoolassData)



function App() {
  return (
   <Box>
    <Routes>
      <Route path="src/repospages/about.jsx" element={<About />} />
      <Route path="src/repospages/altschoolass.jsx" element={<Altschoolass />} />
      <Route path="src/repospages/altschoolProfileTemplate.jsx" element={<AltschoolProfileTemplate />} />
      <Route path="src/repospages/assignment.jsx" element={<Assignment />} />
      <Route path="src/repospages/assignmenttwo.jsx" element={<Assignmenttwo />} />
      <Route path="src/repospages/blog-card.jsx" element={<BlogCard />} />
      <Route path="src/repospages/etherum.jsx" element={<Ethereum />} />
      <Route path="src/repospages/git-test.jsx" element={<GitTest />} />
      <Route path="src/repospages/huckelberry.jsx" element={<Huckelberry />} />
      <Route path="src/repospages/testing.jsx" element={<Testing />} />
      <Route path="src/repospages/web-project.jsx" element={<WebProject />} />
    </Routes>
   </Box>
  );
}

export default App;
