import Binance from 'binance-api-react-native';
import { TradingPairs } from '../actions/actionTypes';

const client = Binance();

export function fetchTradingPairs(refreshing = false) {
  return (dispatch) => {
    dispatch({
      type: TradingPairs.FETCH_TRADING_PAIRS,
      payload: { refreshing },
    });
    client.prices().then((res) => {
      const list = Object.entries(res);
      dispatch(fetchTradingPairsSuccess(list));
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