import React from 'react'
import sprite from '../../assets/sprite.svg'

const SkillIcon = ({ iconId, name }) => (
    <div className="flex flex-col items-center group">
        <div className="w-16 h-16 p-3 bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#38BDF8] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            {/* Cambiamos fill-current por text-white o el color que quieras */}
            <svg className="w-full h-full text-white fill-current transition-colors group-hover:text-[#38BDF8]">
                <use href={`${sprite}#${iconId}`} />
            </svg>
        </div>
        <span className="mt-3 text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
            {name}
        </span>
    </div>
);

export default SkillIcon;