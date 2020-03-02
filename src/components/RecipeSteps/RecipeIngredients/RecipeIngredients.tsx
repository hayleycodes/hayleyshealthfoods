import React from 'react'

import { IngredientsGraphQLObject, IngredientGraphQLObject } from '../../../api/DefaultObjects'
import { StyledRecipeIngredients } from './RecipeIngredients.styled'
import { StyledHeadingFour } from '../../common/Headings.styled'

interface RecipeIngredientsProps {
    ingredients: IngredientsGraphQLObject[]
}

export class RecipeIngredients extends React.Component<RecipeIngredientsProps> {
    render() {
        const { ingredients } = this.props
        return (
            <StyledRecipeIngredients>
                <StyledHeadingFour>Ingredients</StyledHeadingFour>
                {ingredients.map((ingredient: IngredientsGraphQLObject, index: number) => (
                    <p key={index}>
                        {ingredient.ingredient.name} ({ingredient.quantity}{' '}
                        {ingredient.ingredientUnit ? ingredient.ingredientUnit.shortName : ''})
                    </p>
                ))}
            </StyledRecipeIngredients>
        )
    }
}
