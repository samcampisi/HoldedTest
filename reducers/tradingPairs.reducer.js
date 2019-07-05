import { TradingPairs } from '../actions/actionTypes';

const initialState = {
  tradingPairs: new Map(),
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
    case TradingPairs.FETCH_TRADING_PAIRS_SUCCESS: {
      let newMap = new Map(state.tradingPairs);
      if (action.payload.list) {
        for (e of action.payload.list) {
          newMap.set(e[0], { name: e[0], price: e[1] });
        }
      }

      return {
        ...state,
        tradingPairs: newMap,
        loading: false,
        refreshing: false,
      };
    }
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
