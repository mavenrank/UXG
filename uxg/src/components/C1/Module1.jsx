import React from "react";
import C1M1_1_1 from "./Module1/C1M1_1_1.jsx";
import C1M1_1_2 from "./Module1/C1M1_1_2.JSX";
import C1M1_2 from "./Module1/C1M1_2.jsx";
import C1M1_3 from "./Module1/C1M1_3.jsx";
import C1M1_4 from "./Module1/C1M1_4.jsx";

function Module1() {
    return (
        <div className="module1">
            <section>
                <h2>Module 1</h2>
                What is covered under Module 1:
                <ul>
                    <li>the definition of UX design</li>
                    <li>
                        why UX design is important for consumers and businesses
                    </li>
                    <li>different roles within the field of UX</li>
                    <li>what makes a user experience good or poor</li>
                    <li>an entry level UX designers job responsibilities</li>
                    <li>how UX designer works with cross-functional teams</li>
                    <li>
                        differences in UX design jobs depending on company size
                        and industry
                    </li>
                    <li>and how to pursue a career in UX design</li>
                </ul>
                <C1M1_1_1 />
                <hr></hr>
                <C1M1_1_2 />
                <hr></hr>
                <C1M1_2 />
                <hr></hr>
                <C1M1_3 />
                <hr></hr>
                <C1M1_4 />
            </section>
        </div>
    );
}

export default Module1;
