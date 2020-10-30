import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-datepicker'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {date: ''};
  }

  selectDate = (date) => {
    this.setState({date: date});
  }

  render () {
    return (    
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>AirplaneSafe.</Text>
        <Text style={{fontSize: 20}}>Passagens Áreas.</Text>
        <TextInput 
          style={styles.input} 
          placeholder="De: São Paulo"
          clearButtonMode="always" /> 
          <TextInput 
          style={styles.input} 
          placeholder="Para: Rio de Janeiro"
          clearButtonMode="always" /> 
        <Text style={{fontSize: 20}}>Data de partida.</Text>   
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          format="DD-MM-YYYY"
          minDate="26-10-2020"
          maxDate="31-12-2021"
          onDateChange={this.selectDate} 
        />  
        <Text style={{fontSize: 20}}>Data de chegada.</Text>   
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          format="DD-MM-YYYY"
          minDate="26-10-2020"
          maxDate="31-12-2021"
          onDateChange={this.selectDate} 
        />  
        <Text style={styles.date} >{this.state.date}</Text>
        <TouchableOpacity style={styles.button}> 
          <Text style={styles.buttonText} onClick={
            function() { alert('click');}
          }> Pesquisar Passagens</Text> 
        </TouchableOpacity> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 35,
    backgroundColor: '#B0C4DE',
    alignItems: 'center',
  },
  input: {
    marginTop: 5,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 20,
    alignItems: 'stretch'
  },
  date: {
    borderRadius: 10
  },
  button: {
    height: 80,
    backgroundColor: '#4682B4',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
})