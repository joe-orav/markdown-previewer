var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkdownEditor = function (_React$Component) {
    _inherits(MarkdownEditor, _React$Component);

    function MarkdownEditor() {
        _classCallCheck(this, MarkdownEditor);

        return _possibleConstructorReturn(this, (MarkdownEditor.__proto__ || Object.getPrototypeOf(MarkdownEditor)).apply(this, arguments));
    }

    _createClass(MarkdownEditor, [{
        key: "render",
        value: function render() {
            var styles = {
                width: 600,
                height: 500,
                display: "inline"
            };
            var divStyles = {
                width: 600,
                height: 500,
                border: "1px solid black",
                display: "inline-block",
                verticalAlign: "top"
            };

            marked.setOptions({
                sanitize: true,
                headerIds: false
            });

            return React.createElement(
                "div",
                null,
                React.createElement("textarea", { id: "editor", style: styles }),
                React.createElement("div", { id: "preview", style: divStyles, dangerouslySetInnerHTML: renderMarkdown(marked('# Marked in browser')) })
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

ReactDOM.render(React.createElement(MarkdownEditor, null), document.getElementById("editor-viewer-container"));