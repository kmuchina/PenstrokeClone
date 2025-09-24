
import 'bootstrap/dist/css/bootstrap.min.css';
import imgLogo from "../assets/images/penstrokes.jpg";
import linkedinimge from '../assets/images/linkedinimage.png';
import twitterimage from '../assets/images/images.png';
import youtubeimage from '../assets/images/youtubeimage.png';
import facebookimage from '../assets/images/facebookimage.png'; 
import searchIconImage from '../assets/images/searchIconImage.jpeg';
import RotatingLinks from './RotatingLinks';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './Navbar';


const Header = () => {
    
    const dayDate = () =>{
        const now = new Date();
        const today = now.toISOString().split('T')[0];
        return today;

        
    }
    return (
        <>
            <div className='header'> 
                <div className='container-fluid' >
                    <div className='bg-black d-flex justify-content-between' style={{height:'30px', width:'100%'}} >
                        <h5 className='text-white fwd'>LATEST</h5>
                        <div>
                            <RotatingLinks />
                        </div>
                        <div className='d-flex justify-content-center text-white' style={{gap:'9px'}}>
                            <a href='#footer' className='text-white'>MY Account</a>
                            <a href='#footer' className='text-white'>Checkout</a>
                            <a href='#footer' className='text-white'>Shopping Card</a>
                        </div>
                        <div className='d-flex justify-content-end m-1'>
                           
                                <a href='#footer' className='mx-2'><img className='img-fluid rounded nav-link' style={{width:'23px', height:'23px'}} src={linkedinimge} alt='this a link to my linked in account'/></a>
                                <a href='#footer' className='mx-2'><img 
                            className='img-fluid rounded' style={{width:'20px', height:'20px'}} src={twitterimage} alt='this a link to my twitter in account'/></a>
                                <a href='#footer' className='mx-2'><img className='img-fluid rounded' style={{width:'20px', height:'20px'}} src={youtubeimage} alt='this a link to my youtube in account'/></a>
                                <a href='#footer' className='mx-2'><img className='img-fluid rounded' style={{width:'20px', height:'20px'}} src={facebookimage } alt='this a link to my facebook in account'/></a>  

                                <div className='dropdown'>
                                    <img src={searchIconImage} alt=""  className='dropdown-toggle img-fluid rounded' type='button'data-bs-toggle='dropdown' style={{width:'20px', height:'20px'}} />
                                    <div className='dropdown-menu'>
                                        <form action="www.google.com" method='get'>
                                            <input type="search" className='dropdown-item rounded' style={{width:'150px', height:'40px'}} placeholder='search'/>
                                        </form>
                                        
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='d-flex  justify-content-center' >
                        
                            <p className=''>{dayDate()}</p>
                        
                        
                            <img src={imgLogo} alt='Penstrokes Logo' className='' />
                        
                    </div>
                   <Navbar/>
                </div>
               
            </div>
        </>
    )
}

export default Header;
