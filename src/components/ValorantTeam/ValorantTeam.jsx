import React from "react";
import { Link } from "react-router-dom";
import "../ValorantTeam/ValorantTeam.css"

export default function ValorantTeam() {

    return (
            <div className="playercards">
            <h3>Valorant</h3>
                <div className="containers">
                    <div className="container">
                        <div className="overlay">
                            <div className="items"></div>
                            <div className="items head">
                                <p>Enmanuel 'Drak' Dominguez</p>
                            </div>
                            <div className="items data">
                                <p className="game">Valorant Player</p>
                                <p className="rol">Flex</p>
                            </div>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="overlay">
                            <div className="items"></div>
                            <div className="items head">
                                <p>Samuel 'Superajke' Arango</p>
                            </div>
                            <div className="items data">
                                <p className="game">Valorant Player</p>
                                <p className="rol">Duelista</p>
                            </div>
                        </div>
                    </div>
                    <div className="container3">
                        <div className="overlay">
                            <div className="items"></div>
                            <div className="items head">
                                <p>Alejandro 'Panko' Franco</p>
                            </div>
                            <div className="items data">
                                <p className="game">Valorant Player</p>
                                <p className="rol">Smoker</p>
                            </div>
                        </div>
                    </div>
                    <div className="container4">
                        <div className="overlay">
                            <div className="items"></div>
                            <div className="items head">
                                <p>Marlon 'Scriptz' García</p>
                            </div>
                            <div className="items data">
                                <p className="game">Valorant Player</p>
                                <p className="rol">Centinela</p>
                            </div>
                        </div>
                    </div>
                    <div className="container5">
                        <div className="overlay">
                            <div className="items"></div>
                            <div className="items head">
                                <p>Dylan 'Psylan' López</p>
                            </div>
                            <div className="items data">
                                <p className="game">Valorant Player</p>
                                <p className="rol">Iniciador</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
