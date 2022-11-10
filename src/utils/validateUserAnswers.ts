import CreateNewAnswerDto from "../dtos/createNewAnswer.dto";

/**
 * Check if user and question id is are correct integers
 * @param answersDto 
 * @returns 
 */
const validateUserAnswers = (answersDto: CreateNewAnswerDto) => {
    const {user_id, question_id} =  answersDto;
    return user_id && question_id;
}

export default validateUserAnswers;