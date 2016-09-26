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


const {width, height} = Dimensions.get('window');

class Bars extends Component {
	constructor(props) {
		super(props);

		this.state = {
			style: {
				height: 250
			}
		};
		resetVideo = ({height}) => {
			this.setState({
				style: {
					height: height
				}
			})
		}
	}
	loadStart() {
	}
	setDuration(video) {
		console.log(video);
		if(!!video.naturalSize.width) {
			resetVideo({height:video.naturalSize.height * width / video.naturalSize.width});
		}
	}
	error(err) {
		console.log("---------");
		console.log(err);
	}
	render() {
		return (
			<ScrollView style = { styles.box }>
	        	<Video
					// source={require("./ex.mp4")}
					source = {{uri: "http://source.tutorabc.com/video/itutorgroup/ITUTOR_COMPANY_INTRO.mp4"}}
					// source = {{uri: "http://stream.vipabc.com/tutormeet/0927ChangYuLee/playlist.m3u8"}}
					rate = {1.0}                   // 0 is paused, 1 is normal.
					volume = {0.5}                 // 0 is muted, 1 is normal.
					resizeMode="cover"        // Fill the whole screen at aspect ratio.
					repeat={true}                // Repeat forever.
					playInBackground={false}
					// style = {{width: width, height: this.state.height, position: 'absolute', left: 0, top: 0}}
					style = {[styles.backgroundVideo, this.state.style]}
					onLoadStart={this.loadStart}
					onLoad={this.setDuration}
					onError={this.error}
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
		height: 0,
		position: 'absolute',
	    top: 0,
	    left: 0,
	    bottom: 0,
	    right: 0
  	}
});

export default Bars;
