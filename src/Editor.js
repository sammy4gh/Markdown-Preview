import React from 'react';
import './App.css';
import {FaPencilAlt} from "react-icons/fa";


const Editor = ({input, onChange}) => {

    return(
        <div>
            <h1 className="editor-title">
                <FaPencilAlt/>
                EDITOR
            </h1>
            <textarea id="editor"
                      placeholder={"Input text"}
                      value={input}
                      onChange={onChange}
            >

            </textarea>
        </div>

    );
}

export default Editor;