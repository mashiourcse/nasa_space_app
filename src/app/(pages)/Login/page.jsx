"use client"
import { useLoginMutation } from "@/redux/Feature/auth/authApi";
// import { useRouter } from "next/router";


const Login = () => {
  // const router = useRouter();
  const [
    login,
    {
      isLoading: lIsloading,
      error,
      isError: lIsError,
      isSuccess: lIsSuccess,
      data: loginData,
    },
  ] = useLoginMutation();
 
  // const handleSubmit = async (data) => {
  //   try {
  //     const { data: loginData } = await login(data);
  //     if (loginData?.data?.token) {
  //       localStorage.setItem("authToken", loginData?.data?.token); 
  //       Cookies.set("authToken", loginData?.data?.token, {
  //         expires: 1, 
  //         path: "/", 
  //         secure: false
  //       });
  //       router.push("/Dashboard/AdminHome");
  //     }
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };

  return (
  <div>
    login
  </div>
  );
};

export default Login;
