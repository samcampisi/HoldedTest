import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tradingPairsActions from "../actions/tradingPairs.actions";
import Header from "../components/header";
import Separator from "../components/separator";
import FavoriteButton from "../components/favoriteButton";
import EmptyContent from "../components/emptyContent";

class Favorites extends Component {
  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.favorites !== prevState.data){
      return { data: Array.from(nextProps.favorites) };
    }
    else return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      data: Array.from(props.favorites),
    };
  }

  toggleFavorite = (item) => {
    if (this.props.favorites.has(item)) {
      this.props.actions.removeFromFavorites(item);
    } else {
      this.props.actions.saveToFavorites(item);
    }
  }

  renderItem = item => {
    const entry = this.props.tradingPairs.get(item);
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          minHeight: 60,
          alignItems: "center"
        }}
      >
        <Text>{entry.name}</Text>
        <Text>{entry.price}</Text>
        <FavoriteButton onPress={() => { this.toggleFavorite(item); }} bright={this.props.favorites.has(item)} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={item => item}
          ItemSeparatorComponent={() => <Separator />}
          ListHeaderComponent={
            this.state.data.length && <Header titles={["TRADING PAIR", "VALUE", "FAVORITE"]} />
          }
          ListEmptyComponent={<EmptyContent subtitle='Add something to your favorites on the All Trading Pairs page' />}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1
  }
});

Favorites.propTypes = {
  favorites: PropTypes.instanceOf(Set).isRequired,
  tradingPairs: PropTypes.instanceOf(Map).isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    favorites: state.tradingPairs.favorites,
    tradingPairs: state.tradingPairs.tradingPairs,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...tradingPairsActions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(Favorites);
