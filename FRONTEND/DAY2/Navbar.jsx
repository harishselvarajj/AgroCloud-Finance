
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='conatiner'>
      <title>Website Template</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet" />
      {/* Navigation Bar */}
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <span id="close"><img style={{ width: '25px' }} src="http://www.pvhc.net/img5/onbbqnqzkjrtvirmiqnp.png" alt="CLOSE" /></span>
      <span id="menu"><img style={{ width: '25px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11WXR-a18XfNZknL7S4lu0lLyC4aWZPY4sLd4wNHUNv9So2gd" alt="MENU" /></span>
      <nav>
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/gallery">GALLERY</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>
      </nav>
      {/* Navigation Bar */}
      {/* Hero Image */}
      <header>
        <div className="header-text">
          <h1>WE LOVE<br /><span id="photography">PHOTOGRAPHY.</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <button>Learn More</button>
        </div>
      </header>
      {/* Hero Image */}
      &nbsp;
    </div>
  );
};

export default Navbar;
