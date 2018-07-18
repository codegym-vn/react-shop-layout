import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Header from './src/components/Header';
import Banner from './src/components/Banner';
import ContentContainer from './src/components/ContentContainer';
export default class App extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header/>
                <Banner/>
                <ContentContainer />
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
});
