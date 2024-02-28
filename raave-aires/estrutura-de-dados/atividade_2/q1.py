# 1. Escreva uma função chamada `repeat` que tome uma lista e retorne True se houver algum elemento que apareça mais de uma vez. Ela não deve modificar a lista original.

def repeating(list):
  seen = set()
  for item in list:
    if item in seen:
      return True
    seen.add(item)
  return False


test_list = [9, 18, 27, 36, 45, 54, 63, 72, 81]
print(repeating(test_list))
