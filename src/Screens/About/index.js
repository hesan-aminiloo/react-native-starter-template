import React, { Component } from 'react';
import {
    SafeAreaView,
    Text
} from 'react-native';
import { __ } from 'locales';
import Styles from './styles';
export default class About extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const { container } = Styles;
        return(
            <SafeAreaView style = { container }>
                <Text>
                    {__('about.title')}
                </Text>
            </SafeAreaView>
        );
    }
}
