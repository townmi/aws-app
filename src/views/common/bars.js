/**
 * [底部导航]
 * @Author   townmi
 * @DateTime 2016-09-19T22:58:08+0800
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

class Bars extends Component {
	onPressButton() {
		
	}
	render() {
		return (
			<View style = { styles.bars }>
				<TouchableHighlight style = { styles.barBtn1 } onPress={this.onPressButton}>
					<Text style = { styles.txt }> 首页 </Text>
				</TouchableHighlight>
				<TouchableHighlight style = {styles.barBtn2} onPress={this.onPressButton}>
					<Text style = { styles.txt }> 视频 </Text>
				</TouchableHighlight>
				<TouchableHighlight style = {styles.barBtn3} onPress={this.onPressButton}>
					<Text style = { styles.txt }> 游戏 </Text>
				</TouchableHighlight>
				<TouchableHighlight style = {styles.barBtn4} onPress={this.onPressButton}>
					<Text style = { styles.txt }> 我的 </Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bars: {
		flex: 1,
    	flexDirection: 'row',
	},
	barBtn1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f74c31'
	},
	barBtn2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#4dc123'
	},
	barBtn3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#c50000'
	},
	barBtn4: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f50000'
	},
	txt: {
		color: '#333333'
	}
});

export default Bars;