import { useState, useEffect } from "react";
import { io } from "socket.io-client";
let socket;
import { userService, boxService, districtService, khorooService, areaService } from "services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "components/Layouts/admin";
import BoxReport from 'components/Base/BoxReport';
export default Index;
import { TailSpin } from 'react-loading-icons'

function Index() {
    const [markers, setMarkers] = useState([]);
    const [area, setArea] = useState(0)
    const [areas, setAreas] = useState([])
    const [districts, setDistricts] = useState([])
    const [district, setDistrict] = useState(0)
    const [khoroos, setKhoroos] = useState([])
    const [khoroo, setKhoroo] = useState(0)
    const [statuses, setStatuses] = useState([])
    const [status, setStatus] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [isAll, setIsAll] = useState(false)
    const [lastData, setLastData] = useState('xaxa')

    socket = io('http://103.50.206.12:8989/')
    socket.on('connect', () => {
    })
    socket.on('serverData', async data => {
        // await getData(district, khoroo, area, status)
        console.log(data?.code)
        // if (data?.code === 'sending') {
        //     await getData(district, khoroo, area, status)
        // }
        if (data?.code === 'NEW DATA') {
            setLastData(data.data)
        }
        if (data?.code === 'NEW MESSAGE') {
            await getData(district, khoroo, area, status)
        }
    })

    useEffect(async () => {
        districtService.getAll().then(res => {
            setDistricts(res.data)
        })
        await getData(district, khoroo, area, status)


    }, []);
    useEffect(async () => {
        setIsLoading(true)
        setStatus(0)
        setKhoroo("")
        setArea("")
        if (district !== 0) {
            const khor = await khorooService.getByDistrictId(district);
            setKhoroos(khor.data)
            const are = await areaService.getByDistrictId(district);
            setAreas(are.data)
        } else {
            setKhoroos([])
            setAreas([])
        }
        await getData(district, khoroo, area, status)
        setIsLoading(false)
    }, [district])
    const sendCommand = (type) => {
        const sendMarkers = markers.map(marker => {
            if (marker.select) return marker
        })
        socket.emit("getCommand", { type, sendMarkers })
    }
    const khorooChange = async (id) => {
        setKhoroo(id)
        setStatus(0)
        await getData(district, id, area, status)
    }
    const areaChange = async (id) => {
        setArea(id)
        setStatus(0)
        await getData(district, khoroo, id, status)
    }
    const statusChange = async (id) => {
        setStatus(id)
        await getData(district, khoroo, area, id)
    }
    const getData = async (dist, khor, are, sta) => {
        console.log("getdata staring ..........")
        setIsLoading(true)
        const res = await boxService.getBoxStatus(dist, khor, are)
        const res2 = await boxService.getBoxBySearchTool(dist, khor, are, sta)
        setStatuses(res.data)
        setMarkers(res2.data)
        setIsLoading(false)
        console.log("getdata stoping ..........")
    }
    const markerSelect = (networkAddress) => {
        console.log(networkAddress);
        const mm = markers.map(marker => {
            if (marker.master?.networkAddress === networkAddress) { marker.select = !marker.select }
            return marker
        })
        setMarkers(mm)
        setIsAll(false)
        // const index = selectMarkers.indexOf(networkAddress) > 0
        // if (index < 0) { selectMarkers.push(networkAddress) }
    }
    const allSelect = () => {
        const mm = markers.map(marker => { marker.select = isAll ? false : true; return marker })
        setIsAll(!isAll)
        setMarkers(mm)
    }
    useEffect(() => {
    }, [districts])
    return (
        <AdminLayout>
            <div className="tabs mb-0 is-boxed is-small">
                <ul>
                    <li className={district === 0 ? 'is-active' : ''} onClick={e => { setDistrict(0) }}>
                        <a>
                            <span className="icon is-small">
                                {/* <img src="./img/fuse-box.png" alt=""> */}
                            </span>
                            <span>Бүгд</span>
                        </a>
                    </li>
                    {districts.map(dist => {
                        return <li key={dist.id} className={district === dist.id ? 'is-active' : ''} onClick={e => { setDistrict(dist.id) }}>
                            <a>
                                <span className="icon is-small">
                                    {/* <img src="./img/street-light.png" alt=""> */}
                                </span>
                                <span>{dist.name}</span>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
            <div className="card">
                {district != 0 ? <div className="card-content py-2">
                    <div className="columns" id="section">
                        <div className="column">
                            <div className="buttons are-small">
                                <span className="title is-7 pr-2 pt-4 is-uppercase">Баг/Хороо:</span>
                                <button className={khoroo == 0 ? 'button is-active has-background-warning' : 'button'} onClick={e => khorooChange(0)}>Бүгд</button>
                                {khoroos.map(khor => {
                                    return <button key={khor.id} className={khoroo == khor.id ? 'button is-active has-background-warning' : 'button'} onClick={e => khorooChange(khor.id)}>{khor.number}</button>
                                })}
                            </div>
                        </div>
                        <div className="column">
                            <div className="buttons is-pulled-right are-small">
                                <span className="title is-7 pr-2 pt-4 is-uppercase">бүс</span>
                                <button className={area == 0 ? 'button is-active has-background-warning' : 'button'} onClick={e => areaChange(0)}>Бүгд</button>
                                {areas.map(are => {
                                    return <button key={are.id} className={area === are.id ? 'button is-active has-background-warning' : 'button'} onClick={e => areaChange(are.id)}>{are.name}</button>
                                })}

                            </div>
                        </div>
                    </div>
                </div> : ""}
            </div>
            <BoxReport data={statuses} status={status} statusChange={statusChange} />
            <div className="card px-0 pt-0">
                <div className="card-content p-3">
                    <div className="columns">
                        <div className="column pb-0 is-2">
                            <label className="checkbox">
                                <input type="checkbox" onChange={e => allSelect()} checked={isAll} />
                                <span className="subtitle pb-2 is-7"> Нийт {markers.length} шит </span>
                            </label>
                        </div>
                        <div className="column pb-0">
                            <div className="buttons are-small">
                                <button type="submit" className="button" onClick={e => sendCommand("ON")} > Асаах</button>
                                <button type="submit" className="button" onClick={e => sendCommand("OFF")}>Унтраах</button>
                                <button type="submit" className="button" onClick={e => sendCommand("STATUS")}>Төлөв шинэчлэх</button>
                                <button type="submit" className="button" onClick={e => sendCommand("SERVER")}>Алсын удирдлага</button>
                                <button type="submit" className="button" onClick={e => sendCommand("TIMER")}>Таймер</button>
                                <button type="submit" className="button" onClick={e => sendCommand("CONTROLLER")}>Контроллер</button>
                                <button type="submit" className="button" onClick={e => sendCommand("SETADDRESS")}>Контроллер</button>
                            </div>
                        </div>
                    </div>
                    {/* <!--Table--> */}
                    <div className="fixTable3 pt-0">
                        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                            <thead>
                                <tr className="has-text-centered has-text-black">
                                    <th><i className="fa-solid fa-sort"></i></th>
                                    <th >Icon</th>
                                    <th >Шитний төлөв</th>
                                    <th >Засвар үйлчилгээ</th>
                                    <th >Байршил</th>
                                    <th >Бүс</th>
                                    <th >Станц №</th>
                                    <th >Тоолуур</th>
                                    <th >Аппарат</th>
                                    <th >Модем</th>
                                    {/* <th className="has-text-black">Ирсэн SMS</th>
                                    <th className="has-text-black">Явсан SMS</th> */}
                                    <th >Шинэчлэгдсэн огноо</th>
                                </tr>
                            </thead>
                            <tbody className="is-size-7 has-text-centered has-text-weight-normal">
                                {isLoading ? "loading" : markers.map(marker => {
                                    return <tr key={marker.id}>
                                        <td>
                                            {marker.master?.networkAddress ? marker.isWaiting ? <TailSpin stroke="black" /> : <input type="checkbox" checked={marker.select} disabled={!marker.isConnecting} onChange={e => markerSelect(marker.master?.networkAddress)} /> : ""}
                                        </td>
                                        <td>
                                            <div className="overlayimg colorstatus ">
                                                <i className="icon">
                                                    <FontAwesomeIcon className="fas fa-map-marker" icon={faMapMarker} style={{ color: "gray", paddingTop: "4px" }} />
                                                </i>
                                                <h1 className="title">А</h1>
                                                <p className="title">Алдаатай</p>
                                                <span className="title is-size-7 has-text-weight-normal">{marker.displayName}</span>
                                            </div>
                                        </td>
                                        <td>
                                            {marker.statusMain.name}
                                        </td>
                                        <td>
                                            <a href="#">
                                                <i className="fa-solid fa-xl fa-screwdriver-wrench"></i>
                                            </a>
                                        </td>
                                        <td>
                                            {marker.address}
                                        </td>
                                        <td>
                                            {marker.area.name}
                                        </td>
                                        <td>
                                            АТП-32
                                        </td>
                                        <td>
                                            {marker.counter?.number}
                                        </td>
                                        <td>
                                            {marker.boxType.name}
                                        </td>
                                        <td>
                                            {marker.master?.modemNumber}
                                        </td>
                                        {/* <td>
                                        4
                                    </td>
                                    <td>
                                        4
                                    </td> */}
                                        <td>
                                            {marker.updatedAt}
                                        </td>
                                    </tr>
                                })}
                                {/* <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="overlayimg colorstatus">
                                            <FontAwesomeIcon className="fas fa-map-marker" icon={faMapMarker} />
                                            <h1 className="title">K</h1>
                                            <p className="title">Алдаатай</p>
                                            <span className="title is-size-7 has-text-weight-normal">ЧД-1907</span>
                                        </div>
                                    </td>
                                    <td>
                                        Контроллер төлөвт унтарсан
                                    </td>
                                    <td>
                                        <a href="#">
                                            <i className="fa-solid fa-xl fa-screwdriver-wrench"></i>
                                        </a>
                                    </td>
                                    <td>
                                        Зурагтын шинэ эцэс өнгөрөөд 70 давхар
                                    </td>
                                    <td>
                                        А
                                    </td>
                                    <td>
                                        АТП-32
                                    </td>
                                    <td>
                                        5313213145
                                    </td>
                                    <td>
                                        SLM-V1.0
                                    </td>
                                    <td>
                                        88735623
                                    </td>
                                    {/* <td>
                                        4
                                    </td>
                                    <td>
                                        4
                                    </td>                                  <td>
                                        2022-04-06 18:02:23
                                    </td>
                            </tr>  */  }
                            </tbody>
                        </table>
                        <span>
                            {
                                lastData
                            }
                        </span>
                    </div>
                </div>
            </div>
        </AdminLayout >
    );
}