import { List, Gift, X } from "@phosphor-icons/react";
import ImageHeaderLogo from '../assets/header_logo.png'
import { useState } from "react";

export default function Header(){
    
    const [menuShow, setMenuShow] = useState(false)

    async function handleMenuClick(){
       setMenuShow((prevValue)=>!prevValue) 
    }
    
    const smMenu = (
        <>
        <div className="fixed w-4/5 h-auto top-4 right-2 bg-app-orange-primary shadow-lg shadow-black/40 p-10 rounded-lg">
            <X onClick={handleMenuClick} className="absolute top-2 right-2 text-white cursor-pointer" size={40}></X>
            <ul className="text-white text-xl">
                <a href=""><li className="border-l-2 border-white px-3">Solução</li></a>
                <a href=""><li className="mt-5 px-3 hover:border-b-2 hover:border-white">Blog</li></a>
                <a href=""><li className="mt-5 px-3 hover:border-b-2 hover:border-white">Carreiras</li></a>
                <a href=""><li className="mt-5 px-3 hover:border-b-2 hover:border-white">Sobre nós</li></a>
            </ul>
        </div>
        </>
    )

    return (
        <>
        <header className="z-50 bg-white border-b-app-orange-primary/50 border-[1px] w-full h-20 fixed flex flex-row items-center justify-between px-4 md:px-16 lg:px-32">
            <div className="flex flex-row items-center">
                <img className="w-16 mr-3" src={ImageHeaderLogo}></img>
                <h1 className="hidden md:block text-app-orange-primary uppercase text-lg font-bold">Virtual 360</h1>
            </div>
            <ul className="hidden lg:flex flex-row gap-6 w-3/2 items-center uppercase text-gray-800 font-medium">
                <a href=""><li className="border-b-2 border-app-orange-primary">Solução</li></a>
                <a href=""><li className="hover:border-b-2 hover:border-app-orange-primary">Blog</li></a>
                <a href=""><li className="hover:border-b-2 hover:border-app-orange-primary">Carreiras</li></a>
                <a href=""><li className="hover:border-b-2 hover:border-app-orange-primary">Sobre nós</li></a>
                <a href=""><li className="hover:scale-110 duration-200"><button className="cursor-pointer w-32 bg-app-orange-primary h-12 text-white rounded-md shadow-md shadow-black/30 px-2 flex flex-row text-[10px] items-center"><Gift size={52}></Gift>BUSINESS CASE GRATUITO</button></li></a>
            </ul>
            {menuShow && smMenu}
            <List onClick={handleMenuClick} className="text-app-orange-secondary lg:hidden" size={40} /> 
        </header>
        <div className="w-full h-20 flex flex-row items-center justify-between px-4"></div>
        </>
    )
}