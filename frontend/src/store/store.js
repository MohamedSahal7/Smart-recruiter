import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from "./slices/resultSlice";

export const store = configureStore({
  reducer: {
    results: resultsReducer,
  },
});
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import assessmentReducer from './slices/assessmentSlice';
import invitationReducer from './slices/invitationSlice';
import attemptReducer from './slices/attemptSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        assessment: assessmentReducer,
        invitation: invitationReducer,
        attempt: attemptReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import assessmentReducer from "./slices/assessmentSlice";

export const store = configureStore({
  reducer: {
    assessments: assessmentReducer,
  },
});

export default store;
