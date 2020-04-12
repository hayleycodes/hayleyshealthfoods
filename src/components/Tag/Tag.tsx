import React from 'react'
import { StyledHeroTagButton, StyledHeroTagLabel } from './Tag.styled'
import { TagObject } from '../../api/recipes/ResponseShapes'
import ReactGA from 'react-ga'

interface TagProps {
    tag: TagObject
    text: string
    classText?: string
    handler?: (reset: boolean, tag: string, scroll: boolean) => void
}

export const Tag: React.FC<TagProps> = ({ text, classText, handler, tag }) => {
    return handler ? (
        <StyledHeroTagButton
            onClick={() => {
                handler(true, tag.shortName, true)
                ReactGA.event({
                    category: 'Recipes',
                    action: `Clicked hero ${tag.name} tag button.`,
                })
            }}
            className={classText ? `${classText} tag-button` : 'tag-button'}
        >
            {text}
        </StyledHeroTagButton>
    ) : (
        <StyledHeroTagLabel className={classText ? classText : ''}>{text}</StyledHeroTagLabel>
    )
}
