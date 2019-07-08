import React, { Component } from "react";
import { Image, View, StyleSheet, Text, Dimensions } from "react-native";
import PropTypes from "prop-types";
import theme from "../styles/theme.style";

class EmptyContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/empty.png")}
          style={styles.icon}
        />
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
      </View>
    );
  }
}

export default EmptyContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  title: {
    fontSize: theme.FONT_SIZE_L,
    fontWeight: theme.FONT_WEIGHT_SEMIBOLD,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: theme.FONT_SIZE_M,
    textAlign: 'center',
  },
});

EmptyContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

EmptyContent.defaultProps = {
  title: 'There is nothing to display yet',
  subtitle: 'When something is fetched, it will appear here.'
};
