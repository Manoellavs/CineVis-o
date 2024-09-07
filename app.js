document.addEventListener("DOMContentLoaded", () => {
    const listaFilmes = document.getElementById("filmes-lista");
    const inputPesquisa = document.getElementById("pesquisa");
    const botaoPesquisar = document.getElementById("botao-pesquisar");

    const criarFilmeItem = filme => `
        <div class="filme-item">
            <img src="${filme.imagem}" alt="${filme.titulo}">
            <div class="filme-info">
                <h3>${filme.titulo}</h3>
                <p><strong>Ano:</strong> ${filme.ano}</p>
                <p><strong>Duração:</strong> ${filme.duracao}</p>
                <p><strong>Gênero:</strong> ${filme.genero}</p>
                <p><strong>Classificação:</strong> ${filme.classificacao} anos</p>
                <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
                <p><strong>Horários:</strong> ${filme.horarios.join(", ")}</p>
                <p><strong>Cinemas:</strong> ${filme.cinemas.join(", ")}</p>
            </div>
        </div>
    `;

    const carregarFilmes = filmes => {
        listaFilmes.innerHTML = ''; 
        for (const filme of filmes) {
            listaFilmes.innerHTML += criarFilmeItem(filme); 
        }
    };

    const filtrarFilmes = () => {
        const termo = inputPesquisa.value.toLowerCase();
        console.log("Termo de pesquisa:", termo); 
        const filtrados = filmes.filter(f => f.titulo.toLowerCase().includes(termo));
        console.log("Filmes filtrados:", filtrados); 
        carregarFilmes(filtrados);
    };

    botaoPesquisar.addEventListener("click", filtrarFilmes);
    console.log("Filmes carregados:", filmes); 
    carregarFilmes(filmes);
});
