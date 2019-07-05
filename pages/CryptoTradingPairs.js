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

class CryptoTradingPairs extends Component {
  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.tradingPairs !== prevState.data){
      return { data: nextProps.tradingPairs };
   }
   else return null;
 }

  constructor(props) {
    super(props);

    this.state = {
      data: props.tradingPairs,
    };

    this.fetchTradingPairs();
    this.fetchFavorites();
  }

  fetchTradingPairs = (refreshing = false) => {
    this.props.actions.fetchTradingPairs(refreshing);
  };

  fetchFavorites = () => {
    this.props.actions.fetchFavorites();
  }

  toggleFavorite = (item) => {
    if (this.props.favorites.has(item.name)) {
      this.props.actions.removeFromFavorites(item.name);
    } else {
      this.props.actions.saveToFavorites(item.name);
    }
  }

  renderItem = item => {
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
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <FavoriteButton onPress={() => { this.toggleFavorite(item); }} bright={this.props.favorites.has(item.name)} />
      </View>
    );
  };

  render() {
    const showLoading = this.props.loading && !this.state.data.length;
    return (
      <View style={[styles.MainContainer, showLoading && { justifyContent: 'center' }]}>
        {showLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={() => <Separator />}
            ListHeaderComponent={
              <Header titles={["TRADING PAIR", "VALUE", "FAVORITE"]} />
            }
            onRefresh={() => this.fetchTradingPairs(true)}
            refreshing={this.props.refreshing}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1
  }
});

CryptoTradingPairs.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    status: PropTypes.number
  }),
  refreshing: PropTypes.bool.isRequired,
  tradingPairs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string
    })
  ).isRequired
};

CryptoTradingPairs.defaultProps = {
  error: null
};

const mapStateToProps = (state, props) => {
  return {
    loading: state.tradingPairs.loading,
    refreshing: state.tradingPairs.refreshing,
    error: state.tradingPairs.error,
    tradingPairs: Array.from(state.tradingPairs.tradingPairs.values()),
    favorites: state.tradingPairs.favorites,
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
)(CryptoTradingPairs);
