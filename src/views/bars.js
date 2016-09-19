/**
 * [底部导航]
 * @Author   townmi
 * @DateTime 2016-09-19T22:58:08+0800
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';


class Bars extends Component {
	render() {
		return (
			<View style = { styles.bars }>
				<View style = { styles.barBtn1 }>
					<Text style = { styles.txt }> 首页信息 </Text>
				</View>
				<View style = {styles.barBtn2}>
					<Text style = { styles.txt }> 购物广场 </Text>
				</View>
				<View style = {styles.barBtn3}>
					<Text style = { styles.txt }> 个人中心 </Text>
				</View>
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
	txt: {
		color: '#333333'
	}
});

export default Bars;