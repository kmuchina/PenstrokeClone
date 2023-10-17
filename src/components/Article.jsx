
const Article = props => {
    return props.list.map(({ imgSrc, imgAlt, date, href, title, preview, objectID }) => {
        return (
            <article key={objectID}>
                <figure >
                    {/* <img src={require('../assets/images/img_0337.webp')} alt={imgAlt} />  */}
                </figure>

                <div className="main">
                    <span className="date">{date}</span>

                    <h3>
                        <a href={href}>{title}</a>
                    </h3>

                    <p>{preview}</p>

                    <button> <a href={href}>More</a> </button>
                </div>
            </article>
        )
    })
}

export default Article;