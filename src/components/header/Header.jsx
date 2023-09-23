import React from "react";
import ColorTheme from "./ColorTheme";
import Language from "./Language";
import './Header.css'

const Header = () => {
    return ( 
        <div classname="header-container" 
            style={{
                position: 'fixed',
                display: 'flex',
                justifyContent: 'end',
                marginTop: 20
                }}>
            <ColorTheme/>
            <Language />
        </div>
     );
}
 
export default Header;