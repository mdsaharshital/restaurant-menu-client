import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import hero1 from "@/assets/singup.jpg";
import SignUpComp from "@/components/SignUpComp";

const SignUp = () => {
  return (
    <div className="">
      <div className="w-full lg:grid h-screen lg:grid-cols-2 xl:min-h-[800px]">
        <div className="hidden bg-muted lg:block">
          <Image
            src={hero1}
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
        <div className="flex items-center justify-center py-12 h-full">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Signup</h1>
              <p className="text-wrap text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <SignUpComp />
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
