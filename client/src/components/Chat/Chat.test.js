import {screen,render} from "@testing-library/react";


import {Chat} from "../Chat/Chat";

describe("Chat component" ,()=>{
    it("should be render in chat component correctly",()=>{
        render(<Chat />)
        const element = screen.findByRole("container");
        expect(element).toBeInTheDocument();
    });
});

