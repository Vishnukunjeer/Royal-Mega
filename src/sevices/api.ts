import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['User'],

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE,

    prepareHeaders: (headers, { getState }: any) => {
      const token = getState().auth?.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({


    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    getUser: builder.query({
      query: () => 'users/me',
      providesTags: ['User'],
    }),

  }),
});

export const {
  useLoginMutation,
  useGetUserQuery,
} = api;