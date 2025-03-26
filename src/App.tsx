import React, { useState, useEffect } from 'react';
import { BookOpen, Code, Users, Star, ChefHat, Languages, Search, Facebook, Twitter, Instagram, Youtube, Mail, ArrowRight, Sparkles, Menu, X } from 'lucide-react';
import SkillCard from './components/SkillCard';
import UserProfile from './components/UserProfile';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredSkills = [
    { id: 1, title: 'Web Development', icon: <Code className="w-6 h-6" />, teacher: 'Sarah Chen', rating: 4.8, category: 'tech' },
    { id: 2, title: 'Spanish Language', icon: <Languages className="w-6 h-6" />, teacher: 'Miguel Rodriguez', rating: 4.9, category: 'language' },
    { id: 3, title: 'Gourmet Cooking', icon: <ChefHat className="w-6 h-6" />, teacher: 'Julia Bennett', rating: 4.7, category: 'culinary' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'tech', name: 'Technology' },
    { id: 'language', name: 'Languages' },
    { id: 'culinary', name: 'Culinary Arts' },
  ];

  const filteredSkills = featuredSkills.filter(skill => 
    (activeCategory === 'all' || skill.category === activeCategory) &&
    (searchQuery === '' || skill.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 hover-trigger">
              <BookOpen className="w-8 h-8 text-indigo-600 animate-float" />
              <span className="text-2xl font-bold text-gray-900">SkillSwap</span>
              <span className="hover-target bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full ml-2">
                Beta
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Find Skills</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">My Skills</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Messages</a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-4 space-y-4">
              <a href="#" className="block text-gray-600 hover:text-indigo-600 transition-colors duration-300">Find Skills</a>
              <a href="#" className="block text-gray-600 hover:text-indigo-600 transition-colors duration-300">My Skills</a>
              <a href="#" className="block text-gray-600 hover:text-indigo-600 transition-colors duration-300">Messages</a>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center relative">
          <div className="absolute -top-4 right-1/4 text-indigo-600 animate-float delay-100 hidden sm:block">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute -top-8 left-1/4 text-purple-600 animate-float delay-300 hidden sm:block">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Learn Anything. <span className="text-indigo-600">Teach Everything.</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join the community where skills are currency. Exchange your expertise with others and grow together.
          </p>
          <div className="mt-8 flex justify-center px-4">
            <div className="relative group w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-indigo-600 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search for skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 group-hover:border-indigo-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Skills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
          <h2 className="text-2xl font-bold text-gray-900">Featured Skills</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-indigo-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredSkills.map(skill => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">10,000+</p>
              <p className="mt-1 text-gray-500">Active Users</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <BookOpen className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">500+</p>
              <p className="mt-1 text-gray-500">Skills Available</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <Star className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">50,000+</p>
              <p className="mt-1 text-gray-500">Successful Exchanges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-indigo-400" />
                <span className="text-2xl font-bold">SkillSwap</span>
              </div>
              <p className="mt-4 text-gray-400">
                Empowering people to share knowledge and learn from each other through skill exchange.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Community Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Trust & Safety</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with the latest skills and community news.</p>
              <div className="flex group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-lg group-hover:bg-indigo-700 transition-all duration-300 flex items-center transform group-hover:scale-105">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">&copy; 2025 SkillSwap. All rights reserved.</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
      </button>
    </div>
  );
}

export default App;