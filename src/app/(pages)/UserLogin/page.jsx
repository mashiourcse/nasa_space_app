"use client";
import { useUserLoginMutation } from "@/redux/Feature/auth/authApi";
import ZInputTwo from "@/components/Form/ZInputTwo";
import ZFormTwo from "@/components/Form/ZFormTwo";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";

const UserLogin = () => {
  const router = useRouter();
  const [
    userLogin,
    {
      isLoading: lIsloading,
      error,
      isError: lIsError,
      isSuccess: lIsSuccess,
      data: userLoginData,
    },
  ] = useUserLoginMutation();

  const handleSubmit = async (data) => {
    try {
      const { data: userLoginData } = await userLogin(data);
      if (
        userLoginData?.data?.token &&
        userLoginData?.data?.user?.role === "user"
      ) {
        localStorage.setItem("authToken", userLoginData?.data?.token);
        Cookies.set("authToken", userLoginData?.data?.token, {
          expires: 1,
          path: "/",
          secure: false,
        });
        router.push("/UserBusiness/BusinessHome");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
      <div className="relative py-3 sm:mx-auto sm:w-[40%]">
        <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
        <div className="relative m-2 rounded-md bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20 md:m-0 md:rounded-none">
          <div className="mx-auto max-w-md text-center">
            <ZFormTwo
              isLoading={lIsloading}
              error={error}
              isError={lIsError}
              isSuccess={lIsSuccess}
              submit={handleSubmit}
              data={userLoginData}
              buttonName={"Login"}
            >
              <div>
                <h1 className="mt-2 text-center text-2xl">User Login Here</h1>
              </div>
              <div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative mb-8">
                  <ZInputTwo
                    name="identifier"
                    type="text"
                    label="User Name"
                    defaultKey={""}
                    placeholder={"Enter your username..."}
                    required={1}
                  />
                </div>
                <div className="relative">
                  <ZInputTwo
                    required={1}
                    name="password"
                    type="password"
                    label="password"
                    defaultKey={""}
                    placeholder={"Enter your password"}
                  />
                </div>
              </div>
            </ZFormTwo>
          </div>

          <div className="mt-5 flex items-center justify-center">
            <div>
              <p className="text-sm text-gray-500">
                No account?
                <Link href="/Register">
                  <button className="ms-2 text-blue-500 underline">
                    Register Now
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
