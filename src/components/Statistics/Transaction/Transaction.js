import PropTypes from 'prop-types';
import s from './Transaction.module.css';
import getRandomColor from './getRandomColor';

function Transaction({ stat }) {
  const color = getRandomColor();
  return (
    <li className={s.item} key={stat.id} style={{ backgroundColor: `${color}` }}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>
  );
}

Transaction.propTypes = {
  stat: PropTypes.object,
};

export default Transaction;
