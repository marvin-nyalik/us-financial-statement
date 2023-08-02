/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import css from './filter.module.css';

const Filter = ({ search, setSearch, onSubmit }) => (
  <form onSubmit={(e) => { e.preventDefault(); onSubmit(search); }}>
    <div className={css.filterDiv}>
      <input className={css.filterInput} placeholder="Enter code" onChange={(e) => setSearch(e.target.value)} value={search} />
      <button type="button" onClick={(e) => { e.preventDefault(); onSubmit(search); }}> SEARCH </button>
    </div>
  </form>
);

Filter.propTypes = {
  search: PropTypes.string.isRequired,
};

export default Filter;
