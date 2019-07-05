import { TradingPairs } from '../actions/actionTypes';

const Binance = require('binance-api-node').default;
const client = Binance();

export function fetchTradingPairs(refreshing = false) {
  return (dispatch) => {
    dispatch({
      type: TradingPairs.FETCH_TRADING_PAIRS,
      payload: { refreshing },
    });
    client.prices().then((res) => {
      console.warn('res', res);
    }).catch((err) => {
      dispatch(fetchFailure(err));
    })
  };
}

export function fetchTradingPairsSuccess(list) {
  return {
    type: TradingPairs.FETCH_TRADING_PAIRS_SUCCESS,
    payload: {
      list,
    },
  };
}

export function fetchFailure(error) {
  return {
    type: TradingPairs.FETCH_TRADING_PAIRS_FAILURE,
    payload: {
      error
    },
  };
}