import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';

const CustomBtn = requireNativeComponent('CustomBtn', null);
CustomBtn.PropTypes = {
  title: PropTypes.string,
  onBtnClick: PropTypes.func,  
};
export default CustomBtn;