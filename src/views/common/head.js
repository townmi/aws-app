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
	Image,
	TouchableHighlight
} from 'react-native';

class Head extends Component {
	back() {
		
	}
	backPress() {

	}
	render() {
		return (
			<View style = { styles.head }>
				<TouchableHighlight style = { styles.back } onPress={this.back} underlayColor = {'#c50000'} onShowUnderlay = {this.backPress}>
					<Image style={styles.btn} source={{uri: 'http://192.168.111.110/back.png'}}/>
				</TouchableHighlight>
				<TouchableHighlight style = {styles.title}>
						<Text style = { styles.txt }> 1 </Text>
				</TouchableHighlight>
				<TouchableHighlight style = {styles.right}>
					<Image style={styles.btn} source={{uri: 'http://192.168.111.110/back.png'}}/>
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
	btn: {
		width: 12,
		height: 12	
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