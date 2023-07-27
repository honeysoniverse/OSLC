import React, { useState, useEffect, useCallback } from 'react';
import {
  Input,
  HStack,
  VStack,
  Divider,
  Icon,
  Text,
} from '@chakra-ui/react';
import Scrollbars from 'react-custom-scrollbars';
import { FaSearch } from 'react-icons/fa';
import RequirementSearchResult from './iframe/RequirementSearchResult';
import Pagination from './subcomponents/Pagination';
import { Button } from '@chakra-ui/react';

const SearchSelectorUi = () => {
  const [pagesQuantity, setPagesQuantity] = useState(0);
  const [curPage, setCurPage] = useState(0);
  const [value, setValue] = useState('');
  const [apiData, setApiData] = useState(null);

  const [curItems, setCurItems] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = ['Author', 'Approval Date', 'Assigned by', 'Authority'];



  const handleInputChange = (e) => {
    setValue(e.target.value);
    const unLinked = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onSuggestionsSelect = (e) => {
    setFilteredSuggestions([]);
    setValue(`${e.target.innerText}:`);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const onKeyDownHandle = (e) => {
    if (e.keyCode === 13) {
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
      setValue(filteredSuggestions[activeSuggestionIndex]);
    } else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };




  const getData = useCallback(async () => {
    //Api call for fetching requirements
    const response = await fetch(
      `http://localhost:8083/adaptor-rm/services/service1/requirements/selector?terms=${value}`,
      {
        headers: {
          'Content-Type': 'application/x-oslc-compact+xml',
        },
      }
    );
    const data = await response.json();
    setApiData(data['oslc:results']);
  }, [value]);
  

  useEffect(() => {
    value === '' && setApiData(null);
    const offset = curPage * 5;
    const getList = (curPage) => {
      setCurItems(apiData?.slice(offset, offset + 5));
    };
    getList(curPage);
  }, [apiData, curPage, value]);


  return (
    <Scrollbars style={{ width: '100vw', height: '100vh' }}>
      <VStack
      paddingTop={"12px"}
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="auto"
      >
        <HStack>
          <Input
            background="white"
            width="80vw"
            variant="filled"
            margin="auto"
            type="search"
            placeholder="Search on words or tags: status, id, author , date or use the + to find more tags"
            value={value}
            onChange={handleInputChange}
          />
          <Divider orientation="vertical" />
          <Button variant={'outline'} onClick={getData}>
            <Icon as={FaSearch} />
          </Button>
        </HStack>
        {showSuggestions && (
          <VStack
            width="80%"
            padding={"12px"}
            height="auto"
            justifyContent={'flex-start'}
            alignItems="flex-start"
            background="#fff"
          >
            {filteredSuggestions?.map((suggestion) => (
              <Text
                variant={'value'}
                onClick={onSuggestionsSelect}
                cursor={'pointer'}
              >
                {suggestion}
              </Text>
            ))}
          </VStack>
        )}
        {!curItems && <VStack width={"80vw"} position="absolute" top="20" zIndex={"-1"} height="300px" justifyContent={"center"} alignItems="center" background={"#F0F2FA"}>
        <Text variant={"largeTitle"}>You are now searching on requirements in Jira</Text>

        </VStack>}

        {curItems?.map((data, id) => {
          return (
            <>
              <RequirementSearchResult data={data.Label} />
            </>
          );
        })}
        <Divider />
        <HStack padding="18px">
          {value && apiData && apiData.length > 5 && (
            <Pagination
              itemsLength={apiData?.length}
              setCurPage={setCurPage}
              curPage={curPage}
              setPagesQuantity={setPagesQuantity}
              pagesQuantity={pagesQuantity}
              setCurItems={setCurItems}
            />
          )}
        </HStack>
      </VStack>
    </Scrollbars>
  );
};

export default SearchSelectorUi;
