import axios from "axios";

const CMS_API = axios.create({
  baseURL: process.env.CMS_URL
})

export default CMS_API