document.getElementById('btnCadastrar').addEventListener('click', async (e) =>{
  e.preventDefault();

  // url do endpoint da aplicação web api
  const url = "http://localhost:8080/series"

  //valores que está vindo do front-end
  const dadosEnviados = {
    'id': Math.floor(Math.random() * 100),
    'nomeSerie': document.getElementById('nomeSerie').value,
    'numTemporada': document.getElementById('numTemporada').value,
    'nomeEstudio': document.getElementById('nomeEstudio').value,
    'anoLancamento': document.getElementById('anoLancamento').value
  }
  try{
    await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(dadosEnviados)
    })
    const response = await fetch(url)
    if (response.ok) {
      alert("A série foi cadastrada com sucesso!")
    }else{
      alert("Erro ao cadastrar série. Tente novamente")
    }
    document.getElementById('btnCadastrar').removeEventListener('click', arguments.callee)
  } catch (error){
    console.log('O consumo do post deu ruim ${error}');
  }
})