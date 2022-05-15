var editor = ace.edit("editor");
//editor.setTheme("ace/theme/monokai");
editor.setFontSize(14);
editor.getSession().setMode("ace/mode/python");
editor.getSession().setTabSize(4);
editor.$blockScrolling = Infinity;