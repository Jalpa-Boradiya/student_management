import { screen ,render, waitFor } from "@testing-library/react";
import LeftCard from "../components/teacher/LeftCard";


test('renders error when API call fails', async () => {
    render(<LeftCard />);
//    const element = screen.getByRole("heading");
    await waitFor(() => expect(screen.getByRole("heading")).toBeInTheDocument(), {
        timeout: 2000,
    });
})