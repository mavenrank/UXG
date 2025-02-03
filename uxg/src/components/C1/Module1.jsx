import React from "react";
import C1M1_1_1 from "./Module1/C1M1_1_1";
import C1M1_1_2 from "./Module1/C1M1_1_2.JSX";

function Module1() {
    return (
        <div className="module1">
            <h2>Module 1</h2>
            <C1M1_1_1 />
            <hr color=""></hr>
            <C1M1_1_2 />
        </div>
    );
}

export default Module1;
