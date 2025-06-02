import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Course } from '../types/Course';
import { sampleCourses } from '../data/sampleData';

interface CourseContextType {
  courses: Course[];
  categories: string[];
  getCourseById: (id: string) => Course | undefined;
  enrollInCourse: (courseId: string) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
};

interface CourseProviderProps {
  children: ReactNode;
}

export const CourseProvider: React.FC<CourseProviderProps> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>(sampleCourses);
  
  // Extract unique categories from all courses
  const categories = Array.from(
    new Set(courses.flatMap(course => course.categories))
  ).sort();
  
  const getCourseById = (id: string) => {
    return courses.find(course => course.id === id);
  };
  
  const enrollInCourse = (courseId: string) => {
    setCourses(prevCourses => 
      prevCourses.map(course => 
        course.id === courseId 
          ? { ...course, enrollments: course.enrollments + 1 } 
          : course
      )
    );
    
    // Note: In a real application, this would also update the user's enrolled courses
    // which we're handling in the UserContext in this example
  };
  
  return (
    <CourseContext.Provider value={{ courses, categories, getCourseById, enrollInCourse }}>
      {children}
    </CourseContext.Provider>
  );
};