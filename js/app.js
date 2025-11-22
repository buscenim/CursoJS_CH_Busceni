function mostrarMenu() {
    console.log(" == Elegí una operación ==");
    console.log("1. Sumar")
    console.log("2. Restar")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Salir")
    console.log("============================")
}

function pedirOpcion() {
    let opcion = "";

    opcion = prompt("Ingrese una opción: ");

    switch (opcion) {
        case "1":
            a = parseInt(prompt("Ingrese el primer número: "));
            b = parseInt(prompt("Ingrese el segundo número: "));

            sumar(a, b);
            pedirOpcion();
            break;
        case "2":
            a = parseInt(prompt("Ingrese el primer número: "));
            b = parseInt(prompt("Ingrese el segundo número: "));

            restar(a, b);
            pedirOpcion();
            break;
        case "3":
            a = parseInt(prompt("Ingrese el primer número: "));
            b = parseInt(prompt("Ingrese el segundo número: "));

            multiplicar(a, b);
            pedirOpcion();
            break;
        case "4":
            a = parseInt(prompt("Ingrese el primer número: "));
            b = parseInt(prompt("Ingrese el segundo número: "));

            dividir(a, b);
            pedirOpcion();
            break;
        case "5":
            alert("Gracias por ejecutarme :)!")
            break;
        default:
            alert("Opción inválida, intentá otra vez.")
            pedirOpcion();
            break;
    }
}

function sumar(a, b) {
    resultado = a + b;
    return console.log("El resultado es: " + resultado);
}

function restar(a, b) {
    resultado = a - b;
    return console.log("El resultado es: " + resultado);
}

function multiplicar(a, b) {
    resultado = a * b;
    return console.log("El resultado es: " + resultado);
}

function dividir(a, b) {
    resultado = a / b;
    return console.log("El resultado es: " + resultado);
}

mostrarMenu();
pedirOpcion();