"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LoaderContextType {
    isLoaded: boolean;
    setIsLoaded: (val: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType>({
    isLoaded: false,
    setIsLoaded: () => { },
});

export function LoaderProvider({ children }: { children: ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <LoaderContext.Provider value={{ isLoaded, setIsLoaded }}>
            {children}
        </LoaderContext.Provider>
    );
}

export const useLoader = () => useContext(LoaderContext);