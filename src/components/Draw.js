import React from 'react'
import { useEffect } from 'react';
import './Draw.css'; // Tell webpack that Button.js uses these styles


export default function Draw() {
    
    // Similaire à componentDidMount et componentDidUpdate :  
    useEffect(() => {    
        const canvas = document.querySelector('.myCanvas');
        const width = canvas.width = window.innerWidth;
        const height = canvas.height = window.innerHeight-85;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = 'rgb(256,256,256)';
        ctx.fillRect(0,0,width,height);

        const colorPicker = document.querySelector('input[type="color"]');
        const sizePicker = document.querySelector('input[type="range"]');
        const output = document.querySelector('.output');
        const clearBtn = document.querySelector('.clearCanvas');
        const changeBckgButton = document.querySelector('.changeBck')

        // covert degrees to radians
        function degToRad(degrees) {
            return degrees * Math.PI / 180;
        };

        // update sizepicker output value
        sizePicker.oninput = function() {
            output.textContent = sizePicker.value;
            console.log(sizePicker.value)
        }

        // store mouse pointer coordinates, and whether the button is pressed
        let curX;
        let curY;
        let pressed = false;

        // update mouse pointer coordinates
        document.onmousemove = function(e) {
            curX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
            curY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
        }

        canvas.onmousedown = function() {
            pressed = true;
        };

        canvas.onmouseup = function() {
            pressed = false;
        }

        clearBtn.onclick = function() {
            ctx.fillStyle = 'rgb(256,256,256)';
            ctx.fillRect(0,0,width,height);
        }

        changeBckgButton.onclick = function() {
            ctx.fillStyle = 'rgb(0,128,64)';
            ctx.fillRect(0,0,width,height);

            console.log("function onClick changeBackground is called !")
        }

        function draw() {
            if(pressed) {
            ctx.fillStyle = colorPicker.value;
            ctx.beginPath();
            console.log("valeur de sizePicker : "+ sizePicker.value)
            //ctx.arc(curX, curY-85, sizePicker.value, degToRad(0), degToRad(360), false);
            console.log(output.textContent)
            ctx.arc(curX+64, curY-85, output.textContent, degToRad(0), degToRad(360), false);

            ctx.fill();
            }

            requestAnimationFrame(draw);
        }

        draw();

});


    return (
        <div>
            <div class="toolbar">
                <input type="color" aria-label="select pen color"></input>
                <input type="range" min="2" max="60" value="20" aria-label="select pen size"></input><span class="output">30</span>
                <button class="clearCanvas">Clear canvas</button>
                <button class="changeBck">Change Background</button>
            </div>

            <canvas class="myCanvas">
                <p>Add suitable fallback here.</p>
            </canvas>

        </div>
    )
}
