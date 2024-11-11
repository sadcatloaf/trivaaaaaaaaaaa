export class Questions {
    constructor(data) {
        this.type = data.type
        this.difficulty = data.difficulty
        this.category = data.category
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswer = data.incorrect_answer
    }

    get Card() {
        return `
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="card-body text-center">
            <h4> ${this.category}</h4>
            <p class="text-start">${this.difficulty}</p>
            <div class="text-primary"> ${this.question} </div>
            
            </div>
          </div>
        </div>
      `
    }
}