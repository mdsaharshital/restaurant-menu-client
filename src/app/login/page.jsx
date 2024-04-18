import Image from "next/image";
import hero1 from "@/assets/login.jpg";
import LoginCom from "../../components/LoginCom";

const LoginPage = () => {
  return (
    <div className="">
      <div className="w-full lg:grid h-screen lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12 h-full">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-wrap text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <LoginCom />
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <Image
            src={hero1}
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
