import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { masterService, masterTypeService, userService } from "services";
import { roleService } from "services";
import Link from "next/link";
import {
  faExclamationTriangle,
  faLocationCrosshairs,
  faCodeCompare,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const createAndEditFormMaster = (props) => {
  // const router = useRouter();

  // const { id } = router.query;
  // const isAddMode = !id;

  // const [masterTypes, setMasterTypes] = useState([]);

  // const validationSchema = Yup.object().shape({
  //   networkAddress: Yup.string().required("Мэдээлэл оруулна уу"),
  //   serialNumber: Yup.string()
  //     .required("Мэдээлэл оруулна уу")
  //     .max(30, "30 тэмдэгтээс хэтрэхгүй урттай байна"),
  //   modemNumber: Yup.string()
  //     .required("Мэдээлэл оруулна уу")
  //     .max(30, "30 тэмдэгтээс хэтрэхгүй урттай байна"),
  //   masterType: Yup.string()
  //     .required("Мэдээлэл сонгоно уу")
  //     .min(4, "Мэдээлэл сонгоно уу"),
  // });
  // const formOptions = {
  //   resolver: yupResolver(validationSchema),
  // };

  // const {
  //   register,
  //   setError,
  //   handleSubmit,
  //   setValue,
  //   watch,
  //   reset,
  //   formState,
  // } = useForm(formOptions);

  // const { errors } = formState;

  // function onSubmit(data) {
  //   return isAddMode ? createUser(data) : updateUser(id, data);
  // }

  // function createUser(data) {
  //   return masterService
  //     .create(data)
  //     .then(() => {
  //       // alertService.success("User added", { keepAfterRouteChange: true });
  //       history.back();
  //     })
  //     .catch((err) => {
  //       //alertService.error

  //       if (err.error) {
  //         for (let error in err.error.errors) {
  //           setError(error, {
  //             type: "focus",
  //             message: err.error.errors[error].message,
  //           });
  //         }
  //       }
  //     });
  // }

  // function updateUser(id, data) {
  //   return masterService
  //     .update(id, data)
  //     .then((res) => {
  //       history.back();
  //     })
  //     .catch((err) => {
  //       if (err.error) {
  //         for (let error in err.error.errors) {
  //           setError(error, {
  //             type: "focus",
  //             message: err.error.errors[error].message,
  //           });
  //         }
  //       }
  //     });
  // }
  // useEffect(() => {
  //   masterTypeService.getAll().then((res) => {
  //     setMasterTypes(res.data);
  //   });
  //   if (!isAddMode) {
  //     // get user and set form fields
  //     masterService.getById(id).then((user) => {
  //       const fields = [
  //         "networkAddress",
  //         "serialNumber",
  //         "modemNumber",
  //         "masterType",
  //       ];
  //       fields.forEach((field) => {
  //         setValue(field, user.data[field]);
  //       });
  //     });
  //   }
  // }, []);

  return (
    <div className="has-background-white p-6">
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        onReset={reset}
        className="columns"
      >
        <div className="column mr-3">
          <div className="field">
            <label className="label is-size-7">Сүлжээний хаяг</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${errors.networkAddress ? "is-danger" : ""}`}
                type="text"
                name="networkAddress"
                {...register("networkAddress")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faLocationCrosshairs} />
              </span>
              {errors.networkAddress ? (
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
              {errors.networkAddress && errors.networkAddress.message}
            </p>
          </div>

          <div className="field">
            <label className="label is-size-7">Аппаратын төрөл</label>
            <div
              className={`select is-small is-fullwidth ${
                errors.masterType ? "is-danger" : ""
              }`}
            >
              <select {...register("masterType")}>
                <option key="-1" value={0}>
                  Сонгоно уу
                </option>
                {masterTypes.map((type, index) => {
                  return (
                    <option key={index} value={type._id}>
                      {type.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <p className="help is-danger is-size-7 mt-0 ml-0">
              {errors.masterType && errors.masterType.message}
            </p>
          </div>
        </div>
        <div className="column ml-3">
          <div className="field">
            <label className="label is-size-7">Сериал дугаар</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${errors.serialNumber ? "is-danger" : ""}`}
                type="text"
                name="serialNumber"
                {...register("serialNumber")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faCodeCompare} />
              </span>
              {errors.serialNumber ? (
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
              {errors.serialNumber && errors.serialNumber.message}
            </p>
          </div>
          <div className="field">
            <label className="label is-size-7">Модемын дугаар</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${errors.modemNumber ? "is-danger" : ""}`}
                type="text"
                name="modemNumber"
                {...register("modemNumber")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faSquarePhone} />
              </span>
              {errors.modemNumber ? (
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
              {errors.modemNumber && errors.modemNumber.message}
            </p>
          </div>

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
      </form> */}
    </div>
  );
};
export default createAndEditFormMaster;
