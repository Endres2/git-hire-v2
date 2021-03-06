
import { Link } from 'react-router-dom';
import './Navbar.css';
import LOGO from '../../images/logov2-removebg.png';
import React, {useState, useEffect} from 'react';
import { Button } from '../Button/Button'

function Navbar() {

    const [click, setClick] = useState(false);
    //sets button to default of not clicked
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    //do not show button if screen is less than 960
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    };

    //stops sign up from popping up in the middle of the nav on refresh
    useEffect(()=> {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img className='logo' src={LOGO} alt='' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/JobSearch' className='nav-links' onClick={closeMobileMenu}>
                                Job Search
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Form' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up/Login 
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up/ Login </Button>}
                </div>
            </nav>
        
        </>
    )
}

export default Navbar
