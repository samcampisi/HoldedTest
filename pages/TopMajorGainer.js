import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tradingPairsActions from "../actions/tradingPairs.actions";
import Header from "../components/header";
import Separator from "../components/separator";
import FavoriteButton from "../components/favoriteButton";

class TopMajorGainer extends Component {
  componentDidMount() {
    this.fetchDailyStats();
  }

  fetchDailyStats = () => {
    this.props.actions.fetchDailyStats();
  }

  render() {
    const { topMajorGainer, loading } = this.props;
    const showLoading = loading && !topMajorGainer;

    return (
      <View style={[styles.mainContainer, showLoading && { justifyContent: 'center' }]}>
        {showLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            {Boolean(topMajorGainer) &&
              <View style={styles.infoContainer}>
                <Text><Text>Symbol:</Text> {topMajorGainer.symbol}</Text>
                <Text><Text>Price Change:</Text> {topMajorGainer.priceChange}</Text>
                <Text><Text>Price Change Percent:</Text> {topMajorGainer.priceChange}</Text>
                <Text><Text>Weighted Average Price:</Text> {topMajorGainer.weightedAvgPrice}</Text>
                <Text><Text>Previous Close Price:</Text> {topMajorGainer.prevClosePrice}</Text>
                <Text><Text>Last Price:</Text> {topMajorGainer.lastPrice}</Text>
                <Text><Text>Last Quantity:</Text> {topMajorGainer.lastQty}</Text>
                <Text><Text>Bid Price:</Text> {topMajorGainer.bidPrice}</Text>
                <Text><Text>Bid Quantity:</Text> {topMajorGainer.bidQty}</Text>
                <Text><Text>Ask Price:</Text> {topMajorGainer.askPrice}</Text>
                <Text><Text>Ask Quantity:</Text> {topMajorGainer.askQty}</Text>
                <Text><Text>Open Price:</Text> {topMajorGainer.openPrice}</Text>
                <Text><Text>High Price:</Text> {topMajorGainer.highPrice}</Text>
                <Text><Text>Low Price:</Text> {topMajorGainer.lowPrice}</Text>
                <Text><Text>Volume:</Text> {topMajorGainer.volume}</Text>
                <Text><Text>Quote Volume:</Text> {topMajorGainer.quoteVolume}</Text>
              </View>
            }
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  infoContainer: {
    backgroundColor: '#ff779940',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

TopMajorGainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  topMajorGainer: PropTypes.shape({
    symbol: PropTypes.string,
    priceChange: PropTypes.string,
    priceChangePercent: PropTypes.string,
    weightedAvgPrice: PropTypes.string,
    prevClosePrice: PropTypes.string,
    lastPrice: PropTypes.string,
    lastQty: PropTypes.string,
    bidPrice: PropTypes.string,
    bidQty: PropTypes.string,
    askPrice: PropTypes.string,
    askQty: PropTypes.string,
    openPrice: PropTypes.string,
    highPrice: PropTypes.string,
    lowPrice: PropTypes.string,
    volume: PropTypes.string,
    quoteVolume: PropTypes.string,
    openTime: PropTypes.number,
    closeTime: PropTypes.number,
    firstId: PropTypes.number,
    lastId: PropTypes.number,
    count: PropTypes.number
  })
};

TopMajorGainer.defaultProps = {
  topMajorGainer: null,
};

const mapStateToProps = (state, props) => {
  return {
    topMajorGainer: state.tradingPairs.topMajorGainer,
    loading: state.tradingPairs.loading
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
)(TopMajorGainer);
