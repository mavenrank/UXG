import "./App.css";
import Module1 from "./components/C1/module1";
import Module2 from "./components/C1/Module2.jsx"
import Navbar from "./components/Navbar";
function App() {
    return (
        <div className="window">
            <Navbar />
            <div className="mainframe">
                <Module1 />
                <Module2 />
            </div>
        </div>
    );
}

export default App;
