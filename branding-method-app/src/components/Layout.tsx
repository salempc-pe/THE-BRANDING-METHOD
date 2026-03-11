import { Link, Outlet, useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { BookOpen, Map, Home, Trophy } from 'lucide-react';

export function Layout() {
  const globalProgress = useStore((state) => state.getGlobalProgress());
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFD] text-neutral-900 font-sans selection:bg-rose-500 selection:text-white antialiased">
      {/* Dynamic Progress Bar (Fixed Top) */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-neutral-100">
         <div 
           className="h-full bg-rose-500 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(244,63,94,0.5)]"
           style={{ width: `${globalProgress}%` }}
         />
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-neutral-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3 group transition-transform active:scale-95">
              <div className="w-10 h-10 bg-neutral-900 text-white rounded-xl flex items-center justify-center group-hover:bg-rose-600 transition-all shadow-lg group-hover:shadow-rose-500/20 group-hover:-rotate-3">
                <BookOpen size={20} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tighter leading-none">THE BRANDING</span>
                <span className="font-bold text-[10px] text-rose-500 tracking-[0.3em] leading-none mt-1">METHOD</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-1 bg-neutral-100/50 p-1 rounded-2xl border border-neutral-200/50">
              <Link to="/" className={`flex items-center space-x-2 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${location.pathname === '/' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-400 hover:text-neutral-600'}`}>
                <Home size={14} />
                <span>Inicio</span>
              </Link>
              <Link to="/map" className={`flex items-center space-x-2 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${location.pathname === '/map' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-400 hover:text-neutral-600'}`}>
                <Map size={14} />
                <span>Mapa</span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex flex-col items-end">
                 <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Global</span>
                 <span className="text-sm font-black text-neutral-900 leading-none">{globalProgress}%</span>
              </div>
              <Link 
                to="/map"
                title="Ver Mapa de Progreso"
                className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center border border-emerald-100 shadow-inner hover:bg-emerald-100 hover:scale-110 transition-all active:scale-95"
              >
                <Trophy size={18} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 text-center">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start space-y-2">
             <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-neutral-900 rounded flex items-center justify-center">
                   <BookOpen size={12} className="text-white" />
                </div>
                <span className="font-black text-sm tracking-tighter">BRANDING METHOD</span>
             </div>
             <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Carolina Kairos • Interactive Edition 2026</p>
          </div>
          
          <div className="flex space-x-8">
             <a href="#" className="text-xs font-black text-neutral-400 hover:text-rose-500 transition-colors uppercase tracking-widest">Libro PDF</a>
             <a href="#" className="text-xs font-black text-neutral-400 hover:text-rose-500 transition-colors uppercase tracking-widest">Soporte</a>
             <a href="#" className="text-xs font-black text-neutral-400 hover:text-rose-500 transition-colors uppercase tracking-widest">Carolina Kairos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
