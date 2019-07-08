import Binance from 'binance-api-react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
      dispatch(fetchFailure(err, TradingPairs.FETCH_TRADING_PAIRS_FAILURE));
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

export function fetchFailure(error, type) {
  return {
    type,
    payload: {
      error
    },
  };
}

export function fetchFavorites() {
  return (dispatch) => {
    AsyncStorage.getItem('favorites').then((val) => {
      if (val !== null) {
        dispatch(fetchFavoritesSuccess(new Set(JSON.parse(val))));
      }
    }).catch((err) => {
      console.warn('error retrieving favorites');
    });
  }
}

export function fetchFavoritesSuccess(favorites) {
  return {
    type: TradingPairs.FETCH_FAVORITES_SUCCESS,
    payload: {
      favorites,
    },
  };
}

export function updateFavorites(favorites) {
  AsyncStorage.setItem('favorites', JSON.stringify([...favorites])).then((res) => {
  }).catch((err) => {
    console.warn('error updating favorites');
  });
}

export const saveToFavorites = id => (dispatch) => {
  dispatch({
    type: TradingPairs.SAVE_TO_FAVORITES,
    payload: id,
  });
};

export const removeFromFavorites = id => (dispatch) => {
  dispatch({
    type: TradingPairs.REMOVE_FROM_FAVORITES,
    payload: id,
  });
};

export function fetchDailyStats() {
  return (dispatch) => {
    dispatch({
      type: TradingPairs.FETCH_DAILY_STATS,
    });
    client.dailyStats().then((res) => {
      dispatch(fetchDailyStatsSuccess(res));
    }).catch((err) => {
      dispatch(fetchFailure(err, TradingPairs.FETCH_DAILY_STATS_FAILURE));
    })
  };
}

export function fetchDailyStatsSuccess(list) {
  return {
    type: TradingPairs.FETCH_DAILY_STATS_SUCCESS,
    payload: {
      list,
    },
  };
}
