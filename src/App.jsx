
import React, { useState, useEffect } from 'react';
import { Cloud, Droplets, Wind, CloudRain, Sun, Sunrise, Sunset, RefreshCw, Search, Mic, MapPin, BookOpen, Users, Sprout, Home } from 'lucide-react';

export default function AgriCultureApp() {
  const [currentDate, setCurrentDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const updateDate = () => {
      const options = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
      const now = new Date();
      setCurrentDate(now.toLocaleDateString('en-US', options));
    };              
    updateDate();
  }, []);

  const weatherStats = [
    { icon: <Sun className="w-6 h-6" />, value: '+22°C', label: 'Soil temp' },
    { icon: <Droplets className="w-6 h-6" />, value: '59%', label: 'Humidity' },
    { icon: <Wind className="w-6 h-6" />, value: '6 m/s', label: 'Wind' },
    { icon: <CloudRain className="w-6 h-6" />, value: '0 mm', label: 'Precipitation' }
  ];

  const quickStats = [
    { value: '120m²', label: 'Total Area' },
    { value: '24', label: 'Active Plants' },
    { value: '91%', label: 'Avg. Health' }
  ];

  const culturalPractices = [
    { icon: '🌾', title: 'Crop Rotation', desc: 'Traditional 3-field system practices' },
    { icon: '🌱', title: 'Seed Saving', desc: 'Ancestral seed preservation methods' },
    { icon: '🌙', title: 'Moon Planting', desc: 'Lunar calendar farming guide' },
    { icon: '💧', title: 'Water Wisdom', desc: 'Traditional irrigation techniques' }
  ];

  const seasonalCrops = [
    { icon: '🌽', title: 'Corn', desc: 'Plant after last frost, harvest in 70-90 days' },
    { icon: '🍇', title: 'Grapes', desc: 'Best harvest Sept-Oct, pruning in winter' },
    { icon: '🥔', title: 'Potato', desc: 'Plant in spring, harvest when leaves yellow' },
    { icon: '🫒', title: 'Olive', desc: 'Harvest Nov-Jan, traditional press methods' }
  ];

  const navigationItems = [
    { id: 'home', icon: <Home className="w-6 h-6" />, label: 'Home' },
    { id: 'wiki', icon: <BookOpen className="w-6 h-6" />, label: 'Wiki' },
    { id: 'community', icon: <Users className="w-6 h-6" />, label: 'Community' },
    { id: 'garden', icon: <Sprout className="w-6 h-6" />, label: 'My Garden' }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-green-50 to-amber-50">
      <div className="max-w-md mx-auto bg-gradient-to-b from-green-700 to-green-800 rounded-t-[2rem] md:rounded-t-none shadow-2xl overflow-hidden">
        {/* Header Section */}
        <header className="px-6 pt-10 pb-6 text-white">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Hello, <span className="font-black">Farmers</span>
              </h1>
              <p className="text-green-100 text-sm mt-1 font-medium opacity-90">
                {currentDate}
              </p>
            </div>
            <button 
              className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:rotate-180 duration-500"
              aria-label="Refresh"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search farming practices, crops, traditions..."
              className="w-full py-3.5 pl-12 pr-12 bg-white/20 backdrop-blur-md rounded-full text-white placeholder-white/70 border-none outline-none focus:ring-2 focus:ring-white/40 transition-all"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2" aria-label="Voice search">
              <Mic className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="bg-stone-50 rounded-t-[2rem] px-6 pt-6 pb-28 min-h-screen">
          {/* Weather Card */}
          <div className="bg-white rounded-2xl p-5 shadow-lg mb-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Chianti Hills</span>
            </div>

            <div className="flex justify-between items-center mb-5">
              <div className="text-5xl font-black text-gray-800">+16°C</div>
              <Cloud className="w-16 h-16 text-gray-400" />
            </div>

            <div className="grid grid-cols-4 gap-4 mb-5">
              {weatherStats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-gray-500 mb-1 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-base font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Sun Times */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <div className="text-sm text-gray-600">
                <div className="font-bold text-gray-800">5:25 am</div>
                <div className="flex items-center gap-1 mt-1">
                  <Sunrise className="w-4 h-4" />
                  <span>Sunrise</span>
                </div>
              </div>
              <div className="flex-1 mx-4 relative h-10">
                <div className="absolute inset-x-0 bottom-2 h-0.5 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 rounded-full" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50" />
              </div>
              <div className="text-sm text-gray-600 text-right">
                <div className="font-bold text-gray-800">8:04 pm</div>
                <div className="flex items-center gap-1 mt-1 justify-end">
                  <Sunset className="w-4 h-4" />
                  <span>Sunset</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {quickStats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-2xl font-black text-green-700 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Cultural Farming Practices */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-black text-gray-800">Cultural Farming Practices</h2>
            <button className="text-sm text-green-700 font-semibold hover:text-green-800 transition-colors">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {culturalPractices.map((practice, idx) => (
              <button
                key={idx}
                className="bg-white rounded-2xl p-4 shadow-md text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center text-3xl mb-3">
                  {practice.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm">{practice.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{practice.desc}</p>
              </button>
            ))}
          </div>

          {/* Featured Knowledge */}
          <div className="mb-4">
            <h2 className="text-xl font-black text-gray-800">Featured Knowledge</h2>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8 hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=400&fit=crop"
              alt="Corn field"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                CROP KNOWLEDGE
              </span>
              <h3 className="font-black text-gray-800 mb-2 text-lg leading-snug">
                The Three Sisters: Companion Planting Wisdom
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Learn about the traditional Indigenous practice of growing corn, beans, and squash together for optimal yields and soil health.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  Traditional Practice
                </span>
                <span>⏱️ 10 min read</span>
              </div>
            </div>
          </div>

          {/* Seasonal Crops */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-black text-gray-800">Seasonal Crops</h2>
            <button className="text-sm text-green-700 font-semibold hover:text-green-800 transition-colors">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {seasonalCrops.map((crop, idx) => (
              <button
                key={idx}
                className="bg-white rounded-2xl p-4 shadow-md text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-400 rounded-xl flex items-center justify-center text-3xl mb-3">
                  {crop.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm">{crop.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{crop.desc}</p>
              </button>
            ))}
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-gray-900 px-6 py-4 rounded-t-[2rem] shadow-2xl">
          <div className="flex justify-around items-center">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 transition-all ${
                  activeTab === item.id
                    ? 'text-green-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {item.icon}
                <span className="text-xs font-semibold">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>

    </div>
       </>
  );
}


