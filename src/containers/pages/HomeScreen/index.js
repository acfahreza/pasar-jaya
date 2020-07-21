import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';
import SearchFeature from '../../../components/molecules/SearchFeature';
import {data1} from '../../../utils';

const HomeScreen = ({navigation}) => {
  {
    /* Rekomendasi Sewa */
  }
  const type = 'Kios';
  const listItems = data1.map((data, index) => (
    <View style={{marginRight: 5, marginBottom: 15, width: 170}} key={index}>
      <TouchableOpacity
        onPress={
          () =>
            navigation.navigate('Sewa Detail', {
              service_id: data.id,
              title: data.title,
            })
          // alert('ID : ' + data.id)
        }>
        <View style={{marginLeft: 5, marginRight: 5, marginTop: 5}}>
          <Image
            source={{uri: data.titleImage}}
            style={{height: 170, borderRadius: 6, width: '100%'}}
          />
          <View
            style={{
              width: '100%',
              height: '65%',
              position: 'absolute',
              left: 0,
              top: 0,
              opacity: 0.15,
              borderRadius: 6,
            }}></View>
          <Text style={{fontSize: 20, color: '#8C8585'}}>{data.title}</Text>
          <Text
            style={{fontSize: 10, color: '#A8A8A8', top: -2, marginBottom: 5}}>
            Di {data.description}
          </Text>
          <Text style={{fontSize: 12, color: '#8C8585'}}>
            Luas : {data.luas}
          </Text>
          <Text style={{fontSize: 12, color: '#8C8585'}}>
            Jenis Jualan : {data.jenis}
          </Text>
          <Text style={{fontSize: 20, color: '#555555', fontWeight: 'bold'}}>
            Rp {data.harga}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  ));
  {
    /* End Rekomendasi Sewa */
  }

  return (
    <>
      {/* <SearchFeature /> */}
      <View style={{backgroundColor: 'white', marginTop: -10}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 0,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 65, width: 165, marginLeft: 0}}
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
              style={{height: 61, width: 105, marginLeft: 50, marginTop: 10}}
              source={require('../../../assets/logo/se.png')}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'flex-end',
              top: -40,
              marginLeft: -30,
              left: -10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('About')}
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/icon/about.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{marginHorizontal: 15, flexDirection: 'row', paddingTop: 5}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              placeholder="Pencarian"
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 25,
                height: 38,
                fontSize: 18,
                paddingLeft: 38,
                paddingRight: 35,
                backgroundColor: '#ebebeb',
                marginRight: 18,
                marginBottom: 10,
                paddingVertical: 1,
                marginLeft: 10,
                justifyContent: 'center',
                alignContent: 'center',
              }}></TextInput>
            <Image
              source={require('../../../assets/icon/search.png')}
              style={{position: 'absolute', top: 7, left: 18}}
            />
          </View>
        </View>
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <MainFeature onPress={() => navigation.navigate('Kategory')} />
        <View style={{margin: 10}}>
          <Text style={{fontSize: 18, color: '#827878'}}>
            Rekomendasi Sewa {type}
          </Text>
        </View>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
            marginRight: 10,
            marginLeft: 10,
          }}>
          {listItems}
        </View>
      </ScrollView>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <Image
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 28,
            width: '100%',
          }}
          source={require('../../../assets/logo/FooterHome.png')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    fontSize: 20,
    borderColor: 'grey',
    borderRadius: 25,
    paddingVertical: 7,
    paddingHorizontal: 18,

    color: 'green',
  },
});
export default HomeScreen;
