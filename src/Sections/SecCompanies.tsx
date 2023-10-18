import ImageSecCompaniesSplit from '../assets/sections/companies_split.png'
import ImageCompanie1 from '../assets/sections/Companies/Companie_1.png'
import ImageCompanie2 from '../assets/sections/Companies/Companie_2.png'
import ImageCompanie3 from '../assets/sections/Companies/Companie_3.png'
import {DotsThree, CaretLeft, CaretRight} from '@phosphor-icons/react'

export default function SecCompanies(){
    return (
        <>
        <section className="relative mt-5 py-10 w-full h-80 bg-app-orange-primary">
            <img className="absolute max-h-[50px] w-full z-40 -top-4 lg:h-96" src={ImageSecCompaniesSplit}></img>
            <h1 className="text-white text-3xl font-bold text-center w-[300px] mx-auto xl:w-[400px] xl:text-4xl ">Empresas que usam nossa solução</h1>
            <div className='relative w-full overflow-x-clip flex justify-center'>
                <div className='absolute flex flex-row items-center mt-2'>
                        <img src={ImageCompanie1} className='w-44 rounded-xl'></img>
                        <img src={ImageCompanie2} className='w-52 rounded-xl'></img>
                        <img src={ImageCompanie3} className='w-44 rounded-xl'></img>
                </div>
            </div>
            <div className='absolute text-white bottom-5 w-full flex flex-row items-center justify-center'>
                <CaretLeft className='cursor-pointer' size={42} />
                <DotsThree className='' size={92} />
                <CaretRight className='cursor-pointer' size={42} />
            </div>
        </section>
        </>
    )
}