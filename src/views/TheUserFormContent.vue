<template>
  <div>
    <button class="go__back-button" @click="$router.go(-1)">Go Back</button>
    <base-user-form-generator :schema="userSchema" @submit="submitUserForm"/>
  </div>
</template>

<script>
import * as Yup from "yup";
import BaseUserFormGenerator from "@/components/BaseUserFormGenerator";
export default {
  name:'TheUserFormContent',
  components: {
    BaseUserFormGenerator
  },
  data() {
    return {
      userSchema: [
        {
          type: "text",
          name: "username",
          placeholder: "Username",
          label:'Username',
          rules: Yup.string().min(3).required(),
        },
        {
          type: "password",
          name: "userPassword",
          placeholder: "Password",
          label:'Password',
          rules: Yup.string().min(6).required(),
        },
        {
          type: "text",
          name: "userPin",
          placeholder: "User JSHSHIR",
          label:'User Individual PINFL',
          rules: Yup.string().length(14).required(),
        },
        {
          type: "date",
          name: "userBirthdate",
          placeholder: "Birthdate",
          label:'Birthdate',
          rules: Yup.date().required(),
        },
      ]
    }
  },
  methods:{
    submitUserForm(formContext){
      const  {username,userPassword,userPin,userBirthdate} = formContext
      const message = `Username : ${username} , Password : ${userPassword} , JSHSHIR : ${userPin} , Birthdate : ${userBirthdate}`
      alert(message)
    }
  }
}
</script>
