import { connect } from "frontity";
import React, { useRef } from "react";
import Form from '../../styles/form'
import Input from '../../styles/input'
import Label from '../../styles/label'

const SearchForm = ({ state, actions, libraries }) => {
  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];

  
  // Keep a reference to the input so we can grab it's value on form submission
  const inputRef = useRef();

  const handleSubmit = event => {
    // Prevent page navigation
    event.preventDefault();

    // Get the input's value
    const searchString = inputRef.current.value;

    // If the typed search string is not empty
    // Better to trim write spaces as well
    if (searchString.trim().length > 0) {
      // Let's go search for blogs that match the search string
      actions.router.set(`/?s=${searchString.toLowerCase()}`);

      // Scroll the page to the top
      window.scrollTo(0, 0);

    }
  };

  return (
    <Form role="search" onSubmit={handleSubmit}>
      <Label>
        <Input
          type="search"
          defaultValue={searchQuery}
          ref={inputRef}
        />
      </Label>
      <button type="submit">Search</button>
    </Form>
  );
};

export default connect(SearchForm);


