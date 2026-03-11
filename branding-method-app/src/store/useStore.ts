import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ToolProgress = {
  driverId: number;
  toolId: string; // Cambiado a string para coincidir con content.ts
  completed: boolean;
  data: any;
};

interface AppState {
  progress: ToolProgress[];
  markToolComplete: (driverId: number, toolId: string, data?: any) => void;
  getToolData: (driverId: number, toolId: string) => any;
  getGlobalProgress: () => number;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      progress: [],
      markToolComplete: (driverId, toolId, data) => {
        const state = get();
        const existingIdx = state.progress.findIndex(p => p.driverId === driverId && p.toolId === toolId);
        
        if (existingIdx >= 0) {
          const newProgress = [...state.progress];
          newProgress[existingIdx] = { 
            ...newProgress[existingIdx], 
            completed: true, 
            data: data || newProgress[existingIdx].data 
          };
          set({ progress: newProgress });
        } else {
          set({ progress: [...state.progress, { driverId, toolId, completed: true, data }] });
        }
      },
      getToolData: (driverId, toolId) => {
        const item = get().progress.find(p => p.driverId === driverId && p.toolId === toolId);
        return item?.data || null;
      },
      getGlobalProgress: () => {
        // 25 tools in total (5 drivers * 5 tools)
        const completedCount = get().progress.filter(p => p.completed).length;
        return Math.min(100, Math.floor((completedCount / 25) * 100));
      }
    }),
    {
      name: 'branding-method-storage',
    }
  )
);
