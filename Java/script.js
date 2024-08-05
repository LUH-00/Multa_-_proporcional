// ----------------------------------card multa contratual---------------------------------------
function calcular() {
    const plano = parseFloat(document.getElementById('plan').value);
    const meses = parseInt(document.getElementById('months').value);
    const total = plano * meses;
    document.getElementById('result').innerText = `Valor total: R$${total.toFixed(2)}`;
}

// ----------------------------------card proporcional----------------------------------------
function calcularProporcional() {
    const plano = parseFloat(document.getElementById('plan-proporcional').value);
    const dias = parseInt(document.getElementById('days').value);
    const mes = parseInt(document.getElementById('month').value);
    const diasNoMes = new Date(new Date().getFullYear(), mes, 0).getDate();
    const totalProporcional = (plano / diasNoMes) * dias;
    document.getElementById('result-proporcional').innerText = `Valor proporcional: R$${totalProporcional.toFixed(2)}`;
}

 // Função para definir o mês atual automaticamente
 function setCurrentMonth() {
    const currentMonth = new Date().getMonth() + 1; // Obtém o mês atual (0-11) e adiciona 1 para obter o mês correto (1-12)
    document.getElementById('month').value = currentMonth;
}

// Chama a função quando a página é carregada
window.onload = setCurrentMonth;


//  --------- função que não deixa o usuário passar da quantidade de meses restantes (12 meses) e aquantidade de Dias de utilização(31 dias)

function calcular() {
    const plano = parseFloat(document.getElementById('plan').value);
    const meses = parseInt(document.getElementById('months').value);
    if (meses < 1 || meses > 12) {
        alert("Por favor, insira um valor entre 1 e 12 meses.");
        return;
    }
    const total = plano * meses;
    document.getElementById('result').innerText = `Valor total: R$${total.toFixed(2)}`;
}

function calcularProporcional() {
    const plano = parseFloat(document.getElementById('plan-proporcional').value);
    const dias = parseInt(document.getElementById('days').value);
    if (dias < 1 || dias > 31) {
        alert("Por favor, insira um valor entre 1 e 31 dias.");
        return;
    }
    const mes = parseInt(document.getElementById('month').value);
    const diasNoMes = new Date(new Date().getFullYear(), mes, 0).getDate();
    const totalProporcional = (plano / diasNoMes) * dias;
    document.getElementById('result-proporcional').innerText = `Valor proporcional: R$${totalProporcional.toFixed(2)}`;
}

function setCurrentMonth() {
    const currentMonth = new Date().getMonth() + 1;
    document.getElementById('month').value = currentMonth;
}

window.onload = setCurrentMonth;
