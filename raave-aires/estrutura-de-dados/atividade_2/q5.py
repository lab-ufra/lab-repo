# 5. Crie um programa que vai ler vários números e colocar em uma lista. Depois disso, mostre: 
#     a) Quantos números foram digitados. 
#     b) A lista de valores, ordenada de forma decrescente. 
#     c) Se o valor 5 foi digitado e está ou não na lista.

numbers = []

while True:
  number = int(input("Digite um número (0 para sair): "))

  if number == 0:
    break

  numbers.append(number)

quantity = len(numbers)

numbers.sort(reverse=True) 

if 5 in numbers:
  five_typed = 'Sim'
else:
  five_typed = 'Não'

print(f"Quantidade de números: {quantity}")
print(f"Lista ordenada de forma decrescente: {numbers}")
print(f"O número 5 está na lista? {five_typed}")
