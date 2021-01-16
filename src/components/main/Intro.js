import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Intro = (props) => {
  const { auth } = props;
  return (
    <div className="container">
      <div className="introContent">
        <section>
          <img src="https://i.ibb.co/F8xdk05/undraw-donut-love-kau1.png" alt="about_img" />
          <div>
            <h1>Добро пожаловать</h1>
            <p>Делюсь интересным и полезным контентом.</p>
          </div>
        </section>
        {!auth.uid ? (
          <section>
            <Link to="signUp" className="btn louvColor">
              Зарегаться
            </Link>
            <Link to="signIn" className="btn louvColor">
              Войти
            </Link>
          </section>
        ) : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Intro);
