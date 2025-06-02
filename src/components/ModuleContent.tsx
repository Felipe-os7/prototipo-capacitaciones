import React from 'react';
import { Module } from '../types/Course';
import { Download, FileText } from 'lucide-react';

interface ModuleContentProps {
  module: Module;
}

const ModuleContent: React.FC<ModuleContentProps> = ({ module }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h2>
        <p className="text-gray-600">{module.description}</p>
      </div>
      
      <div className="p-6">
        {/* Training Content - Using images instead of videos */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Training Content</h3>
          
          <div className="mb-6">
            <img 
              src={module.content.imageUrl} 
              alt={`${module.title} training visual`}
              className="w-full rounded-lg shadow-sm mb-4"
            />
            <p className="text-gray-700">{module.content.text}</p>
          </div>
          
          {module.content.sections && module.content.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-md font-medium text-gray-900 mb-2">{section.title}</h4>
              <p className="text-gray-700 mb-4">{section.text}</p>
              
              {section.imageUrl && (
                <img 
                  src={section.imageUrl} 
                  alt={section.title}
                  className="w-full rounded-lg shadow-sm mb-4"
                />
              )}
              
              {section.bulletPoints && (
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {section.bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        {/* Resources */}
        {module.resources && module.resources.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Resources</h3>
            <div className="space-y-3">
              {module.resources.map((resource, index) => (
                <div key={index} className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors duration-200">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    {resource.type === 'pdf' ? (
                      <FileText size={18} className="text-blue-600" />
                    ) : (
                      <Download size={18} className="text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{resource.title}</h4>
                    <p className="text-xs text-gray-500">{resource.type.toUpperCase()} • {resource.size}</p>
                  </div>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      // In a real app, this would download the file
                      alert(`Downloading ${resource.title}`);
                    }}
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Quiz or Assessment */}
        {module.quiz && (
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Knowledge Check</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-900 mb-3">{module.quiz.question}</p>
              <div className="space-y-2">
                {module.quiz.options.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      id={`option-${index}`}
                      name="quiz-answer"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label
                      htmlFor={`option-${index}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => {
                    // In a real app, this would check the answer
                    alert('Quiz submitted successfully!');
                  }}
                >
                  Submit Answer
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Module Completion Button */}
        <div className="text-center">
          <button
            className={`px-6 py-2 rounded-md text-white font-medium ${
              module.completed 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-blue-600 hover:bg-blue-700'
            } transition-colors duration-300`}
            onClick={() => {
              // In a real app, this would mark the module as completed
              alert(`Module "${module.title}" marked as completed!`);
            }}
          >
            {module.completed ? 'Completed' : 'Mark as Completed'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;