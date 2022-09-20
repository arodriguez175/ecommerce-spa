import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="mx-4 md:mx-[115px] lg:mx-[230px] mt-5 border border-lightgrayBorder rounded-xl">
      <h2 className="text-center text-2xl m-1 md:m-3">Sign in</h2>
      <form className="text-center mx-3 [&>*]:mb-3 md:mx-12">
        <input
          placeholder="Email"
          className="bg-lightgrayBorder p-3 w-full lg:w-[50%]"
          type="text"
          required
        />
        <br />
        <input
          placeholder="Password"
          className="bg-lightgrayBorder p-3 w-full lg:w-[50%]"
          type="password"
          required
        />
        <br />

        <div className="md:flex md:justify-between lg:justify-evenly lg:mx-[80px]">
          <div className="mb-3">
            <label>Keep me logged in</label>
            <input type="checkbox" className="ml-2 cursor-pointer" />
          </div>

          <Link to="#" className="text-[dodgerblue] underline">
            Forgot password?
          </Link>
        </div>

        <p className="text-[9pt]">
          By creating an account you agree to our{" "}
          <Link to="#" className="text-[dodgerblue] underline">
            Terms & Privacy
          </Link>
        </p>

        <div className="grid md:inline">
          <button
            type="submit"
            className="bg-primary text-secondary p-4 mb-3 md:mx-2 md:w-[100px]"
          >
            Log In
          </button>
          <button className="bg-lightgrayBorder p-4 md:mx-2 md:w-[100px]">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
