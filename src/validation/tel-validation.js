const telValidation = (value) => {
 
    if (value.trim().length < 11) {
        return "Por favor, informe 11 caracteres."
    }
    else if (value.trim().length > 150) {
        return "Por favor, informe no máximo 150 caracteres."
    }
 
    return true;
}
 
export default telValidation;