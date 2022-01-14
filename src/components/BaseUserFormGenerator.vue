<template>
  <div>
    <v-form @submit="submitUserProperties" class="form">
      <div
          v-for="{ type, name, label, rules } in schema"
          :key="type + name"
          class="form__content"
      >
        <p>{{label}}</p>
        <v-field
            :rules="rules"
            :name="name"
            :id="name + type"
            :type="type"
            class="form__content-input"
        />
        <!-- Show Validation Message -->
        <error-message :name="name" class="form__content-error-message" />
      </div>
      <!-- Submit Button -->
      <input class="form__content-submit-button" type="submit" value="Submit" />
    </v-form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  name: "BaseFormGenerator",
  components: {
    VField: Field,
    VForm: Form,
    ErrorMessage,
  },
  props: {
    schema: {
      type: Array,
      required: true,
    },
  },
  emits: ["submit"],
  methods: {
    submitUserProperties(values,{ resetForm }) {
      this.$emit("submit", values);
      resetForm()
    },
  },
};
</script>

<style lang="scss"  scoped>
@import "src/assets/scss/base-form-generator.scss";
</style>