"use client";
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
    <div data-theme="dark">
      Login
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};

export default Login;
