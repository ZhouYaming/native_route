import { login } from "../api/index"
export const loginRequest = async( params , cbObject ) =>{
    const res = await login(params)
    if(res.success){
        cbObject(res.version+'')
    }
}