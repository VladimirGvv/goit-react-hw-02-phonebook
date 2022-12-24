import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Contacts.module.scss';

export class Contacts extends Component {
  render() {
    const { filterByName, toDelete } = this.props;
    const { contacts, contacts_item, btn } = styles;

    return (
      <ol className={contacts}>
        {filterByName().map(({ name, number, id }) => (
          <li key={id} className={contacts_item}>
            {name}: {number}
            <button
              type="submit"
              onClick={() => {
                toDelete(id);
              }}
              className={btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    );
  }
}

Contacts.propTypes = {
  filterByName: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  toDelete: PropTypes.func.isRequired,
};
