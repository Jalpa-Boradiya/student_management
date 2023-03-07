import { getAllByAltText, getRoles, render } from "@testing-library/react"
import { useNavigate } from "react-router-dom"
import StudentService from "../components/service/StudentService"
import AttendanceCalendar from "../screen/attendanceCalendar/AttendanceCalendar"
import Punch from "../screen/punch/Punch"
import renderer from 'react-test-renderer';


const props = {
    isCalendar: false,
    isModal: false,
    setModal: jest.fn(),
    setCalendar: jest.fn(),
}
let { isCalendar, isModal } = props
isCalendar = Boolean
isModal = Boolean

jest.mock('react-router-dom')

useNavigate.mockReturnValue({
    navigate: jest.fn()
})

let studentDetail = []

studentDetail = jest.mock('../../src/util/Student')

describe('StudentService', () => {
    const component = studentDetail !== null && studentDetail !== undefined &&
        renderer.create(<StudentService modal={props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    it('isModal is true then render Punch', () => {
        const component = renderer.create(<Punch modal={props} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('isCalendar is true then render AttendanceCalendar', () => {
        const component = renderer.create(<AttendanceCalendar modal={props} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });



})