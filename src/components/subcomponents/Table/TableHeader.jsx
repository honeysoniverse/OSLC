import React from 'react'
import { Thead, Tr, Text } from '@chakra-ui/react'

const TableHeader = ({ hdr1, hdr2, hdr3, hdr4 }) => {
  return (
    <Thead>
    <Tr display="flex" width="calc(100vw - 20px)">
      <Text ml="4" flex={1} variant="subHeadingBold">
       {hdr1}
      </Text>
      <Text ml="4" flex={1} variant="subHeadingBold">
        {hdr2}
      </Text>
      <Text ml="4" flex={1} variant="subHeadingBold">
        {hdr3}
      </Text>
      <Text ml="4" flex={1} variant="subHeadingBold">
        {hdr4}
      </Text>
    </Tr>
  </Thead>
  )
}

export default TableHeader