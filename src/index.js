import React from "react";
import { render, hydrate } from "react-dom";
import { renderToString } from "react-dom/server";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Test = () => <div>rendered as string</div>;

class TestSSR extends React.Component {
  componentDidMount() {
    hydrate(<Test />, this.el);
  }

  render() {
    return (
      <div
        ref={el => {
          this.el = el;
        }}
        dangerouslySetInnerHTML={{ __html: this.props.ssr }}
      />
    );
  }
}

const TestSSRString = renderToString(<Test />);

const App = () => (
  <div style={styles}>
    <Hello name="ssssss" />
    <h2>sdfdfgfd {"\u2728"}</h2>
    <TestSSR ssr={TestSSRString} />
  </div>
);

render(<App />, document.getElementById("root"));
