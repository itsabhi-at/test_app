import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import circle from "@/../../public/assets/circle.png";
export default function Home() {
  return (
    <main className="h-auto md:h-screen md:bg-white bg-[#F3F5F8] min-h-screen">
      <div className="md:flex h-full w-full">
        <div className="flex-1 w-full h-full md:bg-white bg-[#F3F5F8] p-4 flex flex-col ">
          <div className="flex gap-2 items-center">
            <div className="h-4 w-4 rounded-full bg-black"></div>
            <h1 className="text-black font-medium">Untitled UI</h1>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={circle}
              height={100}
              width={100}
              alt="circle"
              className="md:hidden block"
            />
          </div>

          <div className="flex-1 flex flex-col md:justify-center md:p-12 md:my-0 my-12 ">
            <h1 className="text-2xl text-black font-medium">Welcome Back</h1>
            <p className=" text-gray-600 py-2">
              Welcome back please enter your detail
            </p>
            <form action="" className="my-4">
              <label
                htmlFor="Email"
                className=" text-gray-700 text-[14px] block"
              >
                Email
              </label>
              <input
                type="email"
                className="p-2 border border-gray-300 rounded-md my-2 w-full text-[15px] text-black"
                placeholder="Enter Your Email"
              />
              <label
                htmlFor="Password"
                className=" text-gray-700 text-[14px] block"
              >
                Password
              </label>
              <input
                type="Password"
                className="p-2 border border-gray-300 rounded-md my-2 w-full text-[15px] text-black"
                placeholder="*******"
              />
              <div className="flex items-center justify-between">
                <div>
                  <input type="checkbox" name="remember" id="" />
                  <label
                    htmlFor="remember"
                    className="text-black text-[14px] ml-2"
                  >
                    Remember for 30days
                  </label>
                </div>
                <p className=" text-purple-500 text-[14px] font-medium">
                  Forgot Password?
                </p>
              </div>
              <Link href={"/Dashboard"}>
                <button className="w-full bg-purple-600 rounded-md py-2 my-4 font-medium text-sm">
                  Sign In
                </button>
              </Link>

              <button className="w-full bg-white rounded-md py-2 mb-4 border border-gray-500 text-gray-500 font-medium flex items-center justify-center gap-4 text-sm">
                <FcGoogle />
                Sign in With Google
              </button>
            </form>
            <p className="text-black text-center text-[15px]">
              Don&apos;t have an account?{" "}
              <Link href={"/dashboard"}>
                <span className="text-purple-700">Sign Up</span>
              </Link>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="h-2 w-2 rounded-full bg-gray-400"></div>
            <h1 className=" text-gray-400 font-medium text-sm my-2">
              Untitled UI
            </h1>
          </div>
        </div>
        <div className="flex-1 w-full h-full md:flex hidden bg-[#F3F5F8]  items-center justify-center relative">
          <Image
            src={circle}
            height={400}
            width={400}
            alt="circle"
            loading="eager"
            priority={true}
          />
        </div>
      </div>
    </main>
  );
}
