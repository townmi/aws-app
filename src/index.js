/**
 * [程序入口]
 * @Author   townmi
 * @DateTime 2016-09-19T22:16:56+0800
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import Bars from './views/bars.js';

class App extends Component {
	render() {
        return ( 
        	<View style = { styles.wrap }>
	            <View style = { styles.container }>
	                <Text style = { styles.welcome }>
	                    Welcome to React Native!
	                    </Text>
	                <Text style = { styles.instructions }>
	                    To get started, edit index.ios.js
	                </Text>
	                <Text style = { styles.instructions }>
	                    Press Cmd + R to reload, {
	                    '\n'
	                    }
	                    Cmd + D or shake
	                    for dev menu
	                </Text>
	            </View>
	            <View style = { styles.barsBox }>
	            	<Bars/>
	            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1
	},
	container: {
		flex: 30,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	barsBox: {
		flex: 2.5,
		justifyContent: 'center',
		backgroundColor: '#eeeeee'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

export default App;