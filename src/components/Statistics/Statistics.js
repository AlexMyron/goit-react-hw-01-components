import PropTypes from 'prop-types';
import StatisticsEl from '../StatisticsEl';
import s from './Statistics.module.css';

function Statistics({ title = null, stats }) {
  const isTitle = !(title === null);

  return (
    <section className="statistics">
      {isTitle && <h2 className="title">{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stat => {
          return <StatisticsEl stat={stat} key={stat.id} />;
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape),
};

export default Statistics;
