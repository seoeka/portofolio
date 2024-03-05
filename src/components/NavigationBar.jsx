import React from 'react';
import { FaHome, FaFolderOpen, FaUser } from "react-icons/fa";

const navItems = [
    { label: 'Home', href: '/', icon: FaHome },
    { label: 'Projects', href: '/projects', icon: FaFolderOpen },
    { label: 'About', href: '/about', icon: FaUser },
];


const NavigationBar = () => {
    return (
        <>
            <nav>
                <div className='flex justify-between px-10 py-6'>
                    <a className='text-3xl font-bold text-textLightGray'>Seoeka.</a>
                    <div className='flex space-x-3 text-xl '>
                        {navItems.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='p-2 text-textLightGray hover:text-white'>
                                    {React.createElement(item.icon, {className: 'inline-block w-4 h-4 mr-2'})}
                                    <span>{item.label}</span>
                                </a>
                        </li>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;