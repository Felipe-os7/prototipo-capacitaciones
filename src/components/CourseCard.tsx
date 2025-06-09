import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChevronRight } from 'lucide-react';
import { Course } from '../types/Course';
import ProgressBar from './ProgressBar';

interface CourseCardProps {
  course: Course;
  showProgress?: boolean;
  progress?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, showProgress = false, progress = 0 }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
      <Link to={`/course/${course.id}`}>
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300"
        />
      </Link>
      
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-2">
          {course.categories.slice(0, 2).map((category, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full"
            >
              {category}
            </span>
          ))}
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
            {course.level}
          </span>
        </div>
        
        <Link to={`/course/${course.id}`} className="block mb-2">
          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
            {course.title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1" />
            <span>{course.enrollments} students</span>
          </div>
        </div>
        
        {showProgress && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-700">Progress</span>
              <span className="text-xs font-medium text-gray-700">{progress}%</span>
            </div>
            <ProgressBar value={progress} />
          </div>
        )}
        
        <Link 
          to={`/course/${course.id}`}
          className="w-full inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          {showProgress && progress === 100 ? 'View Certificate' : 'Ver curso'}
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;