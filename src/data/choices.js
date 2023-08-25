const measurementChoices = [
  {
    id: "km-mi",
    nombre: "Kilometro - Milla",
    formula: "dividir",
    medida: 1.609,
  },
  {
    id: "mi-km",
    nombre: "Milla - Kilometro",
    formula: "multiplicar",
    medida: 1.609,
  },
  { id: "p-m", nombre: "Pie - Metro", formula: "dividir", medida: 3.281 },
  { id: "m-p", nombre: "Metro - Pie", formula: "multiplicar", medida: 3.281 },
  {
    id: "cm-pu",
    nombre: "Centimetro - Pulgada",
    formula: "dividir",
    medida: 2.54,
  },
  {
    id: "pu-cm",
    nombre: "Pulgada - Centimetro",
    formula: "multiplicar",
    medida: 2.54,
  },
];

export default measurementChoices;
