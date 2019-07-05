import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme.style';

class Separator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container} />
    );
  }
}

export default Separator;

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: '100%',
    backgroundColor: theme.SEPARATOR_COLOR,
  },
});
