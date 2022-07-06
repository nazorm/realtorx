import styled from 'styled-components';


interface IButton {
    content: string,
    className?: string;
}

export const PrimaryButton = ({ content, className }: IButton) => {
    return (
        <PrimaryBtn>
            {content}
        </PrimaryBtn>
    )
}

export const TransparentButton = ({ content, className }: IButton) => {
    return (
        <TranparentBtn >
            {content}
        </TranparentBtn>
    )
}
export const PrimaryBtn = styled.button`
       border-radius: 4px;
        margin-right: 20px;
        border: transparent;
        font-weight: bold;
        padding: 5px 20px;
        background-color: #3232a7;
        border: 2px solid #3232a7;
      color: white;
`;
const TranparentBtn = styled(PrimaryBtn)`
    color:  #3232a7;
    border: 2px solid #3232a7;
    background-color: white;
    :hover{
      background-color: #3232a7;
      color: white;
    }
`;