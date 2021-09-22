# game-bingo

[![Known Vulnerabilities](https://snyk.io/test/npm/game-bingo/badge.svg)](https://snyk.io/test/npm/game-bingo) [![domino-game](https://snyk.io/advisor/npm-package/game-bingo/badge.svg)](https://snyk.io/advisor/npm-package/game-bingo)  [![npm version](https://badge.fury.io/js/game-bingo.svg)](https://badge.fury.io/js/game-bingo) [![Rate on Openbase](https://badges.openbase.com/js/rating/game-bingo.svg)](https://openbase.com/js/game-bingo?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

NodeBingo é jogo multiplayer no qual vence quem tiver todos os numeros sorteados primeiro.

[![Screenshot Felipe Mateus Bingo Game](https://felipemateus.com/wp-content/uploads/2019/09/2019-09-18.png "screenshot")](https://felipemateus.com/wp-content/uploads/2019/09/2019-09-18.png "screenshot")

## Installing

Para instalar digite o codigo abaixo

```
npm i node-bingo-game
```

## Building

```bash
npm run build 
```


## Running

```
npm start
```

### How game works

The server draws in a certain time several numbers of a range each user can dial the numbers as the server races, the user is only declared winner if they complete with all the numbers drawn if the user presses the bingo button in a different declared situation loser.


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

[Veja mais sobre o Bingo](https://felipemateus.com/blog/2021/05/bingo).


## Author

* **[Felipe Mateus](https://eufelipemateus.com)** - [eufelipemateus](https://github.com/eufelipemateus)

