import { useContext } from "react";
import { PathFindingContext } from "../context/PathFindingContext";

export const usePathFinding = () => {
  const context = useContext(PathFindingContext);
  if (context === undefined) {
    throw new Error("usePathFinding must be used within a PathFindingProvider");
  }
  return context;
};
