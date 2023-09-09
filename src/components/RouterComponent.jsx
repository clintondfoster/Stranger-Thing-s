import { Routes, Route } from "react-router-dom";
import AllPosts from "./AllPosts";
import SinglePost from "./SinglePost";
import Profile from "./Profile";

function RouterComponent () {
    return (
        <div>
            <Routes>
                <Route path="/posts" element={<AllPosts />} />
                <Route path="/post/:postId" element={<SinglePost />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    )
}
export default RouterComponent;