const translations = {
    spanish: {
        encriptar: 'Encriptar',
        desencriptar: 'Desencriptar',
        copiar: 'Copiar',
        borrar: 'Borrar',
        copiadoExito: 'El texto encriptado ha sido copiado al portapapeles',
        titulo: 'Challenge Encriptador',
        placeholderEncriptar: 'Ingrese el texto a encriptar',
        placeholderDesencriptar: 'Ingrese el texto a desencriptar',
        textoCopiado: 'Texto copiado',
        textoDesencriptado: 'El texto desencriptado ha sido copiado al portapapeles'
    },
    english: {
        encriptar: 'Encrypt',
        desencriptar: 'Decrypt',
        copiar: 'Copy',
        borrar: 'Clear',
        copiadoExito: 'The encrypted text has been copied to clipboard',
        titulo: 'Encryptor Challenge',
        placeholderEncriptar: 'Enter the text to encrypt',
        placeholderDesencriptar: 'Enter the text to decrypt',
        textoCopiado: 'Text copied',
        textoDesencriptado: 'The decrypted text has been copied to clipboard'
    },
    portuguese: {
        encriptar: 'Criptografar',
        desencriptar: 'Descriptografar',
        copiar: 'Copiar',
        borrar: 'Limpar',
        copiadoExito: 'O texto criptografado foi copiado para a área de transferência',
        titulo: 'Desafio de Criptografia',
        placeholderEncriptar: 'Digite o texto a ser criptografado',
        placeholderDesencriptar: 'Digite o texto a ser descriptografado',
        textoCopiado: 'Texto copiado',
        textoDesencriptado: 'O texto descriptografado foi copiado para a área de transferência'
    }
};

function cambiarIdioma(idioma) {
    const traducciones = translations[idioma];
    const elementos = document.querySelectorAll('[data-i18n]');
    const placeholders = document.querySelectorAll('[data-placeholder]')
    const title = document.querySelector('[data-i18n="titulo"]');

    elementos.forEach(elemento => {
        const key = elemento.getAttribute('data-i18n');
        elemento.textContent = traducciones[key];
    });

    placeholders.forEach(placeholder => {
        const key = placeholder.getAttribute('data-placeholder');
        placeholder.setAttribute('placeholder', traducciones[key]);
    });

    title.textContent = traducciones['titulo'];
}


// Por defecto, cargar el idioma español
cambiarIdioma('spanish');
