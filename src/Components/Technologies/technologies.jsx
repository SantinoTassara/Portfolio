import React from 'react'
import SkillIcon from '../SkillIcon/skill-icon'
import technologies from '../../Data/technologies-data'


const tecnologias = technologies;

const Skills = () => {

    return (
        <section id="skills" className="py-20 bg-[#0F172A] border-b border-gray-800">
            <h2 className="text-3xl font-bold mb-10 text-center text-white mt-12">Mi Stack:</h2>

            <div className="max-w-4xl mx-auto px-6 mb-10 ">
                <div className="flex flex-wrap justify-center gap-10">
                    {tecnologias.map((tech) => (
                        <SkillIcon key={tech.id} iconId={tech.id} name={tech.name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills
