import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {data1} from '../../../utils';

const {width} = Dimensions.get('window');
const height = width * 0.6; //60%
// const images = [
//   'https://images.bisnis-cdn.com/posts/2020/05/09/1238284/pasar-jayaok.jpg',
//   'https://cdns.klimg.com/merdeka.com/i/w/news/2020/03/16/1156528/540x270/penutupan-pasar-tradisional-di-jakarta-tunggu-keputusan-anies.jpeg',
//   'https://rumahdijual.com/attachments/bintaro/7249157d1475813530-sewa-over-kredit-kios-pasar-ceger-modern-lokasi-strategis-img_20161006_141607.jpg',
//   'https://rumahdijual.com/attachments/bintaro/2584699d1429087557-kios-pasar-ceger-jurang-mangu-barat-bintaro-tangsel-img-20120611-00396.jpg',
// ];


export default class SewaDetailScreen extends Component {

  state = {
    active: 0,
  };

  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  };
  render() {
    const { navigation,route } = this.props;
    const  Idsewa  = route.params; 
    let  j = route.params.service_id-1;
// console.log(data1[j]);
// console.log(data1[j].ImageData);
    return (
      <>
        <View style={{width, height}}>
          <ScrollView
            pagingEnabled
            horizontal
            onScroll={this.change}
            showsHorizontalScrollIndicator={false}
            style={{width, height}}>
            {data1[j].ImageData.map((image, index) => (
              <Image
                key={index}
                source={{uri: image}}
                style={{width, height, resizeMode: 'cover'}}
              />
            ))}
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
              alignSelf: 'center',
            }}>
            {data1[j].ImageData.map((i, k) => (
              <Text
                key={k}
                style={
                  k == this.state.active
                    ? styles.pagingActiveText
                    : styles.pagingText
                }>
                ⬤
              </Text>
            ))}
          </View>
        </View>

        <ScrollView style={{backgroundColor:'white',marginBottom:20}}>
          
            <View
              style={{
                paddingTop: 16,
                paddingBottom: 20,
                marginRight:5
                
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginLeft:5,
                  marginBottom:5,
                }}>
                 Deskripsi Sewa : {data1[j].title}
                </Text> 
                <Text style={{fontSize: 14,fontWeight: 'bold',color: '#545454',marginLeft: 10,}}>
               Untuk memakai tempat usaha milik Perusahaan Umum Daerah Pasar Jaya Di :
                {/* {route.params.title} */}
              </Text>
              <View style={{marginLeft:10}}>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:14,color:'#545454',}} >Pasar</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'flex-start',width:10}}>
                        <Text style={{fontSize:14,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#545454',}} >{data1[j].pasar}</Text>
                    </View>
                </View>
                </View>
                <View style={{marginLeft:10}}>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:14,color:'#545454',}} >Tempat Usaha</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'flex-start',width:10}}>
                        <Text style={{fontSize:14,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#545454',}} >{data1[j].title}</Text>
                    </View>
                </View>
                </View>
                <View style={{marginLeft:10}}>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:14,color:'#545454',}} >Klasifikasi Pasar</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'flex-start',width:10}}>
                        <Text style={{fontSize:14,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#545454',}} >{data1[j].description}</Text>
                    </View>
                </View>
                </View>
                <View style={{marginLeft:10}}>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:14,color:'#545454',}} >Luas</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'flex-start',width:10}}>
                        <Text style={{fontSize:14,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#545454',}} >{data1[j].luas}</Text>
                    </View>
                </View>
                </View>

              <Text style={{fontSize: 14,fontWeight: 'bold',color: '#545454',marginLeft: 10, marginTop:10,marginBottom:5}}>
               Dengan Bangunan :
              </Text>
              <View style={{marginLeft:10}}>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:14,color:'#545454',}} >A. Atap</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'flex-start',width:10}}>
                        <Text style={{fontSize:14,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#545454',}} >{data1[j].atap}</Text>
                    </View>
                </View>
                </View>
                <View style={{marginLeft:10}}>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:14,color:'#545454',}} >B. Tiang</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'flex-start',width:10}}>
                        <Text style={{fontSize:14,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#545454',}} >{data1[j].tiang}</Text>
                    </View>
                </View>
                </View>
                <View style={{marginLeft:10}}>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:14,color:'#545454',}} >C. Dinding</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'flex-start',width:10}}>
                        <Text style={{fontSize:14,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#545454',}} >{data1[j].dinding}</Text>
                    </View>
                </View>
                </View>
                <View style={{marginLeft:10}}>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:14,color:'#545454',}} >D. Lantai</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'flex-start',width:10}}>
                        <Text style={{fontSize:14,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#545454',}} >{data1[j].lantai}</Text>
                    </View>
                </View>
                </View>
                  {/* PART3 */}
                <View style={{marginLeft:10,marginTop:10}}>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:14,color:'#545454',fontWeight:'bold'}} >Jenis Jualan</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'flex-start',width:10}}>
                        <Text style={{fontSize:14,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#545454',}} >{data1[j].jenis}</Text>
                    </View>
                </View>
                </View>
                <View style={{marginLeft:10}}>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:14,color:'#545454',fontWeight:'bold'}} >Macam Dagangan</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'flex-start',width:10}}>
                        <Text style={{fontSize:14,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#545454',}} >{data1[j].macam}</Text>
                    </View>
                </View>
                </View>
              
              <TouchableOpacity
              onPress={() => 
              this.props.navigation.navigate('Form Sewa',{
                ItemId:route.params.service_id
              })}>
            <View
              style={{
                height: 45,
                flexDirection: 'row',
                backgroundColor: '#f8a541',
                marginLeft: 40,
                marginRight: 40,
                borderRadius: 25,
                marginTop:20
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'white',
                    top: -2,
                  }}>
                 Sewa Tempat
                </Text>
              </View>
            </View>
          </TouchableOpacity>
             
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
