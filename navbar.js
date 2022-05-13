const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
navbar.render(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="index.html" class="navbar-brand">STP Judge</a>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="index.html" class="nav-link" >トップ</a>
            </li>
            <li class="nav-item">
                <a href="codetest.html" class="nav-link">コードテスト</a>
            </li>
            <li class="nav-item">
                <a href="https://github.com/MogamiTsuchikawa/ShoppingThemeProgram/blob/master/Python/%E5%95%8F%E9%A1%8C%E6%96%87.md" class="nav-link" target="blank">ルール</a>
            </li>
            <li class="nav-item">
            <a href="https://github.com/Chroma7p/OnBrowserJudge" class="nav-link" target="blank">GitHub</a>
            </li>
        </ul >
    </nav>
);