import PropTypes from 'prop-types';
import s from './StatisticsEl.module.css';
import getRandomColor from './getRandomColor';

function StatisticsEl({ stat }) {
  const color = getRandomColor();
  return (
    <li className={s.item} key={stat.id} style={{ backgroundColor: `${color}` }}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>
  );
}

StatisticsEl.propTypes = {
  stat: PropTypes.object,
};

export default StatisticsEl;
