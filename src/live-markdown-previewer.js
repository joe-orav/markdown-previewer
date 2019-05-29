const defaultMarkdown = "# Markdown Previewer Example\n" +
                        "## My Sub Heading\n" +
                        "Here is an example of `inline code`\n" +
                        "```\n# This is an example of a code block\nconsole.log('Hello World');\n```\n" +
                        "Here is a list:\n" + 
                        "* Item 1\n* Item 2\n* Item 3" +
                        "\n\nHere's a blockquote:\n" +
                        "> Blockquote\n\n" +
                        "You can make things **bold**\n\n" +
                        "You can even have images:\n\n" +
                        "![Image](https://i.imgur.com/nP0yDKM.jpg)\n\n" +
                        "Learn more about the Markdown language at: " + "[Markdown Language Article](https://en.wikipedia.org/wiki/Markdown)";


class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: defaultMarkdown
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        const styles = {
            width: 600,
            height: 900,
            display: "inline"
        }
        const divStyles = {
            width: 600,
            height: 900,
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
                <div style={divStyles}><textarea id="editor" style={styles} value={this.state.input} onChange={this.handleInputChange} /></div>
                <div id="preview" style={divStyles} dangerouslySetInnerHTML={renderMarkdown(marked(this.state.input))}></div>
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