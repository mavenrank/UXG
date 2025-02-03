import "./App.css";
import Module1 from "./components/C1/module1";
import Navbar from "./components/Navbar";
function App() {
    return (
        <div className="window">
            <Navbar />
            <div className="mainframe">
                <Module1 />
            </div>
        </div>
    );
}

export default App;
