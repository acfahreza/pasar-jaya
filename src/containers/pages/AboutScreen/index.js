import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,

  View
} from 'react-native';

const {width} = Dimensions.get('window');
const height = '100%'; //60%

export default class AboutScreen extends Component {
  state = {
    active: 0,
  };
  render() {
   
    return (
      <>
        <View style={{width, height}}>
          <ScrollView
            pagingEnabled
            horizontal
            onScroll={this.change}
            showsHorizontalScrollIndicator={false}
            style={{width, height}}>
            <Image
              source={require('./../../../assets/dummy/3.png')}
              style={{width, height, resizeMode: 'cover'}}
            />
            <Image
              source={require('./../../../assets/dummy/4.png')}
              style={{width, height, resizeMode: 'cover'}}
            />
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
              alignSelf: 'center',
            }}>
            <Text style={styles.pagingActiveText}>⬤</Text>
            <Text style={styles.pagingActiveText}>⬤</Text>
          </View>
        </View>
      </>
    );
  }
}
const styles = {
  pagingText: {
    fontSize: width / 30,
    color: '#888',
    margin: 3,
  },
  pagingActiveText: {
    fontSize: width / 30,
    color: '#fff',
    margin: 3,
  },
};
