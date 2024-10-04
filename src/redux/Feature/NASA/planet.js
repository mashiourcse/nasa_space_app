
import baseApi from "@/redux/Api/baseApi";
import { getTagsByModuleName } from "@/redux/Tag/Tag";

const getPlanetsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getTestProxy: builder.query({
      query: () => ({
        url: "exoplanet",
       // url: "",
      }),
     // providesTags: getTagsByModuleName('user')
    }),
   
    // getPlanets: builder.query({
    //   query: () => ({
    //     url: "sync?query=select+*+from+pscomppars+where+pl_name+like+%27%OGLE-TR-10 b%25%27+and+st_nphot%3E0&format=json",
    //    // url: "",
    //   }),
    //  // providesTags: getTagsByModuleName('user')
    // }),

    getAllPlanetsName: builder.query({
      query: (id) => ({
        url: "getplanets",
       // url: `sync?query=select+*+from+pscomppars+where+objectid=${id}&format=json`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getSinglePlanetData: builder.query({
      query: (id) => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `getsingleplanet/${id}`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getDiscYearCount: builder.query({
      query: () => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `getdiscyearcount`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getDiscMethodCount: builder.query({
      query: () => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `getdiscmethodcount`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getPlanetsCount: builder.query({
      query: () => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `getplanetscount`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getNearestPlanet: builder.query({
      query: () => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `getnearestplanet`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getFarthestPlanet: builder.query({
      query: () => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `getfarthestplanet`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getYears: builder.query({
      query: () => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `years`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),
  }),

  //select+objectid,pl_name,sy_dist+from+(select+objectid,pl_name,sy_dist+from+pscomppars+order+by+sy_dist+asc)+where+rownum=1&format=json

});

export const { 
    
    useGetAllPlanetsNameQuery,
    useGetSinglePlanetDataQuery,
    useGetDiscYearCountQuery,
    useLazyGetDiscMethodCountQuery,
    useGetPlanetsCountQuery,
    useGetNearestPlanetQuery,
    useGetFarthestPlanetQuery,
    useGetTestProxyQuery,
    useGetYearsQuery
} = getPlanetsApi;
