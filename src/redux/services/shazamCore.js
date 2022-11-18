// import axios from "axios";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// const options = {
//     method: 'GET',
//     url: 'https://shazam-core.p.rapidapi.com/v1/charts/genre-world',
//     params: { genre_code: 'POP' },
//     headers: {
//         'X-RapidAPI-Key': '0043c1710dmsha7937c5f85548cbp16df2ejsn4b7a9e09fb08',
//         'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', "0043c1710dmsha7937c5f85548cbp16df2ejsn4b7a9e09fb08");
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: '/charts/world' })
    }),
})

export const { useTopChartsQuery } = shazamCoreApi