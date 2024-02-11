import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.chucknorris.io/' }),
  endpoints: (builder) => ({
    getResults: builder.query({
      query: (query) => `jokes/search?query=${query}`,
    }),
  }),
});

export const { useGetResultsQuery } = searchApi;