import axios from "axios";

export function GetAxios(reqUrl, type, data = "") {
    return new Promise((resolve, reject) => {
        const apiUrl = getApiUrl(type);
        console.log("GetAxios");
        console.log(apiUrl);
        console.log(data);

        axios
            .get(apiUrl + reqUrl, { params: data })
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((error) => {
                console.log("Get Axios Error : " + error.message);
            });
    });
}

export function PostAxios(reqUrl, type, data = "") {
    return new Promise((resolve, reject) => {
        const apiUrl = getApiUrl(type);
        console.log("PostAxios");
        console.log(apiUrl);
        console.log(data);

        axios
            .post(apiUrl + reqUrl, { data })
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((error) => {
                console.log(reject);
                console.log("Post Axios Error : " + error.message);
            });
    });
}

function getApiUrl(type) {
    let apiUrl = "";
    const SERVER_URL = "http://ec2-15-164-213-79.ap-northeast-2.compute.amazonaws.com:6002";
    const BASIC_ROUTER = "/api/v1/users/";
    const REST_ROUTER = "/api/v1/rest/";
    const ACCO_ROUTER = "/api/v1/acco/";

    switch (type) {
        case "B":
            apiUrl = SERVER_URL + BASIC_ROUTER;
            break;
        case "R":
            apiUrl = SERVER_URL + REST_ROUTER;
            break;
        case "A":
            apiUrl = SERVER_URL + ACCO_ROUTER;
        default:
            apiUrl = "";
    }

    return apiUrl;
}
