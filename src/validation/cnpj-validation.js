const cnpjValidation = (value) => {
 
    if (value.trim().length < 14) {
        return "Por favor, informe 14 caracteres."
    }
    else if (value.trim().length > 150) {
        return "Por favor, informe no máximo 150 caracteres."
    }
 
    return true;
}
 
export default cnpjValidation;