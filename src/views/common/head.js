/**
 * [head description]
 * @Author   townmi
 * @DateTime 2016-09-25T22:30:27+0800
 */

import React, {
	Component
} from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} from 'react-native';

class Head extends Component {
	back() {
		
	}
	render() {
		return (
			<View style = { styles.head }>
				<TouchableHighlight style = { styles.back } onPress={this.back}>
					<Text style = { styles.txt }> 1 </Text>
				</TouchableHighlight>
				<TouchableHighlight style = {styles.title}>
					<Text style = { styles.txt }> 购物广场 </Text>
				</TouchableHighlight>
				<TouchableHighlight style = {styles.right}>
					<Text style = { styles.txt }> ren </Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	head: {
		flex: 1,
    	flexDirection: 'row',
	},
	back: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff'
	},
	title: {
		flex: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff'
	},
	right: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff'
	},
	txt: {
		color: '#333333'
	}
});

export default Head;