import {NavBar} from "./components/NavBar.jsx";
import {useState} from "react";
import {apiNode} from "./providers/apiNode.js";

export const MDtoHtmlApp = () => {
    const [markdown, setMarkdown] = useState('')
    const [html, setHtml] = useState('')

    const handleInputChange = ({ target }) => {
        setMarkdown(target.value)
    }

    const handleConvert = async () => {
        const newHtml =await apiNode(markdown);
        setHtml(newHtml.html)
    }

    return(
        <>
            <NavBar />
            <div className="flex mx-5 gap-4 h-600">
                <div className="w-1/2  border border-gray-400 rounded-lg text-center">
                    <h1>Markdown</h1>
                    <textarea
                        value={markdown}
                        onChange={handleInputChange}
                        className="h-64 w-4/5 border border-blue-600 m-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div className="w-1/2 border border-gray-400 rounded-lg text-center">
                    <h1>HTML</h1>
                    <div className='border border-blue-600  m-4'>
                        {html}
                    </div>
                    <div className="border border-orange-500  m-4">
                        <div dangerouslySetInnerHTML={{ __html: html }}></div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <button
                    onClick={handleConvert}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Convert
                </button>
            </div>
            <div className='container mx-auto mb-10'>
                <p className="text-center mt-5">Estilos realizados</p>
                h1,h2,h3 : # <br/>
                ul,li : - <br/>
                pre,code: ``` <br/>
                This is [an example](http://example.com/ "Title") inline link. <br/>
                ![Texto Alternativo](https://imgv3.fotor.com/images/cover-photo-image/ai-generate-dragon-from-text-in-Fotor-AI-image-generator.jpg) <br/>
            </div>
        </>
    )
}