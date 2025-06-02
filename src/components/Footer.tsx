import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-8 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-semibold text-gray-900">Capaci<span className="text-blue-600">Plus</span></span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Empoderando organizaciones con soluciones de capacitación personalizables para el crecimiento y desarrollo de empleados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Plataforma
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Todos los Cursos
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Categorías
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Cursos Populares
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Nuevos Lanzamientos
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Carreras
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Socios
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Soporte
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Personalización
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} CapaciPlus. Todos los derechos reservados. Personalizable para tu empresa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;