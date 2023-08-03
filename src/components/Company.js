import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './company.module.css';

const Company = ({ name }) => {
  const names = name;
  return (
    <Link to={`/detail/${name}`} className={css.companyLink}>
      <div className={css.cover}>
        <div className={css.box}>
          <i className="bx bx-chevron-right-circle" />
        </div>
        <div className={css.boxBody}>
          <p className={css.code}>
            Code:
            {' '}
            {names}
          </p>
          <div>
            <p>Area : US</p>
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
