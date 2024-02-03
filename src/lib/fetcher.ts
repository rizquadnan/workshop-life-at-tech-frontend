import axios from "axios";

import { config } from "@/config";

export const fetcher = axios.create({
  baseURL: config.API_BASE_URL,
  headers: { "X-Custom-Header": "foobar" },
});
