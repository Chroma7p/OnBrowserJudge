const edt = ReactDOM.createRoot(document.getElementById('editorarea'));
edt.render(
    <div>
    <div id="editor" style="height: 300px;width:600px"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/ace.js"></script>
    <script src="editor.js"></script>
    </div>
);