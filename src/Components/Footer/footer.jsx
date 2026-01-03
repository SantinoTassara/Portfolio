import React from 'react'

const Footer = () => {
    return (
        <footer id="contact" className="py-12 bg-[#0F172A] border-t border-gray-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Contacto:</h2>
            <p className="text-gray-400 mb-6">Déjame un mensaje</p>

            <div className="flex justify-center gap-6">
                <a href="mailto:santinotassaraar@gmail.com" className="text-gray-400 hover:text-[#38BDF8] transition-colors">Email</a>
                <a href="https://www.linkedin.com/in/santinotassara/" className="text-gray-400 hover:text-[#38BDF8] transition-colors">LinkedIn</a>
                <a href="https://github.com/SantinoTassara" className="text-gray-400 hover:text-[#38BDF8] transition-colors">GitHub</a>
            </div>

            <p className="mt-10 text-xs text-gray-600">
                © {new Date().getFullYear()} - Santino Tassara Franco
            </p>
        </footer>
    );
};

export default Footer
