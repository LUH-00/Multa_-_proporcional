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

function calcularDifProporcional() {
    try {
        // Primeiro período
        const plano1 = parseFloat(document.getElementById('plan-dif-proporcional1').value);
        const mes1 = parseInt(document.getElementById('month1').value);
        const dias1 = parseInt(document.getElementById('days1').value);
        
        // Segundo período
        const plano2 = parseFloat(document.getElementById('plan-dif-proporcional2').value);
        const mes2 = parseInt(document.getElementById('month2').value);
        const dias2 = parseInt(document.getElementById('days2').value);
        
        // Validar dias
        if (dias1 < 1 || dias1 > 31 || dias2 < 1 || dias2 > 31) {
            throw new Error("Por favor, insira valores entre 1 e 31 dias");
        }
        
        // Obter dias no mês para cada período
        const diasNoMes1 = new Date(new Date().getFullYear(), mes1, 0).getDate();
        const diasNoMes2 = new Date(new Date().getFullYear(), mes2, 0).getDate();
        
        // Validar se dias de utilização não excedem dias do mês
        if (dias1 > diasNoMes1) {
            throw new Error(`O mês selecionado no primeiro período tem apenas ${diasNoMes1} dias`);
        }
        if (dias2 > diasNoMes2) {
            throw new Error(`O mês selecionado no segundo período tem apenas ${diasNoMes2} dias`);
        }
        
        // Calcular valores proporcionais
        const valor1 = (plano1 / diasNoMes1) * dias1;
        const valor2 = (plano2 / diasNoMes2) * dias2;
        const total = valor1 + valor2;
        
        // Exibir resultados
        document.getElementById('result-dif-proporcional1').innerHTML = 
            `1º Período (${getMonthName(mes1)}):<br>
            ${dias1} dias de ${diasNoMes1} = R$${valor1.toFixed(2)}`;
        
        document.getElementById('result-dif-proporcional2').innerHTML = 
            `2º Período (${getMonthName(mes2)}):<br>
            ${dias2} dias de ${diasNoMes2} = R$${valor2.toFixed(2)}`;
        
        document.getElementById('total-dif-proporcional').innerHTML = 
            `<i class="fas fa-calculator"></i> VALOR TOTAL: R$${total.toFixed(2)}`;
            
    } catch (error) {
        alert("Erro no cálculo: " + error.message);
        console.error(error);
    }
}

function getMonthName(month) {
    const months = [
        "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
        "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
    ];
    return months[month - 1];
}

function setCurrentMonth() {
    const currentMonth = new Date().getMonth() + 1;
    document.getElementById('month').value = currentMonth;
    document.getElementById('month1').value = currentMonth;
    document.getElementById('month2').value = currentMonth;
}

window.addEventListener('DOMContentLoaded', function() {
    setCurrentMonth();
});