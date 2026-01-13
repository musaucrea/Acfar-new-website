
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import ResourceSearch from './components/ResourceSearch';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <div className="gradient-bg" />
      
      {/* Decorative Orbs - softer for light theme */}
      <div className="fixed top-[-5%] left-[-5%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-amber-50/50 rounded-full blur-[100px] pointer-events-none" />

      <Navbar onNavigate={setActiveSection} activeSection={activeSection} />

      <main className="flex-grow pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        {activeSection === 'home' && (
          <div className="space-y-20">
            <Hero />
            <FeatureGrid />
            <ResourceSearch />
            
            {/* Mission Statement Section */}
            <section className="glass-card rounded-[2.5rem] p-10 md:p-16 text-center max-w-4xl mx-auto border-emerald-100">
              <h2 className="text-3xl font-extrabold mb-6 text-emerald-900">YOU CAN TOUCH AND TRANSFORM LIVES!</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Join hands with us as we seek to fulfill Jesus’ Great Commission by raising up not just converts, 
                but disciples who can confidently <span className="text-emerald-700 font-bold italic">“Test everything. Hold on to the good. [and] Avoid every kind of evil”</span> 
                (1 Thessalonians 5:21–22).
              </p>
              <button 
                onClick={() => setActiveSection('donate')}
                className="bg-acfar-green hover:bg-emerald-900 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-emerald-200"
              >
                Partner Financially
              </button>
            </section>
          </div>
        )}

        {activeSection === 'about' && (
          <section className="glass-card rounded-[2.5rem] p-12 space-y-8 border-emerald-100">
            <h1 className="text-4xl font-black text-emerald-950">About ACFAR</h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              The Africa Centre for Apologetics Research (ACFAR) is dedicated to equipping the African church 
              with the tools necessary for biblical discernment and the defense of the faith once for all 
              delivered to the saints.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="p-8 border border-emerald-100 rounded-3xl bg-white/50">
                <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                  <i className="fas fa-eye text-amber-500"></i> Our Vision
                </h3>
                <p className="text-slate-600">To see a church in Africa that is rooted in the Word, discerning in spirit, and bold in its witness for Christ.</p>
              </div>
              <div className="p-8 border border-emerald-100 rounded-3xl bg-white/50">
                <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                  <i className="fas fa-bullseye text-amber-500"></i> Our Mission
                </h3>
                <p className="text-slate-600">To research religious groups, produce resources for discernment, and train leaders across the continent.</p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'donate' && (
          <section className="glass-card rounded-[2.5rem] p-12 text-center max-w-4xl mx-auto space-y-10 border-emerald-100">
            <h1 className="text-4xl font-black text-emerald-950">Support Our Strategic Work</h1>
            <p className="text-xl text-slate-600">
              Your financial partnership allows us to provide critical resources to pastors, students, and women across Africa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-10 glass-card rounded-3xl border-amber-200 border-2">
                <h2 className="text-2xl font-extrabold mb-4 text-emerald-900">Monthly Partner</h2>
                <p className="text-slate-500 mb-8">Commit to a regular gift to sustain our ongoing research and outreach projects.</p>
                <button className="w-full bg-amber-500 text-emerald-950 font-black py-4 rounded-2xl hover:bg-amber-400 transition-all shadow-lg shadow-amber-200">Get Started</button>
              </div>
              <div className="p-10 glass-card rounded-3xl border-emerald-100 border-2">
                <h2 className="text-2xl font-extrabold mb-4 text-emerald-900">One-Time Gift</h2>
                <p className="text-slate-500 mb-8">Support a specific project or outreach with a single, high-impact contribution.</p>
                <button className="w-full bg-acfar-green text-white font-black py-4 rounded-2xl hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-200">Donate Now</button>
              </div>
            </div>
          </section>
        )}

        {(activeSection !== 'home' && activeSection !== 'about' && activeSection !== 'donate') && (
           <div className="text-center py-24 glass-card rounded-[2.5rem] border-emerald-100">
             <i className="fas fa-hammer text-5xl text-emerald-200 mb-6"></i>
             <h2 className="text-3xl font-black text-emerald-950 mb-4 capitalize">{activeSection}</h2>
             <p className="text-slate-500 max-w-md mx-auto">This section is being updated with our new light-theme design. Check back with us soon!</p>
             <button onClick={() => setActiveSection('home')} className="mt-8 text-emerald-700 font-bold hover:underline">Return Home</button>
           </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
