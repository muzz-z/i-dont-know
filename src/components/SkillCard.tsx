import React from 'react';
import { Star } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  teacher: string;
  rating: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, teacher, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 p-4 sm:p-6 border border-gray-100">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="p-2 bg-indigo-50 rounded-lg relative">
          <div className="pulse-ring text-indigo-200 absolute inset-0"></div>
          {icon}
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm sm:text-base text-gray-500">by {teacher}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
          <span className="text-sm sm:text-base text-gray-700 font-medium">{rating}</span>
        </div>
        <button className="text-sm sm:text-base text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-300 flex items-center space-x-1 group">
          <span>Learn More</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  );
};

export default SkillCard;