import PropTypes from 'prop-types';
import css from './companies.module.css';

const Showcase = ({ image, showline }) => (
  <div className={css.showcase}>
    <div className={css.showDiv}>
      <img className={css.showImg} src={image} alt="avatar" />
    </div>
    <div className={css.showDiv}>
      <h3 className={css.showline}>
        {showline}
      </h3>
    </div>
  </div>
);

Showcase.propTypes = {
  image: PropTypes.string.isRequired,
  showline: PropTypes.string.isRequired,
};

export default Showcase;
