import React from "react";
import './ColorTheme.css'

const ColorTheme = () => {
    return ( 
        <div className='color-container'>

            <h1 className='color-theme-text'>COLOR THEME</h1>

            <div className='color-icons-conteiner'>

                <svg className='color-icons' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="35" height="35" rx="17.5" fill="#FFF500"/></svg>

                <svg className='color-icons' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5Z" fill="white"/></svg>

                <svg className='color-icons' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5Z" fill="black"/></svg>

            </div>

        </div>
     );
}
 
export default ColorTheme;