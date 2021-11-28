import {string, func, number} from 'prop-types';
import {colors} from '../../theme';

export const propTypes = {
  onIconPress: func,
  color: string,
  size: number,
  name: string,
  backgroundColor: string,
};

export const defaultProps = {
  color: colors.midGrey,
  backgroundColor: colors.white,
  onIconPress: () => {},
  size: 40,
  name: 'ios-wifi',
};
