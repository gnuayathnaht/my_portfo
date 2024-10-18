import React from 'react'

import logo from '../assets/logo.png';
import logo_dark from '../assets/logo_dark.png';
import arrow_icon from '../assets/arrow-icon.png';
import arrow_icon_dark from '../assets/arrow-icon-dark.png';
import moon_icon from '../assets/moon_icon.png';
import sun_icon from '../assets/sun_icon.png';
import header_bg_color from '../assets/header-bg-color.png';
import menu_black from '../assets/menu-black.png';
import menu_white from '../assets/menu-white.png';
import close_black from '../assets/close-black.png';
import close_white from '../assets/close-white.png';

const Navbar = () => {

    const sideMenu = document.querySelector('#sideMenu');
    const navBar = document.querySelector('nav');
    const navLinks = document.querySelector('nav li');

    const openMenu = () => {
        sideMenu.style.transform = 'translateX(-16rem)';
    }

    const closeMenu = () => {
        sideMenu.style.transform = 'translateX(16rem)';
    }

    // document.documentElement.classList.toggle(
    //     'white',
    //     localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    // )

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark')
        if(document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    }

    window.addEventListener('scroll', () => {
        if (scrollY > 50) {
            navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
                'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20'
            )
            navLinks.classList.remove('bg-white', 'shadwo-sm', 'bg-opacity-50',
                'dark:border', 'dark:shadow-white/50', 'dark:bg-transparent'
            );
        } else {
            navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
                'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20'
            )
            navLinks.classList.add('bg-white', 'shadwo-sm', 'bg-opacity-50',
                'dark:border', 'dark:shadow-white/50', 'dark:bg-transparent');
        }
    })

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]
                dark:hidden'>
                <img src={header_bg_color} alt="" />
            </div>

            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex
            items-center justify-between z-50'>
                <img src={logo} alt="Logo"
                    className='w-28 cursor-pointer mr-14 dark:hidden'
                />
                <img src={logo_dark} alt="Logo"
                    className='w-28 cursor-pointer mr-14 hidden dark:block'
                />
                <ul className='hidden md:flex items-center gap-6 lg:gap-8 
                    rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo
                    dark:border dark:border-white/50 dark:bg-transparent'>
                    <li><a href='#top'>Home</a></li>
                    <li><a href='#about'>About me</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#projects'>My Work</a></li>
                    <li><a href='#contact'>Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={toggleTheme}>
                        <img src={moon_icon} alt="" className='w-6 dark:hidden' />
                        <img src={sun_icon} alt="" className='w-6 hidden dark:block' />
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3
                    px-10 py-2.5 border border-gray-500 rounded-full ml-4
                    font-Ovo dark:border-white/50'>
                        Contact
                        <img src={arrow_icon} alt=""
                            className='w-3 dark:hidden'
                        />
                        <img src={arrow_icon_dark} alt=""
                            className='w-3 hidden dark:block'
                        />
                    </a>

                    <button
                        onClick={openMenu}
                        className='block md:hidden ml-3'>
                        <img src={menu_black} alt="" className='w-6 dark:hidden' />
                        <img src={menu_white} alt="" className='w-6 hidden dark:block' />
                    </button>
                </div>

                {/* mobile menu */}

                <div>
                    <ul id='sideMenu' className='flex md:hidden flex-col py-20 px-10 fixed 
                    -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 gap-4
                    font-Ovo dark:bg-[#2a004a] dark:text-white'>

                        <div
                            onClick={closeMenu}
                            className='absolute right-6 top-6'>
                            <img src={close_black} alt="" className='w-5 cursor-pointer dark:hidden' />
                            <img src={close_white} alt="" className='w-5 cursor-pointer hidden dark:block' />
                        </div>

                        <li><a href='#top' onClick={closeMenu}>Home</a></li>
                        <li><a href='#about' onClick={closeMenu}>About me</a></li>
                        <li><a href='#services' onClick={closeMenu}>Services</a></li>
                        <li><a href='#projects' onClick={closeMenu}>My Work</a></li>
                        <li><a href='#contact' onClick={closeMenu}>Contact me</a></li>
                    </ul>
                </div>
            </nav>
        </>

    )
}

export default Navbar