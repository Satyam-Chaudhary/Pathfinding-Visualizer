import { PathFindingProvider } from "./context/PathFindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

const App = () => {
  return (
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <></>
        </SpeedProvider>
      </TileProvider>
    </PathFindingProvider>
  );
};

export default App;

//PathFinding COntext
//Tile Context
//Speed Context
