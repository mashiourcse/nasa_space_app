import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tags } from "../Tag/Tag";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
  //  baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    baseUrl: "https://reqres.in/api/",
}),
  tagTypes: tags.map(tag => tag.tag),
  endpoints: () => ({}),
});

export default baseApi;
// https://reqres.in/api/users?page=2