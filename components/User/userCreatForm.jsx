import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { userService } from "services";
import { roleService } from "services";
import Link from "next/link";
import {
  faExclamationTriangle,
  faUser,
  faBuilding,
  faUserCheck,
  faAt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UserCreateForm = (props) => {
  const router = useRouter();

  const { id } = router.query;
  const isAddMode = !id;

  const [roles, setRoles] = useState([]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Цахим шуудангаа зөв оруулна уу")
      .required("Цахим шуудангаа оруулна уу"),
    firstName: Yup.string()
      .required("Хэрэглэгчийн нэрийг оруулна уу")
      .max(30, "30 тэмдэгтээс хэтрэхгүй урттай байна"),
    lastName: Yup.string()
      .required("Хэрэглэгчийн овгийг оруулна уу")
      .max(30, "30 тэмдэгтээс хэтрэхгүй урттай байна"),
    workName: Yup.string()
      .required("Мэдээлэл оруулна уу")
      .max(30, "30 тэмдэгтээс хэтрэхгүй урттай байна"),
    workPosition: Yup.string()
      .required("Мэдээлэл оруулна уу")
      .max(30, "30 тэмдэгтээс хэтрэхгүй урттай байна"),
    phone: Yup.number()
      .required("Мэдээлэл оруулна уу")
      .min(10000000, "8 Оронтой байна")
      .max(100000000, "8 +1оронтой байна"),
    role: Yup.string().required("үүрэг сонгоно уу").min(4, "үүрэг сонгоно уу"),
    // password: Yup.string()
    //   .transform((x) => (x === "" ? undefined : x))
    //   .concat(isAddMode ? Yup.string().required("Нууц үгээ оруулна уу") : null)
    //   .min(6, "Нууц үг 6 тэмдэгтээс урт байна"),
    // confirmPassword: Yup.string()
    //   .transform((x) => (x === "" ? undefined : x))
    //   .when("password", (password, schema) => {
    //     if (password || isAddMode)
    //       return schema.required("Нууц үгийг давтан оруулна уу");
    //   })
    //   .oneOf([Yup.ref("password")], "Нууц үг тохирохгүй байна."),
  });
  const formOptions = {
    resolver: yupResolver(validationSchema),
  };

  const {
    register,
    setError,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState,
  } = useForm(formOptions);

  const { errors } = formState;

  function onSubmit(data) {
    return isAddMode ? createUser(data) : updateUser(id, data);
  }

  function createUser(data) {
    return userService
      .create(data)
      .then(() => {
        // alertService.success("User added", { keepAfterRouteChange: true });
        history.back();
      })
      .catch((err) => {
        //alertService.error

        if (err.error) {
          for (let error in err.error.errors) {
            setError(error, {
              type: "focus",
              message: err.error.errors[error].message,
            });
          }
        }
      });
  }

  function updateUser(id, data) {
    return userService
      .update(id, data)
      .then((res) => {
        history.back();
      })
      .catch((err) => {
        if (err.error) {
          for (let error in err.error.errors) {
            setError(error, {
              type: "focus",
              message: err.error.errors[error].message,
            });
          }
        }
      });
  }

  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    roleService.getAll().then((res) => {
      setRoles(res.data);
    });
    if (!isAddMode) {
      // get user and set form fields
      userService.getById(id).then((user) => {
        const fields = [
          "firstName",
          "lastName",
          "email",
          "phone",
          "workName",
          "workPosition",
          "role",
        ];
        fields.forEach((field) => {
          setValue(field, user.data[field]);
        });
        setUser(user);
      });
    }
  }, []);

  return (
    <div className="has-background-white p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        onReset={reset}
        className="columns"
      >
        <div className="column mr-3">
          <div className="field">
            <label className="label is-size-7">Овог</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${errors.lastName ? "is-danger" : ""}`}
                type="text"
                name="lastName"
                {...register("lastName")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
              {errors.lastName ? (
                <span className="icon is-small is-right">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="has-text-danger"
                  />
                </span>
              ) : (
                ""
              )}
            </div>
            <p className="help is-danger is-size-7 mt-0 ml-0">
              {errors.lastName && errors.lastName.message}
            </p>
          </div>
          <div className="field">
            <label className="label is-size-7">Байгууллагын нэр</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${errors.workName ? "is-danger" : ""}`}
                type="text"
                name="lastName"
                {...register("workName")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faBuilding} />
              </span>
              {errors.workName ? (
                <span className="icon is-small is-right">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="has-text-danger"
                  />
                </span>
              ) : (
                ""
              )}
            </div>
            <p className="help is-danger is-size-7 mt-0 ml-0">
              {errors.workName && errors.workName.message}
            </p>
          </div>
          <div className="field">
            <label className="label is-size-7">И-мэйл</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${errors.email ? "is-danger" : ""}`}
                type="email"
                name="lastName"
                {...register("email")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faAt} />
              </span>
              {errors.email ? (
                <span className="icon is-small is-right">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="has-text-danger"
                  />
                </span>
              ) : (
                ""
              )}
            </div>
            <p className="help is-danger is-size-7 mt-0 ml-0">
              {errors.email && errors.email.message}
            </p>
          </div>

          <div className="field">
            <label className="label is-size-7">Үүрэг</label>
            <div
              className={`select is-small is-fullwidth ${
                errors.role ? "is-danger" : ""
              }`}
            >
              <select {...register("role")}>
                <option key="-1" value={0}>
                  Хэрэглэгчийн үүргийг сонгоно уу
                </option>
                {roles.map((role, index) => {
                  return (
                    <option key={index} value={role.code}>
                      {role.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <p className="help is-danger is-size-7 mt-0 ml-0">
              {errors.role && errors.role.message}
            </p>
          </div>
          {/* <div className="field">
            <label className="label is-size-7">Зураг оруулах</label>
            <div className="file has-name is-small">
              <label className="file-label">
                <input className="file-input" type="file" name="resume" />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">Сонгох</span>
                </span>
                <span className="file-name">picture.png</span>
              </label>
            </div>
          </div> */}
        </div>
        <div className="column ml-3">
          <div className="field">
            <label className="label is-size-7">Нэр</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${errors.firstName ? "is-danger" : ""}`}
                type="text"
                name="lastName"
                {...register("firstName")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
              {errors.firstName ? (
                <span className="icon is-small is-right">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="has-text-danger"
                  />
                </span>
              ) : (
                ""
              )}
            </div>
            <p className="help is-danger is-size-7 mt-0 ml-0">
              {errors.firstName && errors.firstName.message}
            </p>
          </div>
          <div className="field">
            <label className="label is-size-7">Албан тушаал</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${errors.workPosition ? "is-danger" : ""}`}
                type="text"
                name="lastName"
                {...register("workPosition")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUserCheck} />
              </span>
              {errors.workPosition ? (
                <span className="icon is-small is-right">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="has-text-danger"
                  />
                </span>
              ) : (
                ""
              )}
            </div>
            <p className="help is-danger is-size-7 mt-0 ml-0">
              {errors.workPosition && errors.workPosition.message}
            </p>
          </div>
          <div className="field">
            <label className="label is-size-7">Утасны дугаар</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${errors.phone ? "is-danger" : ""}`}
                type="number"
                name="lastName"
                {...register("phone")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              {errors.phone ? (
                <span className="icon is-small is-right">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="has-text-danger"
                  />
                </span>
              ) : (
                ""
              )}
            </div>
            <p className="help is-danger is-size-7 mt-0 ml-0">
              {errors.phone && errors.phone.message}
            </p>
          </div>
          {/* <div className="field">
            <label className="label is-size-7">Нууц үг</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${errors.password ? "is-danger" : ""}`}
                type="password"
                name="lastName"
                {...register("password")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
              {errors.password ? (
                <span className="icon is-small is-right">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="has-text-danger"
                  />
                </span>
              ) : (
                ""
              )}
            </div>
            <p className="help is-danger is-size-7 mt-0 ml-0">
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className="field">
            <label className="label is-size-7">Нууц үг</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${errors.confirmPassword ? "is-danger" : ""}`}
                type="password"
                name="lastName"
                {...register("confirmPassword")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
              {errors.confirmPassword ? (
                <span className="icon is-small is-right">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="has-text-danger"
                  />
                </span>
              ) : (
                ""
              )}
            </div>
            <p className="help is-danger is-size-7 mt-0 ml-0">
              {errors.confirmPassword && errors.confirmPassword.message}
            </p>
          </div> */}

          <div className="field is-right">
            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="button is-success is-small"
            >
              Хадгалах
            </button>
            <Link href={isAddMode ? "." : ".."}>
              <a className="button is-danger is-small">Цуцлах</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UserCreateForm;
