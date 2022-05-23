import styled, { keyframes }  from 'styled-components';

const inputHighlighter = keyframes`
   from { background: #5264AE; }
   to 	{ width: 0; background: transparent; }
`;

export const Group = styled.div`
    position:relative; 
    margin-bottom:30px; 
`;

export const StyledInput = styled.input`
    font-size:18px;
    padding: 10px 0px 10px 0px;
    display: block;
    width: 250%;
    justify-content: center;
    border: none;
    border-bottom:1px solid #757575;
    &:focus { 
      outline: none; 
    }
    &:valid ~ .label 		{
      top: -20px;
      font-size: 14px;
      color: ${ ({ color }) => color ? color : '#5264AE' };;
    }
    &:focus ~ .label	{
      top: -20px;
      font-size: 14px;
      color: ${ ({ color }) => color ? color : '#5264AE' };
    }

    &:focus ~ .bar:before {
      width:50%;
    }
    &:focus ~ .bar:after {
      width:50%;
    }
`;

export const Label = styled.div`
    color: #999; 
    font-size:18px;
    font-weight:normal;
    position: absolute;
    pointer-events:none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
`;


/* BOTTOM BARS ================================= */
export const Bar = 	styled.div`
  position: relative; 
  display: block;
  width: 250%;
  &:before 	{
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${ ({ color }) => color ? color : '#5264AE' };
    transition: 0.2s ease all;
    -moz-transition:0.2s ease all;
    -webkit-transition:0.2s ease all;
    left: 50%;
  }
  &:after 	{
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${ ({ color }) => color ? color : '#5264AE' };
    transition: 0.2s ease all;
    -moz-transition:0.2s ease all;
    -webkit-transition:0.2s ease all;
    right: 50%;
  }
`;

/* active state */
// input: focus ~ .bar:before, input:focus ~ .bar:after {
//   width: 50 %;
// }

/* HIGHLIGHTER ================================== */
// if you want the highlight put this in the input
// &:focus ~ .highlight {
//   -webkit - animation:inputHighlighter 0.3s ease;
//   -moz - animation:inputHighlighter 0.3s ease;
//   animation: ${ inputHighlighter } 0.3s ease;
// }
export const Highlight = styled.span`
  position: absolute;
  height: 60%; 
  width: 100px;
  top: 25%; 
  left: 0;
  pointer-events:none;
  opacity: 0.5;
`;

