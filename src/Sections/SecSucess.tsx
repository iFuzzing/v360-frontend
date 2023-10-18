import ImageSecCompaniesSplit from '../assets/sections/companies_split.png'
import ImageCompany from '../assets/sections/Companies/company.png'
import {Check, Link} from '@phosphor-icons/react'

export default function SecSucess(){
    return (
        <>
        <section className="relative mt-5 py-10 w-full h-auto bg-app-orange-primary text-white">
            <img className="absolute max-h-[50px] lg:max-h-[60px] w-full z-40 -top-4" src={ImageSecCompaniesSplit}></img>
            <h5 className='text-center lg:text-2xl'>História de sucesso!</h5>
            <div className='lg:flex lg:flex-row lg:w-4/5 lg:mx-auto'>
                <div className='lg:w-1/2 xl:w-2/3'>
                    <h1 className="mt-5 text-white text-3xl font-bold text-center w-[300px] mx-auto xl:w-[500px]">O V360 ajudou uma das maiores mineradoras do mundo a:</h1>
                    <img className='w-80 mx-auto xl:w-[500px]' src={ImageCompany}></img> 
                </div>
                <ul className='font-medium px-5 mt-10'>
                    <li className='flex flex-row gap-3 items-center text-lg xl:text-2xl'><Check className='' size={26} />Aumento da capacidade de processamento de notas</li>
                    <li className='mt-5 flex flex-row gap-3 items-center text-lg xl:text-2xl '><Check className='' size={32} />Aumentar a produtividade do time para até 4 mil notas ao mês por analista</li>
                    <li className='mt-5 flex flex-row gap-3 items-center text-lg xl:text-2xl '><Check className='' size={32} />Ter maior governança e rastreabilidade do processo de recebimento fiscal</li>
                    <li className='mt-5 flex flex-row gap-3 items-center text-lg xl:text-2xl '><Check className='' size={32} />Zerar multas e juros gerados por erros no processo de recebimento fiscal</li>
                </ul>
            </div>
            <button className='mx-auto my-5 text-md uppercase w-56 px-5 py-1 font-bold shadow-md shadow-black/30 flex flex-row justify-evenly items-center text-app-orange-primary bg-white rounded-full hover:scale-110 duration-200 xl:text-2xl xl:w-72 xl:py-3 xl:mx-auto'><Link size={35}></Link> Entenda como</button>
        </section>
        </>
    )
}