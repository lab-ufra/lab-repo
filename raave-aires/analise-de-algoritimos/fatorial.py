import datetime

#fatorial recursivo
def fatorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * fatorial(n - 1)

#recolhe o tempo inicial
ini = datetime.datetime.now()

#função e resultado
n = 500
result = fatorial(n)
print(f'O fatorial de {n} é {result}')

#recolhe o tempo de fim da função, calcula e printa o resultado
fim=datetime.datetime.now()
tempo=fim-ini
print(f'Tempo decorrido: {tempo}')