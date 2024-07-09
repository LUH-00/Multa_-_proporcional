    function calcular() {
        // Obtém o valor do plano escolhido
        const plano = parseFloat(document.getElementById('plan').value);
        // Obtém a quantidade de meses restantes
        const meses = parseInt(document.getElementById('months').value);
        // Calcula o valor total multiplicando o valor do plano pelos meses
        const total = plano * meses;
        // Exibe o resultado
        document.getElementById('result').innerText = `Valor total: R$${total.toFixed(2)}`;
    }

    function calcularProporcional() {
        // Obtém o valor do plano escolhido
        const plano = parseFloat(document.getElementById('plan-proporcional').value);
        // Obtém a quantidade de dias restantes
        const dias = parseInt(document.getElementById('days').value);
        // Calcula o valor proporcional multiplicando o valor do plano pelos dias
        const totalProporcional = (plano / 30) * dias; // Considerando que o valor do plano é mensal
        // Exibe o resultado
        document.getElementById('result-proporcional').innerText = `Valor proporcional: R$${totalProporcional.toFixed(2)}`;
    }
