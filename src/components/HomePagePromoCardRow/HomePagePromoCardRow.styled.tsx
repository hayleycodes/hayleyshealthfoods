import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { gradients } from '../styling/gradients'
import { margins } from '../styling/margin'

export const StyledPromoCardRow = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '60vh',
    margin: `${calcRem(20)} -${margins.bodyLeftRightMargin.sm}`,
    background: gradients.primary_to_accent,
})
