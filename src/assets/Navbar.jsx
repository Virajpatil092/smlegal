import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { IoMdContact } from "react-icons/io";
import { MdOutlinePhone } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? 'text-gold flex items-center gap-1' : 'hover:text-gold flex items-center gap-1';
  };

  const handleNavigate = () => {
    navigate('/contact');
  }

  const handleDial = () => {
    window.open('tel:9823032181');
  }

  return (
    <nav className='bg-[#2c2c2c] text-white h-20 flex items-center justify-between px-8 md:px-16'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-2xl font-bold'>logo here</div>
        <div className='hidden md:flex items-center space-x-14 text-lg'>
          <Link to='/' className={getLinkClass('/')}>{<FaHome />}Home</Link>
          <Link to='/about' className={getLinkClass('/about')}>{<TiGroup />}About</Link>
          <Link to='/contact' className={getLinkClass('/contact')}>{<IoMdContact />}Contact</Link>
          <button className='bg-gold text-black px-4 py-1 rounded-full flex items-center gap-1' onClick={() => {handleNavigate()}}  >{<MdOutlinePhone />}9823032181</button>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-[#2c2c2c] text-white flex flex-col items-center space-y-4 text-lg md:hidden z-10 pb-5'>
          <Link to='/' className={getLinkClass('/')}>Home</Link>
          <Link to='/about' className={getLinkClass('/about')}>About</Link>
          <Link to='/contact' className={getLinkClass('/contact')}>Contact</Link>
          <button className='bg-gold text-white px-4 py-2 rounded-full' onClick={() => {handleDial()}}>9823032181</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;