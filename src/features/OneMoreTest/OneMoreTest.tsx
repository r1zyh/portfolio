import './OneMoreTest.scss';
import classNames from 'classnames';

const OneMoreTest = (props) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(className, '')}>OneMoreTest</div>
  );
};