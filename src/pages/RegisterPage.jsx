import FormHeader from "../components/specific/FormHeader";
import Register from "../components/specific/Register";
import GoogleSignUp from "../components/specific/GoogleSignUp";

function RegisterPage() {
  return (
    <section className="w-full mx-auto lg:w-2/5 container max-w-[1335px] lg:px-0 px-5 mt-28 mb-48">
      <FormHeader
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Register />
      <GoogleSignUp/>
    </section>
  );
}

export default RegisterPage;
