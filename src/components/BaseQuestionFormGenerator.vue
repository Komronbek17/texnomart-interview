<template>
  <div>
    <v-form @submit="submitProperties" class="form">
      <div
        v-for="{ type, name, question, answers, rules } in schema"
        :key="type + name"
        class="form__content"
      >
        <h3>{{ question }}</h3>
        <!-- Content For Checkbox Or Radio -->
        <template v-if="isTypeCheckboxOrRadio(type)">
          <label
            class="content-block"
            v-for="{ text: answer, id: indexOfAnswer } in answers"
            :for="name + answer"
            :key="answer"
          >
            <v-field
              class="form__content-input"
              :rules="rules"
              :name="name"
              :id="name + answer"
              :type="type"
              :value="indexOfAnswer"
            />
            <span>{{ answer }}</span>
          </label>
        </template>
        <!-- For Another Input Types  -->
        <template v-else>
          <v-field
            :rules="rules"
            :name="name"
            :id="name + type"
            :type="type"
            class="form__content-input"
          />
        </template>
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
  emits: ["submitFormProperties"],
  methods: {
    isTypeCheckboxOrRadio(type) {
      return type === "checkbox" || type === "radio";
    },
    isTypeInput(type) {
      const types = ["input", "number", "password", "email"];
      const indexOfType = types.findIndex((staticType) => staticType === type);
      return indexOfType !== -1;
    },
    submitProperties(values) {
      const keyValuePair = Object.entries(values);
      const resultsArray = keyValuePair.map((keyValue) => keyValue[1])
      this.$emit("submitFormProperties", resultsArray);
    },
  },
};
</script>

<style lang="scss"  scoped>
@import "src/assets/scss/base-form-generator.scss";
</style>