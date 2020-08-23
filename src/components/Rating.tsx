import React, { Component } from 'react';

interface Props {
  name: string;
  rscale: string;
  onRating(rating: string): any;
}

interface State {
  ratingBtnArr: any;
  givenRating: string;
}

class Rating extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ratingBtnArr: [],
      givenRating: ''
    };
    this.renderRatings = this.renderRatings.bind(this);

  }
  componentDidMount() {
    this.renderRatings();
  }
  // e: React.ChangeEvent<HTMLInputElement>
  handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v: string = e.target.value;
    this.props.onRating(v);
    this.setState({ givenRating: v }, () => this.renderRatings());
  }
  renderRatings = () => {
    const scale = Number(this.props.rscale);
    const givenRating = Number(this.state.givenRating);
    let ratingBtnArr = [];
    let i, v, c;
    for (i = 0; i < scale; i++) {
      v = i + 1;
      c = (givenRating === v);
      ratingBtnArr.push(
        <label key={i}>
          <input
            type="radio"
            value={v}
            name="rad"
            checked={c}
            onChange={this.handleOptionChange}
          />
          <span>{v}</span>
        </label>
      );
    }
    this.setState({ ratingBtnArr: ratingBtnArr });
  }
  render() {
    const { ratingBtnArr } = this.state;
    return (
      <div id="rating-box">
        <h6>Rate your experience</h6>
        <div>{ratingBtnArr}</div>
        <div className="d-flex justify-content-center">
          <div className="col">NOT SATISFIED</div>
          <div className="col">VERY SATISFIED</div>
        </div>
      </div>
    );
  }
}

export default Rating;
/*
<div className="custom-card shadow-sm bg-white mb-5 rounded mx-auto">
        <h6>Rate your experience</h6>
        <div>{ratingBtnArr}</div>
        <div className="d-flex justify-content-center">
          <div className="col">NOT SATISFIED</div>
          <div className="col">VERY SATISFIED</div>
        </div>
      </div>
*/
