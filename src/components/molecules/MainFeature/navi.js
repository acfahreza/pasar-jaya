

import React from 'react';
import { Text, View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const MainFeature = ({onPress}) => {

  return (
    <>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 18, color: '#827878'}}>Tempat Usaha</Text>
        {/* <Text style={{ fontSize: 18, color: '#827878',textAlign:'center',fontWeight:'bold'}}>Tempat Usaha</Text> */}
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0, marginLeft: 15, marginRight: 25, marginBottom: -8, top: -1 }}>

        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap', margin: 5 }}>

          <View style={{ width: '25%', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#827878' ,marginTop:-8}}>KIOS</Text>
          <TouchableOpacity onPress={onPress}>  
            <View style={{ width: 100, height: 100, marginTop:1}}>
            <Image source={require('../../../assets/logo/Picture1.jpg')} style={{ height: 100, width: '100%', borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} />
            </View>
          </TouchableOpacity>
          <View style={{backgroundColor:'blue',borderTopRightRadius:10,borderTopLeftRadius:10,borderColor:'blue',borderWidth:1,marginTop:5}}>
              <Text style={{ width: 100, textAlign: 'center', fontSize: 18, color: '#FFFFFF', fontWeight: 'bold', marginBottom:-2}}>50</Text>
              <Text style={{ textAlign: 'center', color: '#FFFFFF',fontWeight:'bold' }}>Available</Text>
              
          </View>
          </View>
          <View style={{ width: '25%', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#827878' ,marginTop:-8}}>LOS</Text>
          <TouchableOpacity onPress={onPress}>  
            <View style={{ width: 100, height: 100, marginTop:1}}>
            <Image source={require('../../../assets/logo/Picture2.jpg')} style={{ height: 100, width: '100%', borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} />
            </View>
          </TouchableOpacity>
          <View style={{backgroundColor:'#f8a541',borderTopRightRadius:10,borderTopLeftRadius:10,borderColor:'#f8a541',borderWidth:1,marginTop:5}}>
              <Text style={{ width: 100, textAlign: 'center', fontSize: 18, color: '#FFFFFF', fontWeight: 'bold', marginBottom:-2}}>50</Text>
              <Text style={{ textAlign: 'center', color: '#FFFFFF',fontWeight:'bold' }}>Available</Text>
          </View>
          </View>
          <View style={{ width: '25%', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#827878' ,marginTop:-8}}>COUNTER</Text>
          <TouchableOpacity onPress={onPress}>  
            <View style={{ width: 100, height: 100, marginTop:1}}>
            <Image source={require('../../../assets/logo/Picture3.jpg')} style={{ height: 100, width: '100%', borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} />
            </View>
          </TouchableOpacity>
          <View style={{backgroundColor:'#00a24d',borderTopRightRadius:10,borderTopLeftRadius:10,borderColor:'#00a24d',borderWidth:1,marginTop:5}}>
              <Text style={{ width: 100, textAlign: 'center', fontSize: 18, color: '#FFFFFF', fontWeight: 'bold', marginBottom:-2}}>50</Text>
              <Text style={{ textAlign: 'center', color: '#FFFFFF',fontWeight:'bold' }}>Available</Text>
          </View>
          </View>
          {/* <View style={{ width: '25%', alignItems: 'center' }}>
          <TouchableOpacity onPress={onPress}>  
            <View style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7941D', }}>
              <Text style={{ width: 100, textAlign: 'center', fontSize: 40, color: '#FFFFFF', fontWeight: 'bold' }}>50</Text>
              <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>Available</Text>
            </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6, color: '#827878' }}>LOOS</Text>
          </View>
          <View style={{ width: '25%', alignItems: 'center' }}>
          <TouchableOpacity onPress={onPress}>  
            <View style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#59BC62', }}>
              <Text style={{ width: 100, textAlign: 'center', fontSize: 40, color: '#FFFFFF', fontWeight: 'bold' }}>50</Text>
              <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>Available</Text>
            </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6, color: '#827878' }}>COUNTER</Text>
          </View> */}

        </View>

      </View>
    </>
  )
}


export default MainFeature;