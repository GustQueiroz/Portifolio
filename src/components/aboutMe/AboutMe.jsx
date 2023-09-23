import React from "react";
import './AboutMe.css'

const AboutMe = () => {
    return ( 
        <div className='aboutme-container'>

            <img className='photoMe' src='https://images2.imgbox.com/13/14/hQasK6xU_o.png' alt='Minha foto'></img>

            <div className='aboutme-text-container'>
                <h1 className='aboutme-header'>SOBRE MIM</h1>
                <p className='aboutme-text'>ME CHAMO GUSTAVO QUEIROZ, TENHO 18 ANOS E SOU DESEVOLVEDOR FULL-STACK. HOJE TRABALHO EM UMA EMPRESA DE ECOMMERCE E SERVIÇOS. GOSTO DE RESOLVER PROBLEMAS E FAZER DESIGNS</p>
            </div>

        </div>
     );
}
 
export default AboutMe;