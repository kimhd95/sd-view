import axios from "axios";

export function GetAxios(apiUrl, data = "") {
  return new Promise((resolve, reject) => {
    console.log("GetAxios");
    console.log(apiUrl);
    const serverUrl =
      "http://ec2-15-164-213-79.ap-northeast-2.compute.amazonaws.com:6002";

    axios
      .get(serverUrl + apiUrl, { data })
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((error) => {
        console.log("Get Axios Error : " + error.message);
      });
  });
}

export function PostAxios(apiUrl, data = "") {
  return new Promise((resolve, reject) => {
    console.log("PostAxios");
    console.log(apiUrl);
    const serverUrl =
      "http://ec2-15-164-213-79.ap-northeast-2.compute.amazonaws.com:6002";

    axios
      .post(serverUrl + apiUrl, { data })
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((error) => {
        console.log(reject);
        console.log("Get Axios Error : " + error.message);
      });
  });
}
