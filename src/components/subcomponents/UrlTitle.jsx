import React from 'react'
import { HStack, Link } from '@chakra-ui/react'

const UrlTitle = ({ title }) => {
  return (
    <HStack
  >
    <Link variant="urlTitle" to="#" ml="3">
      {title}
    </Link>
  </HStack>
  )
}

export default UrlTitle