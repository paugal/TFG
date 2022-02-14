import { createStore } from 'vuex'

export default createStore({
  state: {
    day: 1,
    shownDayInfo: true,
    newMsg: {new: true, username: 'Oscar'},
    chatUser: 3,
    lastPath: 1,
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
      {id: 10, text: 'Que asco me da', sender: 3, to: 3, question: null, shown: false},
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
      {id: 27, text: 'uff espero que no sea nada grabe', sender: 4, to: 4, question: null, shown: false},
    ],
    
      path:[
        {id: 1, question: 1, to: 3, text: 'No', activator: [7, 8, 9, 10], enableOption: [3], shown: true},
        {id: 2, question: 1, to: 3, text: 'Me da igual', activator: [5, 6, 8, 9, 10], enableOption: [3], shown: true},
        {id: 3, question: 2, to: 2, text: 'Hola Marcos!', activator: [1], enableOption: [4], shown: false},
        {id: 4, question: 3, to: 2, text: 'Estas bien?', activator: [2,13,14,15], enableOption: [5, 6, 7], shown: false},
        {id: 5, question: 4, to: 2, text: 'No insistir', activator: [13,14,15], enableOption: [7], shown: false},
        {id: 6, question: 4, to: 2, text: 'Preguntar por lo que te ha dicho Oscar', activator: [3, 11, 12], enableOption: [7], shown: false},
        {id: 7, question: 5, to: 4, text: 'Hola!', activator: [16, 17, 18], enableOption: [8], shown: false},
        {id: 8, question: 6, to: 4, text: 'Contar lo de Oscar', activator: [19, 20, 21, 22, 23, 24, 25, 26, 27], enableOption:[0] , shown: false},
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

    activePathMsg(state, msgsId){
      for(let i = 0; i < msgsId.length; i++){
        setTimeout(function () {
          try{
            state.msg.find(msg => msg.id === msgsId[i]).shown = true
          }catch(error){return 0}
      }, i*1000);
        
      }
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
        }catch(error){console.log('Error enablePathoptions')}
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
