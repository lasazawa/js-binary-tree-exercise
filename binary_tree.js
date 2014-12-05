function BinTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
}


BinTree.prototype.insert = function(value){
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinTree(value);
    }
    else {
      this.left.insert(value);
    }
  }
  else if (value > this.value) {
    if(this.right === null) {
      this.right = new BinTree(value);
    }
    else {
      this.right.insert(value);
    }
  }
  return this;
};

BinTree.prototype.isLeaf = function(){
  return (this.right === null && this.left === null);
};

BinTree.prototype.search = function(num){
  if (this.value === num) {
    return true;
  }
  else if (this.isLeaf()) {
    return false;
  }
  else if (num < this.value) {
    return this.left.search(num);
  }
  else if (num > this.value) {
    return this.right.search(num);
  }
};


try{
  module.exports = BinTree;
} catch(e){

}
