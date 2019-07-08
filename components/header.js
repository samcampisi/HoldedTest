import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../styles/theme.style';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.titles.map(e => <Text style={styles.headerText} key={e}>{e}</Text>)
        }
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 60,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: theme.FONT_WEIGHT_SEMIBOLD,
  },
});

Header.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
