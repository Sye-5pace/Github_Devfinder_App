import React from 'react'
import './index.css';
import SearchUser from './SearchCard';
import UserDetails from './UserDetails';
// import LightSvg from './assets/light.svg';

const App = () => {
  return (
    <div className='bg-[#f4f9ff] w-full min-h-screen border-box p-0 m-0 font-space flex flex-row items-center justify-center'>
      <div className=' w-[55%] flex flex-col gap-y-6'>
        <header className='flex flex-row items-center justify-between'>
          <h1 className='text-[#4f535b] font-bold text-[1.7rem]'>
            devfinder
          </h1>
          <div className='flex flex-row items-center gap-4'>
            <p className='font-semibold text-[0.8rem] text-[#4f6c99]'> DARK</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-[#4f6c99]">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
            </svg>
          </div>
        </header>
        <SearchUser/>
        <UserDetails/>
      </div>
    </div>
  );
};

export default App;
