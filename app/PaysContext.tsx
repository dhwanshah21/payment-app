'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Pay } from './lib/definitions';


type PaysContextType = {
  pays: Pay[];
  refreshPays: () => Promise<void>;
};

const PaysContext = createContext<PaysContextType | undefined>(undefined);

export function PaysProvider({ children }: { children: React.ReactNode }) {
  const [pays, setPays] = useState<Pay[]>([]);

  const refreshPays = async () => {
    const res = await fetch('/api/pays');
    const freshPays = await res.json();
    setPays(freshPays);
  };

  useEffect(() => {
    refreshPays(); // initially load data
  }, []);

  return (
    <PaysContext.Provider value={{ pays, refreshPays }}>
      {children}
    </PaysContext.Provider>
  );
}

export function usePays(): PaysContextType {
  const context = useContext(PaysContext);
  if (!context) throw new Error('usePays must be used within PaysProvider');
  return context;
}