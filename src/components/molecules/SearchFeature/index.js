import React from 'react';
import { Image, TextInput, View, TouchableOpacity,Text} from 'react-native';

const SearchFeature = ({navigation}) => {

  return (
    <View style={{ backgroundColor: 'white',marginTop:-10 }}>
   
       <View
          style={{
            flexDirection: 'row',
            marginTop:0,
          }}>
          
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 65, width: 165,marginLeft:0}}
              source={require('../../../assets/logo/pem.png')}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 61, width: 105,marginLeft:50,marginTop:10}}
              source={require('../../../assets/logo/se.png')}
            />
          </View>
              <View style={{justifyContent:'center',alignSelf:'flex-end',top:-40,marginLeft:-30}}>
              <TouchableOpacity 
             onPress={() => this.props.navigation.navigate('Detail Sewa')}
              style={{flexDirection:'row',alignItems:'flex-end',alignSelf:'center',}}>  
              <Image source={require('../../../assets/icon/about.png')} style={{ height: 20, width: 20,left:-10}} />
              </TouchableOpacity>
              </View>
        </View>
      <View style={{ marginHorizontal: 15, flexDirection: 'row', paddingTop: 5 }}>
        <View style={{ position: 'relative', flex: 1 }}>
          <TextInput placeholder="Pencarian" style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 25, height: 38, fontSize: 18, paddingLeft: 38, paddingRight: 35, backgroundColor: '#ebebeb', marginRight: 18, marginBottom: 10, paddingVertical:1,marginLeft: 10,justifyContent:'center',alignContent:'center'}}></TextInput>
          <Image source={require('../../../assets/icon/search.png')} style={{ position: 'absolute', top: 7, left: 18 }} />
        </View>
      </View>
    </View>
  )
}


export default SearchFeature;