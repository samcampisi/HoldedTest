import { TradingPairs } from '../actions/actionTypes';

const initialState = {
  tradingPairs: [],
  loading: false,
  error: null,
  refreshing: false,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case TradingPairs.FETCH_TRADING_PAIRS:
      return {
        ...state,
        error: null,
        loading: true,
        refreshing: action.payload.refreshing,
      };
    case TradingPairs.FETCH_TRADING_PAIRS_SUCCESS:
      return {
        ...state,
        tradingPairs: action.payload.list,
        loading: false,
        refreshing: false,
      };
    case TradingPairs.FETCH_TRADING_PAIRS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        refreshing: false,
      };
    default:
      return state;
  }
}
