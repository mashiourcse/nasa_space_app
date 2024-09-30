
import baseApi from "@/redux/Api/baseApi";
import { getTagsByModuleName } from "@/redux/Tag/Tag";

const getPlanetsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // Get Planets 
    getPlanets: builder.query({
      query: () => ({
        url: "sync?query=select+*+from+pscomppars+where+pl_name+like+%27%OGLE-TR-10 b%25%27+and+st_nphot%3E0&format=json",
       // url: "",
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getAllPlanetsName: builder.query({
      query: (id) => ({
        url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
       // url: `sync?query=select+*+from+pscomppars+where+objectid=${id}&format=json`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getSinglePlanetData: builder.query({
      query: (id) => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `sync?query=select+*+from+pscomppars+where+objectid=${id}&format=json`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),
  }),
});

export const { 
    useGetPlanetsQuery,
    useGetAllPlanetsNameQuery,
    useGetSinglePlanetDataQuery
} = getPlanetsApi;
