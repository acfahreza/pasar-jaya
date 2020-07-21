import React from 'react';
import { StyleSheet, ScrollView, View, Text, Styles, Image, TextInput, Platform, TouchableOpacity } from 'react-native';


const ScrollableItem = ({ onPress }) => {
  return (
    <>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 18, color: '#827878' }}>Rekomendasi Sewa</Text>
      </View>
      <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: '100%', flexWrap: 'wrap' ,marginRight:10,marginLeft:10}}>

        <TouchableOpacity onPress={onPress}>
          <View style={{ marginRight:5, marginBottom: 15, width: 170 }}>
            <View style={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}>
              <Image source={{uri: 'https://palangkaraya.go.id/wp-content/uploads/2019/01/IMG-20190125-WA0023.jpg'}} style={{ height: 170, borderRadius: 6, width: '100%' }} />
              <View style={{ width: '100%', height: '65%', position: 'absolute', left: 0, top: 0, opacity: 0.15, borderRadius: 6 }}></View>
              <Text style={{ fontSize: 20, color: '#8C8585' }}>Counter</Text>
              <Text style={{ fontSize: 10, color: '#A8A8A8', top: -2, marginBottom: 5 }}>Di pasar manggarai</Text>
              <Text style={{ fontSize: 12, color: '#8C8585' }}>Luas              :  2 X 2 M</Text>
              <Text style={{ fontSize: 12, color: '#8C8585' }}>Jenis Jualan : Klontong</Text>
              <Text style={{ fontSize: 20, color: '#555555', fontWeight: 'bold' }}>Rp 2.300.000</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
          <View style={{marginBottom: 15, width: 170 }}>
            <View style={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}>
              <Image source={{uri: 'https://palangkaraya.go.id/wp-content/uploads/2019/01/IMG-20190125-WA0023.jpg'}} style={{ height: 170, borderRadius: 6, width: '100%' }} />
              <View style={{ width: '100%', height: '65%', position: 'absolute', left: 0, top: 0, opacity: 0.15, borderRadius: 6 }}></View>
              <Text style={{ fontSize: 20, color: '#8C8585' }}>Counter</Text>
              <Text style={{ fontSize: 10, color: '#A8A8A8', top: -2, marginBottom: 5 }}>Di pasar manggarai</Text>
              <Text style={{ fontSize: 12, color: '#8C8585' }}>Luas              :  2 X 2 M</Text>
              <Text style={{ fontSize: 12, color: '#8C8585' }}>Jenis Jualan : Klontong</Text>
              <Text style={{ fontSize: 20, color: '#555555', fontWeight: 'bold' }}>Rp 2.300.000</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
          <View style={{marginBottom: 15, width: 170 }}>
            <View style={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}>
              <Image source={{uri: 'https://palangkaraya.go.id/wp-content/uploads/2019/01/IMG-20190125-WA0023.jpg'}} style={{ height: 170, borderRadius: 6, width: '100%' }} />
              <View style={{ width: '100%', height: '65%', position: 'absolute', left: 0, top: 0, opacity: 0.15, borderRadius: 6 }}></View>
              <Text style={{ fontSize: 20, color: '#8C8585' }}>Counter</Text>
              <Text style={{ fontSize: 10, color: '#A8A8A8', top: -2, marginBottom: 5 }}>Di pasar manggarai</Text>
              <Text style={{ fontSize: 12, color: '#8C8585' }}>Luas              :  2 X 2 M</Text>
              <Text style={{ fontSize: 12, color: '#8C8585' }}>Jenis Jualan : Klontong</Text>
              <Text style={{ fontSize: 20, color: '#555555', fontWeight: 'bold' }}>Rp 2.300.000</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onPress}>
          <View style={{marginBottom: 15, width: 170 }}>
            <View style={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}>
              <Image source={{uri: 'https://palangkaraya.go.id/wp-content/uploads/2019/01/IMG-20190125-WA0023.jpg'}} style={{ height: 170, borderRadius: 6, width: '100%' }} />
              <View style={{ width: '100%', height: '65%', position: 'absolute', left: 0, top: 0, opacity: 0.15, borderRadius: 6 }}></View>
              <Text style={{ fontSize: 20, color: '#8C8585' }}>Counter</Text>
              <Text style={{ fontSize: 10, color: '#A8A8A8', top: -2, marginBottom: 5 }}>Di pasar manggarai</Text>
              <Text style={{ fontSize: 12, color: '#8C8585' }}>Luas              :  2 X 2 M</Text>
              <Text style={{ fontSize: 12, color: '#8C8585' }}>Jenis Jualan : Klontong</Text>
              <Text style={{ fontSize: 20, color: '#555555', fontWeight: 'bold' }}>Rp 2.300.000</Text>
            </View>
          </View>
        </TouchableOpacity>

        
        



      </View>

      {/* <TouchableOpacity title="Dashboard" onPress={() => handleGoTo('HomeScreen')}>
        <View style={{ height: 45, flexDirection: 'row', backgroundColor: '#f8a541', marginLeft:40,marginRight:40, marginBottom:20,borderRadius:25 }}>
           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30,fontWeight:'bold', color: 'white', top:-2 }}>Simpan</Text>
          </View>
        </View> 
    </TouchableOpacity> */}
    </>
  )
}

export default ScrollableItem;