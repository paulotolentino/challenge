import React from 'react';
import Localizacao from '../img/localizacao.svg';
import Minima from '../img/minima.svg';
import Media from '../img/media.svg';
import Maxima from '../img/maxima.svg';
import Nublado from '../img/nublado.svg';
import Ensolarado from '../img/ensolarado.svg';
import Tempestade from '../img/tempestade.svg';
import Chuvoso from '../img/chuvoso.svg';
import Umidade from '../img/umidade.svg';
import Velocidade from '../img/velocidade_vento.svg';
import Direcao from '../img/direcao_vento.svg';
import '../styles/style.css';

export default function DivTop() {
    return <>
        <div className="divTop row">
            <div className="col-md-6">
                <img alt="localização"src={Localizacao} />
                <span className="city"> Campinas</span><br />
                <span className="date"> Quin, 10 de outubro de 2019</span>
            </div>
            <div className="col-md-6">
                <span className="temp"> <img alt="temperatura máxima"src={Maxima} className="term"/> Max. 26</span>
                <span className="temp"> <img alt="temperatura mínima"src={Minima} className="term"/> Min. 15</span>
            </div>
            

        </div>

        <div className="divTop row">
            <div className="col-md-6">
                <img alt="temperatura média"src={Media} />
                <span className="city"> 23</span><br />
                <span className="date"> Sensação térmica 22</span>
            </div>
            <div className="col-md-6">
                <img alt="nublado" src={Nublado} className="term"/>
                <span className="temp"> Nublado</span>
            </div>
        </div>

        <div className="divTop row">
            <div className="col-md-4">
                <img alt="umidade"src={Umidade} />
                <span className="city"> Campinas</span><br />
                <span className="date"> Umidade</span>
                <span className="date"> 66%</span>
            </div>
            <div className="col-md-4">
                <img alt="velocidade do vento"src={Velocidade} className="term"/>
                <span className="temp"> Velocidade do vento</span>
                <span className="temp"> 23km/h</span>
            </div>
            <div className="col-md-4">
                <img alt="direção do vento"src={Direcao} className="term"/>
                <span className="temp"> Direção do vento</span>
                <span className="temp"> Min. ND</span>
            </div>
        </div>

    </>
}