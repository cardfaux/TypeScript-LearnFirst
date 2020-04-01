/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { StartGame } from './StartGame';

export class StartMath {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLDivElement;
  startScreenButton: HTMLButtonElement;
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
    this.element.id = 'math-game';

    this.startScreenButton = this.element.querySelector(
      '#start-button'
    ) as HTMLButtonElement;

    this.configure();
    this.renderContent();
  }

  private startScreen(): void {
    this.element.remove();
    new StartGame();
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
