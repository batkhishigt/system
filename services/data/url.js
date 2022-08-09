import {
    faCalculator,
    faHouse,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
const urlDatas = [{
    "index": "user",
    "name": "Хэрэглэгч",
    "icon": faUsers
},
{
    "index": "admin",
    "name": "Хянах самбар",
    "icon": faCalculator
},
{
    "index": "register",
    "name": "Бүртгэл",
    "icon": faCalculator
},
];

const urlData = (index) => {
    let retData = {
        "index": "",
        "name": "",
        "icon": faHouse
    };
    urlDatas.map(data => {
        if (data.index === index) retData = data;
    })
    return retData;
}

export default urlData;