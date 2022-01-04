import './App.css';

function App() {
    return (
        <>
            {/* header */}
            <section className="homepage-header">
                <div className="App">
                    {/* Navbar */}
                    <div className="homepage-navbar">
                        <div className="navbar-title">
                            <div className="navber-title__short">Jdemy</div>
                        </div>
                        <div className="navbar-btn">
                            <div className="navbar-btn__login">Login</div>
                            <div className="navbar-btn__register">register</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* body */}
            <section className="homepage-body">
                <div className="container">
                    <div className="syllabus">
                        <img
                            src={require('../src/page-4.2.jpg')}
                            alt="syllabus"
                        />
                    </div>
                </div>
            </section>
            {/* footer */}
            <footer></footer>
        </>
    );
}

export default App;
