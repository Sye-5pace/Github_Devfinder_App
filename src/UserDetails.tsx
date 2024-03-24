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

    const formatDate = (dataStr: string): string=>{
        const date:Date= new Date (dataStr);
        const day: number = date.getDate();
        const month: string = date.toLocaleString('default', { month: 'short'})
        const year: number = date.getFullYear();
        
        return `${day} ${month} ${year}`;
    }
    const createdDate = data.created_at ? formatDate(data.created_at) : "";
    
    return (
        <div>
            <main className={`flex flex-col gap-y-10 py-10 h-[30rem] rounded-[0.8rem] mobile:h-full w-full ${theme === 'light' ? 'bg-[#fffffe]' : 'bg-[#1f2a48]'}`}>
                <section className='flex flex-col mr-[4rem] mobile:mr-4'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row justify-center gap-[3rem] mobile:gap-0'>
                            <div className='h-[9rem] w-[9rem]  ml-[3rem] mobile:ml-5'>
                                <img className='rounded-full mobile:w-[6.5rem] mobile:h-[6.5rem]' src={data.avatar_url} alt="user-image"/>
                            </div>
                            <div className='flex flex-col gap-y-[2.3rem] mobile:gap-y-[1.5rem]'>
                                <div >
                                    <h1 className={`${theme === 'light' ? 'text-[#5f636b]' : 'text-[#fafbfa]'} text-[1.7rem] mobile:text-[1.5rem] font-bold`}>{data.name}</h1>
                                    <p className='text-[#017bfc] font-medium'>@{data.login}</p>
                                    <p className='mobile:w-full text-[#c7c6cd] text-right font-medium laptop:hidden '>Joined {createdDate}</p>
                                </div>
                                <p className='text-[#b4b7c2]'>{data.bio ? data.bio  : 'This profile has no bio'}</p>
                            </div>
                        </div>
                        <p className='w-[12rem] text-[#c7c6cd] text-right font-medium mobile:hidden '>Joined {createdDate}</p>
                        
                    </div>
                </section>
                <section className='ml-[15rem] mr-[4rem] mobile:mx-5  flex flex-col gap-y-4 '>
                    <div className={`rounded-[0.8rem] h-[7.5rem]  ${theme === 'light' ? 'bg-[#f4f9ff]' : 'bg-[#151d2f]'}  flex flex-row px-6 items-center justify-between mobile:gap-6`}>
                        <div className='flex flex-col'>
                            <p className={ `${theme ===  'light' ? 'text-[#1f2a3c]' : 'text-[#dcdee1]'}`}>Repos</p>
                            <p className={`font-bold text-[1.3rem] ${theme === 'light' ? 'text-[#000]' : 'text-[#fffefe]'}`}>{data.public_repos}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className={ `${theme ===  'light' ? 'text-[#a7b0c0]' : 'text-[#dcdee1]'}`}>Followers</p>
                            <p className={`font-bold text-[1.3rem] ${theme === 'light' ? 'text-[#000]' : 'text-[#fffefe]'}`}>{data.followers}</p>
                        </div>
                        <div className='flex flex-col pr-[10rem]'>
                            <p className={ `${theme ===  'light' ? 'text-[#a7b0c0]' : 'text-[#dcdee1]'}`}>Following</p>
                            <p className={`font-bold text-[1.3rem] ${theme === 'light' ? 'text-[#000]' : 'text-[#fffefe]'}`}>{data.following}</p>
                        </div>
                    </div>
                </section>
                <section className={` ${theme === 'light' ? 'text-[#b4b7c2]' : 'text-[#fffefe]'} ml-[15rem] mr-[4rem] mobile:ml-9 mobile:flex-col flex flex-row  justify-between  items-start mobile:gap-y-4`}>
                    <div className='flex flex-col w-full gap-y-3 mobile:gap-y-4'>
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6  ${theme === 'light' ? 'fill-[#4c6896]' : 'fill-[#fffefe]'}`}>
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>

                            <p>{data.location || 'Not available'}</p>
                        </div>
                        <div className='flex gap-2 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6  ${theme === 'light' ? 'fill-[#4c6896]' : 'fill-[#fffefe]'}`}>
                                <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clipRule="evenodd" />
                            </svg>
                            <a href={data.blog} target='_blank'>{data.blog || 'Not available'}</a>
                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-y-3 mobile:gap-y-4'>
                        <div className='flex gap-2 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6  ${theme === 'light' ? 'fill-[#4c6896]' : 'fill-[#fffefe]'}`}>
                                <path fill="none" d="M0 0h24v24H0z"></path><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                            </svg>
                            <a href={data.html_url} target='_blank'>{data.html_url || 'Not available'}</a>
                        </div>
                        <div className='flex gap-2'>
                            <svg className={`w-6 h-6  ${theme === 'light' ? 'fill-[#4c6896]' : 'fill-[#fffefe]'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z">
                                </path><path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z"></path>
                            </svg>
                            <a href='' target='_blank'>{data.company || 'Not available'}</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default UserDetails;
