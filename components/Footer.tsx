
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-nav border-t-0 mt-auto bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-900 rounded-xl flex items-center justify-center text-amber-400 shadow-md">
                <i className="fas fa-church text-lg"></i>
              </div>
              <span className="text-2xl font-black text-emerald-950 tracking-tighter">ACFAR</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Equipping the church in Africa to test the spirits and contend for the faith once for all delivered to the saints.
            </p>
          </div>
          
          <div>
            <h4 className="text-emerald-950 font-black mb-8 text-xs uppercase tracking-widest">Research</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Digital Library</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Biblical Tracts</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Video Archives</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Group Database</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-emerald-950 font-black mb-8 text-xs uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Partner with us</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Contact Center</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Prayer Teams</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Africa Outreach</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-emerald-950 font-black mb-8 text-xs uppercase tracking-widest">Social Media</h4>
            <div className="flex space-x-3">
              <a href="#" className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-all shadow-sm">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-all shadow-sm">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-all shadow-sm">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100">
          <p className="text-[10px] text-slate-400 leading-relaxed mb-8 uppercase tracking-[0.2em] font-black text-center md:text-left">
            <span className="text-amber-600">IMPORTANT:</span> The inclusion of materials about a particular group on this website does not necessarily mean that the group is considered a destructive cult. Research and discernment require careful biblical application.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
              &copy; 2026 The Africa Centre for Apologetics Research (ACFAR).
            </p>
            <div className="flex gap-8 text-[11px] text-emerald-900 font-black uppercase tracking-widest">
              <a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Usage Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
