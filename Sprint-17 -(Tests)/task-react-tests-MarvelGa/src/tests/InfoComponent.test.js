// TODO: Your test need to be here instead of fake tests
import {render, screen} from '@testing-library/react';
import Info from '../components/Info/index.js'

describe(" tests for Info Component", () => {
    it("matches the snapshot", () => {
        expect(render(<Info/>)).toMatchSnapshot();
    });

    it("should show text content as GitHub User Info ", () => {
        render(<Info/>);
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText('GitHub User Info')).toBeInTheDocument();
    });
});