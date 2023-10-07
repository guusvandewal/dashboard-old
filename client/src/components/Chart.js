import React from "react";
import { render } from "react-dom";
import { VictoryChart, VictoryLine } from "victory";

const Chart = () => {
    return (
        <VictoryChart>
            <VictoryLine />
        </VictoryChart>
    );
};

render(<Chart />, document.getElementById("root"));
export default Chart;
