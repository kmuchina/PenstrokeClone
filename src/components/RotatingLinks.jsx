
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const RotatingLinks = () => {
    const links = [
        { text: 'Traumatic situtions', url: '#footer' },
        { text: 'why marriage break down', url: '#footer' },
        { text: 'why it is good to date', url: '#footer' },
        { text: 'You have to be disciplined', url: '#footer' }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [links.length]);
    return (
        <div>
            <a href={links[currentIndex].href} className='text-white text-decoration-none'>
            {links[currentIndex].text}
      </a>
        </div>
    );
}

export default RotatingLinks;