import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {SearchBar,Header,} from 'react-native-elements';
export default class ReadStoryScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            search: '',
          };
    }
    updateSearch = (search) => {
        this.setState({ search });
      };
    render(){
        const { search } = this.state;
        return(
         <View>
                 <Header backgroundColor={'#9cb218'}
            centerComponent={{
              text: 'Read Story ',
              style: { color: 'white', fontSize: 20, fontWeight: 'bold' },
            }}/>
                
                <SearchBar
               placeholder="Type Here..."
                onChangeText={this.updateSearch}
            value={search}
            />
            <TouchableOpacity style = {styles.searchButton}>
                <Text style = {styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
                
        </View>
        )
    }
}
const  styles = StyleSheet.create({
   searchButton:{ width:100,
        height:50,
        backgroundColor:'yellow',
        alignItems:'center',
        alignSelf:'center',
        marginTop:20,
   },
   searchButtonText:{
    textAlign:"center",
    alignSelf:'center',
    paddingTop:15,
    fontSize:20,
    fontWeight:'bold',

}
})