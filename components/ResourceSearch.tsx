
import React, { useState } from 'react';
import { searchAssistant } from '../geminiService';

const ResourceSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResult('');
    try {
      const response = await searchAssistant(query);
      setResult(response);
    } catch (err) {
      setResult("Sorry, the discernment assistant is having trouble connecting.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="glass-card rounded-[2.5rem] p-10 md:p-16 border-emerald-50 shadow-inner">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-emerald-950 mb-4">Discernment Assistant</h2>
          <p className="text-slate-500 font-medium">Search the ACFAR repository or ask our AI for biblical perspectives.</p>
        </div>

        <form onSubmit={handleSearch} className="relative mb-12 group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about 'Prosperity Gospel', 'Tracts', or specific movements..."
            className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] py-5 px-8 pl-16 text-emerald-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:bg-white placeholder-slate-400 transition-all shadow-sm"
          />
          <i className="fas fa-search absolute left-6 top-1/2 -translate-y-1/2 text-emerald-800/40 group-focus-within:text-emerald-700"></i>
          <button
            type="submit"
            disabled={loading}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-acfar-green hover:bg-emerald-900 text-white px-8 py-3 rounded-2xl text-sm font-black transition-all disabled:opacity-50 shadow-lg shadow-emerald-200"
          >
            {loading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Ask ACFAR'}
          </button>
        </form>

        {loading && (
          <div className="space-y-4 animate-pulse">
            <div className="h-5 bg-emerald-50 rounded-full w-3/4"></div>
            <div className="h-5 bg-emerald-50 rounded-full w-full"></div>
            <div className="h-5 bg-emerald-50 rounded-full w-5/6"></div>
          </div>
        )}

        {result && (
          <div className="glass-card rounded-3xl p-8 bg-emerald-50/30 border border-emerald-100 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center shadow-lg">
                <i className="fas fa-robot text-white text-sm"></i>
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-800 block">AI Discernment Insight</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Powered by Gemini & ACFAR Data</span>
              </div>
            </div>
            <div className="prose prose-emerald max-w-none text-emerald-950 leading-relaxed whitespace-pre-wrap text-[15px] font-medium">
              {result}
            </div>
            <div className="mt-10 pt-6 border-t border-emerald-100 flex flex-wrap gap-4">
              <button className="text-xs text-emerald-800 bg-white border border-emerald-100 px-4 py-2 rounded-full hover:bg-emerald-800 hover:text-white transition-all font-black uppercase tracking-wider">
                <i className="fas fa-file-pdf mr-2"></i> Access Tract
              </button>
              <button className="text-xs text-amber-600 bg-white border border-amber-100 px-4 py-2 rounded-full hover:bg-amber-500 hover:text-white transition-all font-black uppercase tracking-wider">
                <i className="fas fa-share-nodes mr-2"></i> Share Research
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceSearch;
