class Square {

  constructor(id) {
    this.id = id;
    this.x = id[0].charCodeAt(0) - 96;
    this.y = Number(id[1]);
    this.filled = false;
    this.value;


  }

  colour() {
    switch(this.value) {
      case 1:
        return '#ffd1fa'
      break;
      case 2:
        return '#ff8ff2'
      break;
      case 3:
        return '#ff52eb'
      break;
      case 4:
        return '#e600cc'
      break;
      case 5:
        return '#b800a3'
      break;
      case 6:
        return '#930082'
      break;
      default:
      'black'
    }
  }

  fillSquare(value) {
    this.filled = true;
    this.value = value;
  }

}
