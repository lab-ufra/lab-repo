# 3. Escreva uma função chamada `middle` que receba uma lista e retorne uma nova lista com todos os elementos originais, exceto os primeiros e os últimos elementos. 

def middle(list):
  return list[1:-1]

nines = [9, 18, 27, 36, 45, 54, 63, 72, 81]

print(middle(nines))