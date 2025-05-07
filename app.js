const newNombre=document.querySelector("#nombre");
const newProfesion=document.querySelector("#profesion");
const newEmail=document.querySelector("#email");
const newTelefono=document.querySelector("#telefono");
const newColor=document.querySelector("#color");

const previewNombre = document.querySelector("#preview-nombre");
const previewProfesion = document.querySelector("#preview-profesion");
const previewEmail = document.querySelector("#preview-email");
const previewTelefono = document.querySelector("#preview-telefono");
const tarjetaPreview = document.querySelector("#tarjeta-preview");

const tarjetaForm = document.querySelector("#tarjeta-form");
const btnDescargar = document.querySelector("#descargar-imagen");


    newNombre.addEventListener("input", () => {
        previewNombre.textContent = newNombre.value || "Nombre del Usuario";
    });

    newProfesion.addEventListener("input", () => {
        previewProfesion.textContent = newProfesion.value || "Profesión/Cargo";
    });

    newEmail.addEventListener("input", () => {
        previewEmail.textContent = "Email: " + (newEmail.value || "usuario@ejemplo.com");
    });

    newTelefono.addEventListener("input", () => {
        previewTelefono.textContent = "Teléfono: " + (newTelefono.value || "123456789");
    });

    newColor.addEventListener("input", () => {
        tarjetaPreview.style.backgroundColor = newColor.value;
    });

    tarjetaForm.addEventListener("reset", () => {
        setTimeout(() => {
            previewNombre.textContent = "Nombre del Usuario";
            previewProfesion.textContent = "Profesión/Cargo";
            previewEmail.textContent = "Email: usuario@ejemplo.com";
            previewTelefono.textContent = "Teléfono: 123456789";
            tarjetaPreview.style.backgroundColor = ""; 
        }, 0);
    });

    btnDescargar.addEventListener("click", () => {
        html2canvas(document.querySelector("#tarjeta-preview")).then(canvas => {
            const link = document.createElement("a");
            link.download = "tarjeta.png";
            link.href = canvas.toDataURL();
            link.click();
        });
    });
