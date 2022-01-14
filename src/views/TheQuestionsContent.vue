<template>
  <div>
    <button class="go__back-button" @click="$router.go(-1)">Go Back</button>
    <base-form-generator
      :schema="examSchema"
      @submit-form-properties="submitProperties"
    />
  </div>
</template>

<script>
import * as Yup from "yup";
import BaseFormGenerator from "@/components/BaseQuestionFormGenerator";
export default {
  name: "TheQuestionsContent",
  components: {
    BaseFormGenerator,
  },
  data() {
    return {
      examSchema: [
        {
          type: "radio",
          name: "one",
          question:
            "Informatsiya so'zi lotinchadan qaysi so'zdan olingan ?",
          answers: [
            {
              text: "informatio",
              id: 0,
            },
            {
              text: "Inform",
              id: 1,
            },
            {
              text: "Formatika",
              id: 2,
            },
          ],
          rules: Yup.string().required(),
        },
        {
          type: "checkbox",
          name: "two",
          question: "How to add a Checkboxes question to your survey:",
          answers: [
            {
              id: 0,
              text: "Go to the Design survey section.",
            },
            {
              id: 1,
              text: "From the Builder section, choose Checkboxes",
            },
            {
              id: 3,
              text: "Enter the question and answer text",
            },
            {
              id: 4,
              text: "(Optional) Set up any additional options or settings",
            },
          ],
          rules: Yup.array().required(),
        },
        {
          type: "text",
          name: "three",
          question: "Familiya va Ismingizni yozib qoldiring:",
          answers: null,
          rules: Yup.string().required(),
        },
      ],
    };
  },
  methods: {
    submitProperties(userAnswers) {
      /* Right Answer Key 
            1 ) => 4 rate 
                2 ) => 5 rate 
                    3 ) => 1 rate 
                        4 ) overall => 10 rate */

      const rightAnswers = [
        {
          result: 1,
          rate: 4,
        },
        {
          result: [0, 3, 4],
          rate: 5,
        },
        {
          result: "sultonov komron",
          rate: 1,
        },
      ];

      let overall = 0;

      const addRate = (rate) => {
        overall += rate;
      };

      userAnswers.forEach((userAnswer, index) => {
        const { result, rate } = rightAnswers[index];

        const primitiveAndEqual =
          (typeof userAnswer === "number" || typeof userAnswer === "string") &&
          userAnswer === result;
        primitiveAndEqual && addRate(rate);

        if (Array.isArray(userAnswer)) {
          const sortedUserAnswer = userAnswer.sort();
          const isRight =
            JSON.stringify(sortedUserAnswer) === JSON.stringify(result);
          isRight && addRate(rate);
        }
      });

      alert(`your overall rate : ${overall}`);
    },
  },
};
</script>
