class MarkdownEditor extends React.Component {
    render() {
        const styles = {
            width: 600,
            height: 500,
            display: "inline"
        }
        const divStyles = {
            width: 600,
            height: 500,
            border: "1px solid black",
            display: "inline-block",
            verticalAlign: "top"
        }
        
        marked.setOptions({
            sanitize: true,
            headerIds: false  
        });

        return (
            <div>
                <textarea id="editor" style={styles}></textarea>
                <div id="preview" style={divStyles} dangerouslySetInnerHTML={renderMarkdown(marked('# Marked in browser'))}></div>
            </div>
        );
    }
}

function renderMarkdown(markdown) {
    return {
        __html: markdown
    };
}

ReactDOM.render(<MarkdownEditor />, document.getElementById("editor-viewer-container"));