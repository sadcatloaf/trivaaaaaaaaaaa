import { AppState } from "../AppState.js";
import { Questions } from "../models/Trivia.js";



class TriviaService {
    async fetchTrivia() {
        console.time('fetching');
        let response = await fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=hard&type=multiple')
        console.log('2- response', response);
        let data = await response.json()
        console.log('3- data', data);
        const questions = data.results.map(questionsData => new Questions(questionsData))
        console.log('😵😵', questions)
        console.timeEnd('fetching')
        AppState.questions = questions
    }



}


export const triviaService = new TriviaService()