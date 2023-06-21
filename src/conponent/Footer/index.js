import React from 'react';

const Footer = () => {
    return (
        <div id='footer'>
            <div className="container">
                <div className="footer">
                    <div className="footer--logo">
                        <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt="img"/>
                        <button>ВУСТУПИТЬ В СООБЩЕСТВО</button>
                    </div>
                    <div className="footer--link">
                        <h1>ГЛАВНОЕ</h1>
                        <p> <br/>
                        Связаться с нами <br/>
                        Форумы поддержки <br/>
                        API
                        Статус системы</p>
                    </div>
                    <div className="footer--contest">
                        <h1>УЧАСТВУЙТЕ</h1>
                        <p>
                            Библия редакторов <br/>
                        Добавить новый фильм <br/>
                        Добовить новый сериал
                        </p>
                    </div>
                    <div className="footer--community">
                        <h1>СООБЩЕСТВО</h1>
                        <p>
                            Руководства <br/>
                            Обсуждения <br/>
                            Доска почета <br/>
                            Twitter
                        </p>
                    </div>
                    <div className="footer--title">
                        <h1>О ПРАВЕ</h1>
                        <p>
                            Условия ипользовония <br/>
                            API правила ипользовония <br/>
                            Политика конфиденциальости <br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;