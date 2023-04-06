import axiosClient from "./axiosClient";

const categoriesApi = {
    getAll(params) {
        const url = "/";
        return axiosClient.get(url, { params: params });
    },
    getCollection(collection) {
        const url = "";
        return axiosClient.get(url, { params: { category: collection } });
    },

    getProduct(id) {
        const url = `/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = "/";
        axiosClient.post(url, data);
    },
    searchProducts(name) {
        const url = "";
        return axiosClient.get(url, { params: { name_like: name, _limit: 5 } });
    },
};

export default categoriesApi;
