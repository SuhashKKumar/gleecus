import React, { Component } from "react";
import Plot from "react-plotly.js";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineReload,
} from "react-icons/ai";
import "./Histogram.css";

class Histogram extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], visible: true, histogram: "bar" };
  }
  componentDidMount() {
    const endpoint =
      "https://5b9f8640f5036f00142e4a2c.mockapi.io/v1/users-count";

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }))
      .catch((err) => alert(err.message));
  }
  render() {
    const visibleHandler = () => {
      this.setState({ visible: true });
    };
    const vanishHandler = () => {
      this.setState({ visible: false });
    };
    const reloadHandler = () => {
      window.location.reload(false);
    };
    const graphHandler = (e) => {
      this.setState({ histogram: e.target.value });
    };
    return (
      <div className="graph-container">
        <div className="options-container">
          {this.state.visible ? (
            <AiOutlineEyeInvisible
              onClick={vanishHandler}
              size={"2.3em"}
              color={"#d9534f"}
            />
          ) : (
            <AiOutlineEye
              onClick={visibleHandler}
              color={"#00f"}
              size={"2.3em"}
            />
          )}

          <AiOutlineReload onClick={reloadHandler} size={"2em"} />
          <select onChange={graphHandler} name="graphs" id="graphs">
            <option value="bar">Bars</option>
            <option value="line">Line</option>
          </select>
        </div>
        {this.state.visible ? (
          <>
            <Plot
              data={[
                {
                  type: this.state.histogram,
                  mode: "lines+markers",
                  x: Object.values(this.state.data).map(
                    (each) => each.CLINICIAN_NAME
                  ),
                  x: Object.values(this.state.data).map((each) => each.counts),
                  marker: { color: "#4C78A8" },
                },
              ]}
              layout={{
                width: 550,
                height: 453,
                margin: {
                  l: 20,
                  r: 1,
                  b: 25,
                  t: 25,
                  pad: 0,
                },
                title: "Histogram",
                xaxis: {
                  tickfont: {
                    size: 8,
                  },
                  showticklabels: true,
                },
                yaxis: {
                  showticklabels: true,
                  tickfont: {
                    size: 8,
                  },
                },
              }}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Histogram;
