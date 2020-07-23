import React,{Component} from 'react';
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


class HomeScreen extends Component {

    state = {
      search: '',
    };
    
    updateSearch = (search) => {
      this.setState({ search });
    };

  render() {
    const { search } = this.state;
    const {navigation} = this.props;
    const type = 'Kios';
    const items = data1.filter((data) => {
      if (search == null) {
         return data;
      }else if (
        data.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.loc.toLowerCase().includes(this.state.search.toLowerCase()) 
      ) {
        return data;
      }
    }).map((data,index) => {
      return (
        <View style={{marginRight: 5, marginBottom: 15, width: 170}} key={index}>
      <TouchableOpacity
        onPress={() =>
            navigation.navigate('Sewa Detail', {
              service_id: data.id,
            })
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
            Di {data.loc}
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
      );
    });

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
            onChangeText={this.updateSearch}
            value={search}
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
              }}
              ></TextInput>
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
          {items}
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

  }

}
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
