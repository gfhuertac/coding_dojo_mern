import styled from 'styled-components';
 
const StyledDiv = styled.div`
    color: ${props => props.textColor || 'black'};
    background: ${props => props.bgColor || 'white'};
`;
 
export default StyledDiv;