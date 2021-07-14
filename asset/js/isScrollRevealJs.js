// initialize
window.sr = ScrollReveal();

sr.reveal('.navbar-brand',{
    duration:3000,
    origin: 'left',
    distance:'30px'
});

sr.reveal('.nav-link',{
    duration:3000,
    origin: 'right',
    distance:'30px'
});

sr.reveal('.landing-text',{
    duration:2000,
    origin: 'top',
    distance:'40px',
    easing:'ease',
    reset:true,
    opacity:0,
    rotate:{
        x:50,
        y:10,
        // z:50
    }
});

sr.reveal('.sub-text',{
    duration:2000,
    origin: 'bottom',
    distance:'30px',
    easing:'ease',
    reset:true,
    delay:1000
});

sr.reveal('.start-btn',{
    duration:2000,
    origin: 'bottom',
    distance:'20px',
    easing:'ease',
    reset:true,
    delay:2000,
    viewFactor:0.3
});

sr.reveal('.abt-h',{
    duration:3000,
    origin: 'bottom',
    distance:'40px',
    easing:'ease',
    viewFactor:0.3,
    reset:true
});

sr.reveal('.abt-img',{
    duration:2000,
    origin: 'left',
    distance:'30px',
    easing:'ease',
    delay:1000,
    reset:true
});

// how it started heading(h3)
sr.reveal('.his-text',{
    duration:3000,
    origin: 'top',
    distance:'30px',
    easing:'ease',
    reset:true
});

sr.reveal('.f-p',{
    duration:3000,
    origin: 'right',
    distance:'40px',
    easing:'ease',
    delay:1000,
    useDelay:'once',
    viewFactor:0.1,
    reset:true
});

sr.reveal('.s-p',{
    duration:3000,
    origin: 'right',
    distance:'40px',
    easing:'ease',
    delay:2000,
    useDelay:'once',
    viewFactor:0.1,
    reset:true

});

sr.reveal('.th-p',{
    duration:3000,
    origin: 'right',
    distance:'40px',
    easing:'ease',
    delay:3000,
    useDelay:'once',
    reset:true
});


