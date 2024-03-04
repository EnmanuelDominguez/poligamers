import React from "react";
import { Link } from "react-router-dom";
import "../LolTeam/LolTeam.css";

export default function LolTeam() {

    return (
            <div className="playercards">
            <h3>League of Legends</h3>
                <div className="containers">
                    <div className="containerlol">
                        <div className="overlay">
                            <div className="items"></div>
                            <div className="items head">
                                <p>Sebastían 'SiriuZ' Callejas</p>
                            </div>
                            <div className="items data">
                                <p className="game">Rammus Player</p>
                                <p className="rol">Rammus</p>
                            </div>
                        </div>
                    </div>
                    <div className="containerlol2">
                        <div className="overlay">
                            <div className="items"></div>
                            <div className="items head">
                                <p>Juan 'Kano' Vergara</p>
                            </div>
                            <div className="items data">
                                <p className="game">LoL Player</p>
                                <p className="rol">Soporte</p>
                            </div>
                        </div>
                    </div>
                    <div className="containerlol3">
                        <div className="overlay">
                            <div className="items"></div>
                            <div className="items head">
                                <p>Juan 'Jaoqui' Osorio</p>
                            </div>
                            <div className="items data">
                                <p className="game">LoL Player</p>
                                <p className="rol">ADCarry</p>
                            </div>
                        </div>
                    </div>
                    <div className="containerlol4">
                        <div className="overlay">
                            <div className="items"></div>
                            <div className="items head">
                                <p>Mateo 'Frost' Mosquera</p>
                            </div>
                            <div className="items data">
                                <p className="game">LoL Player</p>
                                <p className="rol">Top Lane</p>
                            </div>
                        </div>
                    </div>
                    <div className="containerlol5">
                        <div className="overlay">
                            <div className="items"></div>
                            <div className="items head">
                                <p>Cristian 'Luci' Pelaez</p>
                            </div>
                            <div className="items data">
                                <p className="game">LoL Player</p>
                                <p className="rol">Mid Lane</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
