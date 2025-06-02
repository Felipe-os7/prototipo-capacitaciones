import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { useCourses } from '../context/CourseContext';
import CourseCard from '../components/CourseCard';

const Catalog: React.FC = () => {
  const { courses, categories } = useCourses();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const results = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || 
                             selectedCategories.some(cat => course.categories.includes(cat));
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredCourses(results);
  }, [searchTerm, selectedCategories, courses]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Catalog</h1>
          <p className="text-gray-600 mb-6">
            Browse our extensive library of professional development courses tailored for your company's needs.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses by title or keyword..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="md:hidden mb-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter size={16} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          <aside className={`${showFilters ? 'block' : 'hidden'} md:block md:w-64 bg-white p-6 rounded-lg shadow-sm h-fit sticky top-24`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              {(selectedCategories.length > 0 || searchTerm) && (
                <button 
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      id={`category-${category}`}
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional filters could go here */}
          </aside>

          {/* Course Grid */}
          <div className="flex-1">
            {/* Active Filters */}
            {(selectedCategories.length > 0 || searchTerm) && (
              <div className="mb-6 flex flex-wrap gap-2 items-center bg-white p-4 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-700">Active filters:</span>
                
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    "{searchTerm}"
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="ml-1 text-blue-500 hover:text-blue-700"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                
                {selectedCategories.map(category => (
                  <span 
                    key={category}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {category}
                    <button 
                      onClick={() => toggleCategory(category)}
                      className="ml-1 text-blue-500 hover:text-blue-700"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Results Count */}
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
              </p>
            </div>

            {/* Courses Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <p className="text-gray-600 mb-2">No courses found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Clear filters and try again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;