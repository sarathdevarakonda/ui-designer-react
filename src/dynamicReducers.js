// dynamicReducers.js
import { createSlice } from '@reduxjs/toolkit';
import { createDynamicModule, DynamicModuleLoader } from 'redux-dynamic-modules';
import { useDispatch as useOriginalDispatch } from 'react-redux';

const dynamicReducersSlice = createSlice({
  name: 'dynamicReducers',
  initialState: [],
  reducers: {
    addReducer: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addReducer } = dynamicReducersSlice.actions;
export const selectDynamicReducers = (state) => state.dynamicReducers;
export const dynamicReducersReducer = dynamicReducersSlice.reducer;

export function useDispatch() {
  const dispatch = useOriginalDispatch();
  return (action) => {
    // We can intercept actions and add some logic here if needed
    return dispatch(action);
  };
}

export function createDynamicStore(initialReducers = {}) {
  const store = createDynamicModule({
    id: 'dynamicStore',
    reducerMap: {
      dynamicReducers: dynamicReducersReducer,
      ...initialReducers,
    },
  });

  return store;
}

export const DynamicModuleLoaderWrapper = ({ children }) => {
  const store = createDynamicStore();

  return <DynamicModuleLoader modules={[store]}>{children}</DynamicModuleLoader>;
};
