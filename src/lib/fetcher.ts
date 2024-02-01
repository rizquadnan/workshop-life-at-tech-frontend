import { config } from "@/config";
import axios from "axios";

export const fetcher = axios.create({
  baseURL: config.API_BASE_URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
