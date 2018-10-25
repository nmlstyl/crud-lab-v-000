import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={ (event) => this.handleOnSubmit(event) }>
          <input type='text' onChange={ (event) => this.handleChange(event) }/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
