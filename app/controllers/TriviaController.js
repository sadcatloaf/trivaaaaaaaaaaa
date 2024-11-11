import { AppState } from "../AppState.js";
import { triviaService } from "../services/TrivaService.js";

export class TriviaController {
    constructor() {
        console.log('⁉️❔❓');
        AppState.on('questions', this.drawQuestions)
        this.fetchQuestions()
    }

    async fetchQuestions() {
        await triviaService.fetchTrivia()
    }

    drawQuestions() {
        console.log('🖌️⁉️❓❔');
        const questionListElm = document.getElementById('Question-List')
        questionListElm.innerHTML = ''
        AppState.questions.forEach(question => questionListElm.innerHTML += question.Card)
    }


}