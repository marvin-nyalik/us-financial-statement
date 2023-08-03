import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from './companies.module.css';
import stock from '../images/statement.jpg';
import Company from './Company';
import Header from './header';
import Showcase from './showcase';
import LoadingSpinner from './Loading';
import { fetchCompanies } from '../redux/companies/companiesSlice';

const Companies = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.companies.loading);
  const companies = useSelector((state) => state.companies.companies);
  const headline = 'Selected Companies';
  const year = <i className="bx bx-chevron-left-circle" />;
  const showline = `Financial statements of
    10 Selected Companies in the US stock market`;

  useEffect(() => {
    if (companies.length === 0) {
      dispatch(fetchCompanies());
    }
  }, [dispatch, companies.length]);

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <div>
      <Header back={year} headline={headline} />
      <Showcase image={stock} showline={showline} />
      <div className={css.sbc}>
        <p>STATS BY COMPANY</p>
      </div>
      <div className={css.allCompanies}>
        {companies.map((company) => (
          <div key={company} className={css.cover}>
            <Company name={company} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
