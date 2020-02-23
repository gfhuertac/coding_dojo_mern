import styled from 'styled-components';
 
const StyledDiv = styled.div`
    text-decoration: ${props => props.decoration || 'none'};
`;
 
export default StyledDiv;