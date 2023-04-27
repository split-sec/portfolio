import { Link } from 'react-router-dom';
import sv from '../assets/sv_purple.svg';
import moon from '../assets/darkmode.svg';
import sun from '../assets/lightmode.svg';
import { useEffect } from 'react';

export default function Navbar({theme, setTheme}) {
    useEffect(() => {
        if(theme === false) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme ? false : true)
    }

    return (
        <div className="max-w p-2 md:px-6 md:py-3 bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm 
            sticky top-0 text-xl flex justify-between items-center z-10">
            <Link to='/'>
                <img src={sv} className='h-12 w-12'/>
            </Link>
            <div className='hidden sm:flex justify-evenly items-center font-inter text-purple-600'>
                <Link className='px-3' to='/'>About</Link>
                <Link className='px-3' to='/'>Projects</Link>
                <Link className='px-3' to='/'>GitHub</Link>
                <Link className='px-3' to='/'>Contact</Link>
                <button className='px-3' onClick={handleThemeSwitch}>
                    <img src={theme ? moon : sun} className='h-6 w-6 fill-purple-600' />
                </button>
            </div>
        </div>
    )
}


