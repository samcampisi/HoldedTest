import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tradingPairsActions from '../actions/tradingPairs.actions';
 
class CryptoTradingPairs extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen 1 </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});

NativeShopScreen.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    status: PropTypes.number,
  }),
  refreshing: PropTypes.bool.isRequired,
};

NativeShopScreen.defaultProps = {
  error: null,
};

const mapStateToProps = (state, props) => {
  return {
    loading: state.tradingPairs.loading,
    refreshing: state.tradingPairs.refreshing,
    error: state.tradingPairs.error,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...tradingPairsActions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { withRef: true },
)(CryptoTradingPairs);