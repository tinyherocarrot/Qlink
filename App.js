import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styled from 'styled-components/native'
import LinearGradient from "react-native-linear-gradient";
import { Tabs } from "./config/router";

const StyledGradient = styled(LinearGradient)`
  flex: 1;
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
    return <StyledGradient colors={["#33ccff", "#9900cc"]} start={{ x: 1.0, y: 0.15 }} end={{ x: 0.5, y: 1.0 }}>
        <StyledInput style={{ height: 40 }} placeholder="Type here to translate!" onChangeText={text => this._onChangeText(text)} />
        <Text>{}</Text>
        <StyledButton title="Submit" onPress={() => this._onPressButton} />
        <Tabs/>
      </StyledGradient>;
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
