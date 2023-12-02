"use client"
import React from 'react';

export default function usePersistedState<T>(key: string, defaultValue?: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = React.useState<T>(() => {
    if (typeof window !== 'undefined') {
      const persistedState = window.localStorage.getItem(key);
      try {
        return persistedState ? JSON.parse(persistedState) : defaultValue;
      } catch (error) {
        console.error(error);
        return defaultValue ?? null;
      }
    } else {
      return defaultValue ?? null;
    }
  });

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state, key]);

  return [state, setState];
}
