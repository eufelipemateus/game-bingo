
class Bingo {
	public Gamers = Array();
	public Numbers = 75;
	public Sorteados;
	public CardNums = 24;
	public IntervaloSorteio = 5000;
	
	
	constructor() {
		
		this.Sorteados = new Array();
	}
	
	public NewCard() {		
		let usedNumbers=Array();
		for(var i=0 ; i<this.CardNums; i++){
			let newNumber;
			do{
				newNumber =  this.GetNewNum() + 1;
			}while(usedNumbers.indexOf(newNumber)!==-1 ) ;
			usedNumbers.push(newNumber);
		}
		return usedNumbers.sort(function(a,b){ return a - b });
	}

	public GetNewNum() {
		return Math.floor(Math.random() * this.Numbers );
	}
	
	public PossibleGamersWinners(){//Not working
		let winners=0;
		
		this.Gamers.forEach((J)=> {
			let  acertos = 0;
			this.Sorteados.forEach(function(Boolean,index) {
				J.card.forEach(function(n) {
					if(index==n){
						acertos++;					
					}
				});
			});
			if(acertos>=this.CardNums) winners;
		});
		return winners;
	}
}

export default new Bingo();
