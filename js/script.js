let myArrayClass = [
  {
    qtdCombustivel: 100,
    ligado: false,
    tipoCombustivel: "Diesel",
  },
  {
    tiros: 100,
    blindagem: true,
  },
];

class Car {
  constructor(infos) {
    this.object = infos;
  }
  info() {
    let element = {};
    for (const key in this.object) {
      if (Object.hasOwnProperty.call(this.object, key)) {
        element[key] = this.object[key];
      }
    }
    return element;
  }
  ligar(e) {
    this.object.ligado = e;
    return (this.object.ligado = e);
  }
  setCombustivel(c) {
    if (c < 0 || c > 100) {
      alert("Valor invalido");
    } else {
      return (this.object.qtdCombustivel = c);
    }
  }
  setTipoCombustivel(e) {
    switch (e) {
      case "Gasolina":
      case "gasolina ":
      case "Etanol":
      case "etanol":
      case "Diesel":
      case "diesel ":
        this.object.tipoCombustivel = e;
        return e;
      default:
        alert("Combustivel inexistente");
    }
  }
}
//Classe filho passando meu objeto via parametro para o metodo super(), que sera jogado no parametro do constructor da classe pai
class CombatCar extends Car {
  constructor(infos) {
    super(myArrayClass[0]);
    this.object = infos;
  }
  info() {
    let element = {};
    for (const key in this.object) {
      if (Object.hasOwnProperty.call(this.object, key)) {
        element[key] = this.object[key];
      }
    }
    return element;
  }
}

//let car01 = new Car(myArrayClass[0]); instancia da classe pai
let car01 = new CombatCar(myArrayClass[1]); // instancia da classe filho

car01.setCombustivel(50);
car01.ligar(true);
car01.setTipoCombustivel("Gasolina");

for (const key in car01.info()) {
  if (Object.hasOwnProperty.call(car01.info(), key)) {
    const element = car01.info()[key];
    console.log(`${key}: ${element}`);
  }
}
