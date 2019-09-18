# NodeBingo

NodeBingo é jogo multiplayer no qual vence quem tiver todos os numeros sorteados primeiro.

[![Screenshot](https://felipefm32.com/wp-content/uploads/2019/09/2019-09-18.png "screenshot")](https://felipefm32.com/wp-content/uploads/2019/09/2019-09-18.png "screenshot")

## Installing

Para instalar digite o codigo abaixo

```
npm i node-bingo-game
```

## Compiling

```
npm compile
```


## Running

```
npm start
```

### How game works

The server draws in a certain time several numbers of a range each user can dial the numbers as the server races, the user is only declared vencendos if they complete with all the numbers drawn if the user presses the bingo button in a different declared situation loser.


### Diagram
                    
```seq
Note right of Client: Client open connection

Client->Server: Send "NEW CONNECTION"
Server-->Client: Send "NEW NUMBER POINTS"
Server-->Client: Send "NUMBERS DRAW"
Server-->Client: Send "NEW CARD"

Note right of Server:  Server draw a number
Server->Client: Send "DRAW NUMBER"

Note right of Server:  Stastistic info
Server->Client: Send "INFO"

Note right of Client:  Select number
Server->Client: Send "select number"

Note right of Client: Button Bingo
Client->Server: Send "button bingo"
Server-->Client:Send  "YOU LOST"
Note right of Client: The server send "you lost" or "you win"
Server-->Client:Send  "YOU WIN"
```


## Author

* **[Felipe Mateus](https://felipefm32.com)** - [Felipefm32](https://github.com/felipefm32)

