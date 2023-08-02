import React,{ useState,useEffect } from 'react'
import './index.css';
import { useDispatch, useSelector } from 'react-redux'
import SearchUser from './SearchCard.tsx';
import UserDetails from './UserDetails.tsx';
import ThemeSwitcher from './Theme-switcher.tsx';
import { UserData } from './interface.ts';
import { setTheme } from './store.ts';
import  NotFound from './assets/undraw_page_not_found_re_e9o6.svg'

const App: React.FC = () => {
  const theme = useSelector((state: { theme: string })=> state.theme);
  const [data, setData] = useState<UserData | null>(null);
  const [ username , setUsername ] = useState<string>("")
  const [ storeTheme , setStoreTheme ] = useState<string>('dark')
  const dispatch = useDispatch()
  console.log(username)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
     if(storedTheme) {
      setStoreTheme(storedTheme);
      dispatch(setTheme(storedTheme));
    }
  },[dispatch])
    
  const handleApiRequest = async (username: string) => {
    const userEntry:string  = `https://api.github.com/users/${username}`;
    try{
      const response = await fetch(userEntry);
      if(!response.ok){
        throw new Error("Request failed with status: " + response.status)
      }
      const user: UserData = await response.json();
      setData(user)
    }catch(error){
      console.log(error)
      setData(null);
    }
  }

  return (
    <div className={`${theme === 'light' ? 'bg-[#f4f9ff]' : 'bg-[#151d2f]'} w-full min-h-screen border-box p-0 m-0 font-space flex flex-row items-center justify-center`}>
      <div className=' w-[65%] flex flex-col gap-y-6'>
        <header className='flex flex-row items-center justify-between'>
          <h1 className={`${theme === 'light' ? 'text-[#4f535b]' : 'text-[#d3d4d8]'} font-bold text-[1.7rem]`}>
            devfinder
          </h1>
          <ThemeSwitcher theme={storeTheme} setStoreTheme={setStoreTheme} />
        </header>
        <SearchUser theme={storeTheme} username={username} setUsername={setUsername} handleRequest={handleApiRequest}/>
        {data ?
          (
            <UserDetails theme={storeTheme} data={data} />
          ) : 
          (
            <div className='flex flex-col pt-6 mx-auto gap-y-4'>
              <img className = 'h-[20rem]' src={NotFound}  />
              <p className={` ${storeTheme === 'light' ? 'text-woodsmoke' : 'text-white' } self-center`}>User not found</p>
            </div>
          )  
        }
      </div>
    </div>
  );
};

export default App;