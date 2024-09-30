import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tags } from "../Tag/Tag";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cors-anywhere.herokuapp.com/https://exoplanetarchive.ipac.caltech.edu/TAP/",  // temporary
   // baseUrl: process.env.NASA_TAP_URL,
    prepareHeaders: (headers) => {
     //https://cors-anywhere.herokuapp.com/
   //  headers.set('Access-Control-Allow-Origin', '*'); 
      return headers;
    },
  }),
  tagTypes: tags.map((tag) => tag.tag),
  endpoints: () => ({}),
});

export default baseApi;
