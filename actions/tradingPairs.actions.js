import Binance from 'binance-api-react-native';
import { TradingPairs } from '../actions/actionTypes';
import { AsyncStorage } from "react-native";

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
