import { render } from "@testing-library/react"
import { unmountComponentAtNode } from "react-dom";
import { Button } from "./Button"

describe('<Button />', () => {
    let container: HTMLButtonElement | null = null;

    beforeEach(() => {
        container = document.createElement('button')
        document.body.appendChild(container);
    })

    afterEach(() => {
        if (container) {
            unmountComponentAtNode(container)
            container.remove()
        }
        container = null
    })

    it('should renders correctly', () => {
        const tree = render(<Button children='hello' />)
        expect(tree).toMatchSnapshot();
    })
  
});