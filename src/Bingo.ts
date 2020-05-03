
class Bingo {
    public Gamers = Array();
    public Numbers = 90;
    public Sorteados= Array();
    public CardNums = 24;
    public IntervaloSorteio = 5000;

    public NewCard() {
        const useds = Array();
        for (let i = 0 ; i < this.CardNums; i++) {
            let newNumber;
            do {
                newNumber =  this.GetNewNum() + 1;
            }while (useds.indexOf(newNumber) !== -1 ) ;
            useds.push(newNumber);
        }
        return useds.sort((a, b) => a - b);
    }

    public GetNewNum() {
        return Math.floor(Math.random() * this.Numbers );
    }

    public PossibleGamersWinners() {
        let winners = 0;
        this.Gamers.forEach((J) => {
            let  acertos = 0;
            for ( const a of this.Sorteados) {
                for ( const b of J.card) {
                    if (a == b) {
                        acertos++;
                    }
                }
            }
            if (acertos >= this.CardNums) {
                 winners++;
            }
        });
        return winners;
    }
}

export default new Bingo();
