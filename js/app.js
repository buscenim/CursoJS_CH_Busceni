function mostrarMenu() {
    console.log(" == Elegí una operación ==");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Salir");
    console.log("============================");
}

function sumar(a, b) {
    const resultado = a + b;
    console.log("El resultado de la suma es: " + resultado);
}

function restar(a, b) {
    const resultado = a - b;
    console.log("El resultado de la resta es: " + resultado);
}

function multiplicar(a, b) {
    const resultado = a * b;
    console.log("El resultado de la multiplicación es: " + resultado);
}

function dividir(a, b) {
    if (b === 0) {
        alert("No se puede fividir por cero.")
        console.log("Intento de división por cero.")
        return;
    }
    const resultado = a / b;
    console.log("El resultado de la división es: " + resultado);
}

function pedirOpcion() {
    const a = parseFloat(prompt("Ingrese el primer número:"));
    const b = parseFloat(prompt("Ingrese el segundo número:"));
    return [a, b];
}

function iniciarCalculadora() {
    let opcion = "";

    while (opcion !== "5") {
        mostrarMenu();
        opcion = prompt(
            "Elegí una opción:\n" +
            "1. Sumar\n" +
            "2. Restar\n" +
            "3. Multiplicar\n" +
            "4. Dividir\n" +
            "5. Salir"
        );

        switch (opcion) {
            case "1": {
                const [a, b] = pedirOpcion();
                sumar(a, b);
                break;
            }
            case "2": {
                const [a, b] = pedirOpcion();
                restar(a, b);
                break;
            }
            case "3": {
                const [a, b] = pedirOpcion();
                multiplicar(a, b);
                break;
            }
            case "4": {
                const [a, b] = pedirOpcion();
                dividir(a, b);
                break;
            }
            case "5": {
                const salir = confirm("¿Seguro que querés salir?");
                if (salir) {
                    alert("Gracias por usar la calculadora");
                } else {
                    opcion = "";
                }
                break;
            }
            default:
                alert("Opción inválida, intentá otra vez.");
                break;
        }
    }
}

iniciarCalculadora();