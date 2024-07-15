import { useState } from "react";
import GlassesList from "./components/GlassesList";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <GlassesList></GlassesList>
        </>
    );
}

export default App;
