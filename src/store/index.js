import { createStore } from 'vuex'

export default createStore({
  state: {
    PreFormulary: [],
    PosFormulary: [],
    day: 1,
    chatOrder: [3, 2, 4, 5, 6, 7, 8],
    shownDayInfo: true,
    newMsg: {new: true, username: 'Oscar'},
    chatUser: 3,
    lastPath: 1,
    lastQuestion: 0,
    playerPath: [],
    karma: 0,
    specialKarma: 0,
    ID: 0,
    isTheEnd: false,
    testMode: true,

    //No es una lista del id de las opciones, tengo que modificar la estructura
    selectedOptionsList: [],
    colorScheme: 'var(--main-color)',
    backgroundImage: "https://i.ibb.co/zRNQYd5/wp4410724.jpg",

    persons:[
      {id: 1, name: 'player', image:  'NULL'},
      {id: 2, name: 'Marcos', image:  'https://i.ibb.co/S7vP88k/user-image-marcos.jpg'},
      {id: 3, name: 'Oscar', image:  'https://i.ibb.co/yh14wQs/user-image-bully.jpg'},
      {id: 4, name: 'Marta', image:  'https://i.ibb.co/12z1DFF/perro.jpg'},
      {id: 5, name: 'A la playa', image:  'https://i.ibb.co/BgJRxN5/playa.jpg'},
      {id: 6, name: 'Hugo', image:  'https://i.ibb.co/drKVBBz/gato.jpg'},
      {id: 7, name: 'Hermano Marcos', image:  'https://i.ibb.co/NCw5YDY/hermano.jpg'},
      {id: 8, name: 'Mama', image:  'https://i.ibb.co/g7nQJFw/mama.jpg'},
      ],
    
      msg:[
        {id: 1, text: 'Hola Marcoss 👋🏼', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 2, text: 'Cómo estás?', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 3, text: 'Oscar me ha abierto y me ha dicho que ha pasado algo', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 11, text: 'No me ha contado nada, pero parecía grave', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 12, text: 'Dime algo cuando puedas', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 4, text: 'Tío te has enterado de lo de marcos!!!', sender: 3, to: 3, question: 1, shown: true, visto: false},
        {id: 5, text: 'Que va, pero me da igual', sender: 1, to: 3, question: null, shown: false, visto: true},
        {id: 6, text: 'Como te va a dar igual si es tu amigo', sender: 3, to: 3, question: null, shown: false, visto: false},
        {id: 7, text: 'No, hace un par de días que no hablamos', sender: 1, to: 3, question: null, shown: false, visto: true},
        {id: 8, text: 'Bua pues vas a flipar, todos están hablando de eso en clase', sender: 3, to: 3, question: null, shown: false, visto: false},
        {id: 9, text: 'Aunque no me sorprende, Marcos siempre a sido un friki', sender: 3, to: 3, question: null, shown: false, visto: false},
        {id: 10, text: 'Que asco me da', sender: 3, to: 3, question: 8, shown: false, visto: false},
        {id: 1001, text: 'Pero de qué vas Óscar?', sender: 1, to: 3, question: null, shown: false, visto: true},
        {id: 1002, text: 'Marcos es mi amigo, no pienso dejar que vayas insultando', sender: 1, to: 3, question: null, shown: false, visto: true},
        {id: 1003, text: 'Lo que tú digas, pringado', sender: 3, to: 3, question: null, shown: false, visto: false},
        {id: 1004, text: 'Óscar te ha bloqueado', sender: 3, to: 3, question: null, shown: false, visto: false},
        {id: 1005, text: 'En serio? bua ya me contaras que ha hecho ese pringado', sender: 1, to: 3, question: null, shown: false, visto: true},
        {id: 1006, text: 'Nunca me ha caído bien', sender: 1, to: 3, question: null, shown: false, visto: true},
        {id: 1007, text: 'ya ves mañana en clase de cuento', sender: 3, to: 3, question: null, shown: false, visto: false},
        {id: 13, text: 'Holaa! Sabes algo de Marcos???', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 14, text: 'hoy no ha venido a básquet', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 15, text: 'no me contesta a los mensajes, es muy raro en él', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 16, text: 'Hola Marta', sender: 1, to: 4, question: 9, shown: false, visto: true},
        {id: 17, text: 'A mí tampoco me contesta', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 18, text: 'Que raro que se haya saltado básquet', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 19, text: 'Me ha abierto Óscar de clase', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 20, text: 'Sois amigos?', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 21, text: 'Que vaa, me ha contado algo que ha pasado con Marcos', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 22, text: 'Que ha pasado?', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 23, text: 'No me ha quedado muy claro', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 24, text: 'Ha empezado a insultarlo', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 25, text: 'A insultado a Marcos?', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 26, text: 'Sí, ha pasado algo, pero no me lo ha contado', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 27, text: 'Y tú qué le has dicho?', sender: 4, to: 4, question: 6, shown: false, visto: false},
        {id: 28, text: 'No le he contestado', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 29, text: 'Bueno a veces es mejor no seguir la corriente', sender: 4, to: 4, question: 163, shown: false, visto: false},
        {id: 30, text: 'Le he dicho que parara de insultar a Marcos', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 31, text: 'Muy bieen! Gracias por defenderlo', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 32, text: 'Espero que así le quede claro  a Oscar que hacer lo que hace es horrible', sender: 4, to: 4, question: 163, shown: false, visto: false},
        {id: 1322, text: 'A ver si Marcos contesta, nos vemos mañana', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 33, text: 'Le he seguido el juego ', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 34, text: 'Qué has hecho que???', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 35, text: 'Por qué narices haces eso???', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 36, text: 'Marcos es tu amigo y no ha hecho nada para que lo vayas insultando', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 37, text: 'Estoy muy enfadada, pensaba que eras mejor persona', sender: 4, to: 4, question: 162, shown: false, visto: false},
        {id: 38, text: 'Lo siento...', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 39, text: '(mentir) No le he contestado (verdad) defender', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 40, text: 'Me estás mintiendo?', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 41, text: 'Óscar me acaba de enviar esto', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 42, text: '', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 43, text: 'No entiendo por qué me mientes', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 44, text: ' defendiste a Marcos, es lo mejor que pudiste hacer', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 45, text: 'No me vuelvas a mentir, por favor', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 46, text: 'Tienes razón lo siento', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 47, text: '(mentir) Insulte a Marcos (verdad) defender', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 48, text: '(mentir) Insulte a Marcos (verdad) neutro', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 49, text: 'No lo defendiste pero al menos no lo insultaste', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 50, text: '(mentir) defendí a Marcos (verdad) neutro', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 51, text: 'Si no tuviste el valor de defender a tu amigos', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 52, text: 'Como mínimo no mientas y digas que lo hiciste', sender: 4, to: 4, question: 162, shown: false, visto: false},
        {id: 521, text: 'Lo siento...', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 53, text: '(mentir) No conteste (vedad) negativo', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 54, text: 'Pensaba que Marcos era tu amigo', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 55, text: 'Insultar no te hace mejor que Oscar', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 56, text: '(mentir) Lo defendí (verdad) negativo', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 57, text: 'Perdon por no contestar ayer, no me encontraba bien', sender: 2, to: 2, question: 7, shown: false, visto: false},
        {id: 58, text: 'Ha pasado algo con Oscar?', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 59, text: 'Marcos??', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 260, text: 'Ya no hace falta que contestes... ', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 261, text: 'Hace más de un dia que te envie el mensaje', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 60, text: 'Lo que ha hecho Oscar no está bien', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 61, text: 'Tenemos que hacer algo para ayudar a Marcos', sender: 4, to: 4, question: 11, shown: false, visto: false},
        {id: 62, text: 'Estoy harto de Oscar', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 362, text: 'Tenemos que hacerle lo mismo que le ha hecho a Marcos!', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 63, text: 'No creo que eso sea buena idea', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 64, text: 'No se va a solucionar nada', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 65, text: 'No seremos mejor que él si hacemos lo mismo', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 66, text: 'Marta no tiene importancia', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 67, text: 'Si lo ignoramos mejor', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 68, text: 'Que no tiene importancia!', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 69, text: 'Vete a saber que va diciendo de Marcos', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 70, text: 'O incluso le ha hecho algo', sender: 4, to: 4, question: 12, shown: false, visto: false},
        {id: 71, text: 'Lo siento tienes razón', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 72, text: 'Podemos quedar para ir a playa esta tarde', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 73, text: 'Buena idea, eso le ayudará a despejarse', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 74, text: 'y tal vez nos cuenta que ha pasado', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 75, text: 'Hago un grupo con los de siempre', sender: 4, to: 4, question: 13, shown: false, visto: false},
        {id: 375, text: 'Genial!', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 76, text: 'Marta: Hola chicos!!', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 77, text: ' Hugo: Holaa', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 78, text: 'Silvia: que tal??', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 79, text: 'Marta: Queréis ir esta tarde a la playa?', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 80, text: 'Hugo: Por mi genial', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 81, text: 'Silvia: Buena idea, contad conmigo', sender: 5, to: 5, question: 14, shown: false, visto: false},
        {id: 82, text: 'Tu: yo tambien me apunto', sender: 1, to: 5, question: 15, shown: false, visto: true},
        {id: 83, text: 'Tu: y tu Marcos??', sender: 1, to: 5, question: null, shown: false, visto: true},
        {id: 84, text: 'Marcos: Si yo tambien me apunto', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 85, text: 'Marta: Genial!', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 86, text: 'Marta: pues a las 16 donde siempre', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 87, text: 'Estoy preocupada he visto a Marcos muy triste esta tarde', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 88, text: 'Deberíamos haber hablado con él del tema?', sender: 4, to: 4, question: 16, shown: false, visto: false},
        {id: 89, text: 'No lo se ', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 90, text: 'No era el momento, se hubiera sentido incómodo', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 91, text: 'Tal vez cuando estábamos los tres solos podríamos haber hablado con el', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 92, text: 'Puff no se que tendria que hacer..', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 93, text: 'Hola, ha pasado algo grave', sender: 6, to: 6, question: null, shown: false, visto: false},
        {id: 94, text: 'Esta mañana Oscar ha creado un chat de grupo con sus amigos', sender: 6, to: 6, question: null, shown: false, visto: false},
        {id: 95, text: 'y Marcos, y lo han empezado a insultar y cosas peores', sender: 6, to: 6, question: null, shown: false, visto: false},
        {id: 96, text: 'yo al ver de que era el grupo me he salido', sender: 6, to: 6, question: null, shown: false, visto: false},
        {id: 97, text: 'que deberíamos hacer?', sender: 6, to: 6, question: 17, shown: false, visto: false},
        {id: 98, text: 'No me quiero meter, se van a meter conmigo sino', sender: 1, to: 6, question: null, shown: false, visto: true},
        {id: 99, text: 'Enserio???? Después de lo que te he encontrado', sender: 6, to: 6, question: null, shown: false, visto: false},
        {id: 100, text: 'No podemos mirar a otro lado!', sender: 6, to: 6, question: null, shown: false, visto: false},
        {id: 101, text: 'Tengo que hablar con Marcos y enterarme de qué está pasando', sender: 1, to: 6, question: 18, shown: false, visto: true},
        {id: 102, text: 'Tenemos que ayudarlo', sender: 6, to: 6, question: null, shown: false, visto: false},
        {id: 103, text: 'Esto esta muy mal', sender: 6, to: 6, question: null, shown: false, visto: false},
        {id: 104, text: 'Marcos tenemos que hablar es importante', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 105, text: 'Porfavor contesta', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 106, text: 'Marcos no ha venido a clase hoy', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 107, text: 'Esto cada vez va a peor', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 108, text: 'Tenemos que hacer algo ya!', sender: 4, to: 4, question: 19, shown: false, visto: false},
        {id: 109, text: 'Tenemos que ir a casa de Marcos y hablar con el de una vez', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 110, text: 'Tienes razón creo que es lo mejor', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 111, text: 'Con suerte tal vez podemos decir que se lo cuente a su madre', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 112, text: 'Ella seguro que sabe mejor que hacer', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 113, text: 'Tenemos que hablar con los profesores sobre esto', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 114, text: 'Buena idea, tenemos que hablar con orientacion', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 115, text: 'Marta no quiero saber nada de todo esto, no me importa', sender: 1, to: 4, question: null, shown: false, visto: true},
        {id: 116, text: 'Es una broma no?', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 1162, text: 'No me esperaba esto de ti...', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 117, text: 'Vale pues vamos ahora mismo!', sender: 4, to: 4, question: null, shown: false, visto: false},
        {id: 1180, text: 'Has salido del chat', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 118, text: 'Hugo: Marcos nos hemos enterado de lo de Oscar', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 119, text: 'No te preocupes, estamos contigo', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 120, text: 'Silvia: sii, cualquier cosa que necesites', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 121, text: 'Marta: No has hecho nada malo, todo es culpa de Oscar y sus amigos', sender: 5, to: 5, question: 20, shown: false, visto: false},
        {id: 122, text: 'Tu: Somos tus amigos y te apoyaremos siempre', sender: 1, to: 5, question: null, shown: false, visto: true},
        {id: 123, text: 'Marcos: Muchas gracias chicos', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 124, text: 'De verdad, me alegra tener amigos como vosotros', sender: 5, to: 5, question: null, shown: false, visto: false},
        {id: 125, text: 'Hola', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 126, text: 'Ya sabes que estos días han sido difíciles', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 127, text: 'Y quería hablar contigo del tema', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 128, text: 'Quería darte las gracias por lo mucho que has ayudado', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 129, text: 'He estado hablando con Marta y me ha dicho ', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 130, text: 'lo mucho que te has preocupado y has hecho', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 131, text: 'no sé qué hubiera pasado si no tuviera unos amigos como vosotros', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 132, text: 'Así que nada, solo queria dar las gracias por todo lo que habéis hecho', sender: 2, to: 2, question: 21, shown: false, visto: false},
        {id: 133, text: 'Han sido unos dias dificiles y me he enterado', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 134, text: 'de algunas cosas que no me han gustado', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 135, text: 'pensaba que eramos amigos', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 136, text: 'que no son de buen amigo', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 137, text: 'Creo que necesito unos días sin hablar', sender: 2, to: 2, question: 22, shown: false, visto: false},
        {id: 138, text: 'Me he enterado de cosas que me han dolido mucho', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 139, text: 'Pensaba que eramos amigos pero me ha quedado claro que no', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 140, text: 'Si he podido salir de esta a sido gracias a mis amigos de verdad', sender: 2, to: 2, question: null, shown: false, visto: false},
        {id: 141, text: 'y no gracias a ti', sender: 2, to: 2, question: 23, shown: false, visto: false},
        {id: 142, text: 'De nada, era lo mínimo que podíamos hacer', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 143, text: 'Lo siento, me equivoque ', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 144, text: 'cuando quieras podemos hablar', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 145, text: 'Lo siento mucho, no se por que lo hice.', sender: 1, to: 2, question: null, shown: false, visto: true},
        {id: 146, text: 'Hola', sender: 7, to: 7, question: null, shown: false, visto: false},
        {id: 147, text: 'Marcos me ha contado lo que ha pasado estos dias', sender: 7, to: 7, question: null, shown: false, visto: false},
        {id: 148, text: 'Queria darte las gracias, lo ha pasado muy mal', sender: 7, to: 7, question: null, shown: false, visto: false},
        {id: 149, text: 'Pero gracias a ti y a sus otros amigos, ahora esta mucho mejor', sender: 7, to: 7, question: 24, shown: false, visto: false},
        {id: 150, text: 'No hay de que, el hubiera hecho lo mismo por mi', sender: 1, to: 7, question: null, shown: false, visto: true},
        {id: 151, text: 'Queria que supieras que por culpa de Oscar, sus amigos y tu', sender: 7, to: 7, question: null, shown: false, visto: false},
        {id: 152, text: 'Marcos ha estado muy mal estos dias', sender: 7, to: 7, question: null, shown: false, visto: false},
        {id: 153, text: 'Espero que pienses en lo que has hecho y no vuelvas a hacerselo', sender: 7, to: 7, question: null, shown: false, visto: false},
        {id: 154, text: 'a nadie mas nunca.', sender: 7, to: 7, question: 25, shown: false, visto: false},
        {id: 155, text: 'Lo siento, no volvera a ocurrir.', sender: 1, to: 7, question: null, shown: false, visto: true},
        {id: 156, text: 'Hola', sender: 8, to: 8, question: null, shown: false, visto: false},
        {id: 157, text: 'La madre de Marcos me ha contado como lo has ayudado estos dias', sender: 8, to: 8, question: null, shown: false, visto: false},
        {id: 158, text: 'estoy muy orgullosa de ti', sender: 8, to: 8, question: 26, shown: false, visto: false},
        {id: 159, text: 'Gracias mama', sender: 1, to: 8, question: null, shown: false, visto: true},
        {id: 160, text: 'La madre de Marcos me acaba de contar todo lo que le has hecho a su hijo', sender: 8, to: 8, question: null, shown: false, visto: false},
        {id: 161, text: 'Que sepas que estas castigado', sender: 8, to: 8, question: null, shown: false, visto: false},
        {id: 162, text: 'Yo no te he educado asi!', sender: 8, to: 8, question: 27, shown: false, visto: false},
        {id: 163, text: 'Lo siento mama', sender: 1, to: 8, question: null, shown: false, visto: true},
        ],
    
    path:[
      {id: 1, question: 1, to: 3, text: 'No', activator: [7, 8, 9, 10], enableOption: [6], karma: 0, shown: false},
      {id: 2, question: 1, to: 3, text: 'Me da igual', activator: [5, 6, 8, 9, 10], enableOption: [3, 4, 5, 6], karma: -0.5, shown: false},
      {id: 3, question: 8, to: 3, text: 'Defender a Marcos', activator: [1001, 1002, 1003, 1004], enableOption: [0], karma: 0, shown: false},
      {id: 4, question: 8, to: 3, text: 'No contestar', activator: [0], enableOption: [0], karma: 0, shown: false},
      {id: 5, question: 8, to: 3, text: 'Insultar a Marcos', activator: [1005, 1006, 1007], enableOption: [0], karma: 0, shown: false},
      {id: 6, question: 2, to: 2, text: 'Hola Marcos!', activator: [1], enableOption: [7], karma: 0, shown: false},
      {id: 7, question: 3, to: 2, text: 'Estas bien?', activator: [2,13,14,15], enableOption: [8, 9, 10], karma: 0, shown: false},
      {id: 8, question: 4, to: 2, text: 'No insistir', activator: [13,14,15], enableOption: [0], karma: 0, shown: false},
      {id: 9, question: 4, to: 2, text: 'Preguntar por lo que te ha dicho Oscar', activator: [3, 11, 12], enableOption: [0], karma: 0, shown: false},
      {id: 10, question: 5, to: 4, text: 'Hola!', activator: [16], enableOption: [0], karma: 0, shown: false},
      {id: 11, question: 9, to: 4, text: 'Contar lo de Oscar', activator: [19, 22, 23, 24, 25, 27], enableOption: [0], karma: 0, shown: false},
      {id: 12, question: 6, to: 4, text: 'He defendido a Marcos', activator: [0], enableOption: [0], karma: 0, shown: false},
      {id: 13, question: 6, to: 4, text: 'No he contestado', activator: [0], enableOption: [0], karma: 0, shown: false},
      {id: 14, question: 6, to: 4, text: 'He insultado a Marcos', activator: [0], enableOption: [0], karma: 0, shown: false},
      {id: 15, question: 62, to: 4, text: '(mentir) No le he contestado (verdad) defender', activator: [40, 41, 42, 43, 44, 45], enableOption: [21], karma: 0, shown: false},
      {id: 16, question: 62, to: 4, text: '(mentir) Insulte a Marcos (verdad) defender', activator: [40, 41, 42, 43, 44, 45], enableOption: [21], karma: 0, shown: false},
      {id: 17, question: 62, to: 4, text: '(mentir) Insulte a Marcos (verdad) neutro', activator: [40, 41, 42, 43, 49], enableOption: [21], karma: 0, shown: false},
      {id: 18, question: 62, to: 4, text: '(mentir) defendí a Marcos (verdad) neutro', activator: [40, 41, 42, 43, 51, 52], enableOption: [21], karma: 0, shown: false},
      {id: 19, question: 62, to: 4, text: '(mentir) No conteste (vedad) negativo', activator: [40, 41, 42, 43, 54, 55], enableOption: [21], karma: 0, shown: false},
      {id: 20, question: 62, to: 4, text: '(mentir) Lo defendí (verdad) negativo', activator: [40, 41, 42, 43, 54, 55], enableOption: [21], karma: 0, shown: false},
      {id: 21, question: 162, to: 4, text: 'Lo siento mucho', activator: [57, 521], enableOption: [22, 23], karma: 0, shown: false},
      {id: 221, question: 163, to: 4, text: 'Adios', activator: [1322, 57], enableOption: [22, 23], karma: 0, shown: false},
      {id: 22, question: 7, to: 2, text: 'Que paso ayer?', activator: [58, 59, 60, 61], enableOption: [0], karma: 0, shown: false},
      {id: 23, question: 7, to: 2, text: 'Ya no me importa', activator: [260, 261, 60, 61], enableOption: [0], karma: -1, shown: false},
      {id: 24, question: 11, to: 4, text: 'Quitar importancia', activator: [66, 67, 68, 69, 70], enableOption: [0], karma: -1, shown: false},
      {id: 25, question: 11, to: 4, text: 'Quedar por la tarde', activator: [72, 73, 74, 75], enableOption: [0], karma: 1, shown: false},
      {id: 26, question: 11, to: 4, text: 'Hacer lo mismo a Oscar', activator: [62, 362, 63, 64], enableOption: [27], karma: -1, shown: false},
      {id: 27, question: 12, to: 4, text: 'Lo siento tienes razón', activator: [71,76,77,78,79,80,81], enableOption: [0], karma: 0, shown: false},
      {id: 28, question: 13, to: 4, text: 'Genial!', activator: [375, 76,77,78,79,80,81], enableOption: [0], karma: 0, shown: false},
      {id: 29, question: 14, to: 5, text: 'Apuntarse', activator: [82], enableOption: [30], karma: 0, shown: false},
      {id: 30, question: 15, to: 5, text: 'Preguntar a Marcos', activator: [83, 84, 85, 86, 87, 88], enableOption: [0], karma: 0, shown: false},
      {id: 31, question: 16, to: 4, text: 'No lo se', activator: [89, 92, 93, 94, 95, 96, 97], enableOption: [0], karma: 0, shown: false},
      {id: 32, question: 16, to: 4, text: 'Tal vez', activator: [90, 92, 93, 94, 95, 96, 97], enableOption: [0], karma: 0, shown: false},
      {id: 33, question: 16, to: 4, text: 'Deberíamos  haberlo hecho', activator: [91, 92, 93, 94, 95, 96, 97], enableOption: [0], karma: 0, shown: false},
      {id: 34, question: 17, to: 6, text: 'No me quiero meter', activator: [98, 99, 100, 102, 102], enableOption: [0], karma: -1, shown: false},
      {id: 35, question: 17, to: 6, text: 'Voy a hablar seriamente con Marcos', activator: [101, 102, 103], enableOption: [0], karma: 1, shown: false},
      {id: 36, question: 18, to: 2, text: 'Marcos tenemos que hablar', activator: [104, 105, 106, 107, 108], enableOption: [0], karma: 0, shown: false},
      {id: 37, question: 19, to: 4, text: 'Hablar con los profesores', activator: [113, 114, 117, 118, 119, 120, 121], enableOption: [0], karma: 1, shown: false},
      {id: 38, question: 19, to: 4, text: 'Ir a casa de Marcos', activator: [109, 110, 111, 112, 117,118, 119, 120, 121], enableOption: [0], karma: 1, shown: false},
      {id: 39, question: 19, to: 4, text: 'No quiero saber nada', activator: [115, 116, 1162, 1180], enableOption: [0], karma: -1, shown: false},
      {id: 40, question: 20, to: 5, text: 'Animar a Marcos', activator: [122, 123, 124], enableOption: [0], karma: 1, shown: false},
      {id: 41, question: 20, to: 5, text: 'No decir nada', activator: [123, 124], enableOption: [0], karma: 0, shown: false},
      {id: 42, question: 21, to: 2, text: 'De nada', activator: [142], enableOption: [0], karma: 0, shown: false},
      {id: 43, question: 22, to: 2, text: 'Lo siento', activator: [143, 144], enableOption: [0], karma: 0, shown: false},
      {id: 44, question: 23, to: 2, text: 'Lo siento mucho', activator: [145], enableOption: [0], karma: 0, shown: false},
      {id: 45, question: 24, to: 7, text: 'No hay de que', activator: [150, 156, 157, 158], enableOption: [0], karma: 0, shown: false},
      {id: 46, question: 25, to: 7, text: 'Disculparse', activator: [155, 160, 161, 162], enableOption: [0], karma: 0, shown: false},
      {id: 47, question: 26, to: 8, text: 'Gracias', activator: [159, 125, 126, 127, 128, 129, 130, 131, 132], enableOption: [0], karma: 0, shown: false},
      {id: 48, question: 27, to: 8, text: 'Disculparse', activator: [163, 125, 138, 139, 140, 141], enableOption: [0], karma: 0, shown: false},
      ],
  },

  getters: {
    getTestMode: state =>{
      return state.testMode;
    },
    getDay: state =>{
      return state.day
    },

    getID: state =>{
      return state.ID
    },

    getPreFormulary: state =>{
      return state.PreFormulary
    },
    getPosFormulary: state =>{
      return state.PosFormulary
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
      return state.msg.filter(msg => msg.sender === getters.getChatUser || msg.sender === 1).filter(msg => msg.shown === true).filter(msg => msg.question !== null)[getters.getQuestionUserLenght-1]
    },

    getQuestionUserLenght: (state, getters) => {
      return state.msg.filter(msg => msg.sender === getters.getChatUser || msg.sender === 1).filter(msg => msg.shown === true).filter(msg => msg.question !== null).length
    },

    getSelectedOptionsList: (state) => {
      return state.selectedOptionsList;
    },

    getPlayerPath: (state) => {
      return state.playerPath;
    },

    getKarma: (state) => {
      return state.karma;
    },
    getSpecialKarma: (state) => {
      return state.specialKarma;
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
      }catch(error){null}
      try{
        //console.log(state.path.filter(path => path.to === getters.getChatUser).filter(path => path.shown === true))
        return state.path.filter(path => path.to === getters.getChatUser).filter(path => path.shown === true);
      }catch(error){null}
    },

    getOptionsLenght: (state, getters) => {
      try{
        return state.path.filter(path => path.question === getters.getLastQuestionUser.question).filter(path => path.shown === true).filter(path => path.to === getters.getChatUser).length;
      }catch(error){null}
      try{
        return state.path.filter(path => path.to === getters.getChatUser).filter(path => path.shown === true).length;
      }catch(error){null}
      
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
    },

    getChatOrder: (state) => {
      return state.chatOrder;
    },

    getLastMsgChat: (state) => (id) => {
      var aux = state.msg.filter(msg => msg.shown === true).filter(msg => msg.sender === id  || msg.to === id);
      if(aux.length == 0){
        return ''
      }else{
        return aux[aux.length-1];
      }
    },

    getNumUnseenMsgFromUser: (state) => (id)  => {
      var numNewMsg = state.msg.filter(msg => msg.shown === true).filter(msg => msg.sender === id).filter(msg => msg.visto === false).length;
      if(numNewMsg == null){
        return 0
      }
      else{
        return numNewMsg
      }
    },
    getEnding: (state) => {
      return state.isTheEnd;
    },
  },
  mutations: {

    setID(state, ID){
      state.ID = ID;
    },

    setSeenMsg(state, id){
      var seenMsg = state.msg.filter(msg => msg.shown === true).filter(msg => msg.sender === id).filter(msg => msg.visto === false);
      for(let index in seenMsg){
        seenMsg[index].visto = true;
      }
    },

    setDay(state, dayId){
      state.day = dayId;
    },

    setPreFormulary(state, formulary){
      state.PreFormulary = formulary;
    },

    setPosFormulary(state, formulary){
      state.PostFormulary = formulary;
    },

    setNotificacion(state, visibility, username){
      var user = ['aux','player', 'Marcos', 'Oscar', 'Marta', 'A la playa', 'Hugo', 'Hermano Marcos', 'Mama'];
      if(state.newMsg.username === username){
        state.newMsg = { new: false, user: username}
      }else if(state.newMsg.username === user[this.chatUser]){
        state.newMsg = { new: false, user: username}
      }else{
        state.newMsg = { new: visibility, user: username}
      }
      
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

    setSelectedOptionsList(state, questionId){
      state.selectedOptionsList.push(questionId);
    },

    setPlayerPath(state, optionId){
      state.playerPath.push(optionId);
    },

    setKarma(state, newKarma){
      state.karma = newKarma;
    },

    setSpecialKarma(state, newKarma){
      state.specialKarma = state.specialKarma + newKarma;
    },

    setLastQuestion(state, questionId){
      state.lastQuestion = questionId
    },
    setEnding(state, end){
      state.isTheEnd = end
    },

    moveUserTopList(state, userId){
      var user = [userId]
      state.chatOrder.filter(chatOrder => chatOrder !== userId);
      state.chatOrder = user.concat(state.chatOrder);
    },

    //CAMBIAR EL SETTIMEOUT DE 1 a i*1000
    activePathMsg(state, msgsId){
      for(let i = 0; i < msgsId.length; i++){
        setTimeout(function () {
          try{
            //Mostramos los mensajes nuevos
            var msg = state.msg.find(msg => msg.id === msgsId[i]);
            msg.shown = true;
            

            //Modificamos el ordes de la lista de chats segun los mas recientes
            var user = [msg.sender]
            if( user != 1){
              var aux = state.chatOrder.filter(chatOrder => chatOrder !== user[0]);
              aux = user.concat(aux);
              state.chatOrder = aux;
            }else if(user == 1){
              user = [msg.to]
              aux = state.chatOrder.filter(chatOrder => chatOrder !== user[0]);
              aux = user.concat(aux);
              state.chatOrder = aux;
            }
            
            //Modificamos la notificacion
            if(state.newMsg.username != msg.sender && state.getChatUser != msg.sender && msg.sender != 1){
              state.newMsg.username = state.persons.find(persons => persons.id == msg.sender).name;
              state.newMsg.new = true;
            }
            
          }catch(error){return 0}
      }, 1);
        
      }
    },

    enablePathQuestion(state, question2){
      state.lastQuestion = question2;
      var questions = state.path.filter(path => path.question === question2);
      try{
        for(let i = 0; i < questions.length; i++){
          try{
            questions[i].shown = true;
            
          }catch(error){null}
        }
      }catch(error){null}
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
        }catch(error){null}
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
