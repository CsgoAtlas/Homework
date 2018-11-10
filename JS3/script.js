let Barsik = {};
Barsik['energy'] = 0;
Barsik['mSleap'] = function() {
  this.energy += 1;
}
Barsik.satiety = false;
Barsik.mEat = function() {
  this.satiety = true;
}
Barsik.Mood = 'bored';
Barsik.mPlay = function() {
  this.energy -= 1;
  this.Mood = 'happy';
}
Barsik.mWalk = function() {
  this.energy -= 3;
  this.Mood = 'exiting';
}
Barsik.thirst = true;
Barsik.mDrink = function() {
  this.thirst = false;
}
Barsik.intellect = 10;
Barsik.mRead = function() {
  this.energy -= 1;
  this.intellect += 1;
}
Barsik.loveFood = 'Sushi';
Barsik.sayLoveFood = function() {
  console.log(this.loveFood);
}
Barsik.loveDrink = 'Sprite';
Barsik.sayLoveDrink = function() {
  console.log(this.loveDrink);
}
