import React from 'react';
import { useEffect } from 'react'; // Import useEffect
import { useState } from 'react';
import './theme.css';

const Theme = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleToggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    // Apply the active theme on component mount
    applyTheme(activeNav);
  }, []); // Empty dependency array to run the effect only once on mount

  const handleThemeClick = (nav) => {
    setActiveNav(nav);
    applyTheme(nav);
    setIsNavVisible(true); // Hide the navigation after theme selection
  };

  const applyTheme = (nav) => {
    const body = document.querySelector('body');
    body.className = ''; // Clear existing classes

    if (nav === '#green_theme') {
      body.classList.add('green-theme');
    } else if (nav === '#blue_theme') {
      body.classList.add('blue-theme');
    } else {
      // Default to purple theme
      body.classList.add('purple-theme');
    }
  };

  return (
    <div className="theme-toggle">
    <button className="nav-toggle" onClick={handleToggleNav}>
      Change Theme
    </button>
    {isNavVisible && (
    <nav className='theme_items'>
      <a
        href="#"
        onClick={() => handleThemeClick('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        Purple Theme
      </a>
      <a
        href="#green_theme"
        onClick={() => handleThemeClick('#green_theme')}
        className={activeNav === '#green_theme' ? 'active' : ''}
      >
        Green Theme
      </a>
      <a
        href="#blue_theme"
        onClick={() => handleThemeClick('#blue_theme')}
        className={activeNav === '#blue_theme' ? 'active' : ''}
      >
        Blue Theme
      </a>
    </nav>
       )}
  </div>
  );
};

export default Theme;



// import React from 'react'
// import { useState } from 'react'
// import '../../index.css'

// const Theme = () => {
//     const [activeNav, setActiveNav] = useState('#');
//   return (
//     <nav>
//       <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Purple Theme</a>
//       <a href="#green_theme" onClick={() => setActiveNav('#green_theme')} className={activeNav === '#green_theme' ? 'active' : ''}>Green Theme</a>
//       <a href="#blue_theme" onClick={() => setActiveNav('#blue_theme')} className={activeNav === '#blue_theme' ? 'active' : ''}>Blue Theme</a>
//     </nav>
//   )
// }

// export default Theme