import { Routes, Route } from "react-router-dom";
import AllPosts from "./AllPosts";
import SinglePost from "./SinglePost";

function RouterComponent () {
    return (
        <div>
            <Routes>
                <Route path="/posts" element={<AllPosts />} />
                <Route path="/" element={<SinglePost />} />
            </Routes>
        </div>
    )
}
export default RouterComponent;