    const inputLado = document.getElementById("inputLado");
    const btnCalcular = document.getElementById("btnCalcular");

    const resultado = document.getElementById("resultado");

    btnCalcular.addEventListener("click", () => {
        const valor = parseFloat(inputLado.value);

        if (isNaN(valor) || valor <= 0) {
            resultado.textContent = "Por favor, ingresa un numero valido.";
            resultado.className = "mensaje-error"; 
        } else {
            const area = valor * valor;
            resultado.textContent = `El área del cuadrado es: ${area}`;
            resultado.className = "mensaje-correcto"; 
        }
    });