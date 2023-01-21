import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
import IndexPage from "./components/IndexPage";
import CreatePost from "./components/CreatePost.js";
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<IndexPage/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/createPost" element={<CreatePost/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
