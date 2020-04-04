window.onload = function()
{
    let hypotenuse = 0;
    let adjacent = 0;
    let opposite = 0;
    let anglerad = 0;

    anglerad = 0.523598775;
    opposite = 5;
    writeToConsole(`angle = ${rad2deg(anglerad)}°<br />`);
    writeToConsole(`opposite = ${opposite}<br />`);
    hypotenuse = opposite / Math.sin(anglerad);
    adjacent = opposite / Math.tan(anglerad);
    writeToConsole(`hypotenuse = ${opposite}/sin(${rad2deg(anglerad)}) = ${hypotenuse}<br />`);
    writeToConsole(`adjacent = ${opposite}/tan(${rad2deg(anglerad)}) = ${adjacent}<br /><br />`);

    anglerad = 0.523598775;
    adjacent = 8.66;
    writeToConsole(`angle = ${rad2deg(anglerad)}°<br />`);
    writeToConsole(`adjacent = ${adjacent}<br />`);
    hypotenuse = adjacent / Math.cos(anglerad);
    opposite = adjacent * Math.tan(anglerad);
    writeToConsole(`hypotenuse = ${adjacent}/cos(${rad2deg(anglerad)}) = ${hypotenuse}<br />`);
    writeToConsole(`opposite = ${adjacent}*tan(${rad2deg(anglerad)}) = ${opposite}<br /><br />`);

    anglerad = 0.523598775;
    hypotenuse = 10;
    writeToConsole(`angle = ${rad2deg(anglerad)}°<br />`);
    writeToConsole(`hypotenuse = ${hypotenuse}<br />`);
    opposite = hypotenuse * Math.sin(anglerad);
    adjacent = hypotenuse * Math.cos(anglerad);
    writeToConsole(`opposite = ${hypotenuse}*sin(${rad2deg(anglerad)}) = ${opposite}<br />`);
    writeToConsole(`adjacent = ${hypotenuse}*cos(${rad2deg(anglerad)}) = ${adjacent}<br /><br />`);

    opposite = 5;
    hypotenuse = 10;
    writeToConsole(`opposite = ${opposite}<br />`);
    writeToConsole(`hypotenuse = ${hypotenuse}<br />`);
    anglerad = Math.asin(opposite/hypotenuse);
    writeToConsole(`angle = asin(${opposite}/${hypotenuse}) = ${rad2deg(anglerad)}°<br /><br />`);

    adjacent = 8.66;
    hypotenuse = 10;
    writeToConsole(`adjacent = ${adjacent}<br />`);
    writeToConsole(`hypotenuse = ${hypotenuse}<br />`);
    anglerad = Math.acos(adjacent/hypotenuse);
    writeToConsole(`angle = acos(${adjacent}/${hypotenuse}) = ${rad2deg(anglerad)}°<br /><br />`);

    opposite = 5;
    adjacent = 8.66;
    writeToConsole(`opposite = ${opposite}<br />`);
    writeToConsole(`adjacent = ${adjacent}<br />`);
    anglerad = Math.atan(opposite/adjacent);
    writeToConsole(`angle = atan(${opposite}/${adjacent}) = ${rad2deg(anglerad)}°<br /><br />`);
}

function deg2rad(degrees)
{
    return degrees / (180 / math.pi);
}

function rad2deg(radians)
{
    return radians * (180 / math.pi);
}
