import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';
import I18n, { __ } from 'locales';

// Redux Stuff
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './configureStore';

// Navigator
import RootStack from './src/Router';
import NavigationService from './NavigationService';

class App extends Component{
    constructor(){
        super();
        I18n.locale = store.store.getState().config.lang;
    }

    render(){
        const { container } = styles;
        console.disableYellowBox = true;
        return (
            <Provider store = { store.store }>
                <PersistGate
                    persistor = { store.persistor }
                >
                    <RootStack ref     =   { navigatorRef => {
                            NavigationService.setTopLevelNavigator(navigatorRef);
                    }} />
                </PersistGate>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});




export default App;
