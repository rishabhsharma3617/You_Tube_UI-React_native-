import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function videoItem(props) {
    let video = props.video
    return (
        <View style={styles.container}>
            <Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height : 200}}/>
            <View style={styles.descContainer}>
                <Image source={{uri : 'https://avatars0.githubusercontent.com/u/41324252?s=460&v=4'}} style={{width : 40 , height : 40 , borderRadius : 25 ,marginLeft:10}}/>
                <View style = {styles.vidDetails}>
                    <Text style={styles.videoTitle}>{video.snippet.title}</Text>
                    <Text style={styles.vidStats}>{video.snippet.channelTitle + " · "+ nFormatter(video.statistics.viewCount , 1) + "   3 months ago"}</Text>
                </View>
                <TouchableOpacity>
                    <Icon name='more-vert' size={20}  />
                </TouchableOpacity>
            </View>
        </View>
    )
} 
function nFormatter(num, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + ' views' ;
  }
  
const styles = StyleSheet.create({
    container : {
        paddingTop : 15,

    },
    descContainer : {
        paddingTop : 15,
        flexDirection : 'row'
    },
    vidDetails : {
        paddingHorizontal  : 15,
        flex : 1
    },
    videoTitle : {
        fontSize : 16,
        color : '#3C3C3C'
    },
    vidStats :{
        fontSize : 12,
        color : 'grey'
    }

})