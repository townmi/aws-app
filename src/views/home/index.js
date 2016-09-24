/**
 * [App 首页界面]
 * @Author   townmi
 * @DateTime 2016-09-19T22:56:46+0800
 */

import React, {
	Component
} from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	View
} from 'react-native';

import Video from 'react-native-video';


const {width, height} = Dimensions.get('window')

class Bars extends Component {
	loadStart() {
		console.log(1);
	}
	setDuration() {
		console.log(2)
	}
	render() {
		return (
			<ScrollView style = { styles.box}>
	        	<Video
					source={{uri:'http://streamtw.vipabc.com/tutormeet/0927ChangYuLee/playlist.m3u8'}} 
					rate={1.0}                   // 0 is paused, 1 is normal.
					volume={0.5}                 // 0 is muted, 1 is normal.
					resizeMode="contain"           // Fill the whole screen at aspect ratio.
					repeat={true}                // Repeat forever.
					style={styles.backgroundVideo}
					onLoadStart={this.loadStart}
					onLoad={this.setDuration} 
				/>
	      	</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	box: {
		flex: 1,
		backgroundColor: '#f4f4f4'
	},
	backgroundVideo: {
		width: width,
		height: height,
		flex: 1
  	}
});

export default Bars;
