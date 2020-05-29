import React from 'react';
import data from './data';
import arrowRight from './images/keyboard_arrow_right-24px.svg';
import arrowLeft from './images/keyboard_arrow_left-24px.svg';

class App extends React.Component {
  state = {
    index: 0,
  };

  handleNext = () => {
    const nextIndex = this.state.index + 1;
    if (nextIndex >= data.length) {
      return;
    }
    this.setState({
      index: nextIndex,
    });
  };

  handlePrev = () => {
    const prevIndex = this.state.index - 1;
    if (prevIndex < 0) {
      return;
    }
    this.setState({
      index: prevIndex,
    });
  };

  handleClick = (i) => {
    this.setState({
      index: i,
    });
  };

  render() {
    const image = data[this.state.index].imgUrl;

    return (
      <div className="container">
        <div className="image-container">
          <button className="btn btn-arrow" onClick={this.handlePrev}>
            <img width="50" height="50" src={arrowLeft} alt="" />
          </button>
          <img className="image" src={image} alt="" />
          <button className="btn btn-arrow" onClick={this.handleNext}>
            <img width="50" height="50" src={arrowRight} alt="" />
          </button>
        </div>
        <div className="previous-container">
          {data.map((element, index) => (
            <button
              className="btn"
              key={element.imageUrl}
              onClick={() => this.handleClick(index)}
            >
              <img
                className="previous-image"
                src={element.imgUrl}
                height="100"
                alt=""
              />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
