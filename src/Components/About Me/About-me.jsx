import React from 'react'

const AboutMe = () => {
    return (
        <section id="about" className="py-20 bg-[#0F172A] text-white border-b border-gray-800">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="w-48 h-48 bg-gradient-to-br from-[#38BDF8] to-purple-600 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img src="stffoto.png" className="rounded-2xl object-cover w-full h-full" />
                </div>

                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        Tengo 21 años, vivo actualmente en la Ciudad Autónoma de Buenos Aires, Argentina.
                        Estoy en busqueda de nuevos desafios como desarrollador y buscando ampliar
                        mis conocimientos en el mundo del desarrollo.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Me enfoco principalmente en el backend, pero actualmente estoy buscado aprender herramientas
                        para mejorar mi experiencia como desarrollador fullstack.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe
