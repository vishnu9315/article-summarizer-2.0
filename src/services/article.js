import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const rapidkey = import.meta.env.VITE_X_RAPIDAPI_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidkey);
            headers.set('X-RapidAPI-Host', 'article-summarizer.p.rapidapi.com')

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            //passing this function to the demo component and accepting articleUrl
            //const url = 'https://article-summarizer.p.rapidapi.com/Article_url?url=https://americanliterature.com/childrens-stories/the-three-little-pigs&lang=en';
            query: (articleUrl) => `Article_url?url=${encodeURIComponent(articleUrl)}&lang=en`
        })
    })
    
})      

export const {useGetSummaryQuery } = articleApi;