/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Avenir';
  src: url('/fonts/AvenirNextLTPro-Bold.otf');
  font-weight: 800;
  font-style: normal;
 }
 @font-face {
  font-family: 'Avenir';
  src: url('/fonts/AvenirNextLTPro-Regular.otf');
  font-weight: normal;
  font-style: normal;
 }
 @font-face {
  font-family: 'Avenir';
  src: url('/fonts/AvenirNextLTPro-It.otf');
  font-weight: normal;
  font-style: italic;
 }
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	// --app-height: 100%;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a, a:hover, a:focus, a:active {
	text-decoration: none;
	color: inherit;
}
.simple-keyboard{
	background:rgba(0,0,0,0.0);
  }

  .simple-keyboard.hg-layout-default .hg-button{
	background: #D3D6DA;
	font-family: 'Lato', sans-serif;
	font-weight:bold;
    color: black;
	font-size:bold;
  }
.simple-keyboard.hg-layout-default .hg-button.hg-WRONG{
	background: #3a3a3c;
	color: white;
  }
  .simple-keyboard.hg-layout-default .hg-button.hg-CLOSE{
	background: #c9b458;
	color: white;
  }
  .simple-keyboard.hg-layout-default .hg-button.hg-SUCCESS{
	background: #538d4e;
	color: white;
  }

 .rotate{rotateX(180deg);}

 @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
@keyframes typing {
	from {
	  width: 0
	}
  }
	  
  @keyframes blink {
	50% {
	  border-color: transparent
	}
  }
  
  .custom-shape-divider-top-1652883995 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1652883995 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 143px;
}

.custom-shape-divider-top-1652883995 .shape-fill {
    fill: #FFFFFF;
}
.custom-shape-divider-top-1653755562 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1653755562 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 99px;
}

.custom-shape-divider-top-1653755562 .shape-fill {
  fill: #FFFFFF;
}
.custom-shape-divider-top-1653755823 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}
.custom-shape-divider-bottom-1653755937 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1653755937 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 99px;
}

.custom-shape-divider-bottom-1653755937 .shape-fill {
  fill: #FFFFFF;
}

/** For mobile devices **/
@media (max-width: 767px) {
  .custom-shape-divider-bottom-1653755937 svg {
      width: calc(177% + 1.3px);
      height: 32px;
  }
}
.custom-shape-divider-bottom-1653825745 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1653825745 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 99px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1653825745 .shape-fill {
  fill: #FFFFFF;
}

/** For mobile devices **/
@media (max-width: 767px) {
  .custom-shape-divider-bottom-1653825745 svg {
      width: calc(100% + 1.3px);
      height: 18px;
  }
}

`;
