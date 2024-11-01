class Heroi {

    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){

        const ataque = 
        {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        }

        console.log(`o ${this.tipo} atacou usando ${ataque[this.tipo]}`)
    }
}

let heroi = new Heroi("yuri",20,"guerreiro")

heroi.atacar()