import { createStackNavigator, createAppContainer } from 'react-navigation';

import RestrictScreen from './src/screens/Restrict/Restrict';

const MainNavigator = createStackNavigator({
  Restrict: { screen: RestrictScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
