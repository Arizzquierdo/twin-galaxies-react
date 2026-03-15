import { useState } from "react"
import Tetris from "react-tetris-ts"
import Pacman from "pacman-react"
import Pong from "react-pong"

export default function Games() {
    return (
        <>
            <section className="intro-section">
                <nav>
                    <a href="/play-tetris">TETRIS</a>
                    <a href="/play-pacman">PACMAN</a>
                    <a href="/play-pong">PACMAN</a>
                </nav>
            </section>
        </>
    );
}