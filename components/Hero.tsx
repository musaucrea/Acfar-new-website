
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="text-left animate-fade-in">
          <div className="inline-block px-5 py-2 mb-8 rounded-full glass-card text-emerald-800 text-xs font-black tracking-widest border-emerald-100 bg-emerald-50/50">
            <i className="fas fa-globe-africa mr-2 text-amber-500"></i> DEFENDING THE TRUTH IN AFRICA
          </div>
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tight text-emerald-950 mb-8 leading-[0.9]">
            Contending for <br/>
            <span className="text-emerald-700 italic font-serif">the Faith</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-xl font-medium leading-relaxed mb-10">
            “...once for all delivered to the saints.” ACFAR equips the church in Africa with the tools for biblical discernment and the defense of the gospel.
            <span className="block not-italic text-sm mt-6 font-black text-amber-600 uppercase tracking-[0.4em]">— Jude 3</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#104a32] text-white font-black hover:bg-emerald-900 transition transform hover:scale-105 shadow-2xl shadow-emerald-200">
              Get Involved
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl glass-card text-emerald-900 font-black hover:bg-emerald-50 transition border-emerald-100">
              Explore Resources
            </button>
          </div>
        </div>

        {/* Right Column: Image Collage */}
        <div className="relative hidden lg:block">
          {/* Decorative Back Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-100/50 rounded-full blur-[80px] -z-10"></div>
          
          <div className="relative grid grid-cols-2 gap-4">
            {/* Main Image */}
            <div className="col-span-1 mt-12">
              <div className="glass-card p-2 rounded-[2.5rem] border-emerald-100 shadow-2xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                  alt="African students studying" 
                  className="rounded-[2rem] object-cover h-80 w-full"
                />
              </div>
            </div>
            
            {/* Secondary Images */}
            <div className="col-span-1 space-y-4">
              <div className="glass-card p-2 rounded-[2.5rem] border-emerald-100 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" 
                  alt="African community" 
                  className="rounded-[2rem] object-cover h-48 w-full"
                />
              </div>
              <div className="glass-card p-2 rounded-[2.5rem] border-emerald-100 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800" 
                  alt="Biblical research" 
                  className="rounded-[2rem] object-cover h-48 w-full"
                />
              </div>
            </div>

            {/* Float Overlay Card */}
            <div className="absolute -bottom-6 -left-6 glass-card px-6 py-4 rounded-2xl border-emerald-200 shadow-xl flex items-center gap-4 bg-white/90">
              <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center text-white">
                <i className="fas fa-check"></i>
              </div>
              <div>
                <p className="text-xs font-black text-emerald-950 uppercase tracking-tighter">Verified Research</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Trusted since 2004</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote/Scripture Cards */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
        <div className="p-8 glass-card rounded-3xl border-t-4 border-t-emerald-600">
           <i className="fas fa-dove text-emerald-600 mb-4 text-2xl"></i>
           <p className="text-slate-600 italic leading-relaxed">“Beloved, do not believe every spirit, but test the spirits to see whether they are from God...”</p>
           <p className="mt-4 text-xs font-black text-emerald-800 uppercase tracking-widest">1 John 4:1</p>
        </div>
        <div className="p-8 glass-card rounded-3xl border-t-4 border-t-amber-500">
           <i className="fas fa-magnifying-glass text-amber-500 mb-4 text-2xl"></i>
           <p className="text-slate-600 italic leading-relaxed">“Test everything. Hold on to the good.”</p>
           <p className="mt-4 text-xs font-black text-amber-600 uppercase tracking-widest">1 Thess. 5:21</p>
        </div>
        <div className="p-8 glass-card rounded-3xl border-t-4 border-t-emerald-900">
           <i className="fas fa-shield-halved text-emerald-900 mb-4 text-2xl"></i>
           <p className="text-slate-600 italic leading-relaxed">“Be on your guard; stand firm in the faith; be courageous; be strong.”</p>
           <p className="mt-4 text-xs font-black text-emerald-950 uppercase tracking-widest">1 Cor. 16:13</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
