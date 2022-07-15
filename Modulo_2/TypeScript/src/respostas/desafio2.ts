
enum Trabalho {
    ATRIZ,
    PADEIRO,
    DESENVOLVEDOR
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let humano1: Humano = {
    nome: 'Maria Luisa',
    idade: 21,
    profissao: Trabalho.DESENVOLVEDOR
};

let humano2: Humano = {
    nome: 'Roberto Moraes',
    idade: 19,
    profissao: Trabalho.PADEIRO
};

let humano3: Humano = {
    nome: 'Laura Lorena',
    idade: 21,
    profissao: Trabalho.ATRIZ
};

let humano4: Humano = {
    nome: 'João Viktor',
    idade: 25,
    profissao: Trabalho.DESENVOLVEDOR
};