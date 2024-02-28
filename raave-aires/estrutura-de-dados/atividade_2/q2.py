# 2. Crie um programa onde o usuário possa digitar cinco valores numéricos e cadastre-os em uma lista. No final, mostre a lista ordenada na tela.

numbers = []

for i in range(5):
  number = float(input("Digite um número: "))
  numbers.append(number)

numbers.sort()

print("Lista ordenada: ", numbers)
