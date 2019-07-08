import { TradingPairs } from "../actions/actionTypes";
import { updateFavorites } from "../actions/tradingPairs.actions";

const initialState = {
  tradingPairs: new Map(),
  favorites: new Set(),
  loading: false,
  error: null,
  refreshing: false,
  topMajorGainer: null
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case TradingPairs.FETCH_TRADING_PAIRS:
      return {
        ...state,
        error: null,
        loading: true,
        refreshing: action.payload.refreshing
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
        refreshing: false
      };
    }
    case TradingPairs.FETCH_TRADING_PAIRS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        refreshing: false
      };
    case TradingPairs.FETCH_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.payload.favorites
      };
    case TradingPairs.SAVE_TO_FAVORITES: {
      const newFavorites = new Set(state.favorites);
      newFavorites.add(action.payload);
      updateFavorites(newFavorites);
      return {
        ...state,
        favorites: newFavorites
      };
    }
    case TradingPairs.REMOVE_FROM_FAVORITES: {
      const newFavorites = new Set(state.favorites);
      newFavorites.delete(action.payload);
      updateFavorites(newFavorites);
      return {
        ...state,
        favorites: newFavorites
      };
    }
    case TradingPairs.FETCH_DAILY_STATS:
      return {
        ...state,
        error: null,
        loading: true
      };
    case TradingPairs.FETCH_DAILY_STATS_SUCCESS: {
      const allGainers = action.payload.list;
      const topMajorGainer = allGainers.reduce((prev, current) =>
        parseFloat(prev.priceChange) > parseFloat(current.priceChange) ? prev : current
      );

      return {
        ...state,
        topMajorGainer,
        loading: false
      };
    }
    case TradingPairs.FETCH_DAILY_STATS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
}
