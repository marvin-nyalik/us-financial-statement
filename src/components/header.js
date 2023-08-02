/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './companies.module.css';

const Header = ({ back, headline }) => (
  <div className={css.header}>
    <p>
      <Link to="/" className={css.year}>
        {back}
        {' '}
      </Link>
    </p>
    <p className={css.heading}>{headline}</p>
    <div className={css.icons}>
      <i className="bx bxs-microphone-alt" />
      <i className="bx bx-cog" />
    </div>
  </div>
);

Header.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Header;
