import PropTypes from 'prop-types';
import s from './StatisticsElement.module.css';
import getRandomColor from './getRandomColor';

function StatisticsElement({ stat }) {
  const color = getRandomColor();
  return (
    <li className={s.item} key={stat.id} style={{ backgroundColor: `${color}` }}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>
  );
}

StatisticsElement.propTypes = {
  stat: PropTypes.object,
};

export default StatisticsElement;
