import React, { useEffect } from 'react'
import logoPrefeitura from '../../assets/logo-prefeitura-horizontal.png'

import './Header.css'

const Header = () => {

    useEffect(() => {
        const menu = document.querySelector(".open-menu");
        const regularHeader = document.querySelector("#regular-header");
        const openHeader = document.querySelector("#open-header");
        const container = document.querySelectorAll(".container");
        const darkSide = document.querySelector(".dark-side")

        const input = document.querySelectorAll(".dark-input");

        const openMenu = () => {
            darkSide.classList.remove('hide');
            menu.style.left = '0';
            regularHeader.classList.add('hide');
            openHeader.classList.remove('hide');
            input.forEach(e => {
                e.classList.add('dark-mode');
            })
            container.forEach(e => {
                e.classList.add('dark-mode');
            });
        }

        const closeMenu = () => {
            darkSide.classList.add('hide');
            openHeader.classList.add('hide');
            regularHeader.classList.remove('hide');
            input.forEach(e => {
                e.classList.remove('dark-mode');
            })
            container.forEach(e => {
                e.classList.remove('dark-mode');
            });
            menu.style.left = '-70%';
        }

        const changeResolution = () => {
            openHeader.classList.add('hide');
            regularHeader.classList.remove('hide');
            input.forEach(e => {
                e.classList.remove('dark-mode');
            })
            container.forEach(e => {
                e.classList.remove('dark-mode');
            })
            menu.style.left = '-70%';
        }

        window.addEventListener("resize", changeResolution);
        document.body.addEventListener("scroll", closeMenu);
        document.querySelector("#open").addEventListener("click", openMenu);
        document.querySelector("#close").addEventListener("click", closeMenu);
    }, [])

    return (
        <>
            <header id="regular-header">
                <i class='bx bx-menu menu-button' id='open'></i>
                <img src={logoPrefeitura} alt="" />
            </header>

            <div class="open-header">
                <header id="open-header" class="hide">
                    <i class='bx bx-left-arrow-alt menu-button' id='close' onclick="closeMenu()"></i>
                    <img src={logoPrefeitura} alt="" />
                </header>
                <div class="open-menu">
                    <div class="top-open-menu">
                        <a href="/">
                            <section class="open-menu-options">
                                <i class='bx bx-home-alt'></i>
                                <p>Início</p>
                            </section>
                        </a>
                        <section class="open-menu-options">
                            <i class='bx bx-info-circle' ></i>
                            <p>Sobre nós</p>
                        </section>
                        <a href="pages/jogos.html">
                            <section class="open-menu-options">
                                <i class='bx bx-joystick' ></i>
                                <p>Jogos</p>
                            </section>
                        </a>
                        <a href="pages/noticias.html">
                            <section class="open-menu-options">
                                <i class='bx bx-news' ></i>
                                <p>Notícias</p>
                            </section>
                        </a>
                    </div>

                    <a href="./pages/login.html">
                        <section class="open-menu-options user">
                            <i class='bx bx-user-circle' ></i>
                            <p>Perfil</p>
                        </section>
                    </a>

                </div>
                <div class="dark-side hide" onclick="closeMenu()"></div>
            </div>
        </>
    )
}

export default Header