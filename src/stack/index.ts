class Stack<T> {
  constructor(private elements: T[] = []) {}

  get = () => {
    return this.elements;
  };

  push = (element: T) => {
    return new Stack([...this.elements, element]);
  };

  pop = (amountOfElements: number = 1): { stack: Stack<T>; elements: T[] } => {
    const remainingElements = this.elements.slice();
    const element = remainingElements.pop();
    if (amountOfElements === 1) {
      return {
        stack: new Stack<T>(remainingElements),
        elements: [element],
      };
    }
    const intermediaryResult = new Stack<T>(remainingElements).pop(amountOfElements - 1);
    return {
      elements: [...intermediaryResult.elements, element],
      stack: intermediaryResult.stack,
    };
  };
}

export default Stack;
