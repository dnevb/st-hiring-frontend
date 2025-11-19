import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEvent, ISetting } from "./types";

const CLIENT_KEY = "clid";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    listEvents: builder.query<IEvent[], void>({
      query: () => "/events",
    }),
    getSettings: builder.query<ISetting, void>({
      query: () => {
        const stored = parseInt(sessionStorage.getItem(CLIENT_KEY) || "");
        const clientId = stored || Math.floor(Math.random() * 30000);
        if (!stored) sessionStorage.setItem(CLIENT_KEY, clientId.toString());

        return `/settings/${clientId}`;
      },
    }),
    updateSetting: builder.mutation({
      query: (setting: ISetting) => ({
        url: "/settings",
        method: "put",
        body: setting,
      }),
    }),
  }),
});

export const globalStore = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefault) => getDefault().concat(apiSlice.middleware),
});

export const {
  useListEventsQuery,
  useGetSettingsQuery,
  useUpdateSettingMutation,
} = apiSlice;
