import { ApiClient } from "./config";

const postApi = {
  // getListElectronic: (payload) => {
  //     return ApiClient.post('electronic-items',payload);
  // },
  // getListBook: (payload) => {
  //     return ApiClient.post('book-search', payload);
  // }
  updatePost: (payload: any) => {
    console.log("da push");
    return ApiClient.put(`posts/${payload.id}`, payload.data);
  },
};

export { postApi };
