import styled from "styled-components";

export const ContactListBg = styled.div`
  padding: 40px;
  background-color: lightpink;
  text-align: center;
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const Form = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 790px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FormItem = styled.div`
  margin-bottom: 10px;

  @media screen and (max-width: 790px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CustomLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
`;

export const UnorderList = styled.ul`
  list-style-type: none;
  overflow: auto;
`;
export const EachListItem = styled.li`
  background-color: #9aecf5;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;

export const CustomButton = styled.button`
  background-color: #d993f5;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-weight: 500;
  cursor: pointer;
`;

export const Tally = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const CustomInput = styled.input`
  border-radius: 5px;
  border: none;
`;
export const CustomSelect = styled.select`
  border-radius: 5px;
  border: none;
  width: 165px;
`;
