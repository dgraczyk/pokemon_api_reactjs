import React from 'react'
import GenerationCard from './PokemonGenerationType'
import Typography from '@material-ui/core/Typography';

const GenerationContainer = () => {
  return (
    <div>
      <Typography component="h1" variant="h2" align="center" >Pokemon generations:</Typography>
      <GenerationCard generation="I"/>
      <GenerationCard generation="II"/>
      <GenerationCard generation="III"/>
      <GenerationCard generation="IV"/>
      <GenerationCard generation="V"/>
      <GenerationCard generation="VI"/>
      <GenerationCard generation="VII"/>
      <GenerationCard generation="VIII"/>
    </div>
  )
}

export default GenerationContainer
