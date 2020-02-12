import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText(prevValue => ({ ...prevValue, [name]: value }));
  }

  function handleClick() {
    setExpand(true);
  }

  return (
    <div onClick={handleClick}>
      <form className="create-note" autoComplete="off">
        <input
          type="text"
          onChange={handleChange}
          value={inputText.title}
          name="title"
          placeholder="Title"
        />
        {expand && (
          <textarea
            name="content"
            onChange={handleChange}
            id=""
            cols="30"
            rows="3"
            value={inputText.content}
            placeholder="Take a note ..."
          />
        )}
        {expand && (
          <Zoom in={true}>
            <Fab
              onClick={event => {
                props.addNotes(inputText);
                setInputText({
                  title: "",
                  content: ""
                });
                event.preventDefault();
              }}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
