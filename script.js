function choosePath(choice) {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');

    // Primeira escolha: Gravar música ou focar nos estudos
    if (choice === 'recordSong') {
        story.innerHTML = 'Lucas decide gravar a música. Ele se sente empolgado, mas percebe que está gastando muito tempo no estúdio e começa a faltar na escola. Seu desempenho escolar cai. O que ele faz agora?';
        choices.innerHTML = '<button onclick="choosePath(\'school\')">Tentar equilibrar música e estudos</button><button onclick="choosePath(\'quitSchool\')">Abandonar a escola e focar na música</button>';
    } else if (choice === 'focusStudies') {
        story.innerHTML = 'Lucas decide focar nos estudos e deixa a música de lado por enquanto. Ele tira boas notas e sua família fica orgulhosa, mas ele sente falta de se expressar no rap. Ele tem uma nova chance de participar de uma batalha de rimas. O que ele faz?';
        choices.innerHTML = '<button onclick="choosePath(\'battle\')">Participar da batalha</button><button onclick="choosePath(\'declineBattle\')">Recusar e focar nos estudos</button>';
    }

    // Segunda escolha: Tentar equilibrar música e escola ou abandonar
    else if (choice === 'school') {
        story.innerHTML = 'Lucas tenta equilibrar música e escola. Ele consegue manter suas notas, mas o progresso musical é mais lento. Um produtor local se interessa por ele, mas pede para ele largar tudo e se dedicar ao rap. O que ele faz?';
        choices.innerHTML = '<button onclick="choosePath(\'acceptProducer\')">Aceitar a proposta do produtor</button><button onclick="choosePath(\'rejectProducer\')">Rejeitar a proposta e continuar estudando</button>';
    } else if (choice === 'quitSchool') {
        story.innerHTML = 'Lucas abandona a escola e foca totalmente na música. Ele começa a ganhar popularidade nas redes sociais, mas enfrenta dificuldades financeiras. Um traficante local oferece apoio financeiro em troca de participação nos lucros. O que ele faz?';
        choices.innerHTML = '<button onclick="choosePath(\'acceptDealer\')">Aceitar o apoio do traficante</button><button onclick="choosePath(\'refuseDealer\')">Recusar e lutar por conta própria</button>';
    }

    // Segunda escolha: Participar ou não da batalha
    else if (choice === 'battle') {
        story.innerHTML = 'Lucas participa da batalha de rimas e impressiona a plateia. Um produtor que estava assistindo oferece uma chance de gravar um álbum. O que ele faz?';
        choices.innerHTML = '<button onclick="choosePath(\'signContract\')">Assinar contrato com o produtor</button><button onclick="choosePath(\'stayIndependent\')">Manter a independência e continuar batalhando</button>';
    } else if (choice === 'declineBattle') {
        story.innerHTML = 'Lucas recusa a batalha e se forma com boas notas, mas nunca segue o sonho do rap. Ele se torna professor e inspira seus alunos a seguirem seus sonhos.';
        choices.innerHTML = '<button onclick="restart()">Reiniciar Jogo</button>';
    }

    // Terceira escolha: Consequências de aceitar ou recusar ofertas
    else if (choice === 'acceptProducer') {
        story.innerHTML = 'Lucas se torna um rapper famoso sob a orientação do produtor. No entanto, ele perde o controle criativo de sua música e sente que não se expressa mais como antes. Ele vive uma vida de sucesso, mas com arrependimentos.';
        choices.innerHTML = '<button onclick="restart()">Reiniciar Jogo</button>';
    } else if (choice === 'rejectProducer') {
        story.innerHTML = 'Lucas recusa o produtor e continua se esforçando sozinho. Após anos de trabalho duro, ele finalmente se torna um artista respeitado, fiel aos seus princípios. É um caminho difícil, mas ele está satisfeito.';
        choices.innerHTML = '<button onclick="restart()">Reiniciar Jogo</button>';
    } else if (choice === 'acceptDealer') {
        story.innerHTML = 'Lucas aceita a ajuda do traficante e se envolve em um mundo perigoso. Apesar do sucesso inicial, ele é preso por associação ao tráfico e sua carreira acaba antes mesmo de decolar.';
        choices.innerHTML = '<button onclick="restart()">Reiniciar Jogo</button>';
    } else if (choice === 'refuseDealer') {
        story.innerHTML = 'Lucas recusa o traficante e luta por conta própria. Ele vive uma vida modesta, mas sem se comprometer com o crime. Ele se torna um ícone de resistência e exemplo de luta para sua comunidade.';
        choices.innerHTML = '<button onclick="restart()">Reiniciar Jogo</button>';
    } else if (choice === 'signContract') {
        story.innerHTML = 'Lucas assina com o produtor e lança seu álbum. Ele se torna uma estrela do rap, mas, com o tempo, percebe que a fama não é o que ele esperava. Mesmo com o sucesso, ele sente um vazio pessoal.';
        choices.innerHTML = '<button onclick="restart()">Reiniciar Jogo</button>';
    } else if (choice === 'stayIndependent') {
        story.innerHTML = 'Lucas decide permanecer independente. Ele luta para ganhar espaço, mas constrói uma base de fãs leal. Ele nunca se torna uma estrela global, mas vive feliz sabendo que seguiu seu caminho sem comprometer seus valores.';
        choices.innerHTML = '<button onclick="restart()">Reiniciar Jogo</button>';
    }
}

function restart() {
    location.reload();
}
