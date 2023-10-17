import './Header.css'
import imgLogo from "../assets/images/penstrokes.jpg";

const Header = props => {
    return (
        <header>
            <div>
                <div id="notice"></div>
                <img src={imgLogo} alt='Penstrokes Logo' />
            </div>
            <nav>
                <ul id="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">The Gospel</a></li>
                    <li><a href="/">Christian Living</a></li>
                    <li><a href="/">Sexual Purity</a></li>
                    <li><a href="/">True Stories</a></li>
                    <li><a href="/">Give To Ministry</a></li>
                </ul>   
            </nav>
        </header>
    )
}

export default Header;
