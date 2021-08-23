import { axios } from "src/configs";

const all = (options = { params: { status: "published" } }) => {
  return axios.get("/courses", options).then((item) => item.data);
};
const detail = (id) => axios.get(`/courses/${id}`).then((item) => item.data);

export default { all, detail };
