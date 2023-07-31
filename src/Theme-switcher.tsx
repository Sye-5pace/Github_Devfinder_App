import  React from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from './store';


const ThemeSwitcher = ({theme, setStoreTheme})=>{
    const dispatch = useDispatch();

    const handleThemeToggle = ():void => {
        const newTheme: string = theme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
        localStorage.setItem('theme', newTheme);
        setStoreTheme(newTheme);
    }

    return (
        <>
            <div className='flex flex-row items-center gap-4'>
                <p className='font-semibold text-[0.8rem] text-[#4f6c99]'>{theme === 'light' ? 'DARK' : 'LIGHT'}</p>
                <svg onClick={handleThemeToggle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-[#4f6c99] cursor-pointer">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>
            </div>
        </>
    );
}

export default ThemeSwitcher;