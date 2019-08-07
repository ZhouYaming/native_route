import { http } from "./http"

export const login = (params) => http('/login', 'POST',params)