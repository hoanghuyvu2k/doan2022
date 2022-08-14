import { ApiClient } from "./config";

const userApi = {
  // getListElectronic: (payload) => {
  //     return ApiClient.post('electronic-items',payload);
  // },
  // getListBook: (payload) => {
  //     return ApiClient.post('book-search', payload);
  // }
  login: (payload: any) => {
    return ApiClient.post(`auth/login`, payload);
  },
};

export { userApi };
