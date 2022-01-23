var persons:[{id: 2, name: 'Marcoos', image:  'https://i.ibb.co/S7vP88k/user-image-marcos.jpg'},{id: 3, name: 'Oscar clase', image:  'https://i.ibb.co/yh14wQs/user-image-bully.jpg'},];
var msg: [

    {id: 1, text: "Hola Marcoss 👋🏼", sender: 1, to: 2,question: null, shown: false},
    {id: 2, text: "Como estas?", sender: 1, to: 2,question: null, shown: false},
    {id: 3, text: "Oscar me ha abierto y me ha dicho que ha pasado algo", sender: 1, to: 2,question: null, shown: false},
    {id: 11, text: "No me ha contado nada, pero parecia grabe", sender: 1, to: 2,question: null, shown: false},
    {id: 12, text: "Dime algo cuando puedas", sender: 1, to: 2,question: null, shown: false},
    
    //DIA 1:
    {id: 4, text: "Tio te has enterado de lo de marcos!!!", sender: 3,to: 3, question: 1, shown: true},
    //Si respondes: ME DA IGUAL
    {id: 5, text: "Que va, pero me da igual", sender: 1,to: 3, question: null, shown: false},
    {id: 6, text: "Como te va a dar igual si es tu amigoo", sender: 3, to: 3, question: null, shown: false},
    //Si respondes: NO
    {id: 7, text: "No, hace un par de dias que no hablamos", sender: 1, to: 3, question: null, shown: false},
    {id: 8, text: "Bua pues vas a flipar, todos estan hablardo de eso en clase", sender: 3, to: 3, question: null, shown: false},
    {id: 9, text: "Aunque no me sorprende, Marcos siempre a sido un friki", sender: 3, to: 3,question: null, shown: false},
    {id: 10, text: "Que asco me da", sender: 3, to: 3, question: null, shown: false},

];

var path: [
    {id: 1, question: 1, to: 3, text: "No", activator: [7, 8, 9, 10], enableOption: [3], shown: true},
    {id: 2, question: 1, to: 3, text: "Me da igual", activator: [5, 6, 8, 9, 10], enableOption: [3], shown: true},

    
    {id: 3, question: 2, to: 2, text: "Hola Marcos!", activator: [1], enableOption: [4], shown: false},
    {id: 4, question: 3, to: 2, text: "Estas bien?", activator: [2], enableOption: [5, 6], shown: false},
    {id: 5, question: 4, to: 2, text: "No insistir", activator: [0], enableOption: [0], shown: false},
    {id: 6, question: 4, to: 2, text: "Preguntar por lo que te ha dicho Oscar", activator: [3, 11, 12], enableOption: [0], shown: false},
];