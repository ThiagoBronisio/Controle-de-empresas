export const singIn = (data) => {
    localStorage.setItem("USER_AUTH", JSON.stringify(data));
}

export const getAccsessToken = () => {
   var data = localStorage.getItem("USER_AUTH");
   var auth = JSON.stringify(data)
   return auth.accsesToken
}

export const getUsuario = () => {
    var data = localStorage.getItem("USER_AUTH");
    var auth = JSON.stringify(data);
    return auth.usuario;
}

export const getEmail = () => {
    var data = localStorage.getItem("USER_AUTH");
    var auth = JSON.stringify(data);
    return auth.email;
}

export const removerAccsessToken = () => {
    localStorage.removeItem("USER_AUTH") ;
}

export const isAutenticated = () => {
    return localStorage.getItem("USER_AUTH") != null;
}