function PrimeiroComponente() {
    function mostrarDados() {
        let cepDigitado = document.getElementById('ProcurarCep').value;
        fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
          .then((resposta) => resposta.json())
          .then((cep) => {
            let bairro = document.createElement('p')
            let rua = document.createElement('p')
            let cidade = document.createElement('p')
            let estado = document.createElement('p')

            bairro.innerHTML = cep.bairro
            rua.innerHTML = cep.rua
            cidade.innerHTML = cep.cidade
            estado.innerHTML = cep.estado

            document.getElementById('resultados').value.appendChild(bairro)
            document.getElementById('resultados').value.appendChild(rua)
            document.getElementById('resultados').value.appendChild(cidade)
            document.getElementById('resultados').value.appendChild(estado)


          })
          .catch((erro) => {
            
            
          })    
      }
      return(
        <>
            <section>
                <input id="ProcurarCep" type="text" placeholder="Favor digitar o CEP"/>
                <button type="button" id="enviar" onClick={mostrarDados()}>Enviar</button>
            </section>
            <section id="resultados">
   
            </section>
        </>
    )

}

export default PrimeiroComponente