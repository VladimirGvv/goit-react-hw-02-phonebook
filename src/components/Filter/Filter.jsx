import { Component } from 'react';
import styles from './Filter.module.scss';


export class Filter extends Component {
    render() {
        const { filterByName, value } = this.props;
        const { input } = styles;
    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={filterByName}
          className={input}
        ></input>
      </>
    );
  }
}
