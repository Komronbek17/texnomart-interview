<template>
  <div>
    <v-form
        @submit="submitProperties"
        ref="form"
        class="form"
        :class="{'activate-form':editPosition}"
    >
      <div class="form__content">
        <p>Write today plan</p>
        <v-field
            :rules="rules"
            name="todo"
            type="text"
            placeholder="Write Todos"
            class="form__content-input"
        />
        <!-- Show Validation Message -->
        <error-message name="todo" class="form__content-error-message" />
      </div>
      <!-- Submit Button -->
      <input class="form__content-submit-button" type="submit" value="Add new todo" />
    </v-form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
export default {
  name: "BaseFormGenerator",
  components: {
    VField: Field,
    VForm: Form,
    ErrorMessage,
  },
  emits: ["submit-properties"],
  data() {
    return {
      rules:Yup.string().min(5).required(),
      editPosition:false,
      editingIndex:-1
    }
  },
  methods: {
    submitProperties(values, { resetForm }) {
      let context = { ...values, index:-1 }

      if(this.editPosition){
        context.index = this.editingIndex
      }

      this.editPosition = false
      this.$emit("submit-properties", context);
      resetForm()
    },
    editAddedTodo({todo,index}){
      this.editPosition = true
      this.editingIndex = index
      this.$refs.form.setFieldValue('todo',todo)
    }
  },
};
</script>

<style lang="scss"  scoped>
@import "src/assets/scss/base-form-generator.scss";
</style>
