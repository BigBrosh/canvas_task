export var counter = new class {
  constructor() {
    this._amount = 0;
  }
  
  increase() {
    this._amount++;
  }
  
  decrease() {
    this._amount--;
  }
}