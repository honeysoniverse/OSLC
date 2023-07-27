# Folder structure

For this project we decided on the following folder structure:

## ROOT level

- docs | Documentation for the project, mostly technical
- public | The public html folder
- src | The main folder where all the JavaScript files are located

## SRC level

Inside the /src folder we will follow some additional patterns for the folders and files. The main
folders inside the /src folder are:

- components
  - icons
     - All needed SVG Icons imported as JSX

  - iframe 
    - UiPreview.jsx (Large Preview iframe for RM-tool)
    - SmallUiPreview.jsx (Small Preview iframe)
    - SearchPreview.jsx (Search Preview iframe)
  
  - subcomponents
    - Table
      - TableBody.jsx
      - TableHeader.jsx
    -tagssection
      - TagsSectionProperties.jsx
      - TagsSectionValues.jsx
    -DataList.jsx
    -DescriptionBody.jsx
    -Header.jsx
    -Pagination.jsx
    -RelationsSectionProperties.jsx
    -SearchSectionTitle.jsx
    -SectionTitle.jsx
    UrlTitle.jsx

    - wrappers
      - container
        - Container.jsx
        - ContainerBody.jsx
      -SectionBody.jsx

  - SearchBar.jsx | Component for searching requirements

- store | Zustand stores 

- theme | Theme properties for Chakra UI
  - components
    - link | custom properties for link variants
    - text | custom properties for text variants
  -index.js | importing all custom component styles as well as declaring global styles

## Rules & Guidelines
