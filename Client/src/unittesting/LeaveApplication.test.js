import { render, screen } from "@testing-library/react";
import { useLocation, useNavigate } from "react-router-dom";
import LeaveApplication from "../screen/leave/LeaveApplication";
import TestRenderer from 'react-test-renderer';
import Input from "../components/forminput/Input";
import userEvent from "@testing-library/user-event";

let props = {
    isLoading: false,
    onLoding: jest.fn()
}
jest.mock('react-router-dom')
useNavigate.mockReturnValue({
    navigate: jest.fn()
})

let location = useLocation()

describe('LeaveApplication', () => {

    it('should render without crashing', () => {
        const submit = jest.fn()

        render(<LeaveApplication submit={submit} loader={props} />)


        // const number = screen.getByRole("textbox", { type: 'number' })
        // expect(number).toBeInTheDocument();

        const leaveType = screen.getByText("Leave Type:.")
        expect(leaveType).toBeInTheDocument();


        const leaveFrom = screen.getByText("Leave From:.")
        // expect(leaveFrom).toBeInTheDocument();

        const leaveTo = screen.getByText('Leave To:.')
        expect(leaveTo).toBeInTheDocument();

        const reason = screen.getByRole("textbox", { type: 'text' })
        expect(reason).toBeInTheDocument();


        userEvent.type(leaveType, 'One day')
        // userEvent.type(number, '1234567890')
        userEvent.type(leaveFrom, '03/03/2023')
        userEvent.type(leaveTo, '05/03/2023')
        userEvent.type(reason, 'homework')
        const submitButton = screen.getByRole('button', { name: 'Submit Application' })
        /*
            pending for api call 

            expect(submitButton).not.toBeDisabled();
            userEvent.click(submitButton)

            expect(submit).toHaveBeenCalledWith({
                "studentId": '12',
                "leaveType": '',
                "leaveFrom": '',
                "leaveTo": '',
                "reason": "homework"
            })
        */


    });
})