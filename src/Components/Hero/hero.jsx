import React from 'react'
import sprite from '../../assets/sprite.svg'

function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-bl from-[#0F172A] via-[#0F172A] to-[#15294D]  px-6">
            <div className="max-w-4xl text-center">
                <span className="text-[#38BDF8] font-mono mb-4 block animate-bounce md:text-xl">
                    Hola, soy...
                </span>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                    Santino <span className="text-[#38BDF8]">Tassara</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Desarrollador FullStack graduado de la Universidad de Lomas de Zamora y estudiante de la UTN. <br />
                    Me especializo en crear aplicaciones web modernas y responsive.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button onClick={() => window.location.href = '#projects'} className="bg-[#38BDF8] hover:bg-[#0ea5e9] text-[#0F172A] font-bold py-3 px-8 rounded-lg transition-all">
                        Ver mis proyectos
                    </button>
                    <button onClick={() => window.location.href = '#contact'} className="border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#0F172A] font-bold py-3 px-8 rounded-lg transition-all">
                        Contacto
                    </button>
                </div>
            </div>

            <div className="absolute bottom-8 left-8 flex gap-4">
                <a href="https://www.linkedin.com/in/santinotassara/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                    <svg className="w-8 h-8 fill-current">
                        <use href={`${sprite}#linkedin`} />
                    </svg>
                </a>
                <a href="https://github.com/SantinoTassara" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                    <svg className="w-8 h-8 fill-current">
                        <use href={`${sprite}#github`} />
                    </svg>
                </a>
                <a href="https://www.instagram.com/santinoTF" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                    <svg className="w-8 h-8 fill-current">
                        <use href={`${sprite}#instagram`} />
                    </svg>
                </a>
            </div>
        </section>
    );
};


export default Hero