'use strict';

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set side(l) {                        // Setter 
    this.width = l;
    this.height = l;
  }

  get side() {                      // Getter
    if (this.width !== this.height) throw new Error('not a Square');
    return this.width;
  }
}

const p1 = new Rect(10, 20, 50, 100);
console.log(p1.area);    // Площадь со сторонами 50 и 100
p1.side = 150;           // Присвоение Setter (width) значение = 150
console.log(p1.side);    // Вывод новой стороны квадрата
console.log(p1.area);     // Вывод новой площади со стороной 150
