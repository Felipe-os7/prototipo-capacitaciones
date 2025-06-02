import React, { createContext, useContext, useState, ReactNode } from 'react';
import { sampleUser } from '../data/sampleData';
import { User } from '../types/User';

interface UserContextType {
  user: User | null;
  enrollInCourse: (courseId: string) => void;
  completeCourse: (courseId: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(sampleUser);
  
  const enrollInCourse = (courseId: string) => {
    if (!user) return;
    
    // Check if already enrolled
    if (user.enrolledCourses.includes(courseId)) return;
    
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
    
    setUser({
      ...user,
      enrolledCourses: [...user.enrolledCourses, courseId],
      recentActivity: [
        {
          type: 'enrolled',
          message: `You enrolled in a new course`,
          date: formattedDate
        },
        ...user.recentActivity.slice(0, 9) // Keep only the last 10 activities
      ]
    });
  };
  
  const completeCourse = (courseId: string) => {
    if (!user) return;
    
    // Check if already completed
    if (user.completedCourses.includes(courseId)) return;
    
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
    
    setUser({
      ...user,
      completedCourses: [...user.completedCourses, courseId],
      recentActivity: [
        {
          type: 'completed',
          message: `You completed a course`,
          date: formattedDate
        },
        ...user.recentActivity.slice(0, 9)
      ],
      achievements: [
        {
          title: 'Course Completed',
          description: 'Successfully completed a training course',
          date: formattedDate
        },
        ...user.achievements
      ]
    });
  };
  
  return (
    <UserContext.Provider value={{ user, enrollInCourse, completeCourse }}>
      {children}
    </UserContext.Provider>
  );
};