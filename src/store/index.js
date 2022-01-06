import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: 'matt',
      fullName: 'Matt Maribojoc'
    },

    chatUser: 2,
    lastPath: 1,
    colorScheme: '#07C286',
    backgroundImage: "https://i.ibb.co/zRNQYd5/wp4410724.jpg",

    persons: [
      { id: 1, name: "player", image: "NULL"}, 
      { id: 2, name: "Marcoos", image:"https://i.ibb.co/S7vP88k/user-image-marcos.jpg"},
      { id: 3, name: "Oscar Clase", image: "https://i.ibb.co/yh14wQs/user-image-bully.jpg"}],
    
    msg: [

      {id: 1, text: "Hola Marcoss 👋🏼", sender: 1, question: null, shown: false},
      {id: 2, text: "Como estas?", sender: 1, question: null, shown: false},
      
      //DIA 1:
      {id: 4, text: "Tio te has enterado de lo de marcos!!!", sender: 3, question: 1, shown: true},
      //Si respondes: ME DA IGUAL
      {id: 5, text: "Que va, pero me da igual", sender: 1, question: null, shown: false},
      {id: 6, text: "Como te va a dar igual si es tu amigoo", sender: 3, question: null, shown: false},
      //Si respondes: NO
      {id: 7, text: "No, hace un par de dias que no hablamos", sender: 1, question: null, shown: false},
      {id: 8, text: "Bua pues vas a flipar, todos estan hablardo de eso en clase", sender: 3, question: null, shown: false},
      {id: 9, text: "Aunque no me sorprende, Marcos siempre a sido un friki", sender: 3, question: null, shown: false},
      {id: 10, text: "Que asco me da", sender: 3, question: null, shown: false},

    ],
    
    path: [
      {id: 1, question: 1, to: 3, text: "No", activator: [7, 8, 9, 10], enableOption: [0], shown: true},
      {id: 2, question: 1, to: 3, text: "Me da igual", activator: [5, 6, 8, 9, 10], enableOption: [0], shown: true},

      
      {id: 3, question: 2, to: 2, text: "Hola Marcos!", activator: [1], enableOption: [4], shown: true},
      {id: 4, question: 3, to: 2, text: "Estas bien?", activator: [2], enableOption: [0], shown: false},



    ]
  },
  getters: {

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
      return state.msg.filter(msg => msg.sender === getters.getChatUser || msg.sender === 1).filter(msg => msg.shown === true);
    },

    getMsgLenght: (state, getters) =>{
      return state.msg.filter(msg => msg.sender === getters.getChatUser || msg.sender === 1).filter(msg => msg.shown === true).length
    },

    getLastQuestionUser: (state, getters) => {
      return state.msg.filter(msg => msg.sender === getters.getChatUser).filter(msg => msg.shown === true).filter(msg => msg.question !== null)[getters.getQuestionUserLenght-1]
    },

    getQuestionUserLenght: (state, getters) => {
      return state.msg.filter(msg => msg.sender === getters.getChatUser).filter(msg => msg.shown === true).filter(msg => msg.question !== null).length
    },

    getOptions: (state, getters) => {
      try{
        return state.path.filter(path => path.question === getters.getLastQuestionUser.question).filter(path => path.shown === true)
      }catch(error){console.log('Error getOptions')}
      try{
        console.log(state.path.filter(path => path.to === getters.getChatUser).filter(path => path.shown === true))
        return state.path.filter(path => path.to === getters.getChatUser).filter(path => path.shown === true);
      }catch(error){console.log('Error getOptions2')}
    },

    getOptionsLenght: (state, getters) => {
      try{
        return state.path.filter(path => path.question === getters.getLastQuestionUser.question).filter(path => path.shown === true).length;
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
    
    setUserChat(state, id){
      state.chatUser = id
    },

    setLastPath(state, optionId){
      state.lastPath = optionId
      console.log(state.lastPath)
      /*
      for(let i = 0; i < getters.getActivedMsgforOption.activator.length; i++){
        //state.getters.getMsgById(getters.getActivedMsgforOption.activator[i-1]).shown = true
        console.log(getters.getActivedMsgforOption.activator[i-1])
      }*/
    },

    activePathMsg(state, msgsId){
      for(let i = 0; i < msgsId.length; i++){
        state.msg.find(msg => msg.id === msgsId[i]).shown = true
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
