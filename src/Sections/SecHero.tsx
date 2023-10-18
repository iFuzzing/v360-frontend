import {Gift} from '@phosphor-icons/react'
import ImageHeroBlob from '../assets/hero_blob.png'

export default function SecHero(){
    return(
        <>
        <section className='sm:px-16 sm:py-10 relative w-full h-52 sm:h-auto bg-cover bg-sec-hero-bg bg-no-repeat  sm:bg-app-orange-primary sm:text-white sm:bg-none sm:flex sm:flex-row sm:gap-10 xl:justify-center'>
            <button className='sm:hidden absolute bottom-4 right-5 w-40 h-10 rounded-full bg-white shadow-sm shadow-black/20 flex flex-row justify-between text-xs px-4 items-center font-bold text-app-orange-primary cursor-pointer'><Gift size={35} />BUSINESS CASE GRATUITO</button>
            <div className="hidden sm:block w-1/2 xl:w-1/3">
                <h1 className='text-2xl font-KitOne md:text-4xl'>Automatize o seu recebimento fiscal com o V360</h1>
                <p className='text-xs mt-5 font-KitOne md:text-lg'>Descubra como o V360 vai aumentar a capacidade de processamento de notas na sua empresa e reduzir em mais de 98% multas, juros e erros no recebimento fiscal</p>
            </div>
            <div className='hidden sm:block relative'>
                <span className='absolute w-24 font-KitOne text-xs md:w-36 md:text-sm lg:text-xl'>O seu sucesso é o objetivo de todo o nosso time!</span>
                <img className='w-[300px] md:w-[400px]' src={ImageHeroBlob} />
            </div>
        </section>
        </>
    )

}