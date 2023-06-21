import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API_KEY} from '../../API/index';
import {Link} from "react-router-dom";
import Slider from "react-slick";

const Actor = ({id}) => {
    const [actors, setActors] = useState([]);
    const getActors = (key) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`)
            .then((res) => setActors(res.data.cast)).catch((error) => console.log(error));
    };
    useEffect(() => {
        getActors(API_KEY);
    }, []);
    console.log(actors);
    const settings = {
        dots: true, infinite: true,
        slidesToShow: 6, slidesToScroll: 6,
        autoplay: true, speed: 2000,
        autoplaySpeed: 2000, cssEase: "linear"
    };
    return (
        <section id="actor">
            <div className="container">
                <div className="actor">
                    {actors.map(el => (
                        <div className="actor--card"><Link to={`/movie/details/actor/${el.id}`}>
                            {el.profile_path ?
                                <img style={{width: "150px", height: "200px",}}
                                     src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`} alt=""/> :
                                <img width={150} height={200} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dAr4nnYucbZaV3JyyKl_htTZUwmyk-h9fYh33dwBDA&s`} alt=""/>}
                            <h3 className="actor--card__h5">{el.name}</h3></Link>
                        </div>))
                    }
                </div>
            </div>
        </section>
    );
};
export default Actor;