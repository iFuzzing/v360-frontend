import {PaperPlaneTilt} from '@phosphor-icons/react'

export default function SecForm(){
    return (
        <>
        <section className="w-full h-auto">
            <div className='lg:flex lg:flex-row items-center'>
                <div className='lg:w-1/2'>
                    <div className='flex flex-col gap-5'>
                        <h1 className="text-app-orange-secondary text-3xl font-bold text-center w-2/3 mx-auto mt-5">Marque um horário com um de nossos especialistas</h1>
                        <h1 className="font-KitOne text-app-orange-secondary text-3xl text-center w-2/3 mx-auto mt-5 ">VOCÊ É NOSSA PRIORIDADE! ❤</h1>
                    </div>

                    <div className="lg:hidden flex flex-col justify-center items-center mt-5 text-2xl">
                        <label className="">Qual é o seu nome?*</label>
                        <input className="border-app-orange-secondary border-[1px] p-2" type="text" placeholder="Nome e sobrenome"></input>
                        
                        <label className="mt-5">Qual é o seu e-mail?*</label>
                        <input className="border-app-orange-secondary border-[1px] p-2" type="email" placeholder="exemplo@exemplo.com"></input>
                        
                        <label className="mt-5">Qual o seu telefone?*</label>
                        <input className="border-app-orange-secondary border-[1px] p-2" type="phone" placeholder="(21) 9999-9999"></input>
                
                        <label className="mt-5">Qual é o nome da sua empresa?*</label>
                        <input className="border-app-orange-secondary border-[1px] p-2" type="text" placeholder="Nome fantasia"></input>

                        <label className="mt-5">Qual é o seu cargo na empresa?*</label>
                        <input className="border-app-orange-secondary border-[1px] px-2 py-2" type="text" placeholder="O cargo que você exerce"></input>

                        <button className='m-5 py-2 rounded-sm shadow-md shadow-black/40 w-40 bg-app-orange-primary text-white flex flex-row justify-center gap-4 hover:scale-110 duration-200'><PaperPlaneTilt size={32} /> Enviar</button>
                    </div>

                </div>
                <div className='hidden lg:flex lg:flex-col lg:w-1/2 lg:p-10'>
                    <div className='bg-app-orange-primary flex flex-col p-10 rounded-tl-3xl rounded-br-3xl shadow-lg shadow-black/30'>
                        <label className=" text-white">Qual é o seu nome?*</label>
                        <input className="border-app-orange-secondary border-[1px] p-2" type="text" placeholder="Nome e sobrenome"></input>
                        
                        <label className="mt-5 text-white">Qual é o seu e-mail?*</label>
                        <input className="border-app-orange-secondary border-[1px] p-2" type="email" placeholder="exemplo@exemplo.com"></input>
                        
                        <label className="mt-5 text-white">Qual o seu telefone?*</label>
                        <input className="border-app-orange-secondary border-[1px] p-2" type="phone" placeholder="(21) 9999-9999"></input>
                
                        <label className="mt-5 text-white">Qual é o nome da sua empresa?*</label>
                        <input className="border-app-orange-secondary border-[1px] p-2" type="text" placeholder="Nome fantasia"></input>

                        <label className="mt-5 text-white">Qual é o seu cargo na empresa?*</label>
                        <input className="border-app-orange-secondary border-[1px] px-2 py-2" type="text" placeholder="O cargo que você exerce"></input>

                        <button className='m-5 py-2 rounded-sm shadow-md shadow-black/40 w-40 bg-white text-app-orange-primary text-xl mx-auto font-bold flex flex-row justify-center gap-2 hover:scale-110 duration-200'><PaperPlaneTilt size={32} /> Enviar</button>

                    </div>

                </div>
            </div>
        </section>
        </>
    )
}