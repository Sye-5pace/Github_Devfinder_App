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
            <section className={`w-full h-[4.5rem] flex flex-row items-center justify-between gap-6 pl-4 pr-1  ${theme === 'light' ? 'bg-[#fffffe]' : 'bg-[#1f2a48]'} rounded-[0.6rem]`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 stroke-[#017bfc]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input className={`focus:outline-none font-semibold text-[#bbbec3] ${theme === 'light' ? 'bg-[#fffffe]' : 'bg-[#1f2a48]'} w-[23rem] h-full text-[1.2rem]`}  placeholder='Search Github username...' value={username} onChange={(e) => setUsername(e.target.value)} />
                <button className='h-[3.4rem] w-[8.2rem] font-medium bg-[#017bfc] text-[#91cbec] rounded-[0.5rem] px-4 cursor-pointer hover:bg-[#91cbec] hover:text-[#f4f9ff]' onClick={() => handleRequest(username)}>Search</button>
            </section>
        </div>
    );
}

export default SearchUser;