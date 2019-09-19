
class Bingo {
	public Gamers = Array();
	public Numbers = 90;
	public Sorteados= Array();
	public CardNums = 24;
	public IntervaloSorteio = 5000;
	
	constructor() {}
	
	public NewCard() {		
		let useds=Array();
		for(var i=0 ; i<this.CardNums; i++){
			let newNumber;
			do{
				newNumber =  this.GetNewNum() + 1;
			}while(useds.indexOf(newNumber)!==-1 ) ;
			useds.push(newNumber);
		}
		return useds.sort(function(a,b){ return a - b });
	}

	public GetNewNum() {
		return Math.floor(Math.random() * this.Numbers );
	}
	
	public PossibleGamersWinners(){
		let winners=0;
		this.Gamers.forEach((J)=> {
			let  acertos = 0;
			for(let a=0 ; a<this.Sorteados.length; a++){
				for(let b=0 ; b<J.card.length; b++){
					if(this.Sorteados[a]==J.card[b]){
						acertos++;			
					}
				}
			}
			if(acertos>=this.CardNums) winners++;
		});
		return winners;
	}
}

export default new Bingo();