# 4. Crie um programa que vai ler vários números e colocar em uma lista. Depois disso, crie duas listas extras que vão conter apenas os valores pares e os valores ímpares digitados, respectivamente. Ao final, mostre o conteúdo das três listas geradas.

nines = [9, 18, 27, 36, 45, 54, 63, 72, 81]
even = [] 
odd = []

def slice(list):
  for number in list:
    if number % 2 == 0:
      even.append(number)
    else: 
      odd.append(number)

  return list, even, odd

slice(nines)

print('Lista original: ', nines)
print('Lista de pares: ', even)
print('Lista de ímpares: ', odd)
