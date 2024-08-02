import { useState, ReactNode, createContext } from "react";
import { SpeedType } from "../utils/types";

export interface SpeedContextInterface {
  speed: SpeedType;
  setSpeed: (speed: SpeedType) => void;
}

export const SpeedContext = createContext<SpeedContextInterface | undefined>(
  undefined
);

export const SpeedProvider = ({ children }: { children: ReactNode }) => {
  const [speed, setSpeed] = useState<SpeedType>(SpeedType.MEDIUM);

  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
};