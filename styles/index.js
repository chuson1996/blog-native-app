/**
 * I want to create this index.js in /styles here because I want to export all components in this folder.
 * 
 * From some other files, you can (currently) import a component from styles like:
 * import { Container } from '../../styles/grid'
 * import { Text } from '../../styles/types'
 * import { red } from '../../styles/variables'
 * 
 * SO MANY LINES....
 * 
 * But if I export all the components in styles/index.js. Like so...
 * I would import theme just from one line.
 * import { Container, Text, red } from '../../styles';
 * 
 * BOOM. Let's try.
 * 
 * Now let's have some variables like colors, font sizes...
 */

export * from './grid';
export * from './types';
export * from './variables';
export * from './form';
