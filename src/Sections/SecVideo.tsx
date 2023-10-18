import {Chat} from '@phosphor-icons/react'

export default function SecVideo(){
    return (
        <>
            <section className="w-full h-auto flex flex-row items-center py-5 md:justify-evenly">
                <div className='w-full md:w-1/3 flex flex-col items-center gap-5 m'>
                    <h1 className="text-app-orange-secondary text-3xl font-bold text-center w-2/3 xl:w-3/4 xl:text-5xl ">Vem conversar com nosso time</h1>
                    <iframe className="md:hidden" width="370" height="215" src="https://www.youtube.com/embed/-_2KhAMO6Xk?si=-EN8McMG-6rWqzmy" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <button className='text-md uppercase w-48 px-3 py-2 font-bold shadow-md shadow-black/30 flex flex-row justify-between bg-app-orange-primary text-white rounded-full lg:py-1 hover:scale-110 duration-200'><Chat size={45}></Chat> Agende uma conversa</button>
                </div>
                <iframe className="hidden md:block lg:w-[440px] lg:h-[250px] xl:w-[640px] xl:h-[350px]" src="https://www.youtube.com/embed/-_2KhAMO6Xk?si=-EN8McMG-6rWqzmy" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                
            </section>
        </>
    )
}