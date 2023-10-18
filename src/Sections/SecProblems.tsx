import ImageClock from '../assets/sections/Companies/ri_time-line.png'
import ImageEye from '../assets/sections/Companies/mdi_hide.png'
import ImageChart from '../assets/sections/Companies/uil_chart-down.png'

export default function SecProblems(){
    return (
        <>
        <section className="w-full h-auto bg-app-orange-primary">
            <h1 className="text-white text-3xl font-bold text-center w-[300px] mx-auto md:w-[400px] lg:text-4xl">Se você tem o problema, nós temos a solução!</h1>
            
            <div className='flex flex-col lg:flex-row lg:w-[700px] lg:mx-auto lg:gap-10 xl:w-[1024px] xl:mt-10'>
                <p className="m-4 w-2/3 text-start text-sm mx-auto text-gray-200 lg:text-xl lg:text-center">O Brasil tem um dos sistemas tributários mais complexos do mundo, com tanta burocracia o processo de recebimento fiscal se torna um verdadeiro desafio. Alguns dos problemas que identificamos nas empresas são:</p>
            </div>
            <div className="flex flex-col items-center">
                <div className='flex flex-row '>
                    <div className="flex flex-col w-44 text-white items-center m-5 xl:w-60">
                        <img className='w-20' src={ImageClock}></img>
                        <p className="">Validações manuais das notas de serviço consomem muito tempo do time.</p>
                    </div>
                    <div className="flex flex-col w-44 text-white items-center m-5 xl:w-64">
                        <img className='w-20' src={ImageEye}></img>
                        <p className="">Falta de visibilidade da causa raiz dos problemas do recebimento fiscal</p>
                    </div>
                    <div className="hidden lg:flex flex-col w-44 text-white items-center m-5 xl:w-64">
                        <img className='w-20' src={ImageChart}></img>
                        <p className="">Falta de governança no processo gerando sobrecarrega para o time Fiscal e Financeiro, principalmente no final do mês, o que leva a mais multas e juros.</p>
                    </div>
                </div>
                <div className="lg:hidden flex flex-col w-2/3 text-white items-center m-5 xl:w-64">
                    <img className='w-20' src={ImageChart}></img>
                    <p className="">Falta de governança no processo gerando sobrecarrega para o time Fiscal e Financeiro, principalmente no final do mês, o que leva a mais multas e juros.</p>
                </div>
                <div className="flex flex-col w-full px-10 text-white items-center m-5">
                    <p className="">Este cenário acontece na sua empresa? Se sua resposta é sim, continue na página!</p>
                </div>
            </div>
        </section>
        </>
    )
}