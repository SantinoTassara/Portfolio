import React from 'react'
import sprite from '../../assets/sprite.svg'



const SkillIcon = ({ iconId, name }) => (
    <div className="flex flex-col items-center group">
        <div className="w-16 h-16 p-3 bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#38BDF8] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <svg className="w-full h-full fill-current">
                <use href={`${sprite}#${iconId}`} />
            </svg>
        </div>
        <span className="mt-3 text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
            {name}
        </span>
    </div>
);

const Skills = () => {
    const tecnologiasFrontend = [
        { id: 'html', name: 'HTML5' },
        { id: 'css', name: 'CSS3' },
        { id: 'react', name: 'React' },
        { id: 'angular', name: 'Angular' },
        { id: 'tailwind', name: 'Tailwind CSS' },
    ];

    const tecnologiasBackend = [
        { id: 'javascript', name: 'JavaScript' },
        { id: 'node', name: 'Node.js' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'dotnet', name: '.NET' },
    ];

    const tecnologiasOtros = [
        { id: 'github', name: 'GitHub' },
        { id: 'git', name: 'Git' },
        { id: 'docker', name: 'Docker' },
        { id: 'postgresql', name: 'PostgreSQL' },
        { id: 'mysql', name: 'MySQL' },
        { id: 'mongodb', name: 'MongoDB' },

    ];

    return (
        <section id="skills" className="py-20 bg-[#0F172A] border-b border-gray-800">
            <h2 className="text-3xl font-bold mb-10 text-center text-white mt-12">Mi Stack:</h2>

            {/* Frontend */}
            <div className="max-w-4xl mx-auto px-6 mb-10 ">
                <h3 className="text-xl font-semibold mb-8 text-center text-[#38BDF8]">Frontend</h3>
                <div className="flex flex-wrap justify-center gap-10">
                    {tecnologiasFrontend.map((tech) => (
                        <SkillIcon key={tech.id} iconId={tech.id} name={tech.name} />
                    ))}
                </div>
            </div>

            {/* Backend */}
            <div className="max-w-4xl mx-auto px-6 mb-10">
                <h3 className="text-xl font-semibold mb-8 text-center text-[#38BDF8]">Backend</h3>
                <div className="flex flex-wrap justify-center gap-10">
                    {tecnologiasBackend.map((tech) => (
                        <SkillIcon key={tech.id} iconId={tech.id} name={tech.name} />
                    ))}
                </div>
            </div>

            {/* Otros */}
            <div className="max-w-4xl mx-auto px-6 mb-10">
                <h3 className="text-xl font-semibold mb-8 text-center text-[#38BDF8]">Otros</h3>
                <div className="flex flex-wrap justify-center gap-10">
                    {tecnologiasOtros.map((tech) => (
                        <SkillIcon key={tech.id} iconId={tech.id} name={tech.name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills
