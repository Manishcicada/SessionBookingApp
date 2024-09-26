import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

type upcomingSessions = {
  title: string;
  summary: string;
  date: string;
  id: string
}

const initialValue: upcomingSessions[] = [];

const dataSlice = createSlice({
  name: 'upcomingSessions',
  initialState: initialValue,
  reducers: {
    handleAdd(state, action: PayloadAction<upcomingSessions>){
      const existingIndex = state.findIndex(entry=> action.payload.id === entry.id);
      if(existingIndex < 0){
        state.push(action.payload);
      }
    },
    handleDelete(state, action: PayloadAction<{id:string}>){
      const index = state.findIndex(session => session.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

const store = configureStore({
  reducer: {
    upcomingSessions: dataSlice.reducer
  }
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const storeActions = dataSlice.actions;