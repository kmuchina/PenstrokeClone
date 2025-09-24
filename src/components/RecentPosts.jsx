const RecentPosts = ({posts} ) => {

    return (
        <div className="recent-posts text-white" style={{marginBottom:'20px', maxWidth:'400px', margin:'auto'}}>
            <h4>Recent Posts</h4>
            {
                posts.map((post) => {
                    return (
                    <div key={post.objectID} className="d-flex flex-row mb-3">
                        <img src={post.imgSrc} alt={post.imgAlt} className="img-fluid rounded" style={{width:'100px', height:'80px', objectFit:'cover', marginRight:'10px'}} />
                        <div>
                            <span className="date">{post.date}</span>
                            <h5>{post.title}</h5>
                        </div>
                    </div>
                    )
                })

            }
        </div>
    );
}

export default RecentPosts;