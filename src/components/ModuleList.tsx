import React from 'react';
import { Lock, CheckCircle, PlayCircle } from 'lucide-react';
import { Module } from '../types/Course';

interface ModuleListProps {
  modules: Module[];
  activeModuleId: string;
  setActiveModuleId: (id: string) => void;
  isEnrolled: boolean;
}

const ModuleList: React.FC<ModuleListProps> = ({ 
  modules, 
  activeModuleId, 
  setActiveModuleId,
  isEnrolled
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">Course Content</h3>
        <p className="text-sm text-gray-600">{modules.length} modules</p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {modules.map((module, index) => (
          <div 
            key={module.id}
            className={`transition-colors duration-300 ${
              activeModuleId === module.id ? 'bg-blue-50' : 'hover:bg-gray-50'
            }`}
          >
            <button
              onClick={() => isEnrolled && setActiveModuleId(module.id)}
              disabled={!isEnrolled}
              className={`w-full text-left p-4 flex items-center ${!isEnrolled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex-shrink-0 mr-3">
                <div className={`flex items-center justify-center w-6 h-6 rounded-full ${
                  activeModuleId === module.id 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {isEnrolled ? (
                    module.completed ? (
                      <CheckCircle size={14} className="text-green-500" />
                    ) : (
                      <PlayCircle size={14} />
                    )
                  ) : (
                    <Lock size={14} />
                  )}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className={`font-medium ${
                    activeModuleId === module.id ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {index + 1}. {module.title}
                  </span>
                  <span className="text-sm text-gray-500">{module.duration}</span>
                </div>
                {module.description && (
                  <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                )}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleList;