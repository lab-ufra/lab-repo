import datetime

#função do fatorial interativo
def fatorial(n):
    x = 1
    for i in range(2, n + 1):
        x=x*i
    return x

#recolhe o tempo inicial
ini2 = datetime.datetime.now()

#função e resultado
n2 = 500
result = fatorial(n2)
print(f'O fatorial de {n2} é {result}.')

#recolhe o tempo de fim da função, calcula e printa o resultado
fim2 = datetime.datetime.now()
tempo2 = fim2 - ini2

print(f'Tempo decorrido: {tempo2}.')
