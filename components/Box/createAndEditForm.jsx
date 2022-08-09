import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  districtService,
  khorooService,
  areaService,
  boxTypeService,
  boxLightTypeService,
  boxService,
  masterService,
} from "services";
import Link from "next/link";
import {
  faExclamationTriangle,
  faUser,
  faMapLocation,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const createAndEditForm = (props) => {
  // const isAddMode = props.isCreate;

  // const [districts, setDistricts] = useState([]);
  // const [khoroos, setKhoroos] = useState([]);
  // const [areas, setAreas] = useState([]);

  // const [boxTypes, setBoxTypes] = useState([]);
  // const [boxLightTypes, setBoxLightTypes] = useState([]);
  // const [freeMasters, setFreeMasters] = useState([]);

  // const validationSchema = Yup.object().shape({
  //   district: Yup.string()
  //     .required("Сонголт хийнэ үү")
  //     .min(4, "Сонголт хийнэ үү"),
  //   khoroo: Yup.string()
  //     .required("Сонголт хийнэ үү")
  //     .min(4, "Сонголт хийнэ үү"),
  //   area: Yup.string().required("Сонголт хийнэ үү").min(4, "Сонголт хийнэ үү"),
  //   address: Yup.string()
  //     .required("Мэдээлэл оруулна уу")
  //     .max(30, "30 тэмдэгтээс хэтрэхгүй урттай байна")
  //     .min(5, "Хамгийн багадаа 5 тэмэдэгтээс урт байна"),
  //   uniqnumber: Yup.number()
  //     .min(0, "Дугаараа хамгийн багадаа 1-ээс эхэлнэ")
  //     .max(99, "Дугаар 99-өөс бага байна"),
  //   boxLightType: Yup.string()
  //     .required("Сонголт хийнэ үү")
  //     .min(4, "Сонголт хийнэ үү"),
  //   boxType: Yup.string()
  //     .required("Сонголт хийнэ үү")
  //     .min(4, "Сонголт хийнэ үү"),
  //   LAT: Yup.string()
  //     .required("Байршилаа заана уу")
  //     .min(4, "Байршилаа заана уу"),
  //   LNG: Yup.string()
  //     .required("Байршилаа заана уу")
  //     .min(4, "Байршилаа заана уу"),
  //   serialNumber: Yup.string()
  //     .required("Мэдээллээ оруулна уу")
  //     .min(4, "Мэдээллээ оруулна уу"),
  //   displayName: Yup.string(),
  //   master: Yup.string(),
  // });
  // const formOptions = {
  //   resolver: yupResolver(validationSchema),
  // };

  // const {
  //   register,
  //   setError,
  //   handleSubmit,
  //   setValue,
  //   getValues,
  //   watch,
  //   reset,
  //   formState,
  // } = useForm(formOptions);

  // const { errors } = formState;

  // function onSubmit(data) {
  //   return isAddMode ? createUser(data) : updateUser(id, data);
  // }

  // function createUser(data) {
  //   return boxService
  //     .create(data)
  //     .then((res) => {
  //       // alertService.success("User added", { keepAfterRouteChange: true });
  //       console.log(res);
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
  //   return boxService
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
  // const changeDistrict = async (e) => {
  //   let dist = e.target.value;
  //   setKhoroos([]);
  //   setAreas([]);
  //   setValue("khoroo", "");
  //   setValue("area", "");
  //   setValue("district", dist);
  //   setValue("uniqnumber", 0);
  //   setValue("displayName", "**-****");
  //   if (dist.length > 3) {
  //     const dd = await districtService.getById(dist);
  //     const kk = await khorooService.getByDistrictId(dist);
  //     const aa = await areaService.getByDistrictId(dist);
  //     setKhoroos(kk.data);
  //     setAreas(aa.data);
  //     let dname = getValues("displayName");
  //     setValue("displayName", dd.data.absract + dname.slice(2, 6));
  //   }
  // };
  // const changeKhoroo = async (e) => {
  //   let khor = e.target.value;
  //   setValue("khoroo", khor);
  //   let dname = getValues("displayName");
  //   if (khor.length > 3) {
  //     const kh = await khorooService.getById(khor);
  //     const kkh = kh.data.number < 10 ? "0" + kh.data.number : kh.data.number;
  //     setValue("displayName", dname.slice(0, 3) + kkh + dname.slice(5, 7));
  //   } else {
  //     setValue("displayName", dname.slice(0, 3) + "**" + dname.slice(5, 7));
  //   }
  // };
  // const changeUniqnumber = (e) => {
  //   let dname = getValues("displayName"),
  //     uniq = e.target.value;
  //   if (uniq.length === 2) {
  //     setValue("displayName", dname.slice(0, 5) + uniq);
  //   } else {
  //     setValue("displayName", dname.slice(0, 5) + "**");
  //   }
  // };

  // useEffect(async () => {
  //   setValue("LAT", "47.8864");
  //   setValue("LNG", "106.9057");
  //   setValue("displayName", "**-****");
  //   await districtService.getAll().then((res) => {
  //     setDistricts(res.data);
  //   });
  //   await boxLightTypeService.getAll().then((res) => {
  //     setBoxLightTypes(res.data);
  //   });
  //   await boxTypeService.getAll().then((res) => {
  //     setBoxTypes(res.data);
  //   });
  //   await masterService.getFree().then((res) => {
  //     setFreeMasters(res.data);
  //   });
  //   if (!isAddMode) {
  //     // get user and set form fields

  //     const sel = await boxService.getById(id);
  //     await changeDistrict({ target: { value: sel.data.district } });
  //     await changeKhoroo({ target: { value: sel.data.khoroo } });
  //     await changeUniqnumber({ target: { value: sel.data.uniqnumber } });

  //     const fields = [
  //       "address",
  //       "displayName",
  //       "uniqnumber",
  //       "boxType",
  //       "boxLightType",
  //       "serialNumber",
  //       "master",
  //       "LAT",
  //       "LNG",
  //       "area",
  //     ];
  //     fields.forEach((field) => {
  //       console.log(field);
  //       setValue(field, sel.data[field]);
  //     });
  //   }
  // }, []);

  return (
    <div className="has-background-white p-6">
      {/* <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
        <div className="columns">
          {" "}
          <div className="column mr-3">
            <div className="columns">
              <div className="column">
                {" "}
                <div className="field">
                  <label className="label is-size-7">Дүүрэг/сум</label>
                  <div
                    className={`select  is-fullwidth ${
                      errors.district ? "is-danger" : ""
                    }`}
                  >
                    <select
                      {...register("district")}
                      onChange={(e) => changeDistrict(e)}
                    >
                      <option key="-1" value={0}>
                        Сонгоно уу
                      </option>
                      {districts.map((el, index) => {
                        return (
                          <option key={el._id} value={el._id}>
                            {el.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="help is-danger is-size-7 mt-0 ml-0">
                    {errors.district && errors.district.message}
                  </p>
                </div>
                <div className="field">
                  <label className="label is-size-7">Бүс</label>
                  <div
                    className={`select is-fullwidth ${
                      errors.area ? "is-danger" : ""
                    }`}
                  >
                    <select {...register("area")}>
                      <option key="-1" value={0}>
                        Сонгоно уу
                      </option>
                      {areas.map((el, index) => {
                        return (
                          <option key={el._id} value={el._id}>
                            {el.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="help is-danger is-size-7 mt-0 ml-0">
                    {errors.area && errors.area.message}
                  </p>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label is-size-7">Самбарын дугаар</label>
                      <div className="control has-icons-left has-icons-right">
                        <input
                          className={`input ${
                            errors.uniqnumber ? "is-danger" : ""
                          }`}
                          {...register("uniqnumber")}
                          onChange={(e) => changeUniqnumber(e)}
                          type="number"
                          name="uniqnumber"
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faHashtag} />
                        </span>
                        {errors.uniqnumber ? (
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
                        {errors.uniqnumber && errors.uniqnumber.message}
                      </p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label is-size-7">Самбарын дугаар</label>
                      <div className="control has-icons-right">
                        <input
                          className={`input ${
                            errors.displayName ? "is-danger" : ""
                          }`}
                          disabled={true}
                          type="string"
                          name="displayName"
                          {...register("displayName")}
                        />

                        {errors.displayName ? (
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
                        {errors.displayName && errors.displayName.message}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label is-size-7">
                    Самбарын гэрэлтүүлгийн төрөл
                  </label>
                  <div
                    className={`select is-fullwidth ${
                      errors.boxLightType ? "is-danger" : ""
                    }`}
                  >
                    <select {...register("boxLightType")}>
                      <option key="-1" value={0}>
                        Сонгоно уу
                      </option>
                      {boxLightTypes.map((el, index) => {
                        return (
                          <option key={el._id} value={el._id}>
                            {el.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="help is-danger is-size-7 mt-0 ml-0">
                    {errors.boxLightType && errors.boxLightType.message}
                  </p>
                </div>
                <div className="field">
                  <label className="label is-size-7">Мастер төхөөрөмж</label>
                  <div
                    className={`select is-fullwidth ${
                      errors.master ? "is-danger" : ""
                    }`}
                  >
                    <select {...register("master")}>
                      <option key="-1" value="">
                        Сонгоно уу
                      </option>
                      {freeMasters.map((el, index) => {
                        return (
                          <option key={el._id} value={el._id}>
                            {el.networkAddress + " " + el.modemNumber}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="help is-danger is-size-7 mt-0 ml-0">
                    {errors.master && errors.master.message}
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label is-size-7">Хороо/баг</label>
                  <div
                    className={`select is-fullwidth ${
                      errors.khoroo ? "is-danger" : ""
                    }`}
                  >
                    <select {...register("khoroo")} onChange={changeKhoroo}>
                      <option key="-1" value={0}>
                        Сонгоно уу
                      </option>
                      {khoroos.map((el, index) => {
                        return (
                          <option key={el._id} value={el._id}>
                            {el.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="help is-danger is-size-7 mt-0 ml-0">
                    {errors.khoroo && errors.khoroo.message}
                  </p>
                </div>
                <div className="field">
                  <label className="label is-size-7">
                    Байршилын мэдээлэл/Хаяг
                  </label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className={`input ${errors.address ? "is-danger" : ""}`}
                      type="text"
                      name="address"
                      {...register("address")}
                    />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    {errors.address ? (
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
                    {errors.address && errors.address.message}
                  </p>
                </div>
                <div className="field">
                  <label className="label is-size-7">Самбарын төрөл</label>
                  <div
                    className={`select is-fullwidth ${
                      errors.boxType ? "is-danger" : ""
                    }`}
                  >
                    <select {...register("boxType")}>
                      <option key="-1" value={0}>
                        Сонгоно уу
                      </option>
                      {boxTypes.map((el, index) => {
                        return (
                          <option key={el._id} value={el._id}>
                            {el.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="help is-danger is-size-7 mt-0 ml-0">
                    {errors.boxType && errors.boxType.message}
                  </p>
                </div>
                <div className="field">
                  <label className="label is-size-7">
                    Самбарын сериал дугаар
                  </label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className={`input ${
                        errors.serialNumber ? "is-danger" : ""
                      }`}
                      type="text"
                      name="serialNumber"
                      {...register("serialNumber")}
                    />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faUser} />
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
              </div>
            </div>
          </div>
          <div className="column ml-3">
            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label is-size-7">Өргөрөг:</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className={`input ${errors.LAT ? "is-danger" : ""}`}
                      type="text"
                      name="lastName"
                      {...register("LAT")}
                    />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faMapLocation} />
                    </span>
                    {errors.LAT ? (
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
                    {errors.LAT && errors.LAT.message}
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label is-size-7">Уртгар:</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className={`input ${errors.LNG ? "is-danger" : ""}`}
                      type="text"
                      name="lastName"
                      {...register("LNG")}
                    />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faMapLocation} />
                    </span>
                    {errors.LNG ? (
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
                    {errors.LNG && errors.LNG.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">MAP</div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column"></div>
          <div className="column">
            <div className="field columns">
              <Link href={isAddMode ? "." : ".."}>
                <a className="button column is-fullwidth is-danger mr-5 is-small">
                  Цуцлах
                </a>
              </Link>
              <button
                type="submit"
                disabled={formState.isSubmitting}
                className="button column is-fullwidth is-success is-small"
              >
                Хадгалах
              </button>
            </div>
          </div>
        </div>
      </form> */}
    </div>
  );
};
export default createAndEditForm;
