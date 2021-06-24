import React from 'react';
import HeroSection from './HeroSection';
import ThemeToggler from './ThemeToggler';

const Header = ()=>{
    return (
        <header>
            <h1>Theme toggler</h1>
            <ThemeToggler/>
        </header>
    )
}

export default Header;