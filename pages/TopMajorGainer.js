import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tradingPairsActions from "../actions/tradingPairs.actions";
import theme from '../styles/theme.style';
import OfflineNotice from "../components/offlineNotice";

class TopMajorGainer extends Component {
  componentDidMount() {
    this.fetchDailyStats();
  }

  fetchDailyStats = () => {
    this.props.actions.fetchDailyStats();
  }

  renderInfoItem = (label, value) => (
    <View style={styles.infoItemContainer}>
      <Text style={styles.text}><Text style={styles.label}>{label}</Text> {value}</Text>
    </View>
  )

  render() {
    const { topMajorGainer, loading } = this.props;
    const showLoading = loading && !topMajorGainer;

    return (
      <View style={[styles.mainContainer, showLoading && { justifyContent: 'center' }]}>
        <OfflineNotice />
        {showLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView>
            {Boolean(topMajorGainer) &&
              <View style={styles.infoContainer}>
                {this.renderInfoItem('Symbol:', topMajorGainer.symbol)}
                {this.renderInfoItem('Price Change:', topMajorGainer.priceChange)}
                {this.renderInfoItem('Price Change Percent:', topMajorGainer.priceChangePercent)}
                {this.renderInfoItem('Weighted Average Price:', topMajorGainer.weightedAvgPrice)}
                {this.renderInfoItem('Previous Close Price:', topMajorGainer.prevClosePrice)}
                {this.renderInfoItem('Last Price:', topMajorGainer.lastPrice)}
                {this.renderInfoItem('Last Quantity:', topMajorGainer.lastQty)}
                {this.renderInfoItem('Bid Price:', topMajorGainer.bidPrice)}
                {this.renderInfoItem('Bid Quantity:', topMajorGainer.bidQty)}
                {this.renderInfoItem('Ask Price:', topMajorGainer.askPrice)}
                {this.renderInfoItem('Ask Quantity:', topMajorGainer.askQty)}
                {this.renderInfoItem('Open Price:', topMajorGainer.openPrice)}
                {this.renderInfoItem('High Price:', topMajorGainer.highPrice)}
                {this.renderInfoItem('Low Price:', topMajorGainer.lowPrice)}
                {this.renderInfoItem('Volume:', topMajorGainer.volume)}
                {this.renderInfoItem('Quote Volume:', topMajorGainer.quoteVolume)}
              </View>
            }
          </ScrollView>
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
    backgroundColor: theme.CONTAINER_SECONDARY_COLOR,
    borderRadius: 10,
    padding: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoItemContainer: {
    borderColor: theme.CONTAINER_PRIMARY_COLOR,
    flex: 1,
    width: '100%',
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.FONT_SIZE_M,
  },
  label: {
    fontWeight: theme.FONT_WEIGHT_SEMIBOLD,
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
