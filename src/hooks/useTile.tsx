import { useContext } from "react"
import { TileContext } from "../context/TileContext"

export default function useTile() {
    const context = useContext(TileContext);
    if (context === undefined) {
        throw new Error("useTile must be used within a TileProvider");
    }
    return context;
}
