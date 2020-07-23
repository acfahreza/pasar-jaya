import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';

 const {width} = Dimensions.get('window');

export default class MainFeature extends Component {
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    xTabThree: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateXTabThree: new Animated.Value(width),
    translateY:  -1000,
  }
  

  handleSlide = type => {
    let {
      active,xTabOne, xTabTwo, xTabThree,translateX,
      translateXTabOne,
      translateXTabTwo,
      translateXTabThree,
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
              Animated.spring(translateXTabThree, {
                toValue: width,
                duration: 100,
                useNativeDriver: true,
              }).start(),
            ]);
          }else if(active == 1){
            Animated.parallel([
              Animated.spring(translateXTabOne, {
                toValue: width,
                duration: 100,
                useNativeDriver: true,
              }).start(),
              Animated.spring(translateXTabTwo, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true,
              }).start(),
              Animated.spring(translateXTabThree, {
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
                toValue: -width,
                duration: 100,
                useNativeDriver: true,
              }).start(),
             Animated.spring(translateXTabThree, {
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
      xTabThree,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateXTabThree,
      translateY,
    } = this.state;

    return (
      <View style={{flex: 1,}}>
          <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 18, color: '#827878'}}>Tempat Usaha</Text>
          {/* <Text style={{ fontSize: 18, color: '#827878',textAlign:'center',fontWeight:'bold'}}>Tempat Usaha</Text> */}
        </View>
        <View style={{ width: '95%',marginLeft: 'auto',marginRight: 'auto',}}>    
           <View style={{flexDirection:'row',
              marginBottom: 5,
              marginTop: 5,
              marginLeft:5,
              marginRight:5,
              height: 36,
              position: 'relative'}}>
            <TouchableOpacity style={styles.tab}
            onLayout={event=>this.setState({xTabOne:event.nativeEvent.layout.x})}
            onPress={()=>this.setState({active:0},()=>this.handleSlide(xTabOne))}>
              <Animated.View style={{
                position:'absolute',width:'100%',height:'100%',top:0,left:0,
                backgroundColor:'#007aff',borderRadius:4,transform:[{translateX}]}}
                />
               <Text style={{color: active === 0  ? '#FFF' : '#007aff'}}> KIOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}
             onLayout={event=>this.setState({xTabTwo:event.nativeEvent.layout.x})}
             onPress={()=>this.setState({active:1},()=>this.handleSlide(xTabTwo))}>
              <Text style={{color: active === 1 ?'#FFF' : '#007aff'}}> LOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}
             onLayout={event=>this.setState({xTabThree:event.nativeEvent.layout.x})}
             onPress={()=>this.setState({active:2},()=>this.handleSlide(xTabThree))}>
              <Text style={{color: active === 2 ? '#FFF' : '#007aff'}}> COUNTER</Text>
            </TouchableOpacity>
            </View>

            <ScrollView style={{maxHeight:180}}>
            <Animated.View style={{marginTop:0,transform:[{translateX:translateXTabOne}]}}
           onLayout={(event) =>
            this.setState({
              translateY: event.nativeEvent.layout.height})}>
                <Image
                  source={require('../../../assets/logo/Picture1.jpg')}
                  style={{width: 350, height: 180 }}/>
              <View style={{
                position:'absolute',flex:1,width:'100%',bottom:0}}>
            <Text style={{textAlign: 'center', fontSize: 25, color: 'white', fontWeight: 'bold', marginBottom:-4}}>40</Text>
            <Text style={{ textAlign: 'center',fontSize: 18, color: 'white',fontWeight:'bold' }}>Available</Text>
            </View>
              </Animated.View>
            <Animated.View style={{marginTop:0,transform:[{translateX:translateXTabTwo},{translateY: -translateY} ]}}>
                <Image
                  source={require('../../../assets/logo/Picture2.jpg')}
                  style={{width: 350, height: 180 }}/>
              <View style={{
                position:'absolute',flex:1,width:'100%',bottom:0}}>
            <Text style={{textAlign: 'center', fontSize: 25, color: 'white', fontWeight: 'bold', marginBottom:-4}}>10</Text>
            <Text style={{ textAlign: 'center',fontSize: 18, color: 'white',fontWeight:'bold' }}>Available</Text>
            </View>
              </Animated.View>
            <Animated.View style={{marginTop:0,transform:[{translateX:translateXTabThree},{translateY: -translateY},{translateY: -translateY}]}}
             onLayout={(event) =>
              this.setState({
                translateY: event.nativeEvent.layout.height})}>
                <Image
                  source={require('../../../assets/logo/Picture3.jpg')}
                  style={{width: 350, height: 180 }}/>
              <View style={{
                position:'absolute',flex:1,width:'100%',bottom:0}}>
            <Text style={{textAlign: 'center', fontSize: 25, color: 'white', fontWeight: 'bold', marginBottom:-4}}>20</Text>
            <Text style={{ textAlign: 'center',fontSize: 18, color: 'white',fontWeight:'bold' }}>Available</Text>
            </View>
              </Animated.View>
            </ScrollView>
          </View>
        </View>

    );
  }
}
const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#007aff',
    borderRadius: 4,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  

});
