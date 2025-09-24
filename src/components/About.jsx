import penstrokefooterbook from "../assets/images/penstrokefooterbook.jpg"

const About  = () => {
    return (
        <div className="about text-white" style={{marginBottom:'20px', maxWidth:'400px', margin:'auto'}}>
            <h3>ABOUT</h3>
            <p>Pen stroke is a christian blog run by the Wamboyes</p>
            <h3>CONTACTS</h3>
           
            <div>
                 <p>Address:P.O. Box 22417-00100</p>
                <p>Phone:+254-724-112-130</p>
                <p>Email: info@penstrokes.co.ke</p>
            </div>
            <div>
                <h3>BUY A BOOK</h3>
                <img src={penstrokefooterbook} alt="book-Lust and the City"/>
            </div>
            <div>
                <input type = "email" placeholder = "Enter your email here to subscribe"
                name="email"/>
            </div>

        </div>

    );
}
export default About