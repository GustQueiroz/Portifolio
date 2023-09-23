import React, { useEffect, useState } from "react";
import './Main.css'

const Main = () => {

    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        localStorage.setItem('theme', 'dark')
    }, []) 

    const githubLink = (event) => {
        event.preventDefault();
        
        window.open('https://github.com/GustQueiroz', '_blank');
      };

    return ( 
        <div className='full-container'>

            <div className={theme === 'dark' ? 'header-conteiner-black' : 'header-conteiner-white'}>

                <h1 onClick={() => setTheme('cu')} className="text first">FULL-STACK</h1>

                <div className="secondline-conteiner">    

                    <svg className='icon' href='https://github.com/GustQueiroz' width="69" height="76" viewBox="0 0 69 76" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M67 20.0556V56.1667C67 67 61.5833 74.2222 48.9444 74.2222H20.0556C7.41667 74.2222 2 67 2 56.1667V20.0556C2 9.22222 7.41667 2 20.0556 2H48.9444C61.5833 2 67 9.22222 67 20.0556Z" stroke="#008DD2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M43.5278 11.0278V18.25C43.5278 22.2222 46.7778 25.4722 50.7501 25.4722H57.9723" stroke="#008DD2" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0557 41.7222H34.5001" stroke="#008DD2" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0557 56.1667H48.9446" stroke="#008DD2" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>

                    <a href="https://github.com/GustQueiroz" target="_blank" onClick={githubLink}><svg className='icon' width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 0C16.7812 0 0 16.7813 0 37.5C0 54.0938 10.7344 68.1094 25.6406 73.0781C27.5156 73.4063 28.2188 72.2813 28.2188 71.2969C28.2188 70.4063 28.1719 67.4531 28.1719 64.3125C18.75 66.0469 16.3125 62.0156 15.5625 59.9063C15.1406 58.8281 13.3125 55.5 11.7188 54.6094C10.4062 53.9063 8.53125 52.1719 11.6719 52.125C14.625 52.0781 16.7344 54.8438 17.4375 55.9688C20.8125 61.6406 26.2031 60.0469 28.3594 59.0625C28.6875 56.625 29.6719 54.9844 30.75 54.0469C22.4062 53.1094 13.6875 49.875 13.6875 35.5313C13.6875 31.4531 15.1406 28.0781 17.5312 25.4531C17.1562 24.5156 15.8438 20.6719 17.9062 15.5156C17.9062 15.5156 21.0469 14.5313 28.2188 19.3594C31.2188 18.5156 34.4063 18.0938 37.5938 18.0938C40.7813 18.0938 43.9688 18.5156 46.9688 19.3594C54.1406 14.4844 57.2812 15.5156 57.2812 15.5156C59.3438 20.6719 58.0312 24.5156 57.6562 25.4531C60.0469 28.0781 61.5 31.4063 61.5 35.5313C61.5 49.9219 52.7344 53.1094 44.3906 54.0469C45.75 55.2188 46.9219 57.4688 46.9219 60.9844C46.9219 66 46.875 70.0313 46.875 71.2969C46.875 72.2813 47.5781 73.4531 49.4531 73.0781C56.8976 70.565 63.3664 65.7805 67.9492 59.3982C72.532 53.016 74.998 45.3572 75 37.5C75 16.7813 58.2188 0 37.5 0Z" fill="#008DD2"/></svg></a>

                    <h1 className="text">DEVELOPER</h1>

                </div>

            </div>

        </div>

     );
}
 
export default Main;