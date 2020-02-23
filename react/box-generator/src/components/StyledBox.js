import styled from 'styled-components';
 
const StyledBox = styled.div`
    border: 1px solid lightgray;
    background: ${props => props.bgColor};
    width: 100px;
    height: 100px;
    display: inline-block;
`;
 
export default StyledBox;