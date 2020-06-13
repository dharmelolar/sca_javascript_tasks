// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(len,wid,heig){
        this.len = len;
        this.wid = wid;
        this.heig = heig;
    }
  Volume(){
return this.len * this.wid * this.heig;
}
  surfaceArea(){
return 2 *(this.len * this.wid +this.len * this.heig + this.wid * this.heig);
}
}
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

