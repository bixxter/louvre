import React from 'react';

const Intro = () => {
  return (
    <div className="container">
      <div className="introContent">
        <h1>Что такое Louvre?</h1>
        <p>
          За каждым человеком 21века стоит целый неизведанный мир просмотренного, прослушанного,
          прочитанного контента. Я считаю, что всем этим контентом надо делиться. Нет ничего лучше
          хорошего, информативного и особенно "ВТФ" контента. Именно по этой причине был создан
          Louvre, целью которого является распространение контента в любой форме.
        </p>
        <section>
          <img
            src="https://i.ibb.co/rv2jWzK/undraw-design-inspiration-fmjm.png"
            alt=""
            className="responsive-img"
          />
          <div>
            <h2>МНОГО КРУТОГО КОНТЕНТА В ОДНОМ МЕСТЕ</h2>
            <li>YouTube: Жизнь, полезное, ВАУ и ВТФ контент</li>
            <li>Фильмы: Ревью, сцены и кадры</li>
            <li>Музыка: Годные треки, специальные плейлисты, альбомы и клипы.</li>
            <li>Посты: Опять же жизнь, полезное, ВАУ и ВТФ</li>
          </div>
        </section>
        <section>
          <div>
            <h1>ВОЗМОЖНОСТЬ ОБСУДИТЬ КРУТОЙ КОНТЕНТ</h1>
            <p>
              Если какой-то пост вас удивил, вы всегда можете оставить комментарий. В будущем будем
              возможность отвечать на чужие комменты.
            </p>
          </div>
          <img
            src="https://i.ibb.co/Z2Dn6wX/undraw-real-time-collaboration-c62i.png"
            alt=""
            className="responsive-img"
          />
        </section>
        <section>
          <img
            src="https://i.ibb.co/NsFR5W6/undraw-typewriter-i8xd.png"
            alt=""
            className="responsive-img"
          />
          <div>
            <h1>КОНТЕНТ, КОТОРЫЙ ЗАСТАВЛЯЕТ ЗАДУМАТЬСЯ</h1>
            <p>
              Основной целью создания этого сайта является распространение контента любого вида,
              который вызывает хоть какой-то спектр эмоций
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Intro;
