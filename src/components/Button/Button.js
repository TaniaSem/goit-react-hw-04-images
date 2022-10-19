import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <Btn type="button" onClick={onLoadMore}>
      Load more
    </Btn>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
