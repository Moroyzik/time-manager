import { memo } from 'react'
import { IProps } from './Button.types'
import { StyledButton } from './Button.styles'



export const Button = memo(({ children, width, height }: IProps) => {
    return <StyledButton width={width} height={height}>{children}</StyledButton>
})
