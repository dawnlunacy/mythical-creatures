class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0;
  };

  shoot() {
    this.counter++;
    this.cranky = this.counter >=3;
    return this.cranky || this.layingDown ? 'NO!': 'Twang!!!';
    };

  run() {
    this.counter++;
    if(this.counter >= 3){
      this.cranky = true;
    };
    if(this.layingDown === true){
      return 'NO!';
    };
    return 'Clop clop clop clop!!!';
  };

  layDown() {
     this.standing = false;
     this.layingDown = true;
  };

  standUp() {
    this.standing = true;
    this.layingDown = false;
  };

  sleep() {
    this.cranky = false;
    this.counter = 0;
    if(this.standing === true) {
      return 'NO!';
    }
    return 'ZZZZ';
  };

  drinkPotion() {
    if(this.cranky === false) {
      return this.cranky = true;
    }
    if(this.layingDown === true){
      return 'Not while I\'m laying down!';
    };
    this.cranky = false;
  };
};

module.exports = Centaur;