import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class MainFeature extends Component {
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000,
  };

  handleSlide = (type) => {
    let {
      active,
      xTabOne,
      xTabTwo,
      translateX,
      translateXTabOne,
      translateXTabTwo,
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100,
          useNativeDriver: true,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
      ]);
    }
  };

  render() {
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY,
    } = this.state;
    return (
      <View style={{flex: 1,}}>
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 18, color: '#827878'}}>Tempat Usaha</Text>
          {/* <Text style={{ fontSize: 18, color: '#827878',textAlign:'center',fontWeight:'bold'}}>Tempat Usaha</Text> */}
        </View>
        <View
          style={{
            width: '95%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          
          <View style={{marginLeft:5,marginRight:5,marginTop:5}}>
          <ScrollView style={{maxHeight:180,}}>
           
            <Animated.View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                transform: [
                  {
                    translateX: translateXTabOne,
                  },
                ],
              }}
              onLayout={(event) =>
                this.setState({
                  translateY: event.nativeEvent.layout.height,
                })
              }>
             
              <View>
                <Image
                  source={require('../../../assets/logo/Picture1.jpg')}
                  style={{
                    width: 350,
                    height: 180,

                  }}
                  />
              </View>
              <View style={{
                // borderTopLeftRadius:25,borderTopRightRadius:25,
                // backgroundColor:'blue', opacity: 0.75, 
                position:'absolute',flex:1,width:'100%',bottom:0}}>
<Text style={{textAlign: 'center', fontSize: 25, color: 'white', fontWeight: 'bold', marginBottom:-4}}>20</Text>
<Text style={{ textAlign: 'center',fontSize: 18, color: 'white',fontWeight:'bold' }}>Available</Text>
</View>
            </Animated.View>

            <Animated.View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                transform: [
                  {
                    translateX: translateXTabTwo,
                  },
                  {
                    translateY: -translateY,
                  },
                ],
              }}>
             
              <View style={{marginTop:0}}>
                <Image
                  source={require('../../../assets/logo/Picture2.jpg')}
                  style={{
                    width: 350,
                    height: 180,

                  }}
                  />
              </View>
              <View style={{
                // borderTopLeftRadius:25,borderTopRightRadius:25,
                // backgroundColor:'blue', opacity: 0.75, 
                position:'absolute',flex:1,width:'100%',bottom:0}}>
<Text style={{textAlign: 'center', fontSize: 25, color: 'white', fontWeight: 'bold', marginBottom:-4}}>40</Text>
<Text style={{ textAlign: 'center',fontSize: 18, color: 'white',fontWeight:'bold' }}>Available</Text>
</View>
            </Animated.View>
          </ScrollView>
            </View>

            <View
            style={{
              flexDirection: 'row',
              marginBottom: 5,
              marginTop: 5,
              marginLeft:5,
              marginRight:5,
              height: 36,
              position: 'relative',
            }}>
            <Animated.View
              style={{
                position: 'absolute',
                width: '50%',
                height: '100%',
                top: 0,
                left: 0,
                backgroundColor: '#007aff',
                borderRadius: 4,
                transform: [
                  {
                    translateX,
                  },
                ],
              }}
            />
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#007aff',
                borderRadius: 4,
                borderRightWidth: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
              onLayout={(event) =>
                this.setState({
                  xTabOne: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({active: 0}, () => this.handleSlide(xTabOne))
              }>
              <Text
                style={{
                  color: active === 0 ? '#fff' : '#007aff',
                }}>
                KIOS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#007aff',
                borderRadius: 4,
                borderLeftWidth: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              onLayout={(event) =>
                this.setState({
                  xTabTwo: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({active: 1}, () => this.handleSlide(xTabTwo))
              }>
              <Text
                style={{
                  color: active === 1 ? '#fff' : '#007aff',
                }}>
                COUNTER
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}
