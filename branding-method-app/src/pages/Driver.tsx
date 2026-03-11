import { useParams, Link } from 'react-router-dom';
import { bookContent } from '../data/content';
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Trophy } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Driver() {
  const { id } = useParams();
  const driverId = parseInt(id || '1', 10);
  const driver = bookContent.find(d => d.id === driverId);
  const progress = useStore(state => state.progress);

  if (!driver) return <div className="p-8 text-center text-rose-500 font-bold underline decoration-wavy">Driver no encontrado</div>;

  const driverProgress = progress.filter(p => p.driverId === driverId && p.completed);
  const percent = Math.round((driverProgress.length / driver.tools.length) * 100) || 0;

  return (
    <div className="space-y-12 max-w-4xl mx-auto animation-fade-in px-4">
      {/* Header */}
      <div className="space-y-6">
        <Link to="/" className="inline-flex items-center text-sm font-bold text-neutral-400 hover:text-rose-500 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Volver al Inicio
        </Link>
        
        <div className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-rose-500 rounded-full"></div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 leading-none break-words max-w-full overflow-hidden">
            <span className="text-rose-600 block text-xs font-black uppercase tracking-[0.3em] mb-4">Driver {driver.id}</span>
            {driver.name}
          </h1>
        </div>
        
        <p className="text-xl text-neutral-500 font-medium max-w-2xl">{driver.description}</p>

        {/* Progress Card */}
        <div className="bg-neutral-900 rounded-3xl p-6 text-white flex items-center justify-between shadow-xl">
           <div className="space-y-1">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Progreso del Módulo</span>
              <div className="text-3xl font-black tracking-tighter">{percent}%</div>
           </div>
           <div className="flex-1 mx-8 h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-rose-500 transition-all duration-1000 ease-out"
                style={{ width: `${percent}%` }}
              ></div>
           </div>
           <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
              <Trophy size={24} className={percent === 100 ? 'text-rose-500' : 'text-white/20'} />
           </div>
        </div>
      </div>

      {/* Tools List */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
           <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Herramientas (Tools)</h2>
           <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{driver.tools.length} ejercicios</span>
        </div>
        
        <div className="grid gap-4">
          {driver.tools.map((tool, index) => {
            const isCompleted = progress.some(p => p.driverId === driverId && p.toolId === tool.id && p.completed);
            
            return (
              <Link 
                key={tool.id} 
                to={`/driver/${driverId}/tool/${tool.id}`}
                className={`group flex items-center justify-between p-6 rounded-[1.5rem] border transition-all duration-300 ${isCompleted ? 'bg-rose-50/30 border-rose-100 hover:border-rose-300 transform hover:-translate-y-1' : 'bg-white border-neutral-100 hover:shadow-xl hover:border-rose-200 transform hover:-translate-y-1'}`}
              >
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${isCompleted ? 'bg-rose-500 text-white' : 'bg-neutral-50 text-neutral-300 group-hover:bg-rose-100 group-hover:text-rose-500'}`}>
                       {isCompleted ? <CheckCircle2 size={24} strokeWidth={3} /> : <span className="text-xl font-black">{index + 1}</span>}
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className={`text-xl font-black leading-tight ${isCompleted ? 'text-rose-900' : 'text-neutral-900'}`}>{tool.name}</h3>
                    <p className="text-sm text-neutral-500 font-medium mt-1 group-hover:text-neutral-600 line-clamp-1">{tool.description}</p>
                  </div>
                </div>
                <div className={`hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-all ${isCompleted ? 'bg-rose-100 text-rose-600' : 'bg-neutral-50 text-neutral-300 group-hover:bg-rose-500 group-hover:text-white'}`}>
                  <ArrowRight size={20} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
