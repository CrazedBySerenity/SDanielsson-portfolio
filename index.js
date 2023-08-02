const shadowIntensity = 1;
const directionIntensity = 0.1;
const spreadIntensity = 0.4;

const shadowColor = "228, 218, 199";

const maxShadow = 1000;

let mousePos = {x: undefined, y:undefined};

const lightedObjects = document.getElementsByClassName("isLighted");

window.addEventListener("mousemove", (event) => {
    mousePos = {x: event.clientX, y: event.clientY};
    //console.log(mousePos.x + " " + mousePos.y);

    for(let i = 0; i < lightedObjects.length; i++){
        let rect = lightedObjects[i].getBoundingClientRect();
        const pos = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2};

        let direction = {x: (pos.x - mousePos.x), y: (pos.y - mousePos.y)};  
        let intensity =  (1 - 
            Math.sqrt(Math.pow(direction.x, 2) + Math.pow(direction.y, 2))
            / Math.sqrt(Math.pow(screen.width, 2) + Math.pow((screen.height), 2)))
            * shadowIntensity;
            let spread = Math.sqrt(Math.pow(direction.x, 2) + Math.pow(direction.y, 2))
                * spreadIntensity
            - 40;

        if(i === 1)console.log(intensity);

        if(direction.x > maxShadow) direction.x = maxShadow;
        if(direction.y > maxShadow) direction.y = maxShadow;
        if(direction.x < -maxShadow) direction.x = -maxShadow;
        if(direction.y < -maxShadow) direction.y = -maxShadow;
    
        lightedObjects[i].style.boxShadow = `
        ${direction.x}px ${direction.y}px ${10 * intensity * shadowIntensity * 0.6}px ${spread}px rgba(${shadowColor}, ${intensity * 0.6}), 
        ${direction.x}px ${direction.y}px ${60 * intensity * shadowIntensity * 0.75}px ${spread}px rgba(${shadowColor}, ${intensity * 0.75}), 
        ${direction.x}px ${direction.y}px ${120 * intensity * shadowIntensity * 1}px ${spread}px rgba(${shadowColor}, ${intensity * 1})`;

        lightedObjects[i].style.visibility = 'visible';
    }
});

console.log(lightedObjects);