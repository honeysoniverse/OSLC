import React from 'react'
import { HStack, Text } from '@chakra-ui/react'

const RelationsSectionProperties = ({prop1, prop2, prop3}) => {
  return (
    <HStack
    bg={"#FAF7F7"}
    width="100%"
    display="flex"
    alignItems="center"
    justifyContent="flex-start"
    padding="4px 16px"
  >
    <Text flex={1} variant="subHeadingBold">
      {prop1}
    </Text>
    <Text flex={1} variant="subHeadingBold">
      {prop2}
    </Text>
    <Text flex={1} variant="subHeadingBold">
      {prop3}
    </Text>
  </HStack>  )
}

export default RelationsSectionProperties