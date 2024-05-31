import FormHeader from "../components/specific/FormHeader";
import GoogleSignUp from "../components/specific/GoogleSignUp";
import Login from "../components/specific/Login";

function LoginPage() {
  return (
    <section className="w-full mx-auto lg:w-2/5 container max-w-[1335px] lg:px-0 px-5 mt-28 mb-48">
      <img src="/images/gradient-circle.png" alt="gradient decoration" className="absolute top-0 left-0 -z-10" />
      <FormHeader
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Register"
        linkUrl="/register"
      />
      <Login />
      <GoogleSignUp/>
      
    </section>
  );
}

export default LoginPage;
