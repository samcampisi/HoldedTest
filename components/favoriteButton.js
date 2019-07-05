import React, { Component } from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import theme from "../styles/theme.style";

class FavoriteButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Image
          source={require("../assets/favorite.png")}
          style={[styles.icon, this.props.bright && styles.bright]}
        />
      </TouchableOpacity>
    );
  }
}

export default FavoriteButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    height: 60,
    alignItems: "center"
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: theme.favoriteButton.OPAQUE_COLOR
  },
  bright: {
    tintColor: theme.favoriteButton.BRIGHT_COLOR
  }
});

FavoriteButton.propTypes = {
  bright: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

FavoriteButton.defaultProps = {
  bright: false,
};
