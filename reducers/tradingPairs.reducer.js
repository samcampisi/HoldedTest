import { TradingPairs } from '../actions/actionTypes';

const initialState = {
  tradingPairs: [],
  loading: false,
  error: null,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
