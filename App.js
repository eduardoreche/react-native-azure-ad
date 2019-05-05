import { createStackNavigator, createAppContainer } from 'react-navigation';

import AzureAuth from './src/screens/Auth/Auth';
import RestrictScreen from './src/screens/Restrict/Restrict';

const MainNavigator = createStackNavigator({
  AuthScreen: { screen: AzureAuth },
  RestrictScreen: { screen: RestrictScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
