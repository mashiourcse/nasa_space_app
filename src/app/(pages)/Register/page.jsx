"use client";
import { useRegisterMutation } from "@/redux/Feature/auth/authApi";
import ZEmail from "@/components/Form/ZEmail";
import ZInputTwo from "@/components/Form/ZInputTwo";
import ZFormTwo from "@/components/Form/ZFormTwo";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ZPhone from "@/components/Form/ZPhone";
import { useEffect } from "react";

const Register = () => {
  const router = useRouter();
  const [
    register,
    {
      isLoading: lIsloading,
      error,
      isError: lIsError,
      isSuccess: lIsSuccess,
      data: rData,
    },
  ] = useRegisterMutation();
  // console.log(rData)

  const handleSubmit = (data) => {
    register(data);
  };

  useEffect(() => {
    if (lIsSuccess) {
      router.push("/UserLogin");
    }
  }, [lIsSuccess, router]);

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
      <div className="relative py-3 sm:mx-auto sm:w-[40%]">
        <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
        <div className="relative m-2 rounded-md bg-white px-4 py-10 shadow-lg sm:rounded-3xl md:m-0 md:rounded-none">
          <div className="mx-auto max-w-md text-center">
            <ZFormTwo
              isLoading={lIsloading}
              error={error}
              isError={lIsError}
              isSuccess={lIsSuccess}
              submit={handleSubmit}
              data={rData}
              buttonName={"Register"}
            >
              <div>
                <h1 className="mt-2 text-center text-2xl"> Register Here</h1>
              </div>
              <div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <ZInputTwo
                    name="erpUsername"
                    type="text"
                    label="User name"
                    defaultKey={""}
                    required
                    placeholder={"Enter your User Name"}
                  />
                  <ZInputTwo
                    name="erpUserFullName"
                    type="text"
                    label="Full name"
                    required
                    defaultKey={""}
                    placeholder={"Enter your Full Name"}
                  />
                </div>
                <div className="relative mb-8">
                  <ZEmail label={"Email"} name={"erpUserEmail"} />
                </div>
                <div className="relative mb-8">
                  <ZPhone label={"Phone"} name={"erpUserPhone"} />
                </div>
                <div className="relative">
                  <ZInputTwo
                    required
                    name="erpUserPassword"
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
                Already have an account?
                <Link href="/UserLogin">
                  <button className="ms-2 text-blue-500 underline">
                    Login here
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

export default Register;
