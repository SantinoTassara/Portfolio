import React from 'react'
import { education, certificates } from '../../Data/certifications-data'

const Certifications = () => {
    const educationData = education;
    const certificatesData = certificates;

    return (
        <section className="py-20 px-6 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center">
                    Educación y <span className="text-[#38BDF8]">Certificados:</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* COLUMNA IZQUIERDA: EDUCACIÓN (Timeline) */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center rounded-lg">🎓</span>
                            Formación Académica
                        </h3>

                        <div className="space-y-0 border-l-2 border-gray-800 ml-4">
                            {educationData.map((edu) => (
                                <div key={edu.id} className="relative pl-8 pb-12 last:pb-0">
                                    {/* Punto del timeline */}
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#38BDF8] rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

                                    <h4 className="text-xl font-bold text-white">{edu.title}</h4>
                                    <p className="text-[#38BDF8] font-medium mb-2">{edu.institution}</p>
                                    <span className="text-sm bg-gray-900 px-3 py-1 rounded-full text-gray-400 border border-gray-800">
                                        {edu.date}
                                    </span>
                                    <p className="mt-4 text-gray-400 leading-relaxed">
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: CERTIFICADOS */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center rounded-lg">📜</span>
                            Certificaciones
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {certificatesData.map((cert) => (
                                <div
                                    key={cert.id}
                                    className="group p-5 bg-gray-900/40 border border-gray-800 rounded-2xl hover:border-[#38BDF8]/50 transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#38BDF8]/20 transition-colors">
                                                <svg className="w-5 h-5 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <a href={cert.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                        <h4 className="font-bold text-gray-100 leading-tight mb-1 group-hover:text-[#38BDF8] transition-colors">
                                            {cert.title}
                                        </h4>
                                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                                        <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest">{cert.date}</p>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Certifications