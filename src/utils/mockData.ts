import QuestionTypes from "src/consts/questionTypes.enum";

export const questions = [
    {
        title: 'What language is your favourite?',
        question_type: QuestionTypes.SINGLE_OPTION,
        is_mandatory: true,
    },
    {
        title: 'What do you like about programming?',
        question_type: QuestionTypes.PLAIN_TEXT,
        is_mandatory: false,
    },
    {
        title: 'How was the assignment?',
        question_type: QuestionTypes.SINGLE_OPTION,
        is_mandatory: true,
    }
];

export const answers = [
    {
        question_id: 1,
        line: 'JavaScript',
        hasOtherOption: false
    },
    {
        question_id: 1,
        line: 'TypeScript',
        hasOtherOption: false
    },
    {
        question_id: 1,
        line: 'CoffeeScript',
        hasOtherOption: false
    },
    {
        question_id: 3,
        line: 'Easy',
        hasOtherOption: false
    },
    {
        question_id: 3,
        line: 'Normal',
        hasOtherOption: false
    },
    {
        question_id: 1,
        line: 'Hard',
        hasOtherOption: false
    },
    {
        question_id: 3,
        line: 'Other',
        hasOtherOption: true
    },
];

export const users = [
    { name: 'Devon Pauwles' },
    { name: 'Lorry Ibson' },
    { name: 'Lisetta Bills' },
    { name: 'Gretta Epner' },
    { name: 'Erika Udall' },
];

export const userAnswers = [
    {
        question_id: 1,
        user_id: 4,
        answer_id: 1,
    },
    {
        question_id: 2,
        user_id: 3,
        free_answer: 'I like programming because it is creative'
    },
];