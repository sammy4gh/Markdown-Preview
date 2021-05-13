import React from 'react';
import './App.css';
import { FaEye } from "react-icons/fa";
import marked from 'marked';


const Preview = ({input}) => {

   
//allows carriage returns to be rendered as breaks
    marked.setOptions({
        breaks: true,
    });

    return (

        <div>
            <h1 className="preview-title">
                <FaEye />
                PREVIEW
            </h1>
        <section id="preview">
            <div className="output">
                <span
                    dangerouslySetInnerHTML={{
                        __html: marked(input)
                    }}>

            </span>
            </div>

        </section>
        </div>
    );
}

export default Preview;

