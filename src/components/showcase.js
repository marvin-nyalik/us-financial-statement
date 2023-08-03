/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
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
        <p className={css.showline}>
          {showline}
        </p>
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

export default Showcase;
