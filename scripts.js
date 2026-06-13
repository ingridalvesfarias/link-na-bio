async function carregarDados() {
    const dados = {
        "nome": "Ingrid Farias",
        "bio": "Desenvolvedora Front-End",
        "foto": "https://github.com/ingridalvesfarias.png",
        "links": [
            { "nome": "Portfólio", "url": "https://ingridfarias.vercel.app/" },
            { "nome": "GitHub", "url": "https://github.com/ingridalvesfarias" },
            { "nome": "LinkedIn", "url": "https://www.linkedin.com/in/ingridalvesfarias/" }
        ]
    };

    document.getElementById('name').innerText = dados.nome;
    document.getElementById('bio').innerText = dados.bio;
    document.getElementById('profile-pic').src = dados.foto;

    const container = document.getElementById('links-container');
    dados.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.innerText = link.nome;
        a.className = 'btn';
        a.target = '_blank'; 
        container.appendChild(a);
    });
}

carregarDados();