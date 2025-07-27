import './TestComponent.scss';
import classNames from 'classnames';

const TestComponent = (props) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(className, 'test-component')}>TestComponent</div>
  );
};