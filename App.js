import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    return(
      <View>        
        <Text style={{color: '#480082', fontSize: 25, margin: 10}}>Álbums em destaque</Text>       
        <Image 
        source={{uri: 'https://cdn-images.dzcdn.net/images/cover/82db4c0f8e9412cafb1cd765b076d58c/500x500.jpg'}}
        style={{width: 300, height: 300}}
        />
        <Text>GNX</Text>
        <Text>Kendrick Lamar</Text>

        <Image 
        source={{uri: 'https://upload.wikimedia.org/wikipedia/en/6/6a/PartyNextDoor_and_Drake_-_Some_Sexy_Songs_4_U.png'}}
        style={{width: 300, height: 300}}
        />
        <Text>$ome $exy $ongs 4 U</Text>
        <Text>PartyNextDoor & Drake</Text>

         <Image 
        source={{uri: 'https://i.scdn.co/image/ab67616d0000b2737e7f1d0bdb2bb5a2afc4fb25'}}
        style={{width: 300, height: 300}}
        />
        <Text>Hurry Up Tomorrow </Text>
        <Text>The Weeknd</Text>
      </View>
        
                
    );
  }
}
export default App;