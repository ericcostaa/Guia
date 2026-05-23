# =========================
# GUIA PYTHON - CONSULTA
# =========================

# =========================
# VARIÁVEIS
# =========================

nome = "João"     # string
idade = 25        # inteiro
altura = 1.75     # float
ativo = True      # booleano

# =========================
# TIPOS DE DADOS
# =========================

texto = "Python"
numero = 10
decimal = 10.5
booleano = False

lista = [1, 2, 3]
tupla = (1, 2, 3)
conjunto = {1, 2, 3}
dicionario = {"nome": "Maria", "idade": 30}

# =========================
# OPERADORES
# =========================

a = 10
b = 3

soma = a + b
sub = a - b
mult = a * b
div = a / b
div_int = a // b
resto = a % b
potencia = a ** b

# Comparação
a == b
a != b
a > b
a < b
a >= b
a <= b

# Lógicos
True and False
True or False
not True

# =========================
# CONDICIONAIS
# =========================

if a > 5:
    print("Maior que 5")
elif a == 5:
    print("Igual a 5")
else:
    print("Menor que 5")

# =========================
# LOOPS
# =========================

# for
for i in range(5):
    print(i)

# while
contador = 0
while contador < 5:
    print(contador)
    contador += 1

# =========================
# FUNÇÕES
# =========================

def soma(a, b):
    return a + b

resultado = soma(2, 3)

# Função lambda
dobro = lambda x: x * 2

# =========================
# LISTAS
# =========================

numeros = [1, 2, 3]

numeros.append(4)     # adiciona
numeros.pop()         # remove último
numeros.insert(0, 0)  # adiciona na posição

len(numeros)          # tamanho

# List comprehension
dobrados = [n * 2 for n in numeros]

# =========================
# DICIONÁRIOS
# =========================

pessoa = {
    "nome": "Carlos",
    "idade": 28
}

pessoa["nome"]
pessoa["idade"] = 29

# =========================
# STRINGS
# =========================

texto = "Python"

texto.lower()
texto.upper()
texto.replace("Python", "Java")

# f-string
nome = "Eric"
print(f"Olá, {nome}")

# =========================
# ARQUIVOS
# =========================

# Escrita
with open("arquivo.txt", "w") as f:
    f.write("Olá mundo")

# Leitura
with open("arquivo.txt", "r") as f:
    conteudo = f.read()

# =========================
# EXCEÇÕES
# =========================

try:
    x = 10 / 0
except ZeroDivisionError:
    print("Erro de divisão")
finally:
    print("Finalizado")

# =========================
# CLASSES (POO)
# =========================

class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def apresentar(self):
        print(f"Meu nome é {self.nome}")

p = Pessoa("Ana", 22)
p.apresentar()

# =========================
# MÓDULOS
# =========================

import math

math.sqrt(16)

# =========================
# BIBLIOTECAS COMUNS
# =========================

# Datas
from datetime import datetime
agora = datetime.now()

# Aleatório
import random
random.randint(1, 10)

# =========================
# ENTRADA E SAÍDA
# =========================

nome = input("Digite seu nome: ")
print("Olá,", nome)

# =========================
# CONVERSÃO DE TIPOS
# =========================

int("10")
float("10.5")
str(100)

# =========================
# FUNÇÕES ÚTEIS
# =========================

len(lista)
type(nome)
range(5)