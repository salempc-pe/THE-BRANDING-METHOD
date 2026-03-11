import { useStore } from '../store/useStore';
import { bookContent } from '../data/content';
import { BookOpen, CheckCircle2, Trophy, Navigation, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ToolMap() {
  const progress = useStore(state => state.progress);
  const globalProgress = useStore(state => state.getGlobalProgress());
  
  return (
    <div className="space-y-24 max-w-7xl mx-auto animation-fade-in px-4 py-8">
      {/* Hero Map Header */}
      <div className="text-center space-y-8 flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 bg-neutral-900 px-4 py-2 rounded-xl text-xs font-black text-rose-500 uppercase tracking-[0.2em] shadow-2xl border border-white/5 animate-in fade-in slide-in-from-bottom duration-500">
           <Navigation size={14} fill="currentColor" />
           Estrategia Maestra
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-900 leading-[0.8] animate-in fade-in slide-in-from-bottom duration-700 delay-100 break-words max-w-full overflow-hidden">
           EL MAPA <span className="text-rose-500 block italic mt-2">DE HERRAMIENTAS</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-500 font-medium max-w-2xl leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
           Visualiza tu camino hacia una marca competitiva. 5 Drivers, 25 herramientas estratégicas para dominar el mercado.
        </p>

        {/* Big Progress Circle Area/Card */}
        <div className="w-full max-w-2xl bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border-2 border-neutral-50 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 group hover:border-rose-500/20 transition-all duration-500 animate-in zoom-in duration-700 delay-300">
           <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90 md:w-32 md:h-32">
                 <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-neutral-50" />
                 <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="282.6" strokeDashoffset={282.6 - (282.6 * globalProgress) / 100} className="text-rose-500 transition-all duration-1000 ease-out" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-lg md:text-2xl font-black text-neutral-900">{globalProgress}%</span>
              </div>
           </div>
           <div className="flex-1 space-y-4 text-left">
              <h3 className="text-3xl font-black text-neutral-900 tracking-tight leading-none group-hover:text-rose-600 transition-colors">Progreso de la Metodología</h3>
              <p className="text-neutral-500 font-medium text-lg leading-relaxed">Has completado <span className="text-neutral-900 font-black">{progress.filter(p => p.completed).length}</span> de las 25 herramientas clave para tu marca.</p>
              <div className="flex items-center space-x-3 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl text-xs font-bold w-fit border border-emerald-100">
                 <Trophy size={14} />
                 <span className="uppercase tracking-widest">Hacia la maestría</span>
              </div>
           </div>
        </div>
      </div>

      {/* Main Track Grid */}
      <div className="relative border-l-4 border-neutral-100 ml-4 md:ml-12 pl-12 space-y-32 py-12">
        {bookContent.map((driver) => (
          <div key={driver.id} className="relative group/driver">
            {/* Driver Marker */}
            <div className="absolute -left-[76px] top-0 w-12 h-12 bg-neutral-900 text-white rounded-[1.2rem] flex items-center justify-center font-black text-xl shadow-2xl ring-8 ring-white group-hover/driver:bg-rose-600 group-hover/driver:scale-110 transition-all duration-500">
              {driver.id}
            </div>

            <div className="space-y-12">
              <div className="text-left space-y-2">
                <span className="text-xs font-black text-rose-500 uppercase tracking-widest block mb-2">Pilar de Marca 0{driver.id}</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter group-hover/driver:translate-x-2 transition-transform duration-500 break-words whitespace-normal">{driver.name}</h2>
                <p className="text-xl text-neutral-500 font-medium max-w-xl border-l-4 border-neutral-100 pl-6 py-2">{driver.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {driver.tools.map((tool, index) => {
                  const isCompleted = progress.some(p => p.driverId === driver.id && p.toolId === tool.id && p.completed);
                  return (
                    <Link 
                      key={tool.id}
                      to={`/driver/${driver.id}/tool/${tool.id}`}
                      className={`group/tool p-6 rounded-[2rem] border-2 transition-all duration-500 flex flex-col justify-between h-48 relative overflow-hidden ${isCompleted ? 'bg-rose-50/50 border-rose-200 shadow-xl shadow-rose-500/10' : 'bg-white border-neutral-100 hover:border-rose-500/30 hover:shadow-2xl hover:-translate-y-2'}`}
                    >
                      <div className="space-y-3 relative z-10 flex flex-col items-start transition-transform group-hover/tool:-translate-y-1">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isCompleted ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30' : 'bg-neutral-50 text-neutral-300 group-hover/tool:bg-rose-100 group-hover/tool:text-rose-500 group-hover/tool:rotate-6'}`}>
                          {isCompleted ? <CheckCircle2 size={18} strokeWidth={3} /> : <span className="text-sm font-black">{index + 1}</span>}
                        </div>
                        <span className={`font-black text-sm text-left leading-tight tracking-tight ${isCompleted ? 'text-rose-900' : 'text-neutral-900'}`}>{tool.name}</span>
                      </div>

                      <div className="relative z-10 flex items-center text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover/tool:text-rose-600 transition-colors">
                        {isCompleted ? 'Completado' : 'Comenzar'} <ArrowRight size={12} className="ml-1 transform group-hover/tool:translate-x-1 transition-transform" />
                      </div>

                      {/* Subtle Pattern Background */}
                      <div className="absolute -bottom-6 -right-6 text-neutral-50 opacity-0 group-hover/tool:opacity-5 transition-opacity">
                         <BookOpen size={120} strokeWidth={3} />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Encouragement */}
      <div className="pt-24 pb-12 flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
         <div className="w-24 h-24 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center shadow-inner">
            <Trophy size={48} />
         </div>
         <div className="space-y-2">
            <h3 className="text-3xl font-black text-neutral-900 tracking-tighter italic">CADA PASO CUENTA</h3>
            <p className="text-neutral-400 font-bold uppercase tracking-widest text-xs">Completa el mapa para desbloquear todo el poder de tu marca</p>
         </div>
      </div>
    </div>
  );
}
