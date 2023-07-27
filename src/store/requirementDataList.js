import React from 'react';

import create from 'zustand';
import vanillaCreate from 'zustand/vanilla';
import { persist } from 'zustand/middleware';

const initialData = {
  dataList:[]
}

export const requirementDataList = vanillaCreate((setState, getState) => ({
      ...initialData,
      addRequirement: (requirementData) =>
        setState((state) => {
          const currentState = state.dataList;
          currentState.push(requirementData);
          return { dataList: currentState };
        }),
      getValues: () => getState(),
    }),

    {
      name: 'requirements_store',
    }
  )

export const useRequirementsStore = create(requirementDataList);
