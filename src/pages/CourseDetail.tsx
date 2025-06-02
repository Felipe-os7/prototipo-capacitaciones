import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Award, BookOpen, ArrowLeft, CheckCircle, PlayCircle } from 'lucide-react';
import { useCourses } from '../context/CourseContext';
import { useUser } from '../context/UserContext';
import ModuleList from '../components/ModuleList';
import ModuleContent from '../components/ModuleContent';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getCourseById, enrollInCourse } = useCourses();
  const { user } = useUser();
  const course = getCourseById(id || '');
  const [activeModuleId, setActiveModuleId] = useState(course?.modules[0]?.id || '');
  
  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
        <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/catalog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to catalog
        </Link>
      </div>
    );
  }

  const isEnrolled = user?.enrolledCourses?.includes(course.id);
  
  const handleEnroll = () => {
    if (user) {
      enrollInCourse(course.id);
    }
  };

  const activeModule = course.modules.find(module => module.id === activeModuleId);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Course Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/catalog"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to catalog
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {course.level}
                </span>
                {course.categories.map(category => (
                  <span 
                    key={category}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock size={18} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen size={18} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">{course.modules.length} Modules</span>
                </div>
                <div className="flex items-center">
                  <Users size={18} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">{course.enrollments} Enrolled</span>
                </div>
                <div className="flex items-center">
                  <Award size={18} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">Certificate</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                
                {isEnrolled ? (
                  <div>
                    <div className="flex items-center text-green-600 mb-4">
                      <CheckCircle size={20} className="mr-2" />
                      <span className="font-medium">You're enrolled</span>
                    </div>
                    <button
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                      onClick={() => {
                        // Scroll to content
                        document.getElementById('course-content')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <PlayCircle size={18} className="mr-2" />
                      Continue Learning
                    </button>
                  </div>
                ) : (
                  <button
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </button>
                )}
                
                <div className="mt-6">
                  <h3 className="font-medium text-gray-900 mb-2">This course includes:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">On-demand training modules</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">Interactive exercises</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">Downloadable resources</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">Completion certificate</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">Lifetime access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div id="course-content" className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Module List */}
          <div className="lg:col-span-1">
            <ModuleList 
              modules={course.modules} 
              activeModuleId={activeModuleId}
              setActiveModuleId={setActiveModuleId}
              isEnrolled={isEnrolled}
            />
          </div>
          
          {/* Module Content */}
          <div className="lg:col-span-3">
            {isEnrolled ? (
              activeModule ? (
                <ModuleContent module={activeModule} />
              ) : (
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <p className="text-gray-600">Select a module to view its content.</p>
                </div>
              )
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enroll to access course content</h3>
                <p className="text-gray-600 mb-6">
                  You need to enroll in this course to access the training modules and materials.
                </p>
                <button
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
                  onClick={handleEnroll}
                >
                  Enroll Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;