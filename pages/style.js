import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		color: ${(p) => {
			return p.cor ? "black" : "white";
		}};
	}

	background-color: ${(p) => {
		return p.cor ? "white" : "black";
	}};


  button {
    padding: 5px 15px;
    background-color: ${(p) => {
			return p.cor ? "black" : "white";
		}};
    border: none;
    border-radius: 10px;
    color: ${(p) => {
			return p.cor ? "white" : "black";
		}};
  }
`;
