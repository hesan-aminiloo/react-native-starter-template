// React Native Navigator
import { createStackNavigator, createAppContainer } from 'react-navigation';
import configs from 'app-configs';

// Routes
import routes from '../Screens';

const router = createStackNavigator(routes, {
    initialRouteName: configs.navigator.initial_screen
});

export default createAppContainer(router);