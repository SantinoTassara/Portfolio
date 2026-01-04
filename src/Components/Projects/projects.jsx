import React from 'react'
import projects from '../../Data/projects-data'

const proyectos = projects


const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-[#0F172A] text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10 text-center">Mis Proyectos:</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {proyectos.map((proy) => (
                        <div key={proy.id} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform hover:shadow-[0_0_15px_rgba(255,255,255,0.20)]">
                            <div className="h-48 bg-gray-800 flex items-center justify-center">
                                <img src={proy.imagen} alt="Imagen del proyecto" className="object-cover" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{proy.titulo}</h3>
                                <p className="text-gray-400 text-sm mb-4">{proy.descripcion}</p>

                                <div className="flex flex-wrap gap-2 mb-6 ">
                                    {proy.tecnologias.map(tech => (
                                        <span key={tech} className="text-xs bg-[#38BDF8]/10 text-[#38BDF8] px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={proy.linkRepo} className="text-sm font-medium hover:underline text-[#38BDF8]">GitHub</a>
                                    <a href={proy.linkDemo} className="text-sm font-medium hover:underline text-[#38BDF8]">Live Demo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects

