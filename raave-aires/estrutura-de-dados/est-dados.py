def pedir_nota():
  while True:
    try:
      nota = float(input("Digite uma nota entre 0 e 10: "))
      if 0 <= nota <= 10:
        return nota
      else:
        print("Nota inválida. Digite um valor entre 0 e 10.")
    except ValueError:
      print("Valor inválido. Digite um número.")

nota = pedir_nota()
print(f"A nota informada foi {nota}")
