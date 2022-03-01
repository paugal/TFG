import { createStore } from 'vuex'

export default createStore({
  state: {
    day: 1,
    shownDayInfo: true,
    newMsg: {new: true, username: 'Oscar'},
    chatUser: 3,
    lastPath: 1,
    lastQuestion: 0,
    colorScheme: 'var(--main-color)',
    backgroundImage: "https://i.ibb.co/zRNQYd5/wp4410724.jpg",

    persons:[
      {id: 1, name: 'player', image:  'NULL'},
      {id: 2, name: 'Marcoos', image:  'https://i.ibb.co/S7vP88k/user-image-marcos.jpg'},
      {id: 3, name: 'Oscar', image:  'https://i.ibb.co/yh14wQs/user-image-bully.jpg'},
      {id: 4, name: 'Marta', image:  'https://i.ibb.co/qMntbqt/marta.jpg'},
      {id: 5, name: 'A la playa', image:  'https://i.ibb.co/BgJRxN5/playa.jpg'},
      {id: 6, name: 'Hugo', image:  'https://i.ibb.co/4FdtMNW/hugo.jpg'},
    ],
    msg:[
      {id: 1, text: 'Hola Marcoss 👋🏼', sender: 1, to: 2, question: null, shown: false},
      {id: 2, text: 'Como estas?', sender: 1, to: 2, question: null, shown: false},
      {id: 3, text: 'Oscar me ha abierto y me ha dicho que ha pasado algo', sender: 1, to: 2, question: null, shown: false},
      {id: 11, text: 'No me ha contado nada, pero parecia grabe', sender: 1, to: 2, question: null, shown: false},
      {id: 12, text: 'Dime algo cuando puedas', sender: 1, to: 2, question: null, shown: false},
      {id: 4, text: 'Tio te has enterado de lo de marcos!!!', sender: 3, to: 3, question: 1, shown: true},
      {id: 5, text: 'Que va, pero me da igual', sender: 1, to: 3, question: null, shown: false},
      {id: 6, text: 'Como te va a dar igual si es tu amigoo', sender: 3, to: 3, question: null, shown: false},
      {id: 7, text: 'No, hace un par de dias que no hablamos', sender: 1, to: 3, question: null, shown: false},
      {id: 8, text: 'Bua pues vas a flipar, todos estan hablardo de eso en clase', sender: 3, to: 3, question: null, shown: false},
      {id: 9, text: 'Aunque no me sorprende, Marcos siempre a sido un friki', sender: 3, to: 3, question: null, shown: false},
      {id: 10, text: 'Que asco me da', sender: 3, to: 3, question: 8, shown: false},
      {id: 13, text: 'Holaa! Sabes algo de Marcos???', sender: 4, to: 4, question: null, shown: false},
      {id: 14, text: 'hoy no ha venido a basquet', sender: 4, to: 4, question: null, shown: false},
      {id: 15, text: 'y le he enviado mensajes y no contesta', sender: 4, to: 4, question: null, shown: false},
      {id: 16, text: 'Hola Marta', sender: 1, to: 4, question: null, shown: false},
      {id: 17, text: 'Yo tambien le he enviado un mensaje pero no contesta', sender: 1, to: 4, question: null, shown: false},
      {id: 18, text: 'Que raro que se haya saltado basquet', sender: 1, to: 4, question: null, shown: false},
      {id: 19, text: 'Me ha abierto Oscar de clase', sender: 1, to: 4, question: null, shown: false},
      {id: 20, text: 'Sois amigos?', sender: 4, to: 4, question: null, shown: false},
      {id: 21, text: 'Que vaa me ha contado algo que ha pasado con Marcos', sender: 1, to: 4, question: null, shown: false},
      {id: 22, text: 'Que ha pasado?', sender: 4, to: 4, question: null, shown: false},
      {id: 23, text: 'No me ha quedado muy claro', sender: 1, to: 4, question: null, shown: false},
      {id: 24, text: 'Lo ha empezado a insultar y no queria discutir', sender: 1, to: 4, question: null, shown: false},
      {id: 25, text: 'A insultado a Marcos?', sender: 4, to: 4, question: null, shown: false},
      {id: 26, text: 'Si ha pasado algo pero no me lo ha contado', sender: 1, to: 4, question: null, shown: false},
      {id: 27, text: 'Y tu que le has dicho', sender: 4, to: 4, question: null, shown: false},
      {id: 28, text: 'No le he contestado', sender: 1, to: 4, question: null, shown: false},
      {id: 29, text: 'Bueno a veces es mejor no seguir la corriente', sender: 4, to: 4, question: null, shown: false},
      {id: 30, text: 'Le he dicho que parara de insultar a Marcos', sender: 1, to: 4, question: null, shown: false},
      {id: 31, text: 'Muy bieen! Gracias por defenderlo', sender: 4, to: 4, question: null, shown: false},
      {id: 32, text: 'Espero que asi le quede claro  a Oscar que hacer lo que hace es horrible', sender: 4, to: 4, question: null, shown: false},
      {id: 33, text: 'Le he seguido el juego ', sender: 1, to: 4, question: null, shown: false},
      {id: 34, text: 'Que has hecho que???', sender: 4, to: 4, question: null, shown: false},
      {id: 35, text: 'Por que narices haces eso???', sender: 4, to: 4, question: null, shown: false},
      {id: 36, text: 'Marcos es tu amigo y no ha hecho nada para que lo vayas insultando', sender: 4, to: 4, question: null, shown: false},
      {id: 37, text: 'Estoy muy enfadada pensaba que eras mejor persona', sender: 4, to: 4, question: null, shown: false},
      {id: 38, text: 'Lo siento...', sender: 1, to: 4, question: null, shown: false},
      {id: 39, text: '(mentir) No le he contestado (verdad) defender', sender: 1, to: 4, question: null, shown: false},
      {id: 40, text: 'Me estas mientiendo?', sender: 4, to: 4, question: null, shown: false},
      {id: 41, text: 'Oscar me acaba de enviar esto', sender: 4, to: 4, question: null, shown: false},
      {id: 42, text: 'captura de pantalla ', sender: 4, to: 4, question: null, shown: false},
      {id: 43, text: 'No entiendo por que me mientes', sender: 4, to: 4, question: null, shown: false},
      {id: 44, text: ' defendiste a Marcos es lo mejor que pudiste hacer', sender: 4, to: 4, question: null, shown: false},
      {id: 45, text: 'No me vuelvas a mentir porfavor', sender: 4, to: 4, question: null, shown: false},
      {id: 46, text: 'Tienes razon lo siento', sender: 1, to: 4, question: null, shown: false},
      {id: 47, text: '(mentir) Insulte a Marcos (verdad) defender', sender: 1, to: 4, question: null, shown: false},
      {id: 48, text: '(mentir) Insulte a Marcos (verdad) neutro', sender: 1, to: 4, question: null, shown: false},
      {id: 49, text: 'No lo defendiste pero almenos no lo insultaste', sender: 4, to: 4, question: null, shown: false},
      {id: 50, text: '(mentir) defendi a Marcos (verdad) neutro', sender: 1, to: 4, question: null, shown: false},
      {id: 51, text: 'Si no tuviste el valor de defender a tu amigos', sender: 4, to: 4, question: null, shown: false},
      {id: 52, text: 'Como minimo no mientas y digas que lo hiciste', sender: 4, to: 4, question: null, shown: false},
      {id: 53, text: '(mentir) No conteste (vedad) negativo', sender: 1, to: 4, question: null, shown: false},
      {id: 54, text: 'Pensaba que Marcos era tu amigo', sender: 4, to: 4, question: null, shown: false},
      {id: 55, text: 'Insultarlo no te hace mejor que Oscar', sender: 4, to: 4, question: null, shown: false},
      {id: 56, text: '(mentir) Lo defendi (verdad) negativo', sender: 1, to: 4, question: null, shown: false},
      {id: 57, text: 'Perdon por no contestar ayer, no me encontraba bien', sender: 2, to: 2, question: 7, shown: false},
      {id: 58, text: 'Ha pasado algo con Oscar?', sender: 1, to: 2, question: null, shown: false},
      {id: 59, text: 'Marcos??', sender: 1, to: 2, question: null, shown: false},
      {id: 260, text: 'Ya no hace falta que contestes... ', sender: 1, to: 2, question: null, shown: false},
      {id: 261, text: 'Hace mas de un dia que te envie el mensaje', sender: 1, to: 2, question: null, shown: false},
      {id: 60, text: 'Lo que ha hecho Oscar no esta bien', sender: 4, to: 4, question: null, shown: false},
      {id: 61, text: 'Tenemos que hacer algo para ayudar a Marcos', sender: 4, to: 4, question: 11, shown: false},
      {id: 62, text: 'Estoy harto de Oscar', sender: 1, to: 4, question: null, shown: false},
      {id: 362, text: 'Tenemos que hacerle lo mismo que le ha hecho a Marcos!', sender: 1, to: 4, question: null, shown: false},
      {id: 63, text: 'No creo que eso sea buena idea', sender: 4, to: 4, question: null, shown: false},
      {id: 64, text: 'No se va a solucionar nada', sender: 4, to: 4, question: null, shown: false},
      {id: 65, text: 'No seremos mejor que el si hacemos lo mismo', sender: 4, to: 4, question: null, shown: false},
      {id: 66, text: 'Marta no tiene importancia', sender: 1, to: 4, question: null, shown: false},
      {id: 67, text: 'Si lo ignoramos mejor', sender: 1, to: 4, question: null, shown: false},
      {id: 68, text: 'Que no tiene importancia!', sender: 4, to: 4, question: null, shown: false},
      {id: 69, text: 'Vete a saber que va diciendo de Marcos', sender: 4, to: 4, question: null, shown: false},
      {id: 70, text: 'O incluso le ha hecho algo', sender: 4, to: 4, question: 12, shown: false},
      {id: 71, text: 'Lo siento tienes razon', sender: 1, to: 4, question: null, shown: false},
      {id: 72, text: 'Podemos quedar para ir a playa esta tarde', sender: 1, to: 4, question: null, shown: false},
      {id: 73, text: 'Buena idea, eso le ayudara a espejarse', sender: 4, to: 4, question: null, shown: false},
      {id: 74, text: 'y tal vez nos cuenta que ha pasado', sender: 4, to: 4, question: null, shown: false},
      {id: 75, text: 'Hago un grupo con los de siempre', sender: 4, to: 4, question: 13, shown: false},
      {id: 76, text: 'Marta: Hola chicos!!', sender: 5, to: 5, question: null, shown: false},
      {id: 77, text: ' Hugo: Holaa', sender: 5, to: 5, question: null, shown: false},
      {id: 78, text: 'Silvia: que tal??', sender: 5, to: 5, question: null, shown: false},
      {id: 79, text: 'Marta: Quereis ir esta tarde a la playa?', sender: 5, to: 5, question: null, shown: false},
      {id: 80, text: 'Hugo: Por mi genial', sender: 5, to: 5, question: null, shown: false},
      {id: 81, text: 'Silvia: Buena idea, contad conmigo', sender: 5, to: 5, question: 9, shown: false},
      {id: 82, text: 'Tu: yo tambien me apunto', sender: 1, to: 5, question: null, shown: false},
      {id: 83, text: 'Tu: y tu Marcos??', sender: 1, to: 5, question: null, shown: false},
      {id: 84, text: 'Marcos: Si yo tambien me apunto', sender: 5, to: 5, question: null, shown: false},
      {id: 85, text: 'Marta: Genial!', sender: 5, to: 5, question: null, shown: false},
      {id: 86, text: 'Marta: pues a las 16 donde siempre', sender: 5, to: 5, question: null, shown: false},
      {id: 87, text: 'Estoy preocupada he visto a Marcos muy triste esta tarde', sender: 4, to: 4, question: null, shown: false},
      {id: 88, text: 'Deberiamos habler hablado con el del tema?', sender: 4, to: 4, question: null, shown: false},
      {id: 89, text: 'No lo se ', sender: 1, to: 4, question: null, shown: false},
      {id: 90, text: 'No era el momento, se hubiera sentido incomodo', sender: 1, to: 4, question: null, shown: false},
      {id: 91, text: 'Tal vez cuando estavmos los tres solos podriamos haver hablado con el', sender: 1, to: 4, question: null, shown: false},
      {id: 92, text: 'Puff no se que tendria que hacer..', sender: 4, to: 4, question: null, shown: false},
      {id: 93, text: 'Hola, ha pasado algo grave', sender: 6, to: 6, question: null, shown: false},
      {id: 94, text: 'Esta mañana Oscar ha creado un chat de grupo con sus amigos', sender: 6, to: 6, question: null, shown: false},
      {id: 95, text: 'y Marcos, y lo han empezado a insultar y cosas peores', sender: 6, to: 6, question: null, shown: false},
      {id: 96, text: 'yo al ver de que era el grupo me he salido', sender: 6, to: 6, question: null, shown: false},
      {id: 97, text: 'que deberiamos hacer?', sender: 6, to: 6, question: null, shown: false},
      {id: 98, text: 'No me quiero meter, se van a meter conmigo sino', sender: 1, to: 6, question: null, shown: false},
      {id: 99, text: 'Enserio???? Despues de lo que te he encontado', sender: 6, to: 6, question: null, shown: false},
      {id: 100, text: 'No podemos mirar a otro lado!', sender: 6, to: 6, question: null, shown: false},
      {id: 101, text: 'Tengo que hablar con Marcos y enterarme de que esta pasando', sender: 1, to: 6, question: null, shown: false},
      {id: 102, text: 'Tenemos que ayudarlo', sender: 6, to: 6, question: null, shown: false},
      {id: 103, text: 'Esto esta muy mal', sender: 6, to: 6, question: null, shown: false},
      {id: 104, text: 'Marcos tenemos que hablar es importante', sender: 1, to: 2, question: null, shown: false},
      {id: 105, text: 'Porfavor contesta', sender: 1, to: 2, question: null, shown: false},
      {id: 106, text: 'Marcos no ha venido a clase hoy', sender: 4, to: 4, question: null, shown: false},
      {id: 107, text: 'Esto cada vez va a peor', sender: 4, to: 4, question: null, shown: false},
      {id: 108, text: 'Tenemos que hacer algo ya!', sender: 4, to: 4, question: null, shown: false},
      {id: 109, text: 'Tenemos que ir a casa de Marcos y hablar con el de una vez', sender: 1, to: 4, question: null, shown: false},
      {id: 110, text: 'Tienes razon creo que es lo mejor', sender: 4, to: 4, question: null, shown: false},
      {id: 111, text: 'Con suerte tal vez podemos decir que se lo cuente a su madre', sender: 4, to: 4, question: null, shown: false},
      {id: 112, text: 'Ella seguro que sabe mejor que hacer', sender: 4, to: 4, question: null, shown: false},
      {id: 113, text: 'Tenemos que hablar con los profesores sobre esto', sender: 1, to: 4, question: null, shown: false},
      {id: 114, text: 'Es buena idea pero creo que primero tenemos que haclararlo con Marcos', sender: 4, to: 4, question: null, shown: false},
      {id: 115, text: 'Mala opcion', sender: 1, to: 4, question: null, shown: false},
      {id: 116, text: 'Como vamos a hacer eso!! ', sender: 4, to: 4, question: null, shown: false},
      {id: 117, text: 'Vale pues vamos ahora mismo!', sender: 4, to: 4, question: null, shown: false},
      {id: 118, text: 'Hugo: Marcos nos hemos enterado de lo de Oscar', sender: 5, to: 5, question: null, shown: false},
      {id: 119, text: 'No te preocupes, estamos contigo', sender: 5, to: 5, question: null, shown: false},
      {id: 120, text: 'Silvia: sii, cualquier cosa que necesites', sender: 5, to: 5, question: null, shown: false},
      {id: 121, text: 'Marta: No has hecho nada malo, todo es culpa de Oscar y sus amigos', sender: 5, to: 5, question: null, shown: false},
      {id: 122, text: 'Tu: Somos tus amigos y te apoyaremos siempre', sender: 5, to: 5, question: null, shown: false},
      {id: 123, text: 'Marcos: Muchas gracias chicos', sender: 5, to: 5, question: null, shown: false},
      {id: 124, text: 'De verdad, me alegra tener amigos como vosotros', sender: 5, to: 5, question: null, shown: false},
      {id: 125, text: 'Hola', sender: 2, to: 2, question: null, shown: false},
      {id: 126, text: 'Ya sabes que estos dias han sido dificiles', sender: 2, to: 2, question: null, shown: false},
      {id: 127, text: 'Y queria hablar contigo del tema', sender: 2, to: 2, question: null, shown: false},
      {id: 128, text: 'Queria darte las gracias por lo mucho que has ayudado', sender: 2, to: 2, question: null, shown: false},
      {id: 129, text: 'He estado hablando con Marta y me ha dicho ', sender: 2, to: 2, question: null, shown: false},
      {id: 130, text: 'lo mucho que te has preocupado y has hecho', sender: 2, to: 2, question: null, shown: false},
      {id: 131, text: 'no se que hubiera pasado si no tuviera unos amigos como vosotros', sender: 2, to: 2, question: null, shown: false},
      {id: 132, text: 'Asi que nada, solo queria dar las gracias por todo lo que habeis hecho', sender: 2, to: 2, question: null, shown: false},
      {id: 133, text: 'Se que han sido unos dias dificiles pero me he enterado', sender: 2, to: 2, question: null, shown: false},
      {id: 134, text: 'de algunas cosas que no me han gusta', sender: 2, to: 2, question: null, shown: false},
      {id: 135, text: 'pensaba que eramos amigos pero has hecho cosas', sender: 2, to: 2, question: null, shown: false},
      {id: 136, text: 'que no son de buen amigo', sender: 2, to: 2, question: null, shown: false},
      {id: 137, text: 'Creo que necesito unos dias sin hablar', sender: 2, to: 2, question: null, shown: false},
      {id: 138, text: 'Me he enterado de cosas que me han dolido mucho', sender: 2, to: 2, question: null, shown: false},
      {id: 139, text: 'Pensaba que eramos amigos pero me ha quedado claro que no', sender: 2, to: 2, question: null, shown: false},
      {id: 140, text: 'Si he podido salir de esta a sido gracias a mis amigos de verdad', sender: 2, to: 2, question: null, shown: false},
      {id: 141, text: 'y no gracias a ti', sender: 2, to: 2, question: null, shown: false},
      {id: 142, text: 'De nada, era lo minimo que podiamos hacer', sender: 1, to: 2, question: null, shown: false},
      {id: 143, text: 'Lo siento, me equivoque ', sender: 1, to: 2, question: null, shown: false},
      {id: 144, text: 'cuando quieras podemos hablar', sender: 1, to: 2, question: null, shown: false},
      {id: 145, text: 'Lo siento mucho, no se por que lo hice.', sender: 1, to: 2, question: null, shown: false},
      ],
    
      path:[
        {id: 1, question: 1, to: 3, text: 'No', activator: [7, 8, 9, 10], enableOption: [6], shown: false},
        {id: 2, question: 1, to: 3, text: 'Me da igual', activator: [5, 6, 8, 9, 10], enableOption: [3, 4, 5, 6], shown: false},
        {id: 3, question: 8, to: 3, text: 'Defender a Marcos', activator: [0], enableOption: [0], shown: false},
        {id: 4, question: 8, to: 3, text: 'No contestar', activator: [0], enableOption: [0], shown: false},
        {id: 5, question: 8, to: 3, text: 'Insultar a Marcos', activator: [0], enableOption: [0], shown: false},
        {id: 6, question: 2, to: 2, text: 'Hola Marcos!', activator: [1], enableOption: [7], shown: false},
        {id: 7, question: 3, to: 2, text: 'Estas bien?', activator: [2,13,14,15], enableOption: [8, 9, 10], shown: false},
        {id: 8, question: 4, to: 2, text: 'No insistir', activator: [13,14,15], enableOption: [0], shown: false},
        {id: 9, question: 4, to: 2, text: 'Preguntar por lo que te ha dicho Oscar', activator: [3, 11, 12], enableOption: [0], shown: false},
        {id: 10, question: 5, to: 4, text: 'Hola!', activator: [16, 17, 18], enableOption: [11], shown: false},
        {id: 11, question: 9, to: 4, text: 'Contar lo de Oscar', activator: [19, 20, 21, 22, 23, 24, 25, 26, 27], enableOption: [12, 13, 14], shown: false},
        {id: 12, question: 6, to: 4, text: 'He defendido a Marcos', activator: [30,31, 57], enableOption: [22,23], shown: false},
        {id: 13, question: 6, to: 4, text: 'No he contestado', activator: [29], enableOption: [22,23], shown: false},
        {id: 14, question: 6, to: 4, text: 'He insultado a Marcos', activator: [34,35,36,37], enableOption: [21], shown: false},
        {id: 15, question: 6, to: 4, text: '(mentir) No le he contestado (verdad) defender', activator: [40, 41, 42, 43, 44, 45], enableOption: [21], shown: false},
        {id: 16, question: 6, to: 4, text: '(mentir) Insulte a Marcos (verdad) defender', activator: [40, 41, 42, 43, 44, 45], enableOption: [21], shown: false},
        {id: 17, question: 6, to: 4, text: '(mentir) Insulte a Marcos (verdad) neutro', activator: [40, 41, 42, 43, 49], enableOption: [21], shown: false},
        {id: 18, question: 6, to: 4, text: '(mentir) defendi a Marcos (verdad) neutro', activator: [40, 41, 42, 43, 51, 52], enableOption: [21], shown: false},
        {id: 19, question: 6, to: 4, text: '(mentir) No conteste (vedad) negativo', activator: [40, 41, 42, 43, 54, 55], enableOption: [21], shown: false},
        {id: 20, question: 6, to: 4, text: '(mentir) Lo defendi (verdad) negativo', activator: [40, 41, 42, 43, 54, 55], enableOption: [21], shown: false},
        {id: 21, question: 6, to: 4, text: 'Lo siento', activator: [38, 57], enableOption: [22, 23], shown: false},
        {id: 22, question: 7, to: 2, text: 'Que paso ayer?', activator: [58, 59, 60, 61], enableOption: [0], shown: false},
        {id: 23, question: 7, to: 2, text: 'Ya no me importa', activator: [260, 261, 60, 61], enableOption: [0], shown: false},
        {id: 24, question: 11, to: 4, text: 'Quitar importancia', activator: [66, 67, 68, 69, 70], enableOption: [0], shown: false},
        {id: 25, question: 11, to: 4, text: 'Quedar por la tarde', activator: [72, 73, 74, 75], enableOption: [0], shown: false},
        {id: 26, question: 11, to: 4, text: 'Hacer lo mismo a Oscar', activator: [62, 362, 63, 64], enableOption: [27], shown: false},
        {id: 27, question: 12, to: 4, text: 'Lo siento tienes razon', activator: [71,76,77,78,79,80,81], enableOption: [0], shown: false},
        {id: 28, question: 13, to: 4, text: 'Genial!', activator: [375, 76,77,78,79,80,81], enableOption: [0], shown: false},
        ],
  },

  getters: {

    getDay: state =>{
      return state.day
    },

    //Nombre del personaje que envia el mensaje
    getNotificacion: state =>{
      return state.newMsg;
    },

    getShownDayInfo: state =>{
      return state.shownDayInfo;
    },

    firstName: state => {
      return state.user.fullName.split(' ')[0]
    },

    numUsers: state => {
      return state.persons.length - 1
    },

    getImage1: state => {
      return state.persons[3]
    },

    getUserInfo: (state) => (id) => {
      return state.persons.filter(persons => persons.id === id)[0];
    },

    getChatUserInfo: (state, getters) => {
      return state.persons.filter(persons => persons.id === getters.getChatUser)[0];
    },

    getChatUser: (state) => {
      return state.chatUser
    },

    getMsg: (state, getters) => {
      return state.msg.filter(msg => msg.sender === getters.getChatUser || msg.sender === 1).filter(msg => msg.to === getters.getChatUser ).filter(msg => msg.shown === true);
    },

    getMsgLenght: (state, getters) =>{
      return state.msg.filter(msg => msg.sender === getters.getChatUser || msg.sender === 1).filter(msg => msg.to === getters.getChatUser ).filter(msg => msg.shown === true).length
    },

    getLastQuestionUser: (state, getters) => {
      return state.msg.filter(msg => msg.sender === getters.getChatUser).filter(msg => msg.shown === true).filter(msg => msg.question !== null)[getters.getQuestionUserLenght-1]
    },

    getQuestionUserLenght: (state, getters) => {
      return state.msg.filter(msg => msg.sender === getters.getChatUser).filter(msg => msg.shown === true).filter(msg => msg.question !== null).length
    },

    getAllPaths: (state) => {
      return state.path
    },

    getPathByQuestion: (state) => {
      return state.path.filter(path => path.question === state.lastQuestion);
    },

    getOptions: (state, getters) => {
      
      try{
        return state.path.filter(path => path.question === getters.getLastQuestionUser.question).filter(path => path.shown === true).filter(path => path.to === getters.getChatUser)
      }catch(error){console.log('Error getOptions')}
      try{
        console.log(state.path.filter(path => path.to === getters.getChatUser).filter(path => path.shown === true))
        return state.path.filter(path => path.to === getters.getChatUser).filter(path => path.shown === true);
      }catch(error){console.log('Error getOptions2')}
    },

    getOptionsLenght: (state, getters) => {
      try{
        return state.path.filter(path => path.question === getters.getLastQuestionUser.question).filter(path => path.shown === true).filter(path => path.to === getters.getChatUser).length;
      }catch(error){console.log('Error getOptionsLenght')}
      try{
        return state.path.filter(path => path.to === getters.getChatUser).filter(path => path.shown === true).length;
      }catch(error){console.log('Error getOptionsLenght2')}
      
    },

    getActivedMsgforOption: (state) => {
      return state.path.find(path => path.id == state.lastPath)
    },

    getMsgById: (state) => (id) => {
      return state.msg.find(msg => msg.id === id)
    },

    getColorSchema: (state) => {
      return state.colorScheme;
    },

    getBackgroundImage: (state) => {
      return state.backgroundImage;
    }
  },
  mutations: {

    setDay(state, dayId){
      state.day = dayId;
    },

    setNotificacion(state, visibility, username){
      state.newMsg = { new: visibility, user: username}
    },

    setShownDayInfo(state, visibility){
      state.shownDayInfo = visibility;
    },

    setBackgroundImage(state, link){
      state.backgroundImage = link;
      console.log('link ' + state.backgroundImage)
    },
    
    setUserChat(state, id){
      state.chatUser = id
    },

    setLastPath(state, optionId){
      state.lastPath = optionId
    },

    setLastQuestion(state, questionId){
      state.lastQuestion = questionId
    },

    activePathMsg(state, msgsId){
      for(let i = 0; i < msgsId.length; i++){
        setTimeout(function () {
          try{
            state.msg.find(msg => msg.id === msgsId[i]).shown = true
          }catch(error){return 0}
      }, i*1000);
        
      }
    },

    enablePathQuestion(state, question2){
      state.lastQuestion = question2;
      var questions = state.path.filter(path => path.question === question2);
      try{
        for(let i = 0; i < questions.length; i++){
          try{
            questions[i].shown = true;
            
          }catch(error){console.log('Error enablePathQuestions')}
        }
      }catch(error){console.log('Error enablePathQuestions')}
    },

    disablePathOptions(state, questionId){
      var questions = state.path.filter(path => path.question === questionId);
      for(let i = 0; i < questions.length; i++){
        questions[i].shown = false
      }
    },

    enablePathOptions(state, optionId){
      var questions = state.path.find(path => path.id === optionId).enableOption;
      for(let i = 0; i < questions.length; i++){
        try{
          state.path.find(path => path.id == questions[i]).shown = true;
        }catch(error){console.log('Error enablePathOptions')}
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
