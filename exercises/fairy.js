class Fairy {
  constructor(name){
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    // this.counter = 0;
    this.humanWards = []

  };

  receiveBelief(){
   this.dust ++
  };

  believe() {
    this.dust+=10
  };

  makeDresses(flowers) {
    for (var i = 0; i < flowers.length; i++ ){
      this.clothes.dresses.push(flowers[i])
    };
  };

  provoke() {
    this.disposition = 'Vengeful';
  };

  replaceInfant(bebe) {
    if (this.disposition == 'Vengeful') {
      bebe.disposition = 'Malicious';
      this.humanWards.push(bebe);
        if(this.humanWards.length >=3) {
          this.disposition = 'Good natured';
        }
      }return bebe 
    }
};

module.exports = Fairy;