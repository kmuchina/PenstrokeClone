import { useState, useEffect} from "react";
import RecentPosts from "./RecentPosts";
import About from "./About"
import SummaryPosts from "../SummaryPosts.json"
import TryTag from "./TryTag";


 const getSummaryPosts = () => {
    return new Promise(resolve => resolve({ data: { posts: SummaryPosts } }))
}

const Footer = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
    getSummaryPosts()
    .then(res => {
        setPost(res.data.posts)
        console.log(res.data.posts)
    })
    .catch(() => {
        console.log("Error Fetching Data")
    })
}, [])
    return(
        <div className="footer container-fluid text-center p-3 text-white m-3 d-flex flex-column" style={{backgroundColor:'#0d0d0eff', marginTop:'20px', maxWidth:'1200px', borderRadius:'10px'}}>
            <div className="row">
                <div className="col-4"> <About /></div>
                <div className="col-4"><RecentPosts posts={post} /></div>
                <div className="col-4"><TryTag/></div>
            </div>
            <hr style={{borderTop:'1px solid white', width:'90%'}}/>
            <p>Copyright &copy; 2024 Penstrokes. All rights reserved.</p>
            <p>Designed by Penstrokes</p>
        </div>
    );
        
}

export default Footer