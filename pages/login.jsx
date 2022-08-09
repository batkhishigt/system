import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { userService } from "services";

export default Login;

function Login() {
  const router = useRouter();

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push("/");
    }
  }, []);

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ email, password }) {
    return userService
      .login(email, password)
      .then((res) => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/";
        router.push(returnUrl);
      })
      .catch((error) => {
        setError("apiError", { message: error.message || error });
      });
  }

  return (
    <section className="section-bg">
      <div className="container pt-4">
        <div className="columns is-centered pt-6">
          <div className="column px-6 is-mobile is-7-tablet is-4-desktop">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="box p-6 login has-shadow"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              }}
            >
              <div className="column has-text-centered pt-0 pb-5">
                <span className="title logo pt-1 is-4 has-text-centered">
                  tulga
                </span>
                <span className="title logo2 is-4 ml-1 has-text-centered">
                  light <span className="tag px-1 is-danger">BETA</span>
                </span>
              </div>
              <div className="field">
                <label className="label is-small has-text-weight-normal">
                  И-мэйл / утас
                </label>
                <div className="control has-icons-left">
                  <input
                    className="input is-small"
                    type="text"
                    name="email"
                    {...register("email")}
                    placeholder="Нэвтрэх и-мэйл/ утасны дугаар"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <p className="help is-danger">И-мэйл хаяг буруу байна.</p>
              </div>
              <div className="field">
                <label className="label is-small has-text-weight-light">
                  Нууц үг
                </label>
                <div className="control has-icons-left">
                  <input
                    className="input is-small"
                    type="password"
                    name="password"
                    {...register("password")}
                    placeholder="Нууц үгээ бичнэ үү"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
                <p className="help is-danger">Нууц үг буруу байна.</p>
                <label className="checkbox is-size-7 pt-3">
                  <input type="checkbox" /> Намайг сана
                </label>
              </div>
              <div className="columns is-vcentered">
                <div className="column has-text-centered">
                  <button
                    type="submit"
                    className="button is-rounded is-fullwidth is-center btn-grad is-small px-6"
                  >
                    <p className="title is-size-7 pt-1 has-text-weight-medium">
                      Нэвтрэх
                    </p>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column pb-0 has-text-centered">
          <p className="title is-size-7 has-text-weight-light has-text-white">
            tulgalight beta © 2022.
            <a href="https://informatic.mn/" className="has-text-white">
              Информатик ХХК
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
