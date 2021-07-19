// initialize
window.sr = ScrollReveal();

// scroll effect for some classes

// for navbar brands
// sr.reveal('.navbar-brand',{
//     duration:3000,
//     origin: 'left',
//     distance:'30px'
// });

// for nav links
// sr.reveal('.nav-link',{
//     duration:3000,
//     origin: 'right',
//     distance:'30px'
// });

// for landing section header
sr.reveal('.text-left',{
    delay:1000,
    duration:2000,
    origin: 'top',
    distance:'40px',
    easing:'ease',
    reset:true,
    opacity:0,
});

// for landing-section paragraph
sr.reveal('.text-justify',{
    delay:2000,
    duration:2000,
    origin: 'bottom',
    distance:'40px',
    easing:'ease',
    reset:true,
    opacity:0,
});

// for get started button
sr.reveal('.g-btn',{
    delay:3000,
    duration:2000,
    origin: 'bottom',
    distance:'40px',
    easing:'ease',
    reset:true,
    opacity:0,
});

// for landing section image
// sr.reveal('.landing-img',{
//     delay:4000,
//     duration:2000,
//     origin: 'right',
//     distance:'40px',
//     easing:'ease',
//     opacity:0,
// });

// for about section header
sr.reveal('.abt-text',{
    duration:2000,
    origin: 'top',
    distance:'40px',
    easing:'ease',
    opacity:0,
    reset:true,
    viewFactor:0.2
});

// for about section paragraph
sr.reveal('.abt-sub-text',{
    duration:2000,
    origin: 'right',
    distance:'40px',
    easing:'ease-in',
    opacity:0,
    reset:true,
});


// for feature boxes
// ease in from left
sr.reveal('.box-l',{
    delay:1000,
    duration:1000,
    origin: 'left',
    distance:'40px',
    easing:'ease-in',
    opacity:0,
    reset:true,
});

// for feature boxes
// ease in from top
sr.reveal('.box-t',{
    delay:1000,
    duration:1000,
    origin: 'top',
    distance:'40px',
    easing:'ease-in',
    opacity:0,
    reset:true,
});

// for feature boxes
// ease in from bottom
sr.reveal('.box-b',{
    delay:2000,
    duration:1000,
    origin: 'bottom',
    distance:'40px',
    easing:'ease-in',
    opacity:0,
    reset:true,
});

// for feature boxes
// ease in from right
sr.reveal('.box-r',{
    delay:3000,
    duration:1000,
    origin: 'right',
    distance:'40px',
    easing:'ease-in',
    opacity:0,
    reset:true,
});