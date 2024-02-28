# 2. Crie um programa onde o usuário possa digitar cinco valores numéricos e cadastre-os em uma lista. No final, mostre a lista ordenada na tela.

numeros = []

for i in range(5):
  numero = float(input("Digite um número: "))
  numeros.append(numero)

numeros.sort()

print("Lista ordenada: ", numeros)
