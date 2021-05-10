import axios from 'axios';
import Constants from 'expo-constants';
const {manifest} = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:5000`;
const api =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(`:`).shift().concat(`:5000`)
    : `api.example.com`;
// console.log(uri);
axios.defaults.baseURL = uri;
// export const configAxios = (store) => {
//   axios.interceptors.request.use(
//     (config) => {
//       if (!config.headers.Authorization) {
//         const token = store.getState().userStatus?.token;

//         if (token) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//       }

//       return config;
//     },
//     (error) => Promise.reject(error)
//   );
// };
