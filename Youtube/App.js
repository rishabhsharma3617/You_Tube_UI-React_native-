import React from 'react';
import { StyleSheet, Text, View,Image, FlatList , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import VideoItem from './components/VideoItem'
import data from './data.json'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Image source={require('./assets/images/logo.png')} style={{ width : 98 , height : 22 , marginTop:30}}/>
      <View style={styles.rightNav}>
        <TouchableOpacity>
        <Icon style={styles.navItem} name='search' size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name='account-circle' size={25} style={{marginTop : 30}}/>
        </TouchableOpacity> 
      </View>
      </View>
      <View style={styles.body}>
          <FlatList 
          data = {data.items}
          renderItem = {(video) => <VideoItem video={video.item} />}
          keyExtractor = {(item) => item.id}
          />
          
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name='home' size={25} />
          <Text style={styles.tabTitle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name='whatshot' size={25} />
          <Text style={styles.tabTitle}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name='subscriptions' size={25} />
          <Text style={styles.tabTitle}>Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name='inbox' size={25} />
          <Text style={styles.tabTitle}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name='folder' size={25} />
          <Text style={styles.tabTitle}>Library</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  navBar : {
    height : 82,
    backgroundColor : 'white',
    elevation : 5,
    paddingHorizontal : 15,
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  rightNav : {
    flexDirection : 'row'
  },
  navItem : {
    marginRight : 25,
    marginTop : 30
  },
  body : {
    flex: 1
  },
  tabBar : {
    height : 50,
    backgroundColor : 'white',
    borderTopWidth : 0.5,
    borderColor : '#E5E5E5',
    flexDirection : 'row',
    justifyContent : 'space-around'
  },
  tabItem : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  tabTitle :  {
    fontSize : 11,
    color : '#3C3C3C',
    
  }
});
