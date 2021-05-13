import React from 'react';
import './App.css';
import { FaEye } from "react-icons/fa";
import marked from 'marked';
import parse from 'html-react-parser';

const Preview = ({input}) => {

    const renderer = {
        link(href, title, text) {
            return `<a target="_blank" href="${href}">${text}` + '</a>';
        }
    };

//applies the adjusted link
    marked.use({ renderer });

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

