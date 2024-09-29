"use client";

import { useGetUsersQuery } from "@/redux/Feature/Users/user";


export default function Home() {

 const {data} = useGetUsersQuery(undefined);
 console.log(data);
  return (
    <>    
       <div>
        <h1>Hello World</h1>
        
       </div>

    </>
  );
}
