import React from 'react';
import { Star } from 'lucide-react';

interface UserProfileProps {
  name: string;
  avatar: string;
  skills: string[];
  rating: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, avatar, skills, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <div className="flex items-center mt-1">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-700">{rating}</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-500">Skills</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;