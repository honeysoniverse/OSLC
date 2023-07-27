import React, { useEffect } from 'react';
import {
  Paginator,
  PageGroup,
  Next,
  generatePages,
} from 'chakra-paginator';
import { CgChevronRight } from 'react-icons/cg';
import { Button } from '@chakra-ui/react';

const Pagination = ({
  itemsLength,
  setCurPage,
  setPagesQuantity,
  pagesQuantity,
  setCurItems,
}) => {

  const itemLimit = 5;

  const normalStyles = {
    bg: 'white',
  };

  const activeStyles = {
    bg: '#CDE8F0',
  };

  const handlePageChange = (page) => {
    setCurPage(page - 1);
  };

  useEffect(() => {
    const pagesTotal = Math.ceil(itemsLength / itemLimit);

    setPagesQuantity(pagesTotal);
  }, [itemsLength, setPagesQuantity, setCurItems]);

  return (
    <>
      {pagesQuantity && (
        <Paginator
          onPageChange={handlePageChange}
          pagesQuantity={pagesQuantity}
          normalStyles={normalStyles}
          activeStyles={activeStyles}
          padding="8px"
        >
          <PageGroup>
            {generatePages(pagesQuantity)?.map((page) => {
              return (
                <Button
                  key={`paginator_page_${page}`}
                  page={page}
                  style={{ background: 'black' }}
                  p="16"
                />
              );
            })}
          </PageGroup>
          <Next bg={'white'} fontSize="14px" margin="none" padding="1px 3px">
            <CgChevronRight />
          </Next>
        </Paginator>
      )}
    </>
  );
};

export default Pagination;
