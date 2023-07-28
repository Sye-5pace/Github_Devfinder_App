import React,{ useState,useEffect } from 'react'
import './index.css';
import { useSelector } from 'react-redux'
import SearchUser from './SearchCard.tsx';
import UserDetails from './UserDetails.tsx';
import ThemeSwitcher from './theme-switcher.tsx';
import { UserData } from './interface.ts';
// import LightSvg from './assets/light.svg';

const App = () => {
  const theme = useSelector((state)=> state.theme);
  const [ data, setData ] = useState(null)
  const [ username , setUsername ] = useState("")
  console.log(username)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if(storedTheme) {
      setData(storedTheme)
    }
  },[])
    
  const handleApiRequest = async (username) => {
    console.log(username)
    const userEntry:string  = `https://api.github.com/users/${username}`;
    // console.log(userEntry);
    try{
      const response = await fetch(userEntry);
      if(!response.ok){
        throw new Error("Request failed with status: " + response.status)
      }
      const user: UserData = await response.json();

      setData(user)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className='bg-[#f4f9ff] w-full min-h-screen border-box p-0 m-0 font-space flex flex-row items-center justify-center'>
      <div className=' w-[60%] flex flex-col gap-y-6'>
        <header className='flex flex-row items-center justify-between'>
          <h1 className='text-[#4f535b] font-bold text-[1.7rem]'>
            devfinder
          </h1>
          <ThemeSwitcher theme={theme} />
        </header>
        <SearchUser username={username} setUsername={setUsername} handleRequest={handleApiRequest}/>
        <UserDetails  data={data} />
      </div>
    </div>
  );
};

export default App;
