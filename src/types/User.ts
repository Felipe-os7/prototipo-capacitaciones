export interface Activity {
  type: 'enrolled' | 'completed' | 'progress';
  message: string;
  date: string;
}

export interface Goal {
  target: number;
  current: number;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
  completedCourses: string[];
  recentActivity: Activity[];
  goals: {
    coursesPerMonth: Goal;
    hoursPerWeek: Goal;
  };
  achievements: Achievement[];
}