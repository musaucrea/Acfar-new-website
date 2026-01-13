
import React from 'react';

const features = [
  {
    title: 'Pastors on Guard',
    tagline: 'Equipping Shepherds',
    description: 'Providing spiritual leaders with the knowledge to identify and address theological errors and destructive cults.',
    icon: 'fa-shield-halved',
    color: 'from-emerald-50 to-white',
    borderColor: 'border-emerald-100',
    iconColor: 'text-emerald-700'
  },
  {
    title: 'Test B4U Trust',
    tagline: 'Equipping Students',
    description: 'Helping the younger generation navigate the marketplace of ideas with a solid scriptural foundation.',
    icon: 'fa-graduation-cap',
    color: 'from-blue-50 to-white',
    borderColor: 'border-blue-100',
    iconColor: 'text-blue-700'
  },
  {
    title: 'Project Priscilla',
    tagline: 'Equipping Women',
    description: 'Empowering women to grow in wisdom and doctrinal clarity, fostering health in families and churches.',
    icon: 'fa-gem',
    color: 'from-amber-50 to-white',
    borderColor: 'border-amber-100',
    iconColor: 'text-amber-600'
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <div 
          key={idx}
          className={`group glass-card rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-3 flex flex-col h-full bg-gradient-to-br ${feature.color} ${feature.borderColor} border-2`}
        >
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
            <i className={`fas ${feature.icon} text-3xl ${feature.iconColor}`}></i>
          </div>
          <h3 className="text-2xl font-black text-emerald-950 mb-3">{feature.title}</h3>
          <p className="text-emerald-600 font-bold mb-5 text-xs uppercase tracking-widest">{feature.tagline}</p>
          <p className="text-slate-600 leading-relaxed mb-10 flex-grow text-sm">
            {feature.description}
          </p>
          <button className="w-full py-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-emerald-300 hover:text-emerald-800 transition-all font-bold text-slate-500 text-sm">
            View Outreach
          </button>
        </div>
      ))}
    </section>
  );
};

export default FeatureGrid;
