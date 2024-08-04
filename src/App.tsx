import { useRef } from "react";
import Grid from "./components/Grid";
import { PathFindingProvider } from "./context/PathFindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import Nav from "./components/Nav";

const App = () => {

  const isVisualizationRunningRef = useRef(false);

  return (
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="flex flex-col h-screen w-screen bg-[#131416]">
          <Nav/>
          <Grid isVisualizationRunningRef = {isVisualizationRunningRef}/>
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathFindingProvider>
  );
};

export default App;

//PathFinding COntext
//Tile Context
//Speed Context
