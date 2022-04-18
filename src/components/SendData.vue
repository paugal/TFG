<template>
    <div id="senddata" class="container">
        <form ref="form" @submit.prevent="sendEmail">
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: 'Titulo del email',
      message: 'cuerpo del mensaje'
    }
  },
  methods: {

    sendEmail() {
      var templateParams = {
        name: this.$store.getters.getID,
        message: JSON.stringify(this.$store.getters.getPreFormulary)
      };  
      try {
        emailjs.send('service_3mckqye','template_g8kvx5s', templateParams, 'user_19PVjLKPzVGUG5VUn6jOU')
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.message = ''
    },
  }
}
</script>


<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>