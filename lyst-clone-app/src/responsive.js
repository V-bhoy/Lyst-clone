import {css} from 'styled-components'

export const desktop = (props)=>{
    return css`
       @media only screen and (min-width: 768px) and (max-width: 1200px){
          ${props}
       };
    `;
}
export const tablet = (props)=>{
    return css`
       @media only screen and (min-width: 576px) and (max-width: 768px){
          ${props}
       };
    `;
}
export const mobile = (props)=>{
    return css`
       @media only screen and (max-width: 575px){
          ${props}
       };
    `;
}