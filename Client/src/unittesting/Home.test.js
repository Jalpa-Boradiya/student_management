import renderer, { create } from 'react-test-renderer';
import Home from '../../src/screen/home/Home';
import { render } from '@testing-library/react';

const loader = {
    isLoading: Boolean,
    onLoding: jest.fn(),
    isModal: Boolean,
    setModal: jest.fn(),
    isCalendar: Boolean,
    setCalendar: jest.fn(),
};

describe('Home', () => {
    it('match snapshot', () => {
        const {asFragment} = render(<Home loader={loader} />);
        expect(asFragment).toMatchSnapshot();

    });
})