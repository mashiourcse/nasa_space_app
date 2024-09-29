
import baseApi from "@/redux/Api/baseApi";
import { getTagsByModuleName } from "@/redux/Tag/Tag";

const customersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // Add Customer

    // Get Customers
    getUsers: builder.query({
      query: () => ({
        url: "users?page=2",
      }),
     // providesTags: getTagsByModuleName('user')
    }),

    // Update Customer
   

    // Delete Customer
   

  }),
});

export const { 
    useGetUsersQuery
  
} = customersApi;
