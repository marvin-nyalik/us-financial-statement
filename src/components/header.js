/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Filter from './filter';
import css from './companies.module.css';

const Header = ({ back, headline }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (search.length >= 3) {
      navigate(`/detail/${search.toUpperCase()}`);
    }
  };

  return (
    <>
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
      <div className={css.filter}>
        <Filter search={search} setSearch={setSearch} onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default Header;
