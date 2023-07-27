import React from 'react'
import { VStack } from '@chakra-ui/react'

const SectionBody = ({children}) => {
  return (
    <VStack width={"100%"} margin="0" spacing="0">
        {children}
        </VStack>
    )
}

export default SectionBody