import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const Article = ({list}) => {

    return list.map(({ imgSrc, imgAlt, date, href, title, preview, objectID }) => {
        return (
            <div key={objectID} className="container-sm article d-flex flex-column flex-md-row p-3 " style={{maxWidth:'750px'}}>
                <figure >
                    <img src={imgSrc} alt={imgAlt}  className="image-fluid rounded " style={{width:'350px', height:'270px'}}/> 
                </figure>

                <div className="p-1">
                    <span className="date">{date}</span>

                    <h3>
                        <a href={href}>{title}</a>
                    </h3>

                    <p>{preview}</p>

                    <button className="btn btn-danger text-decoration-none text-white"> <a href={href}  >More</a> </button>
                </div>
            </div>
        )
    })
}

export default Article;