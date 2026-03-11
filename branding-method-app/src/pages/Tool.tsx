import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { bookContent } from '../data/content';
import { toolTheories } from '../data/theoryData';
import { useStore } from '../store/useStore';
import { ArrowLeft, Check, Save, BookOpen } from 'lucide-react';

export function Tool() {
  const { driverId, toolId } = useParams();
  const dId = parseInt(driverId || '1', 10);
  
  const driver = bookContent.find(d => d.id === dId);
  const tool = driver?.tools.find(t => t.id === toolId);
  
  const { markToolComplete, getToolData } = useStore();
  const existingData = getToolData(dId, toolId || '') || {};
  
  const [formData, setFormData] = useState<Record<string, string>>(existingData);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setFormData(getToolData(dId, toolId || '') || {});
  }, [dId, toolId]);

  if (!driver || !tool) return <div className="p-8 text-center text-rose-500 font-bold">Tool no encontrada</div>;

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setIsSaved(false);
  };

  const handleSave = () => {
    markToolComplete(dId, tool.id, formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPlayContent = () => {
    switch (tool.playType) {
      case 'matrix':
      case 'pyramid':
      case 'territory':
      case 'flower':
      case 'board':
      case 'square':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tool.playQuestions.map((q, idx) => (
              <div key={idx} className="space-y-2">
                <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider">{q}</label>
                <textarea 
                  value={formData[q] || ''}
                  onChange={(e) => handleChange(q, e.target.value)}
                  className="w-full p-4 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all bg-neutral-50 min-h-[120px] resize-none"
                  placeholder="Escribe aquí..."
                />
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-6 text-left">
            {tool.playQuestions.map((q, idx) => (
              <div key={idx} className="space-y-2">
                <label className="text-lg font-bold text-neutral-800 block">{q}</label>
                <input 
                  type="text"
                  value={formData[q] || ''}
                  onChange={(e) => handleChange(q, e.target.value)}
                  className="w-full p-4 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all bg-neutral-50"
                  placeholder="Tu respuesta..."
                />
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-24 px-4 animation-fade-in">
      {/* Navigation */}
      <nav className="flex items-center justify-between">
        <Link to={`/driver/${dId}`} className="inline-flex items-center text-sm font-bold text-neutral-500 hover:text-rose-600 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Volver a {driver.name}
        </Link>
        <div className="text-xs font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 uppercase tracking-widest">
          Interactivo
        </div>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-black text-white bg-neutral-900 px-2 py-1 rounded">D{dId}</span>
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-tighter">{driver.name}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">{tool.name}</h1>
        <p className="text-xl text-neutral-500 font-medium">{tool.description}</p>
      </header>

      {/* Theory Section */}
      <section className="bg-rose-50 rounded-[2rem] p-8 md:p-12 border border-rose-100 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-rose-500 group-hover:opacity-10 transition-opacity">
          <BookOpen size={120} />
        </div>
        <div className="relative z-10 space-y-6 text-left">
          <h2 className="text-2xl font-black flex items-center text-rose-900">
            <span className="w-8 h-8 bg-rose-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm shadow-md">01</span>
            Aprende la Teoría
          </h2>
          <div className="space-y-4 max-w-3xl">
            {toolTheories[tool.id]?.map((paragraph, idx) => (
              <p key={idx} className="text-lg text-rose-950/80 leading-relaxed font-medium text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Tool */}
      <section className="bg-neutral-900 text-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <BookOpen size={120} />
        </div>
        <div className="relative z-10 space-y-8 text-left">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 text-sm">02</span>
            Meet the Tool
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tool.meetQuestions.map((mq, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-neutral-300 font-medium leading-relaxed">{mq}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Play the Tool */}
      <section className="bg-white rounded-[2rem] p-8 md:p-12 border border-neutral-100 shadow-sm space-y-10 text-left">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center text-neutral-900">
            <span className="w-8 h-8 bg-neutral-900 text-white rounded-lg flex items-center justify-center mr-3 text-sm">03</span>
            Play the Tool
          </h2>
          {isSaved && (
            <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 animate-in fade-in zoom-in duration-300">
               <Check size={16} />
               <span className="text-sm font-bold">Guardado</span>
            </div>
          )}
        </div>
        
        {renderPlayContent()}

        <div className="pt-10 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center space-x-2 text-neutral-400">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest">Autoguardado local activo</span>
           </div>
           <button 
              onClick={handleSave}
              className="w-full md:w-auto px-10 py-4 bg-neutral-900 hover:bg-rose-600 text-white font-black rounded-2xl shadow-xl transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-3"
           >
             <Save size={20} />
             <span>FINALIZAR Y GUARDAR</span>
           </button>
        </div>
      </section>
    </div>
  );
}
