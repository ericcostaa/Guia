/* =========================
   GUIA JAVASCRIPT - CONSULTA
   ========================= */

/* =========================
   VARIÁVEIS
   ========================= */

// var (evitar hoje em dia)
var nome = "João";

// let (valor pode mudar)
let idade = 25;

// const (valor fixo)
const PI = 3.14;

/* =========================
   TIPOS DE DADOS
   ========================= */

let texto = "String";
let numero = 10;
let decimal = 10.5;
let booleano = true;
let lista = [1, 2, 3];
let objeto = { nome: "Maria", idade: 30 };
let nulo = null;
let indefinido = undefined;

/* =========================
   OPERADORES
   ========================= */

let soma = 5 + 2;
let sub = 5 - 2;
let mult = 5 * 2;
let div = 5 / 2;
let resto = 5 % 2;

// Comparação
5 == "5";   // true (compara valor)
5 === "5";  // false (compara valor e tipo)

// Lógicos
true && false;
true || false;
!true;

/* =========================
   CONDICIONAIS
   ========================= */

let valor = 10;

if (valor > 5) {
    console.log("Maior que 5");
} else if (valor === 5) {
    console.log("Igual a 5");
} else {
    console.log("Menor que 5");
}

// Operador ternário
let resultado = (valor > 5) ? "OK" : "Não OK";

/* =========================
   LOOPS
   ========================= */

// for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// forEach
lista.forEach(item => console.log(item));

/* =========================
   FUNÇÕES
   ========================= */

// Função tradicional
function soma(a, b) {
    return a + b;
}

// Arrow function
const subtrair = (a, b) => a - b;

// Função anônima
const multiplicar = function(a, b) {
    return a * b;
};

/* =========================
   OBJETOS
   ========================= */

let pessoa = {
    nome: "Carlos",
    idade: 28,
    falar: function() {
        console.log("Olá!");
    }
};

pessoa.nome;
pessoa.falar();

/* =========================
   ARRAYS
   ========================= */

let numeros = [1, 2, 3];

numeros.push(4);     // adiciona
numeros.pop();       // remove último
numeros.shift();     // remove primeiro
numeros.unshift(0);  // adiciona no início

numeros.length;      // tamanho

// map
let dobrado = numeros.map(n => n * 2);

// filter
let maiores = numeros.filter(n => n > 1);

/* =========================
   DOM (INTERAÇÃO COM HTML)
   ========================= */

// Selecionar elementos
let elemento = document.getElementById("id");
let classe = document.querySelector(".classe");

// Alterar conteúdo
elemento.innerText = "Novo texto";

// Alterar estilo
elemento.style.color = "red";

// Evento
elemento.addEventListener("click", () => {
    alert("Clicou!");
});

/* =========================
   JSON
   ========================= */

let json = JSON.stringify(objeto); // objeto -> JSON
let obj = JSON.parse(json);        // JSON -> objeto

/* =========================
   PROMISES / ASSÍNCRONO
   ========================= */

let promessa = new Promise((resolve, reject) => {
    let sucesso = true;

    if (sucesso) {
        resolve("Deu certo");
    } else {
        reject("Erro");
    }
});

promessa
    .then(res => console.log(res))
    .catch(err => console.log(err));

/* Async/Await */
async function carregar() {
    try {
        let resposta = await promessa;
        console.log(resposta);
    } catch (erro) {
        console.log(erro);
    }
}

/* =========================
   FETCH (REQUISIÇÃO API)
   ========================= */

fetch("https://api.exemplo.com")
    .then(res => res.json())
    .then(dados => console.log(dados))
    .catch(erro => console.log(erro));

/* =========================
   STORAGE (NAVEGADOR)
   ========================= */

// Salvar
localStorage.setItem("nome", "Eric");

// Buscar
localStorage.getItem("nome");

// Remover
localStorage.removeItem("nome");

/* =========================
   CONSOLE
   ========================= */

console.log("Mensagem");
console.error("Erro");
console.warn("Aviso");