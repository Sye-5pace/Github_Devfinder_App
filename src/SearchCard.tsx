import React from 'react';

interface SearchUserProps {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    handleRequest: (username: string) => void;
    theme: string
}


const SearchUser: React.FC<SearchUserProps> = ({ username, setUsername, handleRequest, theme }) => {

    return (
        <div className='' >
            <section className={`w-full h-[4.5rem] flex flex-row items-center justify-between gap-4 pl-4 pr-3 mobile:px-2  ${theme === 'light' ? 'bg-[#fffffe]' : 'bg-[#1f2a48]'} rounded-[0.8rem]`}>
                <div className='flex flex-row items-center w-full gap-10 mobile:gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-6 mobile:ml-0 w-7 h-7 stroke-[#017bfc]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className={`focus:outline-none font-semibold text-[#bbbec3] ${theme === 'light' ? 'bg-[#fffffe]' : 'bg-[#1f2a48]'} w-full h-full text-[1.5rem] mobile:text-[1rem]`}  placeholder='Search Github username...' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <button className='h-[3.4rem] w-[8.2rem] mobile:w-[6rem] mobile:h-[2.25rem] font-medium bg-[#017bfc] rounded-[0.5rem] px-4 cursor-pointer hover:bg-[#91cbec] text-[#f4f9ff]' onClick={() => handleRequest(username)}>Search</button>
            </section>
        </div>
    );
}

export default SearchUser;