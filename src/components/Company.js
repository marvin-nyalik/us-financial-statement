import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './company.module.css';

const Company = ({ name }) => {
  const names = name;
  return (
    <Link to={`/detail/${name}`}>
      <div className={css.cover}>
        <div className={css.box}>
          <i className="bx bx-chevron-right-circle" />
        </div>
        <div className={css.boxBody}>
          <h3>
            Code:
            {' '}
            {names}
          </h3>
          <div>
            <p>Area : US</p>
            <p>11763</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Company.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Company;
