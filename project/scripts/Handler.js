export var Handler = new class {
  constructor(name) {
    this._array = [];
  }
  
  add(name) {
    this._array.push({name: name, array: []});
  }
}