class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  };

  collectRiddle(riddle) {
      this.riddles.push(riddle);
      if(this.riddles.length > 3) {
        this.riddles.shift();
      };
    };

  attemptAnswer(attempt) {
    for (var i = 0; i < this.riddles.length; i++ ) {
      if( attempt === this.riddles[i].answer) {
      this.riddles.splice(i, 1);
      if (this.riddles.length === 0) {
        return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"' + attempt + '"\???';
      }
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
        }
      }
      if(this.riddles.length > 0) {
        this.heroesEaten++
      };
    };
  };

module.exports = Sphinx;