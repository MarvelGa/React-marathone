import renderer from 'react-test-renderer';
import App from '../components/App/index.js'

// TODO: Your test need to be here instead of fake tests
describe("should render App Component", () => {
    it("matches the snapshot", () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});