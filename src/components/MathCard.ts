/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { StartGame } from './StartGame';
import { shuffledQuestion } from '../utils/MathQuestions';

export class StartMath {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLDivElement;
  questionElement: HTMLElement;
  answerButtons: HTMLElement;
  startScreenButton: HTMLButtonElement;
  nextQuestionButton: HTMLButtonElement;
  constructor() {
    this.templateElement = document.getElementById(
      'math-card'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;
    this.questionElement = this.element.querySelector('#question');
    this.answerButtons = this.element.querySelector('#answer-buttons');
    this.element.id = 'math-game';

    this.startScreenButton = this.element.querySelector(
      '#start-button'
    ) as HTMLButtonElement;
    this.nextQuestionButton = this.element.querySelector(
      '#next-question'
    ) as HTMLButtonElement;

    this.nextQuestion();
    this.setNextQuestion();
    this.configure();
    this.renderContent();
  }

  private resetState(): void {
    while (this.answerButtons.firstChild) {
      this.answerButtons.removeChild(this.answerButtons.firstChild);
    }
  }

  currentQuestionIndex = 0;
  private setNextQuestion(): void {
    this.resetState();
    this.showQuestion(shuffledQuestion[this.currentQuestionIndex]);
  }

  private showQuestion(question: any): void {
    this.questionElement.innerText = question.question;
    question.answers.forEach((answer: any) => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('button');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', this.checkAnswer);
      this.answerButtons.appendChild(button);
    });
  }

  private checkAnswer(e: any): void {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    console.log(selectedButton.dataset.correct);
    if (correct) {
      document.body.classList.add('green');
      document.body.classList.remove('black');
    } else {
      document.body.classList.add('black');
      document.body.classList.remove('green');
    }
  }

  private clearClasses(): void {
    document.body.classList.remove('black');
    document.body.classList.remove('green');
  }

  private startScreen(): void {
    this.clearClasses();
    this.element.remove();
    new StartGame();
  }

  private nextQuestion(): void {
    this.nextQuestionButton.addEventListener('click', () => {
      this.currentQuestionIndex++;
      //this.setNextQuestion();
      if (shuffledQuestion.length > this.currentQuestionIndex) {
        this.setNextQuestion();
      } else {
        this.currentQuestionIndex = 0;
      }
    });
  }

  private configure(): void {
    this.startScreenButton.addEventListener(
      'click',
      this.startScreen.bind(this)
    );
  }

  private renderContent(): void {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}
