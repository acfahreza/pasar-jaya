import React, {useEffect} from 'react';
import {Image, View, Text} from 'react-native';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(
        () => {
            navigation.replace('Dashboard');
        }, 2000);
  });
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#ffff'}}>
        <View
          style={{
            backgroundColor: 'red',
            height: 100,
            flexDirection: 'row',
            
          }}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 80, width: 80,marginLeft:-70}}
              source={require('../../../assets/logo/Logo.png')}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 65, width: 165,marginLeft:-50,marginTop:-10}}
              source={require('../../../assets/logo/pem.png')}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -100,
          }}>
          <Image
            source={require('../../../assets/logo/LogoPasar.png')}
            style={{marginBottom: 80, marginLeft: -160}}
          />
          <Image
            source={require('../../../assets/logo/Pasar-Jaya.png')}
            style={{position: 'absolute'}}
          />
        </View>
      </View>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <Image
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
            width: '100%',
          }}
          source={require('../../../assets/logo/Footer.png')}
        />
      </View>
    </>
  );
};

export default SplashScreen;
