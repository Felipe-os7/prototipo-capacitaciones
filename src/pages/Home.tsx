import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Users, BarChart, Briefcase } from 'lucide-react';
import { useCourses } from '../context/CourseContext';
import CourseCard from '../components/CourseCard';

const Home: React.FC = () => {
  const { courses } = useCourses();
  const featuredCourses = courses.filter(course => course.featured).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Potencia tu Equipo con Soluciones de Capacitación Personalizadas
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-xl">
                Plataforma integral de capacitación adaptada a las necesidades de tu empresa. Impulsa la productividad y la satisfacción de los empleados con cursos interactivos y atractivos.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/catalog"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
                >
                  Explorar Cursos
                </Link>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-blue-700 transition-colors duration-300"
                >
                  Mi Panel
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Equipo aprendiendo junto"
                className="rounded-lg shadow-xl max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué Elegir Nuestra Plataforma?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diseñada para hacer la capacitación corporativa eficiente, atractiva y adaptada a las necesidades únicas de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contenido de Calidad</h3>
              <p className="text-gray-600">
                Cursos creados por expertos diseñados para máximo compromiso y retención de conocimiento.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Colaboración en Equipo</h3>
              <p className="text-gray-600">
                Fomenta el trabajo en equipo con sesiones de capacitación grupal y rutas de aprendizaje colaborativas.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalizable</h3>
              <p className="text-gray-600">
                Adapta la plataforma para reflejar la marca, valores y necesidades específicas de capacitación de tu empresa.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analítica</h3>
              <p className="text-gray-600">
                Rastrea el progreso, tasas de finalización y métricas de rendimiento para decisiones basadas en datos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Cursos Destacados</h2>
            <Link 
              to="/catalog" 
              className="text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300"
            >
              Ver todos los cursos <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para transformar la capacitación de tu empresa?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a miles de empresas que han revolucionado el desarrollo de sus empleados con nuestra plataforma personalizable.
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            Comienza Hoy
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;