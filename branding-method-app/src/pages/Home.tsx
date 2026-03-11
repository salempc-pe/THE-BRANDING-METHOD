import { BookOpen, Target, Sparkles, Navigation, Zap, ArrowRight, Play, Layout as LayoutIcon, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';

const drivers = [
  { id: 1, name: 'The Brand Ego', icon: Target, desc: 'Análisis del consumidor. Entiende quién te compra.', color: 'rose' },
  { id: 2, name: 'The Brand Gang', icon: Zap, desc: 'Fortaleza competitiva. ¿Por qué deberían elegirte a ti?', color: 'amber' },
  { id: 3, name: 'The Brand Essence', icon: Sparkles, desc: 'Plataforma y ADN de marca. Tu propósito y visión.', color: 'emerald' },
  { id: 4, name: 'The Brand Identity', icon: BookOpen, desc: 'Assets e identidad. ¿Cómo comunicas visual y verbalmente?', color: 'indigo' },
  { id: 5, name: 'The Brand Experience', icon: Navigation, desc: 'Activación de marca. Tangibiliza tu promesa.', color: 'violet' },
];

export function Home() {
  const globalProgress = useStore(state => state.getGlobalProgress());
  
  return (
    <div className="space-y-24 py-8 px-4 animation-fade-in">
      {/* Hero Section */}
      <section className="text-center space-y-8 max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 bg-neutral-900 px-4 py-2 rounded-full text-xs font-black text-white shadow-2xl border border-white/10 uppercase tracking-[0.2em] animate-bounce">
           The Branding Method App
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-900 leading-[0.9] text-balance break-words max-w-full overflow-hidden">
          Construye <span className="text-rose-600 italic">Marcas</span> Inolvidables
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-500 font-medium max-w-2xl leading-relaxed text-pretty">
          Domina la metodología de <span className="text-neutral-900 font-bold underline decoration-rose-500/30">Carolina Kairos</span>. 5 Drivers, 25 Herramientas y una sola dirección: el éxito.
        </p>
        
        <div className="pt-6 flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <Link 
            to="/driver/1" 
            className="group flex items-center justify-center space-x-3 px-10 py-5 bg-neutral-900 hover:bg-rose-600 text-white font-black rounded-2xl shadow-xl transition-all hover:-translate-y-1 active:scale-95"
          >
            <Play size={20} fill="currentColor" />
            <span>EMPEZAR AHORA</span>
          </Link>
          <Link 
            to="/map" 
            className="flex items-center justify-center space-x-3 px-10 py-5 bg-white border-2 border-neutral-100 hover:border-rose-500/20 text-neutral-900 font-black rounded-2xl shadow-sm transition-all hover:bg-neutral-50"
          >
            <LayoutIcon size={20} />
            <span>VER MAPA COMPLETO</span>
          </Link>
        </div>

        {/* Global Progress Bar */}
        <div className="w-full max-w-md pt-12 space-y-4">
           <div className="flex justify-between items-end">
              <span className="text-xs font-black text-neutral-400 uppercase tracking-widest">Tu Progreso Global</span>
              <span className="text-2xl font-black text-neutral-900">{globalProgress}%</span>
           </div>
           <div className="h-3 bg-neutral-100 rounded-full overflow-hidden p-1 shadow-inner">
              <div 
                className="h-full bg-rose-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${globalProgress}%` }}
              ></div>
           </div>
        </div>
      </section>

      {/* Drivers Track */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-100 pb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-black tracking-tight text-neutral-900 uppercase italic">Tu Ruta Estratégica</h2>
            <p className="text-neutral-500 font-medium text-lg">Los 5 pilares fundamentales de una marca competitiva.</p>
          </div>
          <div className="flex items-center space-x-4 bg-emerald-50 px-4 py-2 rounded-xl text-emerald-700 font-bold border border-emerald-100">
             <Trophy size={20} />
             <span className="text-sm">25 Ejercicios Interactivos Listos</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {drivers.map(driver => (
            <Link 
              key={driver.id} 
              to={`/driver/${driver.id}`}
              className="group relative bg-white p-8 rounded-[2rem] border-2 border-neutral-50 hover:border-rose-500/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-start text-left overflow-hidden h-full"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <driver.icon size={80} strokeWidth={1} />
              </div>

              <div className="w-14 h-14 bg-neutral-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-600 transition-colors duration-500 shadow-lg">
                <driver.icon size={28} strokeWidth={2.5} />
              </div>
              
              <div className="space-y-3 mb-6">
                <span className="text-[10px] font-black tracking-[0.2em] text-neutral-400 uppercase block">Módulo 0{driver.id}</span>
                <h3 className="text-xl font-black text-neutral-900 leading-tight group-hover:text-rose-600 transition-colors">{driver.name}</h3>
                <p className="text-sm text-neutral-500 font-medium leading-relaxed">{driver.desc}</p>
              </div>
              
              <div className="mt-auto pt-6 flex items-center text-xs font-black text-neutral-900 uppercase tracking-widest group-hover:text-rose-500 transition-colors">
                ACCEDER <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <footer className="pt-24 pb-12 border-t border-neutral-100 text-center space-y-4">
         <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest leading-loose">
            Basado en el libro <span className="text-neutral-900">"The Branding Method"</span> de Carolina Kairos <br />
            Edición Digital Interactiva v1.0 • 2026
         </p>
      </footer>
    </div>
  );
}
