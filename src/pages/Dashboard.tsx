import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, BookOpen, Clock, Award, ChevronRight, CheckCircle, AlertCircle, Medal } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useCourses } from '../context/CourseContext';
import ProgressBar from '../components/ProgressBar';
import CourseCard from '../components/CourseCard';

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const { courses, getCourseById } = useCourses();
  const [activeTab, setActiveTab] = useState('in-progress');
  
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in</h2>
        <p className="text-gray-600 mb-6">You need to be logged in to view your dashboard.</p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Log In
        </button>
      </div>
    );
  }

  const enrolledCourses = user.enrolledCourses.map(id => getCourseById(id)).filter(Boolean);
  const inProgressCourses = enrolledCourses.filter(course => !user.completedCourses.includes(course!.id));
  const completedCourses = enrolledCourses.filter(course => user.completedCourses.includes(course!.id));
  
  // Get recommended courses (not enrolled)
  const recommendedCourses = courses
    .filter(course => !user.enrolledCourses.includes(course.id))
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}</h1>
              <p className="text-gray-600">Track your progress and continue your learning journey.</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Enrolled Courses */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Enrolled Courses</p>
                <h3 className="text-2xl font-semibold text-gray-900">{enrolledCourses.length}</h3>
              </div>
            </div>
          </div>

          {/* In Progress */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <Clock className="text-yellow-600" size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">In Progress</p>
                <h3 className="text-2xl font-semibold text-gray-900">{inProgressCourses.length}</h3>
              </div>
            </div>
          </div>

          {/* Completed */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Completed</p>
                <h3 className="text-2xl font-semibold text-gray-900">{completedCourses.length}</h3>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Award className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Certificates</p>
                <h3 className="text-2xl font-semibold text-gray-900">{completedCourses.length}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity & Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            
            <div className="space-y-4">
              {user.recentActivity.length > 0 ? (
                user.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <div className={`p-2 rounded-full mr-4 ${
                      activity.type === 'completed' ? 'bg-green-100' : 
                      activity.type === 'enrolled' ? 'bg-blue-100' : 
                      'bg-yellow-100'
                    }`}>
                      {activity.type === 'completed' ? 
                        <CheckCircle size={16} className="text-green-600" /> : 
                        activity.type === 'enrolled' ? 
                        <BookOpen size={16} className="text-blue-600" /> : 
                        <Clock size={16} className="text-yellow-600" />
                      }
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm italic">No recent activity to display.</p>
              )}
            </div>
          </div>

          {/* Overall Progress */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Learning Progress</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Completion</span>
                  <span className="text-sm font-medium text-gray-700">
                    {completedCourses.length}/{enrolledCourses.length} courses
                  </span>
                </div>
                <ProgressBar 
                  value={enrolledCourses.length ? (completedCourses.length / enrolledCourses.length) * 100 : 0} 
                />
              </div>
              
              {/* Learning Goals */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Learning Goals</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="mr-3">
                      {user.goals.coursesPerMonth.current >= user.goals.coursesPerMonth.target ? (
                        <CheckCircle size={18} className="text-green-500" />
                      ) : (
                        <AlertCircle size={18} className="text-yellow-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">Complete {user.goals.coursesPerMonth.target} courses this month</p>
                      <p className="text-xs text-gray-500">Current: {user.goals.coursesPerMonth.current}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="mr-3">
                      {user.goals.hoursPerWeek.current >= user.goals.hoursPerWeek.target ? (
                        <CheckCircle size={18} className="text-green-500" />
                      ) : (
                        <AlertCircle size={18} className="text-yellow-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">Study {user.goals.hoursPerWeek.target} hours per week</p>
                      <p className="text-xs text-gray-500">Current: {user.goals.hoursPerWeek.current} hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Achievements</h3>
                <div className="space-y-3">
                  {user.achievements.length > 0 ? (
                    user.achievements.slice(0, 2).map((achievement, index) => (
                      <div key={index} className="flex items-center">
                        <div className="mr-3 text-yellow-500">
                          <Medal size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">{achievement.title}</p>
                          <p className="text-xs text-gray-500">{achievement.date}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm italic">Complete courses to earn achievements.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Courses */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">My Courses</h2>
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'in-progress'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('in-progress')}
              >
                In Progress
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'completed'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('completed')}
              >
                Completed
              </button>
            </div>
          </div>

          {activeTab === 'in-progress' && (
            <>
              {inProgressCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {inProgressCourses.map((course) => (
                    <CourseCard key={course!.id} course={course!} showProgress={true} progress={Math.floor(Math.random() * 80) + 10} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">You don't have any courses in progress.</p>
                  <Link
                    to="/catalog"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Browse courses to get started <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              )}
            </>
          )}

          {activeTab === 'completed' && (
            <>
              {completedCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedCourses.map((course) => (
                    <CourseCard key={course!.id} course={course!} showProgress={true} progress={100} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">You haven't completed any courses yet.</p>
                  <Link
                    to="/catalog"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Browse courses to get started <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              )}
            </>
          )}
        </div>

        {/* Recommended Courses */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recommended For You</h2>
            <Link
              to="/catalog"
              className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
            >
              View all <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;