import React from "react";
import "../../design/counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = "";
    if (count > 0) {
      polarity = "positive";
    } else if (count < 0) {
      polarity = "negative";
    }
    this.setState({ count, polarity });
  }

  render() {
    let classes = ["count", this.state.polarity].join(" ");
    return (
      <section className="counter">
        <a href="#" className="downClick" onClick={this.handleDown}>
          &lt;&lt;
        </a>
        <span className={classes}>{this.state.count}</span>
        <a href="#" className="upClick" onClick={this.handleUp}>
          &gt;&gt;
        </a>
      </section>
    );
  }
}

export default Counter;
