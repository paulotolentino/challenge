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
                <img alt="localização" src={Localizacao} />
                <span className="city"> Campinas</span><br />
                <span className="date"> Quin, 10 de outubro de 2019</span>
            </div>
            <div className="col-md-6">
                <span className="temp"> <img alt="temperatura máxima" src={Maxima} className="term"/> Max. 26</span>
                <span className="temp"> <img alt="temperatura mínima" src={Minima} className="term"/> Min. 15</span>
            </div>
            

        </div>

        <div className="divTop row">
            <div className="col-md-6">
                <img alt="temperatura média" src={Media} />
                <span className="temperatura"> 23</span><br />
                <span className="sensacao"> Sensação térmica 22</span>
            </div>
            <div className="col-md-6">
                <img alt="nublado" src={Nublado} className="clima"/><br />
                <span className="nub"> Nublado</span>
            </div>
        </div>

        <div className="divTop row">
            <div className="col-md-4">
                <img alt="umidade" className="icone" src={Umidade} />
                <span className="peq"> Umidade</span>
                <span className="peq2"> 66%</span>
            </div>
            <div className="col-md-4">
                <img alt="velocidade do vento" className="icone" src={Velocidade} className="term"/>
                <span className="peq"> Velocidade do vento</span>
                <span className="peq2"> 23km/h</span>
            </div>
            <div className="col-md-4">
                <img alt="direção do vento" className="icone" src={Direcao} className="term"/>
                <span className="peq"> Direção do vento</span>
                <span className="peq2"> Min. ND</span>
            </div>
        </div>

    </>
}