import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '0043c1710dmsha7937c5f85548cbp16df2ejsn4b7a9e09fb08')
            headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com')
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => `charts/world` }),
    }),
});

export const { useGetTopChartsQuery, } = shazamCoreApi;