class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  };

  stare(fool) {
    this.statues.push(fool);
    fool.stoned = true;
    if (this.statues.length > 3) {
    this.statues[0].stoned = false;
    this.statues.shift();
    };  
  };
};

module.exports = Medusa;