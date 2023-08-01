import React from 'react';
import { UserData } from './interface.ts';

interface UserDetailsProps {
    data: UserData | null;
    theme: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({data, theme}) => {
    if(!data){
        return <div className={`${theme === 'light' ? 'text-[#000]' : 'text-[#d2d8de]' }`}>No user data available</div>;
    }

    const createdDate = data.created_at ? data.created_at.substring(0, 10) : "";

    return (
        <div>
            <main className={`flex flex-col gap-y-4 pt-10 h-[30rem] rounded-[0.6rem] ${theme === 'light' ? 'bg-[#fffffe]' : 'bg-[#1f2a48]'}`}>
                <section className='flex flex-row gap-4 mx-4'>
                    <div className='h-[10rem] w-[10rem] rounded-full'>
                        <img className='rounded-full' src={data.avatar_url}/>
                    </div>
                    <div className=' w-[10rem]'>
                        <h1 className={`${theme === 'light' ? 'text-[#5f636b]' : 'text-[#fafbfa]'} text-[1.7rem] font-semibold`}>{data.name}</h1>
                        <p className='text-[#70cafc] font-medium'>@{data.login}</p>
                    </div>
                    <p className='h-6 text-[#c7c6cd] font-medium'>Joined {createdDate}</p>
                </section>
                <section className='ml-[9.4rem] mr-4 mx-4  flex flex-col gap-y-4'>
                    <p className='text-[#b4b7c2]'>{data.bio ? data.bio  : 'This profile has no bio'}</p>
                    <div className={`w-full rounded-[0.8rem] h-[8rem]  ${theme === 'light' ? 'bg-[#f4f9ff]' : 'bg-[#151d2f]'} flex flex-row px-6 items-center justify-between`}>
                        <div className='flex flex-col'>
                            <p className={ `${theme ===  'light' ? 'text-[#a7b0c0]' : 'text-[#dcdee1]'}`}>Repos</p>
                            <p className={`font-bold text-[1.3rem] ${theme === 'light' ? 'text-[#000]' : 'text-[#fffefe]'}`}>{data.public_repos}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className={ `${theme ===  'light' ? 'text-[#a7b0c0]' : 'text-[#dcdee1]'}`}>Followers</p>
                            <p className={`font-bold text-[1.3rem] ${theme === 'light' ? 'text-[#000]' : 'text-[#fffefe]'}`}>{data.followers}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className={ `${theme ===  'light' ? 'text-[#a7b0c0]' : 'text-[#dcdee1]'}`}>Following</p>
                            <p className={`font-bold text-[1.3rem] ${theme === 'light' ? 'text-[#000]' : 'text-[#fffefe]'}`}>{data.following}</p>
                        </div>
                    </div>
                </section>
                <section className={` ${theme === 'light' ? 'text-[#b4b7c2]' : 'text-[#fffefe]'} ml-[9.4rem] flex flex-row  justify-between items-center  mr-6`}>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6  ${theme === 'light' ? 'fill-[#4c6896]' : 'fill-[#fffefe]'}`}>
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>

                            <p>{data.location}</p>
                        </div>
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6  ${theme === 'light' ? 'fill-[#4c6896]' : 'fill-[#fffefe]'}`}>
                                <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clipRule="evenodd" />
                            </svg>
                            <p>{data.blog}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex gap-2'>
                            <svg className={`w-6 h-6  ${theme === 'light' ? 'fill-[#4c6896]' : 'fill-[#fffefe]'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z">
                                </path><path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
                            </svg>
                            <p>{data.twitter_username || 'Not available'}</p>
                        </div>
                        <div className='flex gap-2'>
                            <svg className={`w-6 h-6  ${theme === 'light' ? 'fill-[#4c6896]' : 'fill-[#fffefe]'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z">
                                </path><path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z"></path>
                            </svg>
                            <p>{data.company}</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default UserDetails;