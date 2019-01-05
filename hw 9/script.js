function Animal(name) {
  this.name = name;
  this.canWalk = true;
}
var animal = new Animal("Hamster")
animal.name = "Hamster";
animal.canWalk = true;

function Rabbit(name) {
  this.name = name;
}
big = new Rabbit('Bom')
small = new Rabbit('Chuck')

animal.canWalk = false
small.canWalk = true
alert(big.canWalk)
alert(small.canWalk)

Animal.prototype = {}

Animal.prototype.move = function(n) {
  this.distance = n
  alert(this.distance)
}

var animal = new Animal("животное")
animal.move(3)
animal.move(4)
