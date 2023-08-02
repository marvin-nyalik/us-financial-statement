import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './companies.module.css';

const Showcase = ({ image, showline }) => {
  const companies = useSelector((state) => state.companies.companies);
  const { symbol } = useParams();
  const [activeCompany, setActiveCompany] = useState('');

  useEffect(() => {
    setActiveCompany(symbol);
  }, [symbol]);

  return (
    <div className={css.showcase}>
      <div className={css.showDiv}>
        <img className={css.showImg} src={image} alt="avatar" />
      </div>
      <div className={css.showDiv}>
        <h3 className={css.showline}>
          {showline}
        </h3>
        <div className={css.companyList}>
          {companies.length > 0 ? companies.map((company) => (
            <p key={company} className={company === activeCompany ? css.active : css.inactive}>
              {company}
            </p>
          )) : ''}
        </div>
      </div>
    </div>
  );
};

Showcase.propTypes = {
  image: PropTypes.string.isRequired,
  showline: PropTypes.string.isRequired,
};

export default Showcase;
