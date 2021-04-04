import { useDispatch } from 'react-redux';

import { configRequested } from '../../actions/config';

import App from './App';

export interface Props {
  requestConfig: () => void;
}

const AppContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const requestConfig = () => {
    dispatch(configRequested());
  };

  return App({ requestConfig });
};

export default AppContainer;
