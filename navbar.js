const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
navbar.render(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="index.html" className="navbar-brand">STP Judge</a>
        <ul class="navbar-nav">
            <li className="nav-item">
                <a href="index.html" className="nav-link" >トップ</a>
            </li>
            <li className="nav-item">
                <a href="codetest.html" className="nav-link">コードテスト</a>
            </li>
            <li className="nav-item">
                <a href="https://github.com/MogamiTsuchikawa/ShoppingThemeProgram/blob/master/Python/%E5%95%8F%E9%A1%8C%E6%96%87.md" class="nav-link" target="blank">ルール</a>
            </li>
            <li className="nav-item">
            <a href="https://github.com/Chroma7p/OnBrowserJudge" className="nav-link" target="blank">GitHub</a>
            </li>
        </ul >
    </nav>
);