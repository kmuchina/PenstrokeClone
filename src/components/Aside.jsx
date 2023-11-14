import "./Aside.css"
import img28 from "../assets/images/WinnerBADGES2019_300px (1).webp"
import img1 from "../assets/images/mosee.webp"
import img2 from "../assets/images/josee.webp"
import img3 from "../assets/images/coffineby.webp"
import img27 from "../assets/images/BAKE-Awards-2017-Winners-Badge.webp"
import img6 from "../assets/images/BAKE-Winner.webp"
import img7 from "../assets/images/Baesics.webp"
import img9 from "../assets/images/Holy-Joe.webp"
import img11 from "../assets/images/The-Human-Temple.webp"
import img22 from "../assets/images/smallm.webp"
import img23 from "../assets/images/small8445435626_efd474fb3f_b.webp"
import img24 from "../assets/images/smallgettyIma.webp"


const Aside = ( ) => {

    return (
        <aside>

            <div >
                <form action="/" method="post">
                    <input type="search" name="userquestions" placeholder=" To search type and press enter"/>
                </form>
                <h3><a href="/">The Relationship Centre Podcast</a></h3>
                <img src= {img28} alt="a barge written winnerBADGES2019"/>
            </div>
            <div>
                <h3>
                    <a href="/">Best Spiritual/Religious Blog 2019</a>
                </h3>
                <img src= {img28}alt=" a barge written winnerBADGES2019"/>
            </div>
            <div>
                <h3>
                    <a href="/">BUY A BOOK</a>
                </h3>
                <img src={img7} alt="a book called Baesics"/>
            </div>
            <div>
                <h3>
                    <a href="/">Best Spiritual/Religious Blog 2017</a>
                </h3>
                <img src={img27} alt="BAKE Awards 2017 Winners Badge "/>
            </div>
            <div>
                <h3>
                    <a href="/">Best Spiritual/Religious Blog 2016</a>
                </h3>
                <img src={img6} alt="BAKE Winner 2016 barge"/>
            </div>
            <div>
                <h3>Subscribe Via Email</h3>
                <h4>Enter your details below</h4>
                <form action="/" method="post">
                    <label for="username">First Name:</label> <br />
                    <input type="text" name="firstName" placeholder="type your first name" /> <br />
                    <label for="other name">Other name:</label> <br />
                    <input type="text" name="otherName" placeholder="other name" /> <br />
                    <label for="mobile number"> Modile number:</label> <br />
                    <input type="text" name="mobileNumber" placeholder="Mobile number" /> <br />
                    <label for="email">Email:</label> <br />
                    <input type="email" name="email" placeholder="maoses@gmail.com"/> <br />
                    <input type="submit" value="click to suscribe" /> <br />
                </form>

            </div>
            <div>
                <h3>BUY A BOOK</h3>
                <img src= {img9} alt=" abook with atitle of Holy Joe"/>
                <span>Holy Joe! - A Pocket Handbook on Sexual Purity</span>
            </div>
            <div>
                <h3>BUY A BOOK</h3>
                <img src= {img11} alt=" a book with a title of Human Temple"/><br />
                <span>The Human Temple - A Novel by Ernest Wamboye</span>  <br />
            </div>
            
            <ul>
                    <li><a href="/">RECENT</a></li>
                    <li><a href="/">POPULAR</a></li>
                    <li><a href="/">COMMENT</a></li>
                
            </ul>
        <section>
            <div>
                <img src= {img1} alt="josphe with a stike" />
                <div>
                    <span>SEPTEMBER 4, 2023</span>
                    <h5><a href="/">Jesus and Joseph of the Old Testament</a></h5>
                </div>
            </div>
            <div>
                
                <img src= {img3}alt=" a coffine"/>
                <div>
                    <span>AUGUST 13, 2023</span>
                    <h5><a href="/">Eulogy: the Death of Self</a></h5>
                </div>
                
            </div>
            <br />
            <div>
                
                <img src= {img2} alt=" two people a man and woman"/>
                <div>
                    <span>JULY 12, 2023</span>
                    <h5><a href="/">Let your heart be ready</a></h5>
                </div>
                
            </div>
            <div>
                
                <img src= {img22} alt=" a cross and person raising hands"/>
                <div>
                    <span>APRIL 26, 2023</span>
                    <h5><a href="/">12 things to consider on the first date
                    </a></h5>
                </div>
                
            </div>
            <div>
                <img src= {img24} alt="JBFhdhvjhajhV"/>
                <div>
                    <span>APRIL 11, 2023</span>
                    <h5><a href="/">What is the spiritual act of worship in Romans 12?</a></h5>
                </div>
                
            </div>
            <div>
                
                <img src= {img23} alt="one of the best images"/>
                <div>
                    <span>MARCH 13, 2023</span>
                    <h5><a href="/">Your life is a breath.</a></h5>
                </div>
                
            </div>  
        </section>

            <h3>We are members!</h3>
        </aside>
        
    );
}

export default Aside