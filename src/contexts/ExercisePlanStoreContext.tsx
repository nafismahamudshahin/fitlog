"use client";
import { IExerciseType } from "@/types/types";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface IExerciseContextType {
    planExercise: IExerciseType[];
    setPlanExercise: Dispatch<SetStateAction<IExerciseType[]>>;

    saveExercise: IExerciseType[];
    setSaveExercise: Dispatch<SetStateAction<IExerciseType[]>>
}
export const ExerciseContext = createContext<IExerciseContextType>({
    planExercise: [],
    setPlanExercise: () => { },
    saveExercise: [],
    setSaveExercise: () => { }
});

const ExerciseProviderContext = ({ children }: { children: ReactNode }) => {
    const [planExercise, setPlanExercise] = useState<IExerciseType[]>([]);
    const [saveExercise, setSaveExercise] = useState<IExerciseType[]>([]);
    return (
        <ExerciseContext.Provider value={{ planExercise, setPlanExercise, saveExercise, setSaveExercise }}>
            {children}
        </ExerciseContext.Provider>
    );
};

export default ExerciseProviderContext;