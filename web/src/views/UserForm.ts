export class UserForm {
    constructor(public parent: Element) {}

    eventsMaps(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick,
            'mouseenter:h1': this.onHeaderHover,
        };
    }

    onButtonClick(): void {
        console.log('Button Clicked');
    }
    onHeaderHover(): void {
        console.log('Header Hovered');
    }

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <input />
                <button>Click me</button>
            </div>
        `;
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMaps();
        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');
            //click:button  ,eventName= click, selector = button
            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    render(): void {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);
    }
}
