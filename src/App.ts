import * as express from "express";
import { createServer, Server } from 'http';
import * as socketIo from 'socket.io';
import bingo from './Bingo';

class App {
    public app: express.Application;
    public server: Server;
    private io: SocketIO.Server;
    public PORT: number = 8100;
	public debug:boolean=false;
	

    constructor() {
        this.routes();
        this.sockets();
        this.listen();
		this.runtime();
    }

    routes() {
        this.app = express();
        this.app.use(express.static('public'));

    }

    private sockets(): void {
        this.server = createServer(this.app);
        this.io = socketIo(this.server);
    }

    private listen(): void {

        this.io.on('connection', (socket: any) => {
            if(this.debug)console.info('a user connected');

            socket.on('NEW CONNECTION', function (msg) {
				
				socket.emit("NEW NUMBER POINTS",bingo.Numbers);
				socket.emit('NUMBERS DRAW',bingo.Sorteados);


				let card = bingo.NewCard();
				socket.card = card ;
				socket.selectedCards = Array();

				socket.emit("NEW CARD",card)
				bingo.Gamers.push(socket);
		

            });
			
			socket.on('select number', function (msg) {
				if(socket.card.indexOf(msg) > -1){
					socket.selectedCards.push(msg);
				};
				if(this.debug)console.info(socket.card,socket.selectedCards );
            });
			
			
			socket.on('button bingo', function (msg) {
				
				if(socket.selectedCards.length>=bingo.CardNums){
					let NumerosChekededs=0;
					this.bingo.Sorteados.forEach(function(N,index) {
			
						if(N){
							socket.selectedCards.forEach(function(n){
								if(n==index){
									NumerosChekededs++;
								}else{
									/*User lost*/
									socket.emit('YOU LOST')
									if(this.debug)console.info("Trapaça! Numero não sorteado");
								}
							});
							console.log("NuChe:"+NumerosChekededs);
						}else{
							/*User lost*/
							socket.emit('YOU LOST')
							if(this.debug)console.info("Trapaça! Numero não sorteado!");
						}
					});
					if(NumerosChekededs>=this.bingo.CardNums){ 
						//*User win Game*/
						socket.emit('YOU WIN');
						socket.broadcast.emit('you lost');
						if(this.debug)console.info("Alguém ganhou!");
					}
				}else{
					/*User lost*/
					if(this.debug)console.info("Alguém Perdeu! A Cartela não foi toda preenchida!");
					socket.emit('YOU LOST');
				}
            });

            socket.on('disconnect', () => {
				bingo.Gamers.splice(bingo.Gamers.indexOf(socket), 1);
                if(this.debug)console.info('user disconnected');
            });
        });
    }
	private runtime(){
		
		setInterval(function(io){
			let newNumber;
			do{
				newNumber = bingo.GetNewNum() + 1
			}while(bingo.Sorteados.indexOf(newNumber)!==-1 );
			
			
			bingo.Sorteados.push(newNumber);
			io.emit('DRAW NUMBER',newNumber);	
		},bingo.IntervaloSorteio,this.io);


		setInterval(function(io){
			
			io.emit('INFO',{
				"gamers":bingo.Gamers.length,
				"win_possible":bingo.PossibleGamersWinners(),
				"draw_numbers_counts":bingo.Sorteados.length
			});
		},1000,this.io);
	}
}


export default new App();