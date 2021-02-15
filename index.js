import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-360';
import Home from './components/Home';

export default class react360WebSite extends React.Component {

    renderHomePage() {
      return (
        <Home />
      );
    }

    render() {
        return <View style={styles.container}>{this.renderHomePage()}</View>;
    }
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        width: 4069,
        flex:1, 
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

AppRegistry.registerComponent('react360WebSite', () => react360WebSite);
AppRegistry.registerComponent('Home', () => Home);
