import Grid from "./components/Grid";
import { PathFindingProvider } from "./context/PathFindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

const App = () => {
  return (
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="flex flex-col h-screen w-screen bg-[#131416]">
          <Grid/>
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
