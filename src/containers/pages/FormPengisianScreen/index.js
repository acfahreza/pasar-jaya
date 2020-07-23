import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Image,
  Dimensions
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
const { width, height } = Dimensions.get('window');
class FormPengisianScreen extends Component {
  state = {
    formData: {
      nik: '',
      name: '',
      tempat_lahir: '',
      alamat: '',
      phone: '',
    },
    avatarSrc: {},
    avatarSrc1: {},
    avatarSrc2: {},
    isModalVisible: false,
  };
  
  _openCamera = () => {
    ImagePicker.openCamera({
      width:700,
      height:450,
      cropping: true,
      freeStyleCropEnabled: true,
      enableRotationGesture: true,
      includeBase64: true,
    }).then((image) => {
      // console.log(image);
      this.setState({
        avatarSrc:image
      })
      ,this.setState({isModalVisible: !this.state.isModalVisible})
    });
  };
  _openGaleri = () => {
 const {width} = Dimensions.get('window');
 const height = width * 0.5; //60%
    ImagePicker.openPicker({
      // width,
      // height,
      cropping: true,
      freeStyleCropEnabled: true,
      enableRotationGesture: true,
      includeBase64: true,
    }).then((image) => {
      //console.log(image);
      this.setState({
        avatarSrc:image,
      })
      ,this.setState({isModalVisible: !this.state.isModalVisible})
    });
  };

  // _openCamera1 = () => {
  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //     includeBase64: true,
  //   }).then((image) => {
  //     // console.log(image);
  //     this.setState({
  //       avatarSrc1:image
  //     })
  //     ,this.setState({isModalVisible: !this.state.isModalVisible})
  //   });
  // };
  // _openGaleri1 = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //     includeBase64: true,
  //   }).then((image) => {
  //     //console.log(image);
  //     this.setState({
  //       avatarSrc1:image,
  //     })
  //     ,this.setState({isModalVisible: !this.state.isModalVisible})
  //   });
  // };

  // _openCamera2 = () => {
  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //     includeBase64: true,
  //   }).then((image) => {
  //     // console.log(image);
  //     this.setState({
  //       avatarSrc2:image
  //     })
  //     ,this.setState({isModalVisible: !this.state.isModalVisible})
  //   });
  // };
  // _openGaleri2 = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //     includeBase64: true,
  //   }).then((image) => {
  //     //console.log(image);
  //     this.setState({
  //       avatarSrc2:image,
  //     })
  //     ,this.setState({isModalVisible: !this.state.isModalVisible})
  //   });
  // };


  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  // toggleModal1 = () => {
  //   this.setState({isModalVisible: !this.state.isModalVisible});
  // };

  // toggleModal2 = () => {
  //   this.setState({isModalVisible: !this.state.isModalVisible});
  // };


  // CheckTextInput = () => {
  //   //Handler for the Submit onPress
  //   if (this.state.formData.nik != '') {
  //     //Check for the Name TextInput
  //     if (this.state.formData.name != '') {
  //       //Check for the Email TextInput
  //       alert('Success')
  //     } else {
  //       alert('Please Enter Email');
  //     }
  //   } else {
  //     alert('Please Enter Name');
  //   }
  // };

  render() {
    const {
      nik,
      name,
      tempat_lahir,
      alamat,
      phone,
    } = this.state.formData;
const { navigation,route } = this.props;

// const sourceUrl = this.state.avatarSrc.path ? ({uri: this.state.avatarSrc.path}) 
//                 : require('./../../../assets/icon/about.png');
const ktp = this.state.avatarSrc.path;
//const ktp = 'data:'+this.state.avatarSrc.mime+';base64,'+this.state.avatarSrc.data;
const selfie = 'data:'+this.state.avatarSrc1.mime+';base64,'+this.state.avatarSrc1.data;
const kk = 'data:'+this.state.avatarSrc2.mime+';base64,'+this.state.avatarSrc2.data;
    return (
      <>
 {/* Modal */}

<Modal isVisible={this.state.isModalVisible} animationType="fade" transparent={true}
onSwipeComplete={() => setModalVisible(false)}
swipeDirection="left">
<View
style={{
backgroundColor: 'white',
borderRadius:25
}}>
<View style={{margin:20}}>
<Text style={{fontWeight:'bold',fontSize:20,marginBottom:10}}>Pilih Gambar</Text>
<View style={{marginBottom:10}}>
<Button title="Camera" onPress={this._openCamera} />
</View>
<View style={{marginBottom:15}}>
<Button title="Galeri" onPress={this._openGaleri} />
</View>
<TouchableOpacity onPress={this.toggleModal}>
<View style={{alignContent: 'center',alignItems: 'center',backgroundColor:'#ebebeb',paddingVertical:10}}>
<Text style={{fontSize: 16,color: 'blue',}}>KEMBALI</Text>
</View></TouchableOpacity>
</View>
</View>
</Modal>


   
        <ScrollView style={{backgroundColor:'white',marginBottom:20}}>
          <View style={{paddingTop: 1, paddingHorizontal: 16}}>
            <View
              style={{
                paddingTop: 16,
                paddingBottom: 20,
                borderBottomColor: '#E8E9ED',
                borderBottomWidth: 0,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginBottom: 5,
                }}>
                Deskripsi Form :
                {/* {JSON.stringify(this.state.formData)} */}
              </Text>
              <View
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#7A7A7A',
                  marginBottom: 11,
                  marginLeft: 10,
                }}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, color: 'red'}}>
                    Masukan NIK :
                  </Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Masukan NIK Anda"
                    keyboardType="number-pad" maxLength={16}
                    onChangeText={(nik) =>
                      this.setState((prevState) => ({
                        formData: {
                          ...prevState.formData,
                          nik,
                        },
                      }))
                    }
                    value={nik}
                  />
                </View>
              </View>
              <View
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#7A7A7A',
                  marginBottom: 11,
                  marginLeft: 10,
                }}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, color: 'red', marginBottom: 1}}>
                    Nama Lengkap :
                  </Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Masukan Nama Lengkap"
                    onChangeText={(name) =>
                      this.setState((prevState) => ({
                        formData: {
                          ...prevState.formData,
                          name,
                        },
                      }))
                    }
                    value={name}
                  />
                </View>
              </View>
              <View
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#7A7A7A',
                  marginBottom: 11,
                  marginLeft: 10,
                }}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, color: 'red', marginBottom: 1}}>
                    Tempat, Tanggal Lahir :
                  </Text>
                </View>
                <View>
                  <TextInput style={styles.input} 
                  placeholder="Jakarta D-M-Y"
                  onChangeText={(tempat_lahir) =>
                    this.setState((prevState) => ({
                      formData: {
                        ...prevState.formData,
                        tempat_lahir,
                      },
                    }))
                  }
                  value={tempat_lahir}
                   />
                </View>
              </View>
              <View
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#7A7A7A',
                  marginBottom: 11,
                  marginLeft: 10,
                }}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, color: 'red', marginBottom: 1}}>
                    Alamat :
                  </Text>
                </View>
                <View>
                  <TextInput style={styles.input} 
                  placeholder="Masukan Alamat"
                  onChangeText={(alamat) =>
                    this.setState((prevState) => ({
                      formData: {
                        ...prevState.formData,
                        alamat,
                      },
                    }))
                  }
                  value={alamat}
                   />
                </View>
              </View>
              <View
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#7A7A7A',
                  marginBottom: 11,
                  marginLeft: 10,
                }}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, color: 'red', marginBottom: 1}}>
                    Nomor Handphone :
                  </Text>
                </View>
                <View>
                  <TextInput style={styles.input} 
                  placeholder="Masukan Nomor Hp" keyboardType="number-pad" maxLength={13}
                  onChangeText={(phone) =>
                    this.setState((prevState) => ({
                      formData: {
                        ...prevState.formData,
                        phone,
                      },
                    }))
                  }
                  value={phone}
                   />
                </View>
              </View>
              {/* <View
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#7A7A7A',
                  marginBottom: 11,
                  marginLeft: 10,
                }}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, color: 'red', marginBottom: 1}}>
                    Tanggal Lahir :
                  </Text>
                </View>
                <View>
                <DatePicker
                  style={{width: '100%'}}
                  date={tanggal_lahir}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="1980-05-01"
                  maxDate="2021-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      right: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      // marginRight: 36,
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(tanggal_lahir) => {
                    this.setState((prevState) => ({
                      formData: {
                        ...prevState.formData,
                        tanggal_lahir,
                      },
                    }));
                  }}
                /> 
                </View>
              </View>*/}

              <View
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#7A7A7A',
                  marginBottom: 11,
                  marginLeft: 10,
                }}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, color: 'red', marginBottom: 1}}>
                    Foto KTP :
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    paddingVertical: 8,
                    borderRadius: 25,
                    marginTop: 10,
                    borderColor: '#7A7A7A',
                    borderWidth: 1,
                  }}
                  onPress={this.toggleModal} 
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#0D0F65',
                    }}>
                    Pilih Photo
                  </Text>
                </TouchableOpacity>
              </View>

              {/* <View
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#7A7A7A',
                  marginBottom: 11,
                  marginLeft: 10,
                }}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, color: 'red', marginBottom: 1}}>
                    Foto Selfie :
                  </Text>
                </View>

                <TouchableOpacity
                  style={{

                    paddingVertical: 8,
                    borderRadius: 25,
                    marginTop: 10,
                    borderColor: '#7A7A7A',
                    borderWidth: 1,
                  }}
                  onPress={this.toggleModal1} 
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#0D0F65',
                    }}>
                    Pilih Photo
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#7A7A7A',
                  marginBottom: 11,
                  marginLeft: 10,
                }}>
                <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, color: 'red', marginBottom: 1}}>
                    Foto Kartu Keluarga :
                  </Text>
                </View>

                <TouchableOpacity
                  style={{

                    paddingVertical: 8,
                    borderRadius: 25,
                    marginTop: 10,
                    borderColor: '#7A7A7A',
                    borderWidth: 1,
                  }}
                  onPress={this.toggleModa2} 
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#0D0F65',
                    }}>
                    Pilih Photo
                  </Text>
                </TouchableOpacity>
              </View> */}

            
            </View>

            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'red',
                marginBottom: -5,
              }}>
              {/* {route.params.ItemId} */}

              Catatan*
            </Text>
            <Text style={{fontSize: 13, color: 'black', margin: 10}}>
              Dengan ini saya menyatakan dengan yang sebenar benarnya data yang
              saya berikan
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => 
            this.props.navigation.navigate('Form Detail',{
              ItemId:route.params.ItemId,
              nik:nik,
              name:name,
              tempat_lahir:tempat_lahir,
              alamat:alamat,
              phone:phone,
              ktp_image:ktp,
              // selfie:selfie,
              // selfie:kk,
            })
            }
            >
              
            <View
              style={{
                height: 45,
                flexDirection: 'row',
                backgroundColor: '#f8a541',
                marginLeft: 40,
                marginRight: 40,
                marginBottom: 20,
                borderRadius: 25,
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
                  Simpan
                </Text>
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
    );
  }
}

const styles = {
  input: {
    borderWidth: 1,
    fontSize: 20,
    borderColor: 'grey',
    borderRadius: 25,
    paddingVertical: 7,
    paddingHorizontal: 18,
    marginTop: 5,
    color: '#0D0F65',
  },
};
export default FormPengisianScreen;