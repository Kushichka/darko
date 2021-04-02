import React from "react";
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header>
          <img className="logo" src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo" />
      </header>
        <nav>
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Message</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#"> ettings</a>
            </div>
        </nav>
        <div className="content">
            <div>
                <img className="content-img" src="https://fregataero.ru/images/tours/tours/2594.jpg" alt="image" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
