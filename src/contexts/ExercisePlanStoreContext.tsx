"use client";
import { IExerciseType } from "@/types/types";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface IExerciseContextType {
    planExercise: IExerciseType[],
    setPlanExercise: Dispatch<SetStateAction<IExerciseType[]>>,

    saveExercise: IExerciseType[],
    setSaveExercise: Dispatch<SetStateAction<IExerciseType[]>>,

    btnIsActive: boolean,
    setBtnAcive: Dispatch<SetStateAction<boolean>>
}
export const ExerciseContext = createContext<IExerciseContextType>({
    planExercise: [],
    setPlanExercise: () => { },
    saveExercise: [],
    setSaveExercise: () => { },
    btnIsActive: true,
    setBtnAcive: () => { },
});

const ExerciseProviderContext = ({ children }: { children: ReactNode }) => {
    const [planExercise, setPlanExercise] = useState<IExerciseType[]>([]);
    const [saveExercise, setSaveExercise] = useState<IExerciseType[]>([]);
    const [btnIsActive, setBtnAcive] = useState<boolean>(true);

    const [isLoaded, setIsLoaded] = useState(false);

    // Get data from localStorage
    useEffect(() => {
        const savedPlan = localStorage.getItem("todayPlan");
        if (savedPlan) {
            setPlanExercise(JSON.parse(savedPlan));
        }
        setIsLoaded(true);
    }, [])

    // Save data to localStorage
    useEffect(() => {
        if (!isLoaded) return
        localStorage.setItem("savedPlan", JSON.stringify(planExercise));
    }, [planExercise, isLoaded]);


    return (
        <ExerciseContext.Provider value={{ planExercise, setPlanExercise, saveExercise, setSaveExercise, btnIsActive, setBtnAcive }}>
            {children}
        </ExerciseContext.Provider>
    );
};

export default ExerciseProviderContext;