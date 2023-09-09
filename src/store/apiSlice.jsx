import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cohort = "/2307-fsa-et-web-ft-sf";
const baseUrl = `https://strangers-things.herokuapp.com/api${cohort}`;


export const postsApi = createApi ({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => "/posts",
        }),
        getSinglePost: builder.query({
            query: (id) => `/posts/${id}`,
        }),
    }),
});

// console.log("api", postsApi)

export const { useGetAllPostsQuery, useGetSinglePostQuery } = postsApi;