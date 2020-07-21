import React from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity, View, Image
} from 'react-native';

// import Loading from 'react-native-whc-loading';
// import ProgressBar from 'react-native-progress/Bar';
// import Image from 'react-native-image-progress';


const PengisianDetailScreen = ({ navigation,route }) => {

    return (
        <>
            <ScrollView style={{backgroundColor:'white',marginBottom:17 }}>

                <View style={{ paddingTop: 17, paddingBottom: 17, borderBottomColor: '#E8E9ED', borderBottomWidth: 0, marginLeft: 10, marginRight: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', }}>Details Form{route.params.ItemId} </Text>

                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                        <Text style={{fontSize:17,color:'#545454',}} >NIK</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'center',width:10}}>
                        <Text style={{fontSize:17,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:17,color:'#545454',}} >{route.params.nik}</Text>
                        <View style={{display:'none'}}>
                            <TextInput value={route.params.nik} editable={false}/>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                        <Text style={{fontSize:17,color:'#545454',}} >Nama Lengkap</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'center',width:10}}>
                        <Text style={{fontSize:17,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:17,color:'#545454',}} >{route.params.name}</Text>
                        <View style={{display:'none'}}>
                            <TextInput value={route.params.name} editable={false}/>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                        <Text style={{fontSize:17,color:'#545454',}} >Tempat, Tanggal Lahir</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'center',width:10}}>
                        <Text style={{fontSize:17,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:17,color:'#545454',}} >{route.params.tempat_lahir}</Text>
                        <View style={{display:'none'}}>
                            <TextInput value={route.params.temapat_lahir} editable={false}/>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                        <Text style={{fontSize:17,color:'#545454',}} >Alamat</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'center',width:10}}>
                        <Text style={{fontSize:17,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:17,color:'#545454',}} >{route.params.alamat}</Text>
                        <View style={{display:'none'}}>
                            <TextInput value={route.params.alamat} editable={false}/>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                        <Text style={{fontSize:17,color:'#545454',}} >Nomor Hp</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'center',width:10}}>
                        <Text style={{fontSize:17,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:17,color:'#545454',}} >{route.params.phone}</Text>
                        <View style={{display:'none'}}>
                            <TextInput value={route.params.phone} editable={false}/>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                        <Text style={{fontSize:18,color:'#545454',}} >Foto Ktp</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'flex-start',width:10}}>
                        <Text style={{fontSize:17,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    {/* <Text style={{fontSize:17,color:'#545454',}} >{route.params.name}</Text> */}
                        <View style={{display:'none'}}>
                            <TextInput value={route.params.ktp_image} editable={false}/>
                        </View>
                    </View>
                </View>

                <View style={{backgroundColor:'transparent'}}>
                <Image
                    source = {{ uri: route.params.ktp_image}}
                style={{ width: '100%', height: 175, resizeMode: "cover", alignContent: 'center', alignSelf: 'center', justifyContent: 'center',borderRadius:5,marginBottom:5}} />
                </View>

                {/* <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                        <Text style={{fontSize:17,color:'#545454',}} >Foto Selfie Dengan Ktp</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'center',width:10}}>
                        <Text style={{fontSize:17,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:17,color:'#545454',}} >{route.params.name}</Text>
                        <View style={{display:'none'}}>
                            <TextInput value={route.params.nik} editable={false}/>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:'transparent'}}>
                <Image
                source = {{ uri: route.params.selfie}}
                style={{ width: '100%', height: 175, resizeMode: "cover", alignContent: 'center', alignSelf: 'center', justifyContent: 'center',borderRadius:5 }} />
                </View> */}

                {/* <View style={{flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
    <Text style={{fontSize:17,color:'#545454',}} >Foto Kartu Keluarga</Text>
                        </View>
                        <View style={{lignItems:'flex-start',justifyContent:'center',width:10}}>
                        <Text style={{fontSize:17,color:'#545454',}} >:</Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                    <Text style={{fontSize:17,color:'#545454',}} ></Text>
                        <View style={{display:'none'}}>
                            <TextInput value={route.params.nik} editable={false}/>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:'transparent'}}>
                <Image
                source={{ uri: route.params.kk}}
                style={{ width: '100%', height: 175, resizeMode: "cover", alignContent: 'center', alignSelf: 'center', justifyContent: 'center',borderRadius:5 }} />
                </View> */}

                        
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'red', marginBottom: -5,marginTop:10}}>Catatan*</Text>
                <Text style={{ fontSize: 13, color: 'black', margin: 10 }}>Dengan ini saya menyatakan dengan yang sebenar benarnya data yang saya berikan</Text>
                </View>

                <TouchableOpacity onPress={() => alert('path : '+JSON.stringify(route.params.selfie))}>
                    <View style={styles.btn}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', top: -2}}>Kirim</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
    )
}

const styles = {
    btn: {
        height: 45, flexDirection: 'row', backgroundColor: '#f8a541', marginLeft: 40, marginRight: 40, marginBottom: 17, borderRadius: 25 
        

    },
}
// _saveData = async () => {
//     let formDataPost = new FormData();
//     const { avatarSrc, formData } = this.state ;

//     this.refs.loading.show();

//     for(let p in formData) formDataPost.append(p,formData[p]);
//     //simpan data
//     formDataPost.append('photo',{
//       uri:avatarSrc.path,
//       type:avatarSrc.mime,
//       name:'photo-ktp'
//     })
//     try {
//       await fetch(
//         'http://192.178.1.8/Workspace/ReactNative/Crud/server/conn.php',
//         {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'multipart/form-data',
//           },
//           // body: JSON.stringify({
//           //   firstParam: 'yourValue',
//           //   secondParam: 'yourOtherValue'
//           // })
//           body: formDataPost,
//         },
//       )
//         .then((response) => response.json())
//         .then((responseJson) => {
//           // return responseJson.
//           setTimeout(() => {
//             this.refs.loading.close();
//             alert(JSON.stringify(responseJson));
//           }, 1700);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } catch (error) {
//       this.refs.loading.close();
//       alert(error);
//     }
//   };
export default PengisianDetailScreen;
