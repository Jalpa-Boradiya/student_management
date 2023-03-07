import { render, screen, queryByAttribute, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Punch from "../screen/punch/Punch";

let props = {
    setModal: jest.fn(),
    data: {
        _id: '12'
    }
}

let status = JSON.parse(localStorage.getItem('checkinout'))
let userId = props.data._id

describe('Punch', () => {
    test('should render Punch', () => {
        const onChange = jest.fn();
        const { asFragment } = props?.data ? render(<Punch props={props} onChange={onChange} />) : render(<Punch />);
        expect(asFragment()).toMatchSnapshot();
    })


    test('should have a select field and render without error', () => {
        const dom = render(<Punch />);
        const getById = queryByAttribute.bind(null, 'id');
        const selectCal = getById(dom.container, 'select-punch');
        expect(selectCal).toBeInTheDocument();

        const inputEl = screen.getByTestId("select-site");
        expect(inputEl).toBeDefined();
        expect(inputEl).not.toBeNull();

        const placeholder = screen.getByText('Select site');
        expect(placeholder).toBeTruthy();

    }),

        test('sholud input field and render without error', () => {
            render(<Punch />)
            const remark = screen.getByTestId("input-remark");
            userEvent.type(remark, "onDuty");

            expect(remark).toHaveValue("onDuty");
        }),

        test('should allow user to submit their credential', () => {
            const submit = jest.fn();
            status = status == undefined && status == null ? true : status

            render(<Punch status={status} submit={submit} userId={userId} />)
            status ? screen.getByText('Check/In') : screen.getByText('Check/Out');
            /* pending for api call */ 
        })
})