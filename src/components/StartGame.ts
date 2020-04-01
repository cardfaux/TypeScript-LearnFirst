/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { StartMath } from './MathCard';

export class StartGame {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLDivElement;
  mathButton: HTMLButtonElement;
  wordButton: HTMLButtonElement;
  constructor() {
    this.templateElement = document.getElementById(
      'subject-select'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;
    this.element.id = 'user-selection';

    this.mathButton = this.element.querySelector('#math') as HTMLButtonElement;
    this.wordButton = this.element.querySelector('#words') as HTMLButtonElement;

    this.configure();
    this.renderContent();
  }

  private AddCard(): void {
    new StartMath();
  }

  private mathButtonHandler(): void {
    console.log('MATH');
    this.element.remove();
    this.AddCard();
  }

  private wordButtonHandler(): void {
    console.log('WORD');
  }

  private configure(): void {
    this.mathButton.addEventListener(
      'click',
      this.mathButtonHandler.bind(this)
    );
    this.wordButton.addEventListener('click', this.wordButtonHandler);
  }

  private renderContent(): void {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}
