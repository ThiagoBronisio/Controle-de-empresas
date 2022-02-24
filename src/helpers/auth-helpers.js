export const singIn = (data) => {
     localStorage.setItem("ACCESS_TOKEN", data);
}

export const getAccsessToken = () => {
  return localStorage.getItem("ACCESS_TOKEN")
}

export const getUsuario = (data) => {
    var data = localStorage.getItem("ACCESS_TOKEN");
    var user = JSON.stringify(data);
    return user.usuario;
}

export const getEmail = () => {
    var data = localStorage.getItem("ACCESS_TOKEN");
    var user = JSON.stringify(data);
    return user.email;
}

export const removerAccsessToken = () => {
    localStorage.removeItem("ACCESS_TOKEN") ;
}

export const isAutenticated = () => {
    return localStorage.getItem("ACCESS_TOKEN") != null;
}