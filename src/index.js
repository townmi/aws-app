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

import Bars from './views/common/bars.js';
import Head from './views/common/head.js';
import Home from "./views/home"

class App extends Component {
	hookForBar(val) {

	}
	render() {
        return ( 
        	<View style = { styles.wrap }>
        		<View style = { styles.head }>
        			<Head/>
        		</View>
	            <View style = { styles.container }>
	                <Home/>
	            </View>
	            <View style = { styles.barsBox }>
	            	<Bars
                    />
	            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		paddingTop: 30
	},
	head: {
		flex: 2,
    	flexDirection: 'row',
		backgroundColor: '#FFFFFF',
	},
	container: {
		flex: 30,
    	flexDirection: 'row',
		backgroundColor: '#FFFFFF',
	},
	barsBox: {
		flex: 3,
		justifyContent: 'center',
		backgroundColor: '#eeeeee'
	}
});

export default App;