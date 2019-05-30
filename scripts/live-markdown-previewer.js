var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultMarkdown = "# Markdown Previewer\n" + "## My Sub Heading\n" + "Here is an example of `inline code`\n" + "```\n# This is an example of a code block\nconsole.log('Hello World');\n```\n" + "Here is a list:\n" + "* Item 1\n* Item 2\n* Item 3" + "\n\nHere's a blockquote:\n" + "> Blockquote\n\n" + "You can make things **bold**\n\n" + "You can even have images:\n\n" + "![Image](https://i.imgur.com/nP0yDKM.jpg)\n\n" + "Learn more about the Markdown language at: " + "[Markdown Language Article](https://en.wikipedia.org/wiki/Markdown)";

var MarkdownEditor = function (_React$Component) {
    _inherits(MarkdownEditor, _React$Component);

    function MarkdownEditor(props) {
        _classCallCheck(this, MarkdownEditor);

        var _this = _possibleConstructorReturn(this, (MarkdownEditor.__proto__ || Object.getPrototypeOf(MarkdownEditor)).call(this, props));

        _this.state = {
            input: defaultMarkdown
        };

        _this.handleInputChange = _this.handleInputChange.bind(_this);

        marked.setOptions({
            sanitize: true,
            headerIds: false,
            gfm: true,
            breaks: true,
            xhtml: true
        });
        return _this;
    }

    _createClass(MarkdownEditor, [{
        key: "handleInputChange",
        value: function handleInputChange(event) {
            this.setState({
                input: event.target.value
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "editor-preview-container" },
                React.createElement(
                    "div",
                    { id: "editor-container" },
                    React.createElement("textarea", { id: "editor", value: this.state.input, onChange: this.handleInputChange })
                ),
                React.createElement("div", { id: "preview", dangerouslySetInnerHTML: renderMarkdown(marked(this.state.input)) })
            );
        }
    }]);

    return MarkdownEditor;
}(React.Component);

function renderMarkdown(markdown) {
    return {
        __html: markdown
    };
}

ReactDOM.render(React.createElement(MarkdownEditor, null), document.getElementById("markdown-viewer"));