import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    return(
      <View>
        <Text style={{color: '#480082', fontSize: 25, margin: 10}}>Aplicação inicial</Text>       
        <Text>Espaço Inicial da Aplicação</Text>
        <Text>Aplicação inicial</Text>
        
        <Image 
        source={{uri: 'https://burst.shopifycdn.com/photos/perfect-yellow-flower.jpg?width=1000&format=pjpg&exif=0&iptc=0'}}
        style={{width: 300, height: 300 }}
        />

      </View>  
                
    );
  }
}
export default App;