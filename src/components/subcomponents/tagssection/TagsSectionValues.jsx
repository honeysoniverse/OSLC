import React from 'react';
import { HStack, Icon, Text, Divider } from '@chakra-ui/react';

const TagsSectionValues = ({
  Icon1,
  Icon2,
  value1,
  value2,
  Icon3,
  value3,
  Icon4,
  value4,
}) => {
  return (
    <>
      <HStack
        bg={'#FAF7F7'}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        padding="4px 16px"
      >
       { Icon1 && value1 && <HStack flex={1}>
          {Icon1 && <Icon as={Icon1} />}
          <Text variant="value">{value1}</Text>
        </HStack>}
        { Icon2 && value2 && <HStack flex={1}>
          {Icon2 && <Icon as={Icon2} />}
          <Text variant="value">{value2}</Text>
        </HStack>}
        { Icon3 && value3 && <HStack flex={1}>
          {Icon3 && <Icon as={Icon3} />} <Text variant="value">{value3}</Text>
        </HStack>}
        { Icon4 && value4 && <HStack flex={1}>
          {Icon4 && <Icon as={Icon4} />}
          <Text variant="value">{value4}</Text>
        </HStack>}
      </HStack>
      <Divider />
    </>
  );
};

export default TagsSectionValues;
