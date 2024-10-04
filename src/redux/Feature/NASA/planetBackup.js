
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
   
    getPlanets: builder.query({
      query: () => ({
        url: "sync?query=select+*+from+pscomppars+where+pl_name+like+%27%OGLE-TR-10 b%25%27+and+st_nphot%3E0&format=json",
       // url: "",
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getAllPlanetsName: builder.query({
      query: (id) => ({
        url: "sync?query=select+objectid,pl_name,pl_masse,pl_name,pl_orbper,sy_dist,st_logg+from+pscomppars+order+by+sy_dist+asc&format=json",
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

    getDiscYearCount: builder.query({
      query: () => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `sync?query=select+disc_year+as+year,+count(*)+as+discoveries+from+pscomppars+group+by+disc_year+order+by+disc_year&format=json`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getDiscMethodCount: builder.query({
      query: () => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `sync?query=select+discoverymethod+as+name,+count(*)+as+value+from+pscomppars+group+by+discoverymethod&format=json`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getPlanetsCount: builder.query({
      query: () => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `sync?query=select+count(*)+from+pscomppars&format=json`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getNearestPlanet: builder.query({
      query: () => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `sync?query=select+objectid,pl_name,sy_dist+from+(select+objectid,pl_name,sy_dist+from+pscomppars+order+by+sy_dist+asc)+where+rownum=1&format=json`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    getFarthestPlanet: builder.query({
      query: () => ({
       // url: "sync?query=select+objectid,pl_name+from+pscomppars&format=json",
        url: `sync?query=select+objectid,pl_name,sy_dist+from+(select+objectid,pl_name,sy_dist+from+pscomppars+order+by+sy_dist+desc)+where+rownum=1&format=json`,
      }),
     // providesTags: getTagsByModuleName('user')
    }),

  }),

  //select+objectid,pl_name,sy_dist+from+(select+objectid,pl_name,sy_dist+from+pscomppars+order+by+sy_dist+asc)+where+rownum=1&format=json

});

export const { 
    useGetPlanetsQuery,
    useGetAllPlanetsNameQuery,
    useGetSinglePlanetDataQuery,
    useGetDiscYearCountQuery,
    useLazyGetDiscMethodCountQuery,
    useGetPlanetsCountQuery,
    useGetNearestPlanetQuery,
    useGetFarthestPlanetQuery,
    useGetTestProxyQuery
} = getPlanetsApi;
