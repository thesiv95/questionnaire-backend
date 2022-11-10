type CreateNewAnswerDto = {
    question_id: number,
    answer_id: number;
    user_id?: number;
    free_answer?: string;
}

export default CreateNewAnswerDto;