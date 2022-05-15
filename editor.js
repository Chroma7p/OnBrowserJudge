const navbar = ReactDOM.createRoot(document.getElementById('editorarea'));
navbar.render(
    <div>
    <div id="editor" style="height: 300px;width:600px"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/ace.js"></script>
    <script>
        var editor = ace.edit("editor");
        //editor.setTheme("ace/theme/monokai");
        editor.setFontSize(14);
        editor.getSession().setMode("ace/mode/python");
        editor.getSession().setTabSize(4);
        editor.$blockScrolling = Infinity;
    </script>
    </div>
);