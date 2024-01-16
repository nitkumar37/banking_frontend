import { nkAxios } from "./HelperService";

export const SignupServiceFunction=(user)=>{
    console.log(user);
    return nkAxios.post('/auth/createuser',user).then((response)=>response.data);
}

export const LoginServiceFunction=(user)=>{
    return nkAxios.put('/auth/login',user).then((response)=>response.data);
}


