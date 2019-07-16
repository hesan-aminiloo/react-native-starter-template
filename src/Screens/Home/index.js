import React, { Component } from 'react';
import {
    SafeAreaView,
    Text
} from 'react-native';
import { __ } from 'locales';
import { connect } from 'react-redux';

import Styles from './styles';

class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { container } = Styles;
        return(
            <SafeAreaView style = { container }>
                <Text>
                    {__('home.title')}
                </Text>
                <Text>
                    {__('home.selected_lang')} {this.props.lang}
                </Text>
            </SafeAreaView>
        );
    }
}

import {
    mapDispatchToProps,
    mapStateToProps
} from './redux';

export default connect(mapStateToProps, mapDispatchToProps)(Home);