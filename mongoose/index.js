// Mongoose conection
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/teste', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error: '))

db.once('open', function() {
    console.log("We have a connection!")
})

// Creating schema
const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String
});

// Creating model
const Pessoa = mongoose.model("Pessoa", pessoaSchema);

// const matheus = new Pessoa({
//     nome: "Matheus",
//     idade: 30,
//     profissao: "Programador"
// })

// Inserting data but before verifying error
// matheus.save()
//     .then(() => {
//         console.log("Data inserted successfully.")
//     })
//     .catch((err) => {
//         console.log("We had an error:" + err.message)
//     })

// Finding data
// Pessoa.findOne({ nome: "Matheus" })
//     .then((pessoa) => {
//         console.log(pessoa.nome)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })

// Including several datas
// Pessoa.insertMany([
//     {nome: "Catarina", idade: 30},
//     {nome: "João", idade: 34, profissao: "FrontEnd"},
//     {nome: "Raphael", idade: 27, profissao: "FullStack"}
// ])

// async function getPessoas() {
//     const pessoas = await Pessoa.find({}).exec();
//     console.log(pessoas)
// }

// getPessoas()

// Pessoa.insertMany({nome: "Raphael Busquet", idade: 30, profissao: "O mais top de todos"})

// Deleting but verifying if that person exists
// async function getPessoa(nome) {
//     const pessoa = await Pessoa.find({ nome: nome }).exec();
//     if (pessoa.length === 0) {
//         console.log("Esta pessoa não existe!")
//     } else {
//         console.log(pessoa)
//     }
// }

// getPessoa("Viviane Busquet");

// Pessoa.deleteOne({ nome: "Viviane Busquet" }).exec();

// Updating data
// Pessoa.updateOne({ nome: "Raphael Busquet" }, {nome: "Raphael BUSQUETOMELHOR"}).exec()

// Using where
async function getPessoaNomeIdade(nome, idade){
    const pessoa = await Pessoa
    .where("nome", nome)
    .where("idade").gte(idade)
    .exec()

    if(pessoa.length === 0) {
        console.log("Essa pessoa não existe")
    } else {
        console.log(pessoa)
    }
}

getPessoaNomeIdade('Matheus', 30)
