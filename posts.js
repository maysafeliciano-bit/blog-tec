const posts = [
    {
        titulo: "A tecnologia transformando a educação",

        imagem: "imagem-blog.png",

        alt: "Ilustração de um livro aberto conectado a elementos digitais, representando a união entre educação e tecnologia.",

        paragrafos: [
            "A tecnologia está cada vez mais presente na educação. Computadores, celulares, plataformas digitais e ferramentas de inteligência artificial podem ajudar estudantes a aprender de maneiras diferentes e mais interativas.",

            "Além de facilitar o acesso à informação, a tecnologia permite criar experiências de aprendizagem mais dinâmicas. É possível pesquisar, assistir a vídeos, desenvolver projetos e criar páginas na internet utilizando ferramentas disponíveis atualmente.",

            "Aprender programação também é uma forma de desenvolver criatividade e raciocínio lógico. Com HTML, CSS e JavaScript, podemos transformar ideias em páginas da internet."
        ]
    },

    {
        titulo: "Por que uma imagem é importante?",

        imagem: "imagem-blog.png",

        alt: "Livro aberto conectado a símbolos digitais, representando como a tecnologia pode apoiar o aprendizado.",

        paragrafos: [
            "Uma imagem relacionada ao conteúdo ajuda a transmitir a ideia principal do texto de maneira visual.",

            "Neste post, a imagem representa a conexão entre conhecimento, educação e tecnologia. O livro representa o aprendizado, enquanto os elementos digitais representam as ferramentas tecnológicas utilizadas atualmente."
        ]
    },

    {
        titulo: "Acessibilidade também importa",

        imagem: "imagem-blog.png",

        alt: "Ilustração de educação e tecnologia mostrando um livro aberto conectado a elementos digitais.",

        paragrafos: [
            "Ao adicionar uma imagem em uma página, é importante utilizar o atributo alt.",

            "O texto alternativo descreve a imagem para pessoas que utilizam leitores de tela e também ajuda quando a imagem não consegue ser carregada.",

            "Por isso, o texto do atributo alt deve fazer sentido e estar relacionado ao conteúdo apresentado."
        ]
    }
];


const areaPosts = document.getElementById("posts");


posts.forEach(function(post) {

    const artigo = document.createElement("article");

    artigo.classList.add("post");


    const titulo = document.createElement("h2");

    titulo.textContent = post.titulo;


    const imagem = document.createElement("img");

    imagem.src = post.imagem;

    imagem.alt = post.alt;

    imagem.classList.add("post-imagem");


    artigo.appendChild(titulo);

    artigo.appendChild(imagem);


    post.paragrafos.forEach(function(texto) {

        const paragrafo = document.createElement("p");

        paragrafo.textContent = texto;

        artigo.appendChild(paragrafo);

    });


    areaPosts.appendChild(artigo);

});
