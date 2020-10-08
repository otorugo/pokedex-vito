import io
import sys
import urllib.request as rq
import math
URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
BUFF_SIZE = 1024


def download(response,output):
    total_baixado =  0
    while True:
        imagem = response.read(BUFF_SIZE)
        total_baixado += len(imagem)
        if not imagem:
            break
        output.write(imagem)
        print('Dowloaded {bytes}'.format(bytes=total_baixado))

def kantoImagens():
    url = sys.argv[1]


    for i in range(151,155):
        numeroPokemon = ''
        if(i < 10):
            numeroPokemon += "00"+str(i)+".png"
        elif(i < 100):
            numeroPokemon += "0"+str(i)+".png"
        else:
            numeroPokemon += str(i)+".png"
        print(numeroPokemon)
        
        
        urlFinal = url+numeroPokemon
        response = rq.urlopen(urlFinal)
        output = io.FileIO(str(i)+'.png','w')
        download(response,output)
        response.close()
        output.close()
        print("{pokemon} baixado".format(pokemon=numeroPokemon))


def main():
    kantoImagens()
if __name__ == '__main__':
    main()