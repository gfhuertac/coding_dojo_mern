import React from 'react';

import StyledDiv from './StyledDiv';

const Word = (props) => {

    const colors = props['*'].split('/');
    const [ bgColor, textColor ] = colors;
    const { word } = props;

    const message = isNaN(word) ? 'The word is' : 'The number is';

    return (
        <StyledDiv bgColor={bgColor} textColor={textColor}>
            {message}: {word}
        </StyledDiv>
    );

};

export default Word;