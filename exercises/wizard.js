class Wizard {
  constructor(obj,) {
    this.name = obj.name;
    this.bearded = obj.bearded;
    this.bearded = this.bearded === undefined;
    this.isRested = true;
    this.counter = 0;
 };

  incantation(magikWords) {
    return magikWords.toUpperCase();
  };

  cast() {
    this.counter++
    if(this.counter >= 3){
      this.isRested = false;
      return 'I SHALL NOT CAST';
    }
      return'MAGIC BULLET';
  };
};

module.exports = Wizard;
