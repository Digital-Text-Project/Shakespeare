// already present functions from Bootstrap template

window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

// our functions

// function called when user presses "DISCOVER" button of Romeo and Juliet 
// The first thing to be shown is the introduction

function showRomeo() {
    var texts = document.getElementById("texts");
    texts.innerHTML=`
    <div class="container px-4 px-lg-5">
        <div class="content-section-heading text-center">
            <h3 class="text-secondary mb-0">Romeo and Juliet</h3>            
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-4">
                <img src="" class="img-fluid">
            </div>
            <div class="col-lg-7 pt-4 pt-lg-0 content">
                <div class="btn-group">
                    <button onclick="showRomeo()" class="btn btn-lg btn-outline-secondary">Introduction</button>&ensp;
                    <button onclick="showScriptRomeo()" class="btn btn-lg btn-outline-secondary">Script</button>&ensp;
                    <button onclick="showXMLRomeo()" class="btn btn-lg btn-outline-secondary">XML</button>
                </div>
                <br><br>
                <h3>Introduction</h3>
                <br>
                <p>
                In Romeo and Juliet, Shakespeare creates a world of violence and generational conflict in which two young people fall in love and die because of that love. The story is rather extraordinary in that the normal problems faced by young lovers are here so very large. It is not simply that the families of Romeo and Juliet disapprove of the lovers’ affection for each other; rather, the Montagues and the Capulets are on opposite sides in a blood feud and are trying to kill each other on the streets of Verona. Every time a member of one of the two families dies in the fight, his relatives demand the blood of his killer. Because of the feud, if Romeo is discovered with Juliet by her family, he will be killed. Once Romeo is banished, the only way that Juliet can avoid being married to someone else is to take a potion that apparently kills her, so that she is buried with the bodies of her slain relatives. In this violent, death-filled world, the movement of the story from love at first sight to the union of the lovers in death seems almost inevitable.
                <br><br>What is so striking about this play is that despite its extraordinary setting (one perhaps reflecting Elizabethan attitudes about hot-blooded Italians), it has become the quintessential story of young love. Because most young lovers feel that they have to overcome giant obstacles in order to be together, because they feel that they would rather die than be kept apart, and especially because the language that Shakespeare gives his young lovers is so exquisite, allowing them to say to each other just what we would all say to a lover if we only knew how, it is easy to respond to this play as if it were about all young lovers rather than about a particular couple in a very unusual world.
                </p>
            </div>  
        </div>    
    </div>
    `;
}

function showScriptRomeo() {
    var texts = document.getElementById("texts");
    texts.innerHTML=`
    <div class="container px-4 px-lg-5">
        <div class="content-section-heading text-center">
            <h3 class="text-secondary mb-0">Romeo and Juliet</h3>            
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-4">
                <img src="" class="img-fluid">
            </div>
            <div class="col-lg-7 pt-4 pt-lg-0 content">
                <div class="btn-group">
                    <button onclick="showRomeo()" class="btn btn-lg btn-outline-secondary">Introduction</button>&ensp;
                    <button onclick="showScriptRomeo()" class="btn btn-lg btn-outline-secondary">Script</button>&ensp;
                    <button onclick="showXMLRomeo()" class="btn btn-lg btn-outline-secondary">XML</button>
                </div>
                <br><br>
                <h3>Script</h3>
                <br>
                <p>
                    <b>Scene 1</b><br><br>
                    <i>Narrator 1</i> <span class=”directions”>[standing alone in the middle of the main stage]</span>: “Many years ago in Verona, Italy, there were two families.” <br>
                    <span class=”directions”>[the two families come into the main stage, one on the left side and one on the right side of the narrator]</span><br>
                    <i>Capulets</i>  <span class=”directions”>[putting their hands up] </span>: “We are the Capulets!” <br>
                    <i>Montagues</i>  <span class=”directions”>[putting their hands up]</span>: “We are the Montagues!” <br>
                    <i>Narrator 1</i>: “These families are always fighting. The Montagues have a son, Romeo.” <br>
                    <span class=”directions”>[Romeo goes beside the Narrator and greets the public] </span><br>
                    <i>Narrator 1</i>: “The Capulets have a daughter, Juliet” <br>
                    <span class=”directions”>[Juliet goes beside the Narrator 1 and greets the public] </span><br>
                    <span class=”directions”>[everybody leaves the main stage]</span><br>
                    <br><br>
                    <b>Scene 2</b><br><br>
                    <span class=”directions”>[Capulets and Narrator 2 enter the main stage; everybody is talking with somebody at a very low voice, while the Narrator 2 goes in the left corner of the front part of the stage.]</span> <br>
                    <i>Narrator 2</i>: “One night the Capulets have a party and Romeo goes.” <br>
                    <span class=”directions”>[Romeo enters the main stage looking around, then bumps into Juliet in the middle of the main stage. They look and slowly take each other’s hand]</span> <br>
                    <i>Narrator 2</i>: “He meets Juliet and they fall in love.” <br>
                    <span class=”directions”>[Tybalt stops talking with someone, goes near the middle of the main stage, looking at Romeo]</span> <br>
                    <i>Narrator 2</i>: “Juliet’s cousin, Tybalt, sees Romeo and is very angry.” <br>
                    <span class=”directions”>[Tybalt points at Romeo with his finger]</span> <br>
                    <i>Tybalt</i>: “He’s a Montague! Get him!” <br>
                    <i>Juliet</i>: “Oh Romeo, why are you a Montague?” <br>
                    <span class=”directions”>[Romeo and Juliet hug]</span> <br>
                    <i>Narrator 2</i>: “Romeo and Juliet talk and decide to get married.” <br>
                    <span class=”directions”>[everybody leaves the scene]</span> <br>
                    <br><br>
                    <b>Scene 3</b><br><br>
                    <span class=”directions”>[Narrator 3 enters the main stage and stops in the left corner. Romeo, Juliet and Friar Lawrence go to the middle of the main stage. Friar Lawrence is standing in front of Juliet and Romeo, who are holding their hands and looking at each other’s eyes]</span><br>
                    <i>Narrator 3</i>: “They know that their families will be very angry so they go to Friar Lawrence and are married in secret.” <br>
                    <span class=”directions”>[Friar Lawrence nods and Romeo and Juliet kiss each other’s cheek]</span><br>
                    <span class=”directions”>[Friar Lawrence leaves the stage and Juliet says goodbye to Romeo and leaves the scene as well. Mercutio enters the scene and shakes Romeo’s hand, then they start walking around, slowly, together]</span><br>
                    <span class=”directions”>[Tybalt enters the scene and looks at Romeo with angry face]</span><br>
                    <i>Narrator 3</i>: “The next day, Tybalt sees Romeo. He is still angry with Romeo and wants to fight him. Romeo doesn’t want to fight but his best friend, Mercutio, does.” <br>
                    <span class=”directions”>[Tybalt weakly pushes Romeo, but Romeo steps back and Mercutio puts himself between Romeo and Tybalt]</span><br>
                    <i>Mercutio</i>: “If you won’t fight him, I will!” <br>
                    <i>Narrator 3</i>: “Mercutio fights Tybalt and Tybalt kills Mercutio” <br>
                    <span class=”directions”>[Tybalt kills Mercutio with a sword. The Prince of Verona enters the stage and looks at the scene]</span><br>
                    <i>Narrator 3</i>: “Romeo is so upset he fights Tybalt and kills him too!” <br>
                    <span class=”directions”>[Romeo kills Tybalt with a sword. The Prince of Verona, very surprised and angry, goes next to Romeo and sends him away pointing at the exit of the stage with his finger]</span><br>
                    <i>Narrator 3</i>: “The Prince of Verona is very angry and sends Romeo away.” <br>
                    <span class=”directions”>[Romeo, very sad, leaves the scene]</span><br>
                    <span class=”directions”>[everybody leaves]</span><br>
                    <br><br>
                    <b>Scene 4</b><br><br>
                    <span class=”directions”>[Juliet and Friar Lawrence go to the middle of the stage. Narrator 4 goes to the left corner. Juliet is standing in front of Friar Lawrence, but then cries and falls on her knees]</span><br>
                    <i>Narrator 4</i>: “Juliet goes to Friar Lawrence for help.” <br>
                    <span class=”directions”>[Friar Lawrence pulls out of his pocket a little potion]</span><br>
                    <i>Friar Lawrence</i>: “Here is a special drink. You will sleep for two days. Your family will think you are dead but you will wake up. Then you and Romeo can be free together.” <br>
                    <span class=”directions”>[Juliet stands up, takes the potion, nods and exits the scene. Narrator 4 exits the scene]</span><br>
                    <span class=”directions”>[Romeo enters the scene from the right-side walking alone. Friar Lawrence, without looking at Romeo, walks towards the left side of the stage, then turns around and sees Romeo. They all stop walking, they look at each other.]</span><br>
                    <i>Friar Lawrence</i> <span class=”directions”>[putting his left hand near his mouth]</span>: “Juliet is not dead!” <br>
                    <span class=”directions”>[Friar Lawrence runs out of the scene]</span><br>
                    <span class=”directions”>[Romeo shortly runs to reach the middle of the stage]</span><br>
                    <i>Romeo</i>: “He said that Juliet is dead! I will drink a poison!” <br>
                    <span class=”directions”>[Romeo pulls a poison out of his pocket and runs out of the stage]</span><br>
                    <br><br>
                    <b>Scene 5</b><br><br>
                    <span class=”directions”>[Juliet goes in the middle of the stage, sits and drinks the potion, then she lays down and closes her eyes]</span><br>
                    <span class=”directions”>[Romeo enters the scene, runs next to Juliet, falls on his knees and looks at her face]</span><br>
                    <i>Romeo</i>: “Now I will stay with you forever.” <br>
                    <span class=”directions”>[Romeo pulls the poison out of his pocket and drinks it. Then, he dies]</span><br>
                    <span class=”directions”>[Juliet wakes up, sits, sees Romeo dead]</span><br>
                    <i>Juliet</i>: “Oh no!” <br>
                    <span class=”directions”>[Juliet starts crying, she takes Romeo’s sword and kills herself]</span><br>
                    <span class=”directions”>[While Romeo and Juliet lay down in the middle of the stage, Narrator 4 enters and goes behind them. Montagues and Capulets enters from two different sides and stop in the front corners of the stage. Everyone is crying except the Narrator]</span><br>
                    <i>Narrator 4</i>: “Romeo and Juliet are both dead. Friar Lawrence tells the Capulets and Montagues what happened. They are so sad they agree not to fight any more.” <br>
                    <span class=”directions”>[Montagues and Capulets all go to the middle of the stage and hug each other. Curtain closes]</span>
                </p>
            </div>  
        </div>    
    </div>
    `;
}