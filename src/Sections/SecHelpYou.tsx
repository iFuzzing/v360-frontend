import {Circle, Chat} from '@phosphor-icons/react'

export default function SecHelpYou(){
    return (
        <>
        <section className="w-full px-5 h-auto flex flex-col items-center gap-5 py-5 xl:min-h-[500px] xl:mt-28 xl:w-[1224px] xl:mx-auto">
            <h1 className="text-app-orange-secondary text-3xl font-bold text-center w-2/3 lg:text-4xl">Como o V360 vai ajudar a sua empresa</h1>
            <div className='lg:flex lg:flex-row lg:px-10 xl:gap-10'>
                <div className='lg:flex lg:flex-col lg:gap-5 lg:text-xl lg:w-1/2'>
                    <p>Com o V360, sua empresa automatiza toda a captura de documentos de diversas fontes (SEFAZ, prefeituras, sites de concessionárias, e-mail etc), aplica mais de 40 validações diferentes (e customizáveis), e realiza a integração com o seu ERP para cadastrar o documento no Contas a Pagar.</p>
                    <p>Mais do que isso, o V360 analisa os principais motivos de divergência no ingresso e dispara alertas inteligentes aos responsáveis.</p>
                </div>
            
                <ul className='font-medium'>
                    <li className='mt-5 flex flex-row gap-3 text-lg text-app-orange-secondary '><Circle className='text-app-orange-primary' size={29} />Aumento da capacidade de processamento de notas</li>
                    <li className='mt-5 flex flex-row gap-3 text-lg text-app-orange-secondary'><Circle className='text-app-orange-primary' size={32} />Aumentar a produtividade do time para até 4 mil notas ao mês por analista</li>
                    <li className='mt-5 flex flex-row gap-3 text-lg text-app-orange-secondary'><Circle className='text-app-orange-primary' size={32} />Ter maior governança e rastreabilidade do processo de recebimento fiscal</li>
                    <li className='mt-5 flex flex-row gap-3 text-lg text-app-orange-secondary'><Circle className='text-app-orange-primary' size={32} />Zerar multas e juros gerados por erros no processo de recebimento fiscal</li>
                </ul>
                    
            </div>
            <button className='text-md uppercase w-56 px-5 py-2 font-bold shadow-md shadow-black/30 flex flex-row justify-between bg-app-orange-primary text-white rounded-full hover:scale-110 duration-200'><Chat size={45}></Chat> Fale com um especialista</button>
        </section>
        </>
    )
}