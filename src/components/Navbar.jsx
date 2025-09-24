const Navbar = () => {
    return (
         <nav className='navbar navbar-expand-sm navbar-light bg-light d-flex container'>
                       <div className='container'>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#collapsibleNavbar'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='collapsibleNavbar'>
                            <ul className='navbar-nav d-flex justify-content-around w-100'>
                                <li className='nav-item flex-fill'>
                                    <a href="#footer" className='nav-link'>Home</a>
                                </li>
                                <li className='nav-item dropdown flex-fill'>
                                    <a href="#footer" className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown' data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true"  aria-expanded="false">CHRISTIANITY</a>
                                    <ul className='dropdown-menu text-black' aria-labelledby="dropdownMenuLink">
                                        <li><a href="#footer"  className='dropdown-item text-black'>The Gospel</a></li>
                                        <li><a href="#footer"  className='dropdown-item text-black'>Christian Life</a></li>
                                        <li><a href="#footer"  className='dropdown-item text-black'>Sexual Purity</a></li>
                                        <li><a href="#footer"  className='dropdown-item text-black'>Guest Blogger</a></li>
                                        <li><a href="#footer"  className='dropdown-item text-black'>True Story</a></li>
                                        <li><a href="#footer"  className='dropdown-item text-black'>Fiction</a></li>
                                    </ul>
                                </li>
                                <li className='nav-item dropdown flex-fill'>
                                    <a href="#footer" className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown' data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true"  aria-expanded="false">RELATIONSHIPS</a>
                                    <ul className='dropdown-menu' aria-labelledby="dropdownMenuLink">
                                        <li><a href="#footer"  className='dropdown-item text-black'>Dating and Courting</a></li>
                                        <li><a href="#footer"  className='dropdown-item text-black'>Marriage</a></li>
                                        <li><a href="#footer"  className='dropdown-item text-black'>Men</a></li>
                                        <li><a href="#footer"  className='dropdown-item text-black'>Women</a></li>
                                    </ul>
                                </li>
                                <li className='nav-item flex-fill'>
                                        <a href="#footer"  className='nav-link'>RECORDED SERMONS</a>
                                </li>
                                <li className='nav-item dropdown flex-fill'>
                                    <a href="#footer" className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown' data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true"  aria-expanded="false">EVENTS</a>
                                    <ul className='dropdown-menu' aria-labelledby="dropdownMenuLink">
                                        <li><a href="#footer"  className='dropdown-item text-black'>Couples</a></li>
                                        <li><a href="#footer"  className='dropdown-item text-black'>Registration</a></li>
                                    </ul>
                                </li>
                                <li className='nav-item dropdown flex-fill'>
                                    <a href="#footer" className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown' data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true"  aria-expanded="false">BUY A PRODUCT</a>
                                    <ul className='dropdown-menu' aria-labelledby="dropdownMenuLink">
                                        <li><a href="#footer"  className='dropdown-item text-black'>All Books</a></li>
                                        <li><a href="#footer"  className='dropdown-item text-black'>Baesics</a></li>
                                    </ul>
                                </li>
                                <li className='nav-item flex-fill'>
                                        <a href="#footer"  className='nav-link'>GIVE TO MINISTRY</a>
                                </li>
                            </ul>
                        </div>
                       </div> 
                    </nav>
    );
}

export default Navbar;