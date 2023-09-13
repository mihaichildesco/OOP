// factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw  ");
    },
  };
}
const circle = createCircle(1);

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

function notObject() {
  console.log("not an object");
}

function Casa(door, kytchen) {
  this.door = door;
  this.kytchen = kytchen;
  this.message = function () {
    console.log("welcome");
  };
}

const myHouse = new Casa("entrance", "knife");
for (let item in myHouse) {
  console.log(item, myHouse[item]);
}
