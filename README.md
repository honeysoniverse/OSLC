- [How to install this App](#how-to-install-this-app)
- [How to use this App](#how-to-use-this-app)
  - [oslc-selector](#oslc-selector)
  - [oslc-preview](#oslc-preview)
- [React Components](#react-components)
  - [ScrollBars](#scrollbars)
  - [Container](#container)
  - [Header](#header)
  - [ContainerBody](#containerbody)
  - [UrlTitle](#UrlTitle)
  - [Collapse](#Collapse)
  - [SectionBody](#SectionBody)
  - [TagsSectionProperties](#TagsSectionProperties)
  - [TagsSectionValues](#TagsSectionValues)
  - [DescriptionBody](#DescriptionBody)
  - [RelationsSectionProperties](#RelationsSectionProperties)
  - [DataList](#DataList)
  - [Table](#Table)
  - [TableContainer](#TableContainer)
  - [TableHeader](#TableHeader)
  - [TableBody](#TableBody)
  - [NOTE](#NOTE)






# How to install this App

npm install --legacy-peer-deps

# How to use this App

1. After cloning this git repository, go the root folder of the repo.
2. run `npm run build` to build the project. This will produce a `dist` with artefacts
3. Copy the `dist` folder to under `/src/main/webapp/static/` of your web project. That is, you will have a number of js/css files under the folder `/src/main/webapp/static/dist/oslc-ui`
4. Add the following dependency to your Java app:

``html
<dependency>
    <groupId>org.eclipse.lyo.server</groupId>
    <artifactId>oslc-ui-model</artifactId>
    <version>4.1.0-SNAPSHOT</version>
</dependency>
```
## oslc-selector

Add the following code to your html page:

```html
 <oslc-selector selection-uri="<%=selectionUri%>" id="oslc-selector-id" fields='<%=fieldsToList%>' no-data-text="No <%=resourceTypeLabel%> found" search-placeholder-text="Search for resources of type: <%=resourceTypeLabel%>" id="root"></oslc-selector>
````

Usage example in a page:

```html
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
        <link rel="stylesheet" href="<c:url value="/static/dist/oslc-ui/styles.css"/>">
    </head>
    <body>
         <oslc-selector selection-uri="<%=selectionUri%>" id="oslc-selector-id" fields='<%=fieldsToList%>' no-data-text="No <%=resourceTypeLabel%> found" search-placeholder-text="Search for resources of type: <%=resourceTypeLabel%>" id="root"></oslc-selector>
        <script src="<c:url value="/static/dist/oslc-ui/main.js"/>" type="module"></script>
    </body>
</html>
```

- Note that `<%= selectionUri %>` is jsp-code that points to the Selection DelegatedUI. You can use any other logic to define this URI.
- Note also that `fields='["oslc:label"]'` can be any list of values from the json result returned.
- Note also that `id="root"` is the id given this custom component which React App uses to render it's SearchBar Component

The selected items can then be retrieved using the [OSLC 3.0 Delegated Dialogs](https://docs.oasis-open-projects.org/oslc-op/core/v3.0/ps01/dialogs.html#client_responsibilities) API.


## oslc-small-preview

```html

`<oslc-small-preview input-data='<%=resourcePreviewDataSet%>' id="oslc-small-preview-id" title="<%=resourceTitle%>"></oslc-small-preview>`

```

- Note that `<%=resourceTitle%>` is jsp-code that passes the Requirement URL Endpoint to the SmallUiPreview Component from where it fetches the requirementData
- Note that `id="oslc-small-preview-id"` shows the SmallUiPreview component where to render it's components.


### oslc-preview

```html

`<oslc-preview input-data='<%=resourcePreviewDataSet%>' id="oslc-preview-id" title="<%=resourceTitle%>"></oslc-preview>`

```

- Note that `<%=resourceTitle%>` is jsp-code that passes the Requirement URL Endpoint to the SmallUiPreview Component from where it fetches the requirementData
- Note that `id="oslc-preview-id"` shows the UiPreview component where to render it's components.

# React Components

There are three Main Components which is used by the Lyo-Adaptor Project:

1. <oslc-selector /> is the custom tag which renders SearchBar Component and displays it as an iframe in the project.

2. <oslc-preview /> is the custom tag which renders UiPreview Component, displays it as an iframe. It is the Large Preview of the data.

3. <oslc-small-preview /> which uses SmallUiPreview component and displays minimal preview of the data.

    ## Scrollbars
    This is the first component to wrap your React component to display a custom scroll bar (The default window scroll bar is disabled by default)

    ## Container
    This is the second Parent component to call after Scrollbars

    ## Header
    Sub Component which is called for UiPreview showing some properties such as Id, Created on, Last Updated date in Large Previews

    ## ContainerBody
    Third Parent Component which wraps the body of the data to be displayed

    ## UrlTitle
    Sub Component which is used by UiPreview/SearchPreview/SmallUiPreview which displays the title Url.
    Example: <UrlTitle title={title} />
    Properties: The Url title data is passed within { }.

    ## SectionTitle
    Sub Component which is used by UiPreview/SmallUiPreview which displays the title of the Section with Section Icon and Button to collapse the said section.
    Example: <SectionTitle
            MainIcon={IconTag}
            title={'Tags'}
            setShow={setShowTags}
            show={showTags}
          />
    Properties: MainIcon: Icon to display in the SectionTitle
                title: Name of the said section
                setShow: useState name which toggles the collapsible button
                show: boolean value which decides whether to collapse section

    ## Collapse
    Another Parent Component to wrap before any section component (example: SectionBody, DescriptionBody, etc) adding Collapsible functionality
    Example:  <Collapse in={showTags} style={{ width: '100%' }}>
                //Section Body and data
                </Collapse>
    Properties: in: A boolean value which is decided by the Collapsible button (setShow useState)
                width: default to 100% for it to cover whole width of the Container

    ## SectionBody
    Component to wrap the data to be display in the Section.
    TagsSectionProperties and TagsSectionValues to be called consecutively.

    ## TagsSectionProperties
    The properties to be display in Tags Section (max 4 properties per Row)

    Example:  <TagsSectionProperties
                prop1={'Assigned By'}
                prop2={'Type'}
                prop3={'Property'}
                prop4={'Property'}
              />

    ## TagsSectionValues
    The values and associated Icon to be display in Tags Section (max 4 values per Row)

    Example:  <TagsSectionValues
                Icon1={IconAssign}
                value1={'Me'}
                Icon2={IconType}
                value2={someIntegerProperty}
                Icon3={IconGroup}
                value3={'value'}
                Icon4={IconGroup}
                value4={'value'}
              />
    
    ## DescriptionBody
    Description text and Image(if any) to be displayed here

    Example:  <DescriptionBody
              description={description}
              src={imgSrc}
              </DescriptionBody>

    Properties: description- description text to be passed 
                src- Image src to be passed

    ## RelationsSectionProperties
    Relations properties to be displayed here

    Example:  <RelationsSectionProperties
                prop1={'Suspect'}
                prop2={'Title'}
                prop3={'Project'}
              />
    Properties: maximum of 3 properties to be passed to the component

    ## DataList
    The data for Relations Section is to be displayed here:

    Example:  <DataList
                list={relations}
                Icon={IconSuspect}
              />
    Properties: list-          The list of items (called Testscripts here) to be listed. It has both testscrips links and title which is being used as Project Title.
                Icon-          Icon component to be displayed alongside the list item
                projectTitle - The name of the project

    
    ## Table
  Parent Table component to be called when creating the table

    ## TableContainer
    Second Parent component to be called after Table component

    ## TableHeader
    Header component for the Table

    Example: <TableHeader hdr1={"Name"} hdr2={"Comment"} hdr3={"Project"} hdr4={"Date"}/>
    Properties: hdr1- header properties to be passed as (max of 4)

    ## TableBody
    This contains the body of the table:

    Example: <TableBody tData={comments}/>
    Properties: tData- table data which is to be iterated upon and to be displayed. It has comments along with Authorname.

    ## NOTE: 

    All custom tags eg. oslc-large-preview, oslc-small-preview, oslc-search-selector are created in index.js.
    
    All the data coming in from the API is parsed and stored in variables. If any new data is to be created, new variables have to be created and passed in as props. 

    



    
    







