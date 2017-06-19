// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

<script src="https://surveyjs.azureedge.net/0.12.17/survey.react.min.js"></script>

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as Survey from 'survey-react';
Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var myCss = {
    navigationButton: "button btn-lg"
};

var surveyJSON = {
                   pages: [
                    {
                     name: "page1",
                     elements: [
                      {
                       type: "text",
                       name: "nombre",
                       title: "Ingresa el nombre y apellido",
                       placeHolder: "Nombres y apellidos"
                      },
                      {
                       type: "text",
                       name: "telefono",
                       title: "Ingresa el número de teléfono",
                       inputType: "number",
                       placeHolder: "Teléfono"
                      },
                      {
                       type: "text",
                       name: "email",
                       title: "Ingresa el correo electrónico",
                       inputType: "email",
                       placeHolder: "Email"
                      },
                      {
                       type: "dropdown",
                       choices: [
                        {
                         value: "casa",
                         text: "Casa"
                        },
                        {
                         value: "apartamento",
                         text: "Apartamento"
                        }
                       ],
                       name: "tipoVivienda",
                       optionsCaption: "Seleccione una ...",
                       title: "Casa / Apartamento"
                      },
                      {
                       type: "dropdown",
                       choices: [
                        {
                         value: "mixco",
                         text: "Mixco"
                        },
                        {
                         value: "villa_nueva",
                         text: "Villa Nueva"
                        },
                        {
                         value: "zona_18",
                         text: "Zona 18"
                        }
                       ],
                       name: "ubicacion",
                       optionsCaption: "Seleccione una ...",
                       title: "Ubicación de su interés"
                      },
                      {
                       type: "dropdown",
                       choices: [
                        {
                         value: "vendedor",
                         text: "Carlos Ramírez"
                        },
                        {
                         value: "vendedor1",
                         text: "Pedro Picapiedra"
                        },
                        {
                         value: "vendedor2",
                         text: "Jimmy Morales"
                        }
                       ],
                       name: "vendedor",
                       optionsCaption: "Seleccione una ...",
                       title: "Vendedor asignado"
                      }
                     ]
                    }
                   ],
                   title: "Expocasa Junio 2017"
                 };


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Survey.Survey json={ surveyJSON } css={myCss} onComplete={ sendDataToServer }/>,
    document.getElementById("surveyContainer"))
})
