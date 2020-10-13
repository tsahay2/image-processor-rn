import React, {Component} from 'react';
import {Dimensions, ImageBackground, TouchableOpacity, View,Alert} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import {Camera} from "expo-camera";

class SendImageComponent extends Component{

    constructor(props) {
        super(props);
        this.sendPicToServer = this.sendPicToServer.bind(this);
        this.state = {
            uploadStatus : '',
        }
    }

    render(){
        console.log('Upload state is '+this.props);
        return(
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={{flex: 1, width: getWidth(), height: getHeight()}}
                    source={{uri: this.props.uri}}
                >
                    {  this.state.uploadStatus === 'true'?Alert.alert(
                    "Susu picture uploaded",
                    "Abh susu ka test hoga",
                    [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                    ):null
                    }
                    <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 30}}>

                    <TouchableOpacity
                    style={{
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                        marginLeft: getWidth()/2-40,
                        marginBottom: 20
                    }}
                    onPress = {() => this.sendPicToServer(this.props.uri)}
                    >
                        <FontAwesome name="send" size={24} color="black" />
                    </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    sendPicToServer =  (uri) => {

        let localUri = uri;
        let filename = localUri.split('/').pop();

        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        // Upload the image using the fetch and FormData APIs
        let formData = new FormData();
        // Assume "photo" is the name of the form field the server expects
        formData.append('photo', { uri: localUri, name: filename, type });
          fetch("http://192.168.1.43:8080/upload", {
            method: 'POST',
            body: formData,
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res =>{
             this.setState({
                uploadStatus : 'true'
            });
        }).catch(error => {
            this.setState({
                uploadStatus : 'false'
            });
            console.log("Error while uploading image  "+error);
            throw error;

        })



    }
}

export default SendImageComponent;

function getWidth() {
    console.log(Math.round(Dimensions.get('window').width));
    return Math.round(Dimensions.get('window').width);
}

function getHeight() {
    console.log(Math.round(Dimensions.get('window').height));

    return Math.round(Dimensions.get('window').height);
}