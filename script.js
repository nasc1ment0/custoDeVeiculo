function calcular() {
    let valorVeiculo = document.querySelector('#valorBruto').value;
    const icms = document.querySelector('#icms');
    const frete = document.querySelector('#frete');
    const valorTotal = document.querySelector('#valorTotal');
    const ipva = document.querySelector('#ipva');
    const licenciamento = document.querySelector('#licenciamento');
    const seguro = document.querySelector('#seguro');
    const totalDocumentos = document.querySelector('#totalDocumentos');
    const regioes = document.querySelector('#regiao');
    const selecionadoRegioes = regioes.options[regioes.selectedIndex].value;

    if (sim.checked == true) {
        const regioes = document.querySelector('#regiao');
        const selecionadoRegioes = regioes.options[regioes.selectedIndex].value;
        ipva.innerHTML = `R$${(4 / 100) * valorVeiculo}`;
        licenciamento.innerHTML = `R$${(1 / 100) * valorVeiculo}`;
        seguro.innerHTML = `R$${(95.84 / 12).toFixed(2)}. Valor por mês`;
        totalDocumentos.innerHTML = `R$${(Number((4 / 100) * valorVeiculo) + Number((1 / 100) * valorVeiculo)).toFixed(2)}`

        if (selecionadoRegioes == "nordeste") {
            frete.innerHTML = `R$${(1.5 / 100) * valorVeiculo}`;
            icms.innerHTML = `R$${(12 / 100) * valorVeiculo}`;
            valorTotal.innerHTML = `R$${Number(valorVeiculo) + Number((12 / 100) * valorVeiculo) + Number((1.5 / 100) * valorVeiculo)}`;
        }
        else if (selecionadoRegioes == "norte") {
            frete.innerHTML = `R$${(2 / 100) * valorVeiculo}`;
            icms.innerHTML = `R$${(12 / 100) * valorVeiculo}`;
            valorTotal.innerHTML = `R$${Number(valorVeiculo) + Number((12 / 100) * valorVeiculo) + Number((2 / 100) * valorVeiculo)}`;
        }
        else if (selecionadoRegioes == "sul" || selecionadoRegioes == "sudeste") {
            frete.innerHTML = `R$${(1 / 100) * valorVeiculo}`;
            icms.innerHTML = `R$${(12 / 100) * valorVeiculo}`;
            valorTotal.innerHTML = `R$${Number(valorVeiculo) + Number((12 / 100) * valorVeiculo) + Number((1 / 100) * valorVeiculo)}`;
        }
    }
    else {
        alert('Você precisa dos documentos');
    };
}

function calcularParcelamento() {
    let valorVeiculo = document.querySelector('#valorBruto').value;
    const entrada = document.querySelector('#entrada').value;
    const valorFinanciado = document.querySelector('#valorFinanciado');
    const prazo = document.querySelector('#prazo').value;
    const valorParcelas = document.querySelector('#valorParcelas');
    const totalFinanciamento = document.querySelector('#totalFinanciamento');
    const banco = document.querySelector('#banco');
    const selecionadoBanco = banco.options[banco.selectedIndex].value;

    if (selecionadoBanco == 'itau') {
        valorFinanciado.innerHTML = `R$${Number(valorVeiculo) - Number((30 / 100) * valorVeiculo).toFixed(2)}`;
        valorParcelas.innerHTML = `R$${Number((30 / 100) * valorVeiculo) + Number(valorVeiculo - entrada.value).toFixed(2) / prazo}`;
        totalFinanciamento.innerHTML = `R$${Number((30 / 100) * valorVeiculo) + Number(valorVeiculo - entrada.value).toFixed(2)}`;
    }

}
