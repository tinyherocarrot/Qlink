import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  background-color: linear-gradient(to bottom left, #33ccff 5%, #9900cc 100%);
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.TextInput`
  background-color: gainsboro;
  opacity: 0.5;
  padding: 12px
`
const StyledButton = styled.Button`

`

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  _onChangeText(text) {
    this.setState({ text });
  }
  _onPressButton() {
    Alert.alert( this.state.text
        .toUpperCase()
        .split("")
        .join(" "));
  }
  render() {
    return <StyledView>
        <StyledInput style={{ height: 40 }} placeholder="Type here to translate!" onChangeText={(text) => this._onChangeText(text)} />
        <Text>{}</Text>
        <StyledButton title='Submit' onPress={() => this._onPressButton}/>
        
      </StyledView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
