function calcular() {
    let valorProjeto = document.getElementById("valorProjeto").value;
    let horasDiarias = document.getElementById("horasDiarias").value;
    let diasEfetivos = document.getElementById("diasEfetivos").value;
    let diasFerias = document.getElementById("diasFerias").value;

    let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias)) + ((diasFerias * diasEfetivos * horasDiarias));

    if (isNaN(valorHora)) {
        alert("Por favor, insira um valor válido");
    } else {
        document.getElementById("result").innerHTML = "R$ " + valorHora.toFixed(2);
        event.preventDefault();
    }
}
