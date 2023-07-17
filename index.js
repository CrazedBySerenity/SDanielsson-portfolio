const shadowIntensity = .15;
const directionIntensity = 0.7;

const maxShadow = 400;

let mousePos = {x: undefined, y:undefined};

const lightedObjects = document.getElementsByClassName("isLighted");

window.addEventListener("mousemove", (event) => {
    mousePos = {x: event.clientX, y: event.clientY};
    //console.log(mousePos.x + " " + mousePos.y);

    for(let i = 0; i < lightedObjects.length; i++){
        const pos = {
            x: lightedObjects[i].offsetLeft + lightedObjects[i].clientWidth / 2,
            y: lightedObjects[i].offsetTop - lightedObjects[i].clientHeight / 2};
            //Offset bugs slightly with the margin
    
        //let direction = {x: (pos.x - mousePos.x) / Math.abs((pos.x - mousePos.x)), y: (pos.y - mousePos.y) / Math.abs((pos.y - mousePos.y))};
        let direction = {x: (pos.x - mousePos.x), y: (pos.y - mousePos.y)};  
        let intensity =  screen.width - Math.sqrt(Math.pow((pos.x - mousePos.x), 2) + Math.pow((pos.y - mousePos.y), 2));
        intensity = (Math.pow(intensity, 2) / (screen.width * screen.height)) * shadowIntensity;

        if(direction.x > maxShadow) direction.x = maxShadow;
        if(direction.y > maxShadow) direction.y = maxShadow;
        if(direction.x < -maxShadow) direction.x = -maxShadow;
        if(direction.y < -maxShadow) direction.y = -maxShadow;
    
        lightedObjects[i].style.boxShadow = `
        ${direction.x * directionIntensity * 0.2}px ${direction.y * directionIntensity * 0.2}px ${intensity * 0.6 * 1000}px rgba(255, 255, 255, ${intensity * 0.6}), 
        ${direction.x * directionIntensity * 0.6}px ${direction.y * directionIntensity * 0.6}px ${intensity * 0.75 * 1000}px rgba(255, 255, 255, ${intensity * 0.75}), 
        ${direction.x * directionIntensity * 1}px ${direction.y * directionIntensity * 1}px ${intensity * 1 * 1000}px rgba(255, 255, 255, ${intensity * 1})`;
    }
});

console.log(lightedObjects);