function encriptarTexto() {
    let textoOriginal = document.getElementById('caja-encriptador').value.toLowerCase();
    
    if (!validarTexto(textoOriginal)) {
        mostrarError();
        return;
    }
        
    let textoEncriptado = textoOriginal.replace(/e/g, 'enter')
                                       .replace(/i/g, 'imes')
                                       .replace(/a/g, 'ai')
                                       .replace(/o/g, 'ober')
                                       .replace(/u/g, 'ufat');
    document.getElementById('caja-desencriptador').value = textoEncriptado;
}

function desencriptarTexto() {
    let textoEncriptado = document.getElementById('caja-desencriptador').value.toLowerCase();
    
    if (!validarTexto(textoEncriptado)) {
        mostrarError();
        return;
    }
    
    let textoOriginal = textoEncriptado.replace(/enter/g, 'e')
                                       .replace(/imes/g, 'i')
                                       .replace(/ai/g, 'a')
                                       .replace(/ober/g, 'o')
                                       .replace(/ufat/g, 'u');
    document.getElementById('caja-encriptador').value = textoOriginal;
}

function copiarResultado(idCaja) {
    let textoResultado = document.getElementById(idCaja).value;
    let mensajeExito = '';

    if (idCaja === 'caja-desencriptador') {
        mensajeExito = 'El texto encriptado ha sido copiado al portapapeles';
    } else if (idCaja === 'caja-encriptador') {
        mensajeExito = 'El texto desencriptado ha sido copiado al portapapeles';
    }

    navigator.clipboard.writeText(textoResultado)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Texto copiado',
                text: mensajeExito,
                timer: 2500,
                timerProgressBar: true,
                showConfirmButton: false
            });
        })
        .catch(err => console.error('Error al copiar texto: ', err));
}


function borrarContenido(idCaja) {
    document.getElementById(idCaja).value = ''; // Borra el contenido de la caja de texto
}

function validarTexto(texto) {
    // Expresión regular que permite solo letras minúsculas sin acentos ni caracteres especiales
    const regex = /^[a-z!?\s]+$/;
    return regex.test(texto);
}

function mostrarError() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El texto debe contener solo letras minúsculas y sin acentos ni caracteres especiales.'
    });
}

