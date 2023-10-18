import ImageOracle from '../assets/oracle.png'
import {GithubLogo, LinkedinLogo} from '@phosphor-icons/react'

export default function Footer(){
    return (
        <>
        <footer className="w-full text-white p-5 lg:p-10 bg-[#2C1A55] flex flex-col">
            <div className='flex flex-row items-center'>
                <div className='w-2/3'>
                    <ul className='text-sm border-r-[1px] mr-1 border-white/50 lg:text-xl'>
                        <li>Virtual 360 Tecnologia LTDA</li>
                        <li className='mt-2' ><a className='underline' href=''>Política de Privacidade</a></li>
                        <li className='mt-1'><a className='underline' href=''>Política de segurança da informação</a></li>
                        <li className='mt-1'><a className='underline' href=''>V360 cuida da Segurança de seus dados</a></li>
                    </ul>
                </div>
                <img src={ImageOracle} className='w-36 lg:w-60' />
            </div>
            <div className='mt-5 flex flex-col items-center'>
                Atenção: essa não é a página oficial do v360
                <span>Dev: Josivan Sousa</span>
                <div className='flex flex-row gap-5'>
                    <a target='_blank' href="https://www.linkedin.com/in/josivan-sousa-22091a253/" className='hover:text-app-orange-primary'><LinkedinLogo size={32}></LinkedinLogo></a>
                    <a target='_blank' href="https://github.com/iFuzzing" className='hover:text-app-orange-primary'><GithubLogo size={32}></GithubLogo></a>
                </div>
            </div>
        </footer>
        </>
    )
}