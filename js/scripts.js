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
                <section id="iiif" class="iiif_section margin-top">
                    <div class="grid">
                        <div class="col-100">
                            <h2 class="subheadline">
                                Romeo and Juliet
                            </h2>
                            <iframe src="mirador/R&J_mirador_viewer.html" frameborder="0" class="mirador_viewer">
                            </iframe>
                        </div>
                    </div>
                </section> 
                <br> 
                <section id="iiif" class="iiif_section margin-top">
                    <div class="grid">
                        <div class="col-100">
                            <h2 class="subheadline">
                                Mercutio
                            </h2>
                            <iframe src="mirador/mercutio_mirador_viewer.html" frameborder="0" class="mirador_viewer">
                            </iframe>
                        </div>
                    </div>
                </section>  
            </div>
            <div class="col-lg-7 pt-4 pt-lg-0 content">
                <div class="btn-group">
                    <button onclick="showRomeo()" class="btn btn-lg btn-outline-secondary">Introduction</button>&ensp;
                    <button onclick="showScriptRomeo()" class="btn btn-lg btn-outline-secondary">Script</button>&ensp;
                    <button onclick="window.open('xml/romeoAndJuliet.xml')" class="btn btn-lg btn-outline-secondary">XML</button>&ensp;
                    <button onclick="" class="btn btn-lg btn-outline-secondary">XSLT</button>&ensp;
                    <button onclick="window.open('short stories/romeoAndJuliet.pdf')" class="btn btn-lg btn-outline-secondary">Short story</button>
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
                <section id="iiif" class="iiif_section margin-top">
                    <div class="grid">
                        <div class="col-100">
                            <h2 class="subheadline">
                                Romeo and Juliet
                            </h2>
                            <iframe src="mirador/R&J_mirador_viewer.html" frameborder="0" class="mirador_viewer">
                            </iframe>
                        </div>
                    </div>
                </section>
                <br>
                <section id="iiif" class="iiif_section margin-top">
                    <div class="grid">
                        <div class="col-100">
                            <h2 class="subheadline">
                                Mercutio
                            </h2>
                            <iframe src="mirador/mercutio_mirador_viewer.html" frameborder="0" class="mirador_viewer">
                            </iframe>
                        </div>
                    </div>
                </section>  
            </div>
            <div class="col-lg-7 pt-4 pt-lg-0 content">
                <div class="btn-group">
                    <button onclick="showRomeo()" class="btn btn-lg btn-outline-secondary">Introduction</button>&ensp;
                    <button onclick="showScriptRomeo()" class="btn btn-lg btn-outline-secondary">Script</button>&ensp;
                    <button onclick="window.open('xml/romeoAndJuliet.xml')" class="btn btn-lg btn-outline-secondary">XML</button>&ensp;
                    <button onclick="" class="btn btn-lg btn-outline-secondary">XSLT</button>&ensp;
                    <button onclick="window.open('short stories/romeoAndJuliet.pdf')" class="btn btn-lg btn-outline-secondary">Short story</button>
                </div>
                <br><br>
                <h3>Script</h3>
                <br>
                <p>
                    <h5>Scene 1</h5><br>
                    <b>Narrator 1 <i><span class=”directions”>[standing alone in the middle of the main stage]</span></i></b>: “Many years ago in Verona, Italy, there were two families.” <br>
                    <br><small><b><i><span class=”directions”>[the two families come into the main stage, one on the left side and one on the right side of the narrator]</span></b></i></small><br>
                    <br><b>Capulets<i>  <span class=”directions”>[putting their hands up] </span></i></b>: “We are the Capulets!” <br>
                    <b>Montagues<i>  <span class=”directions”>[putting their hands up]</span></i></b>: “We are the Montagues!” <br>
                    <b>Narrator 1</b>: “These families are always fighting. The Montagues have a son, Romeo.” <br>
                    <br><small><b><i><span class=”directions”>[Romeo goes beside the Narrator and greets the public] </span></i></b></small><br>
                    <br><b>Narrator 1</b>: “The Capulets have a daughter, Juliet” <br>
                    <br><small><b><i><span class=”directions”>[Juliet goes beside the Narrator 1 and greets the public] </span></i></b><br>
                    <b><i><span class=”directions”>[everybody leaves the main stage]</span></i></b></small><br>
                    <br><br>
                    <h5>Scene 2</h5><br>
                    <small><b><i><span class=”directions”>[Capulets and Narrator 2 enter the main stage; everybody is talking with somebody at a very low voice, while the Narrator 2 goes in the left corner of the front part of the stage.]</span></i></b></small> <br>
                    <br><b>Narrator 2</b>: “One night the Capulets have a party and Romeo goes.” <br>
                    <br><small><b><i><span class=”directions”>[Romeo enters the main stage looking around, then bumps into Juliet in the middle of the main stage. They look and slowly take each other’s hand]</span></i></b></small> <br>
                    <br><b>Narrator 2</b>: “He meets Juliet and they fall in love.” <br>
                    <br><small><b><i><span class=”directions”>[Tybalt stops talking with someone, goes near the middle of the main stage, looking at Romeo]</span></i></b></small> <br>
                    <br><b>Narrator 2</b>: “Juliet’s cousin, Tybalt, sees Romeo and is very angry.” <br>
                    <br><small><b><i><span class=”directions”>[Tybalt points at Romeo with his finger]</span></i></b></small> <br>
                    <br><b>Tybalt</b>: “He’s a Montague! Get him!” <br>
                    <b>Juliet</b>: “Oh Romeo, why are you a Montague?” <br>
                    <br><small><b><i><span class=”directions”>[Romeo and Juliet hug]</span></i></b></small> <br>
                    <br><b>Narrator 2</b>: “Romeo and Juliet talk and decide to get married.” <br>
                    <br><small><b><i><span class=”directions”>[everybody leaves the scene]</span></i></b></small> <br>
                    <br><br>
                    <h5>Scene 3</h5><br>
                    <small><b><i><span class=”directions”>[Narrator 3 enters the main stage and stops in the left corner. Romeo, Juliet and Friar Lawrence go to the middle of the main stage. Friar Lawrence is standing in front of Juliet and Romeo, who are holding their hands and looking at each other’s eyes]</span></i></b></small><br>
                    <br><b>Narrator 3</b>: “They know that their families will be very angry so they go to Friar Lawrence and are married in secret.” <br>
                    <br><small><b><i><span class=”directions”>[Friar Lawrence nods and Romeo and Juliet kiss each other’s cheek]</span></i></b><br>
                    <b><i><span class=”directions”>[Friar Lawrence leaves the stage and Juliet says goodbye to Romeo and leaves the scene as well. Mercutio enters the scene and shakes Romeo’s hand, then they start walking around, slowly, together]</span></i></b><br>
                    <b><i><span class=”directions”>[Tybalt enters the scene and looks at Romeo with angry face]</span></i></b></small><br>
                    <br><b>Narrator 3</b>: “The next day, Tybalt sees Romeo. He is still angry with Romeo and wants to fight him. Romeo doesn’t want to fight but his best friend, Mercutio, does.” <br>
                    <br><small><b><i><span class=”directions”>[Tybalt weakly pushes Romeo, but Romeo steps back and Mercutio puts himself between Romeo and Tybalt]</span></i></b></small><br>
                    <br><b>Mercutio</b>: “If you won’t fight him, I will!” <br>
                    <b>Narrator 3</b>: “Mercutio fights Tybalt and Tybalt kills Mercutio” <br>
                    <br><small><b><i><span class=”directions”>[Tybalt kills Mercutio with a sword. The Prince of Verona enters the stage and looks at the scene]</span></i></b></small><br>
                    <br><b>Narrator 3</b>: “Romeo is so upset he fights Tybalt and kills him too!” <br>
                    <br><small><b><i><span class=”directions”>[Romeo kills Tybalt with a sword. The Prince of Verona, very surprised and angry, goes next to Romeo and sends him away pointing at the exit of the stage with his finger]</span></i></b></small><br>
                    <br><b>Narrator 3</b>: “The Prince of Verona is very angry and sends Romeo away.” <br>
                    <br><small><b><i><span class=”directions”>[Romeo, very sad, leaves the scene]</span></i></b><br>
                    <b><i><span class=”directions”>[everybody leaves]</span></i></b></small><br>
                    <br><br>
                    <h5>Scene 4</h5><br>
                    <small><b><i><span class=”directions”>[Juliet and Friar Lawrence go to the middle of the stage. Narrator 4 goes to the left corner. Juliet is standing in front of Friar Lawrence, but then cries and falls on her knees]</span></i></b></small><br>
                    <br><b>Narrator 4</b>: “Juliet goes to Friar Lawrence for help.” <br>
                    <br><small><b><i><span class=”directions”>[Friar Lawrence pulls out of his pocket a little potion]</span></i></b></small><br>
                    <br><b>Friar Lawrence</b>: “Here is a special drink. You will sleep for two days. Your family will think you are dead but you will wake up. Then you and Romeo can be free together.” <br>
                    <br><small><b><i><span class=”directions”>[Juliet stands up, takes the potion, nods and exits the scene. Narrator 4 exits the scene]</span></i></b><br>
                    <b><i><span class=”directions”>[Romeo enters the scene from the right-side walking alone. Friar Lawrence, without looking at Romeo, walks towards the left side of the stage, then turns around and sees Romeo. They all stop walking, they look at each other.]</span></i></b></small><br>
                    <br><b>Friar Lawrence<i> <span class=”directions”>[putting his left hand near his mouth]</span></i></b>: “Juliet is not dead!” <br>
                    <br><small><b><i><span class=”directions”>[Friar Lawrence runs out of the scene]</span></i></b><br>
                    <b><i><span class=”directions”>[Romeo shortly runs to reach the middle of the stage]</span></i></b></small><br>
                    <br><b>Romeo</b>: “He said that Juliet is dead! I will drink a poison!” <br>
                    <br><small><b><i><span class=”directions”>[Romeo pulls a poison out of his pocket and runs out of the stage]</span></i></b></small><br>
                    <br><br>
                    <h5>Scene 5</h5><br>
                    <small><b><i><span class=”directions”>[Juliet goes in the middle of the stage, sits and drinks the potion, then she lays down and closes her eyes]</span></i></b><br>
                    <b><i><span class=”directions”>[Romeo enters the scene, runs next to Juliet, falls on his knees and looks at her face]</span></i></b></small><br>
                    <br><b>Romeo</b>: “Now I will stay with you forever.” <br>
                    <br><small><b><i><span class=”directions”>[Romeo pulls the poison out of his pocket and drinks it. Then, he dies]</span></i></b><br>
                    <b><i><span class=”directions”>[Juliet wakes up, sits, sees Romeo dead]</span></i></b></small><br>
                    <br><b>Juliet</b>: “Oh no!” <br>
                    <br><small><b><i><span class=”directions”>[Juliet starts crying, she takes Romeo’s sword and kills herself]</span></i></b><br>
                    <b><i><span class=”directions”>[While Romeo and Juliet lay down in the middle of the stage, Narrator 4 enters and goes behind them. Montagues and Capulets enters from two different sides and stop in the front corners of the stage. Everyone is crying except the Narrator]</span></i></b></small><br>
                    <br><b>Narrator 4</b>: “Romeo and Juliet are both dead. Friar Lawrence tells the Capulets and Montagues what happened. They are so sad they agree not to fight any more.” <br>
                    <br><small><b><i><span class=”directions”>[Montagues and Capulets all go to the middle of the stage and hug each other. Curtain closes]</span></i></b></small>
                </p>
            </div>  
        </div>    
    </div>
    `;
}

function showMacbeth() {
    var texts = document.getElementById("texts");
    texts.innerHTML=`
    <div class="container px-4 px-lg-5">
        <div class="content-section-heading text-center">
            <h3 class="text-secondary mb-0">Macbeth</h3>            
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-4">
                <section id="iiif" class="iiif_section margin-top">
                    <div class="grid">
                        <div class="col-100">
                            <h2 class="subheadline">
                                Lady Macbeth
                            </h2>
                            <iframe src="mirador/macbeth_mirador_viewer.html" frameborder="0" class="mirador_viewer">
                            </iframe>
                            <br>
                            <h3>Curiosity:</h3><h4>The Prompt Book is the master copy of the script or score, containing all the actor moves and technical cues, and is 
                                        used by the deputy stage manager to run rehearsals and later, control the performance. It's sometimes known as the 'book', Prompt Copy or Prompt Script.</h4>
                        </div>
                    </div>
                </section>  
            </div>
            <div class="col-lg-7 pt-4 pt-lg-0 content">
                <div class="btn-group">
                    <button onclick="showMacbeth()" class="btn btn-lg btn-outline-secondary">Introduction</button>&ensp;
                    <button onclick="showScriptMacbeth()" class="btn btn-lg btn-outline-secondary">Script</button>&ensp;
                    <button onclick="window.open('xml/macbeth.xml')" class="btn btn-lg btn-outline-secondary">XML</button>&ensp;
                    <button onclick="" class="btn btn-lg btn-outline-secondary">XSLT</button>&ensp;
                    <button onclick="window.open('short stories/macbeth.pdf')" class="btn btn-lg btn-outline-secondary">Short story</button>
                </div>
                <br><br>
                <h3>Introduction</h3>
                <br>
                <p>
                    In 1603, at about the middle of Shakespeare’s career as a playwright, a new monarch ascended the throne of England. He was James VI of Scotland, who then also became James I of England. Immediately, Shakespeare’s London was alive with an interest in things Scottish. Many Scots followed their king to London and attended the theaters there. Shakespeare’s company, which became the King’s Men under James’s patronage, now sometimes staged their plays for the new monarch’s entertainment, just as they had for Queen Elizabeth before him. It was probably within this context that Shakespeare turned to Raphael Holinshed’s history of Scotland for material for a tragedy.<br><br>
                    In Scottish history of the eleventh century, Shakespeare found a spectacle of violence—the slaughter of whole armies and of innocent families, the assassination of kings, the ambush of nobles by murderers, the brutal execution of rebels. He also came upon stories of witches and wizards providing advice to traitors. Such accounts could feed the new Scottish King James’s belief in a connection between treason and witchcraft. James had already himself executed women as witches. Shakespeare’s Macbeth supplied its audience with a sensational view of witches and supernatural apparitions and equally sensational accounts of bloody battles.<br><br>
                    It is possible, then, that in writing Macbeth Shakespeare was mainly intent upon appealing to the new interests in London brought about by James’s kingship. What he created, though, is a play that has fascinated generations of readers and audiences that care little about Scottish history. In its depiction of a man who murders his king and kinsman in order to gain the crown, only to lose all that humans seem to need in order to be happy—sleep, nourishment, friends, love—Macbeth teases us with huge questions. Why do people do evil knowing that it is evil? Does Macbeth represent someone who murders because fate tempts him? because his wife pushes him into it? because he is overly ambitious? Having killed Duncan, why does Macbeth fall apart, unable to sleep, seeing ghosts, putting spies in everyone’s home, killing his friends and innocent women and children? Why does the success of Macbeth and Lady Macbeth—prophesied by the witches, promising the couple power and riches and “peace to all their nights and days to come”—turn so quickly to ashes, destroying the Macbeths’ relationship, their world, and, finally, both of them?<br><br>
                    In earlier centuries, Macbeth’s story was seen as a powerful study of a heroic individual who commits an evil act and pays an enormous price as his conscience—and the natural forces for good in the universe—destroy him. More recently, his story has been applied to nations that overreach themselves, his speeches of despair quoted to show that Shakespeare shared present-day feelings of alienation. Today, the line between Macbeth’s evil and the supposed good of those who oppose him has been blurred, new attitudes about witches and witchcraft are being expressed, new questions raised about the ways that maleness and femaleness are portrayed in the play. Like so many of Shakespeare’s plays, Macbeth speaks to each generation with a new voice.
                </p>
            </div>  
        </div>    
    </div>
    `;
}

function showScriptMacbeth() {
    var texts = document.getElementById("texts");
    texts.innerHTML=`
    <div class="container px-4 px-lg-5">
        <div class="content-section-heading text-center">
            <h3 class="text-secondary mb-0">Macbeth</h3>            
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-4">
                <section id="iiif" class="iiif_section margin-top">
                    <div class="grid">
                        <div class="col-100">
                            <h2 class="subheadline">
                                Lady Macbeth
                            </h2>
                            <iframe src="mirador/macbeth_mirador_viewer.html" frameborder="0" class="mirador_viewer">
                            </iframe>
                            <br>
                            <h3>Curiosity:</h3><h4>The Prompt Book is the master copy of the script or score, containing all the actor moves and technical cues, and is 
                                        used by the deputy stage manager to run rehearsals and later, control the performance. It's sometimes known as the 'book', Prompt Copy or Prompt Script.</h4>
                        </div>
                    </div>
                </section>  
            </div>
            <div class="col-lg-7 pt-4 pt-lg-0 content">
                <div class="btn-group">
                    <button onclick="showMacbeth()" class="btn btn-lg btn-outline-secondary">Introduction</button>&ensp;
                    <button onclick="showScriptMacbeth()" class="btn btn-lg btn-outline-secondary">Script</button>&ensp;
                    <button onclick="window.open('xml/macbeth.xml')" class="btn btn-lg btn-outline-secondary">XML</button>&ensp;
                    <button onclick="" class="btn btn-lg btn-outline-secondary">XSLT</button>&ensp;
                    <button onclick="window.open('short stories/macbeth.pdf')" class="btn btn-lg btn-outline-secondary">Short story</button>
                </div>
                <br><br>
                <h3>Script</h3>
                <br>
                <p>
                    <h5>Scene 1</h5><br>
                    <small><b><i><span class=”directions”>[Narrator 1 enters the scene and goes to the left corner of the stage. Macbeth goes in the middle of the main stage, with a sword in the hand]</span></i></b></small><br>
                    <br><b>Narrator 1</b>: “Macbeth and his best friend, Banquo, are brave soldiers. One day, after a battle, three ugly witches come out of the fog.” <br>
                    <br><small><b><i><span class=”directions”>[Macbeth looks really tired and dries the sweat on his forehead. The Witches go in front of Macbeth]</span></i></b></small><br>
                    <br><b>Witch 1</b>: “Macbeth. You will be the new King of Scotland! He, he, he, ha, ha, ha!” <br>
                    <br><small><b><i><span class=”directions”>[The Witches, laughing, exit the scene]</span></i></b></small><br>
                    <br><b>Macbeth</b>: “Me? The new King of Scotland?” <br>
                    <b>Narrator 1</b>: “Macbeth writes a letter to his wife, Lady Macbeth. He tells her what the witches said.” <br>
                    <br><small><b><i><span class=”directions”>[Macbeth pulls a sheet of paper out of his pocket, writes something on it, and exits the scene holding the letter in his hand]</span><br>
                    <span class=”directions”>[Lady Macbeth enters the scene holding a letter in her hands. She stops in the middle of the stage, open the letters and looks at it]</span></i></b></small><br>
                    <br><b>Lady Macbeth</b>: “Yes! If he is the king, I will be the queen!” <br>
                    <br><small><b><i><span class=”directions”>[Everybody leaves]</span></i></b></small><br>
                    <br><br>
                    <h5>Scene 2</h5><br>
                    <small><b><i><span class=”directions”>[Narrator 2 goes to the left front corner of the stage. Macbeth and Lady Macbeth go in the middle of the stage, while King Duncan lays down a little far from them, in the right side of the stage, and sleeps]</span></i></b></small><br>
                    <br><b>Narrator 2</b>: “King Duncan comes for dinner and sleeps at Macbeth’s castle. When Duncan is asleep, Lady Macbeth tells Macbeth to kill him.” <br>
                    <br><small><b><i><span class=”directions”>[Lady Macbeth says something in Macbeth's ear, then leaves the scene, running a little]</span></i></b></small><br>
                    <br><b>Macbeth</b>: “I really want to be king. But I am very frightened about killing Duncan. He is a good king..” <br>
                    <br><small><b><i><span class=”directions”>[Macbeth sees a knife on the floor and takes it]</span></i></b></small><br>
                    <br><b>Narrator 2</b>: “Macbeth sees a knife in front of him. He knows it is wrong, but he decides to kill Duncan.” <br>
                    <b>Macbeth</b>: “I must do this quickly.” <br>
                    <br><small><b><i><span class=”directions”>[Macbeth kills Duncan with the knife]</span></i></b></small><br>
                    <br><b>Narrator 2</b>: “Duncan is dead but Macbeth feels bad about killing him.” <br>
                    <b>Macbeth</b>: “It’s OK. Nobody will know our secret.” <br>
                    <br><small><b><i><span class=”directions”>[Everybody leaves]</span></i></b></small><br>
                    <br><br>
                    <h5>Scene 3</h5><br>
                    <small><b><i><span class=”directions”>[Narrator 3 goes to the left front corner of the stage. Macbeth goes in the middle]</span></i></b></small><br>
                    <br><b>Narrator 3</b>: “Macbeth becomes king but he is worried that his friend Banquo knows he killed Duncan. He decides that Banquo must die too and he orders his servant to kill him.” <br>
                    <b>Macbeth</b>: “I am king, but I am not happy. I feel terrible about killing Duncan and Banquo and I am worried people will know my secret.” <br>
                    <br><small><b><i><span class=”directions”>[Banquo's ghost crosses the scene in front of Macbeth and exits from the other side of the stage. Macbeth is very frightened by seeing the ghost and covers his head with his arms]</span></i></b></small><br>
                    <br><b>Narrator 3</b>: “Macbeth sees Banquo’s ghost in front of him. He’s very frightened. He goes to see the witches again.” <br>
                    <br><small><b><i><span class=”directions”>[The Witches enter the scene and go in front of Macbeth. Macbeth looks at them putting down his arms]</span></i></b></small><br>
                    <br><b>Narrator 3</b>: “Macbeth asks the witches if he’s in danger.” <br>
                    <b>Witch 2</b>: “Don’t worry. Everything will be OK.” <br>
                    <b>Witch 3</b>: “Yes, everything will be fine.” <br>
                    <b>Narrator 3</b>: “Macbeth believes the witches but they were lying.” <br>
                    <br><small><b><i><span class=”directions”>[The Witches exit laughing together. Then, everybody leaves]</span></i></b></small><br>
                    <br><br>
                    <h5>Scene 4</h5><br>
                    <small><b><i><span class=”directions”>[Narrator 4 goes in the left front corner of the main stage. Lady Macbeth goes in the middle of the stage, closes her eyes and looks very frightened, covering her head with her arms and crying]</span></i></b></small><br>
                    <br><b>Narrator 4</b>: “Lady Macbeth is sleepwalking. She wanted to be queen but now she feels terrible. She understands that it is wrong to kill.” <br>
                    <br><small><b><i><span class=”directions”>[Lady Macbeth exits the scene, still crying]</span></i></b></small><br>
                    <br><b>Narrator 4</b>: “An army comes to attack the castle. The people know that Macbeth killed Duncan.” <br>
                    <br><small><b><i><span class=”directions”>[Macbeth goes in the middle of the stage, running and very worried]</span></i></b></small><br>
                    <br><b>Macbeth</b>: “The witches said I was safe. They lied to me!” <br>
                    <br><small><b><i><span class=”directions”>[Macbeth runs out of the scene. Narrator 4 goes in the middle of the stage]</span></i></b></small><br>
                    <br><b>Narrator 4</b>: “Macbeth is dead and now the people have a good, new king.” <br>
                    <br><small><b><i><span class=”directions”>[Narrator 4 takes a bow and exits the scene]</span></i></b></small>                
                </p>
            </div>  
        </div>    
    </div>
    `;
}    

function showHamlet() {
    var texts = document.getElementById("texts");
    texts.innerHTML=`
    <div class="container px-4 px-lg-5">
        <div class="content-section-heading text-center">
            <h3 class="text-secondary mb-0">Hamlet</h3>            
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-4">
                <section id="iiif" class="iiif_section margin-top">
                    <div class="grid">
                        <div class="col-100">
                            <h2 class="subheadline">
                                Hamlet:"To be or not to be"
                            </h2>
                            <iframe src="mirador/hamlet_mirador_viewer.html" frameborder="0" class="mirador_viewer">
                            </iframe>
                            <br>
                            <h3>Curiosity:</h3><h4>
                            Edward Hugh Sothern (December 6, 1859 – October 28, 1933) 
                            was an American actor who specialized in dashing, romantic leading roles and particularly in Shakespeare roles.
                            </h4>
                        </div>
                    </div>
                </section>
            </div>
            <div class="col-lg-7 pt-4 pt-lg-0 content">
                <div class="btn-group">
                    <button onclick="showHamlet()" class="btn btn-lg btn-outline-secondary">Introduction</button>&ensp;
                    <button onclick="showScriptHamlet()" class="btn btn-lg btn-outline-secondary">Script</button>&ensp;
                    <button onclick="window.open('xml/hamlet.xml')" class="btn btn-lg btn-outline-secondary">XML</button>&ensp;
                    <button onclick="" class="btn btn-lg btn-outline-secondary">XSLT</button>&ensp;
                    <button onclick="window.open('short stories/hamlet.pdf')" class="btn btn-lg btn-outline-secondary">Short story</button>
                </div>
                <br><br>
                <h3>Introduction</h3>
                <br>
                <p>
                    Hamlet is the most popular of Shakespeare’s plays for readers and theater audiences, and it is also one of the most puzzling. Many questions about the play continue to fascinate readers and playgoers, making Hamlet not only a revenge tragedy but also very much a mystery. What is this Ghost that appears to Hamlet? Is it Hamlet’s murdered father returned from the everlasting fire to demand justice upon his murderer? Is it a “goblin damned”—that is, a demon bent on claiming Hamlet’s soul by tempting him to assassinate his king? Or is the Ghost “a spirit of health,” an angelic messenger revealing to Hamlet that the young man’s mission in life is to cleanse the kingdom of Denmark of its corrupt king?<br><br>
                    And what happens to Hamlet after the Ghost commands that the throne of Denmark be cleansed? Does Hamlet actually go mad, becoming unhinged by the accusation that his uncle murdered his father or by the ugly picture the Ghost paints of Hamlet’s lustful mother? Or does Hamlet merely pretend to be mad, pretend so well that he makes us wonder if we can tell the difference between sanity and madness? Why is he so hostile to women, both to his mother and to the woman whom he once courted and whom he claims to have loved dearly? Why does he wait so long to confirm the guilt of the king after the Ghost has accused the king of murder? And once he is convinced that the king is a murderer, why does Hamlet not act immediately?<br><br>
                    And what about Gertrude? Was she unfaithful to her husband during his lifetime? Was she complicit in his murder? What does she come to believe about Hamlet’s madness? And about her new husband? Beyond such questions about the play and its characters lie deeper issues about the rightness of revenge, about how to achieve an ethical life, and about how to live in a world where tears of sorrow, loving smiles, and friendly words are all suspect because all are “actions that a man might play.” Hamlet’s world is bleak and cold because almost no one and nothing can be trusted. But his world, and Hamlet himself, continue to draw us to them, speaking to every generation of its own problems and its own yearnings. It is a play that seems particularly pertinent today—just as it has seemed particularly pertinent to any number of generations before us.
                </p>
            </div>  
        </div>    
    </div>
    `;
}

function showScriptHamlet() {
    var texts = document.getElementById("texts");
    texts.innerHTML=`
    <div class="container px-4 px-lg-5">
        <div class="content-section-heading text-center">
            <h3 class="text-secondary mb-0">Hamlet</h3>            
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-4">
                <section id="iiif" class="iiif_section margin-top">
                    <div class="grid">
                        <div class="col-100">
                            <h2 class="subheadline">
                                Hamlet:"To be or not to be"
                            </h2>
                            <iframe src="mirador/hamlet_mirador_viewer.html" frameborder="0" class="mirador_viewer">
                            </iframe>
                            <br>
                            <h3>Curiosity:</h3><h4>
                            Edward Hugh Sothern (December 6, 1859 – October 28, 1933) 
                            was an American actor who specialized in dashing, romantic leading roles and particularly in Shakespeare roles.
                            </h4>
                        </div>
                    </div>
                </section>
            </div>
            <div class="col-lg-7 pt-4 pt-lg-0 content">
                <div class="btn-group">
                    <button onclick="showHamlet()" class="btn btn-lg btn-outline-secondary">Introduction</button>&ensp;
                    <button onclick="showScriptHamlet()" class="btn btn-lg btn-outline-secondary">Script</button>&ensp;
                    <button onclick="window.open('xml/hamlet.xml')" class="btn btn-lg btn-outline-secondary">XML</button>&ensp;
                    <button onclick="" class="btn btn-lg btn-outline-secondary">XSLT</button>&ensp;
                    <button onclick="window.open('short stories/hamlet.pdf')" class="btn btn-lg btn-outline-secondary">Short story</button>
                </div>
                <br><br>
                <h3>Script</h3>
                <br>
                <p>
                    <h5>Scene 1</h5><br>
                    <small><b><i><span class=”directions”>[Narrator 1 enters the scene and goes to the left corner of the stage. Hamlet goes in the middle of the main stage and sits]</span></i></b></small><br>
                    <br><b>Narrator 1</b>: “Many years ago in Denmark there was a prince called Hamlet. One day Hamlet’s father, the king, dies suddenly and Hamlet is very sad.” <br>
                    <br><small><b><i><span class=”directions”>[Hamlet puts his head on his knees and cries. Gertrude and Claudius go behind Hamlet, one in front of each other and they hold their hands]</span></i></b></small><br>
                    <br><b>Narrator 1</b>: “After this, Hamlet’s mother, Gertrude, gets married again very quickly. She marries her husband’s brother, Claudius, and Claudius is now the king!” <br>
                    <br><small><b><i><span class=”directions”>[Hamlet stands up, he moves towards one side of the stage and looks at his mother, angry and sad]</span></i></b></small><br>
                    <br><b>Hamlet</b>: “How could you do this to me!” <br>
                    <br><small><b><i><span class=”directions”>[everybody leaves the scene]</span></i></b></small><br>
                    <br><br>
                    <h5>Scene 2</h5><br>
                    <small><b><i><span class=”directions”>[Narrator 2 goes to the left front corner of the stage. Hamlet goes in the middle of the stage and Horatio runs towards him]</span></i></b></small><br>
                    <br><b>Narrator 2</b>: “One night Hamlet’s friend, Horatio, tells him that there is a ghost in the castle.” <br>
                    <br><small><b><i><span class=”directions”>[Horatio, frightened, touches Hamlet's arm to catch his attention. The Ghost enters the scene and walks slowly towards Hamlet. Horatio points at the Ghost with his finger. The Ghost stops when he reaches Hamlet. As soon as the Ghost stops near Hamlet, Horatio runs away and exits the scene]</span></i></b></small><br>
                    <br><b>Narrator 2</b>: “It is the ghost of Hamlet’s father!” <br>
                    <b>Ghost</b>: “Claudius killed me with poison! Hamlet, you must punish Claudius for me!” <br>
                    <br><small><b><i><span class=”directions”>[The Ghost leaves. Hamlet touches his head]</span></i></b></small><br>
                    <br><b>Narrator 2</b>: “Hamlet is confused. He doesn’t know if he believes the ghost and he doesn’t know what to do.” <br>
                    <br><small><b><i><span class=”directions”>[Hamlet starts walking around and touches his chin]</span></i></b></small><br>
                    <br><b>Narrator 2</b>: “Hamlet now acts very strangely. He is mean and angry, and he upsets his girlfriend, Ophelia.” <br>
                    <br><small><b><i><span class=”directions”>[Ophelia enters the scene, runs towards Hamlet and hugs him. Hamlet pushes Ophelia away]</span></i></b></small><br>
                    <br><b>Hamlet</b>: “Go away! Leave me alone!” <br>
                    <b>Ophelia</b>: “Oh, he is so mean!” <br>
                    <br><small><b><i><span class=”directions”>[Ophelia runs away exiting from one side and Hamlet walks away exiting the scene from the opposite side]</span></i></b></small><br>
                    <br><br>
                    <h5>Scene 3</h5><br>
                    <small><b><i><span class=”directions”>[Narrator 3 goes to the left front corner of the stage. The Actors and Hamlet go in the middle, facing each other. Hamlet and the Actors are talking without voice]</span></i></b></small><br>
                    <br><b>Narrator 3</b>: “One day a group of actors come to the castle and Hamlet makes a plan. He asks the actors to change their play. The new play will show a king poisoned like Hamlet’s father.” <br>
                    <br><small><b><i><span class=”directions”>[Hamlet steps in the middle, facing the public]</span></i></b></small><br>
                    <br><b>Hamlet</b>: “With this play I will catch the king.” <br>
                    <br><small><b><i><span class=”directions”>[Hamlet goes besides the Narrator and looks at the scene. Claudius enters and sits in the middle of the right side of the stage, looking at the Actors. Actor 1 gives a cup to Actor 2, who drinks from the cup and falls dead on the floor]</span></i></b></small><br>
                    <br><b>Narrator 3</b>: “When Claudius watches the play he looks very worried and runs away. Hamlet sees him and he knows the truth.” <br>
                    <br><small><b><i><span class=”directions”>[Claudius looks around him, very worried, then stands up and runs out of the scene. Hamlet runs near the Actors and points with his finger at the exit from where Claudius ran away]</span></i></b></small><br>
                    <br><b>Hamlet</b>: “I knew it!” <br>
                    <br><small><b><i><span class=”directions”>[Everybody leaves]</span></i></b></small><br>
                    <br><br>
                    <h5>Scene 4</h5><br>
                    <small><b><i><span class=”directions”>[Narrator 4 goes in the left front corner of the main stage. Hamlet goes near the Narrator, while Claudius and Laertes go to the middle of the stage, talking at a low voice – indistinctly]</span></i></b></small><br>
                    <br><b>Narrator 4</b>: “Claudius is very worried about Hamlet now and makes a plan with Ophelia’s brother, Laertes.” <br>
                    <b>Claudius</b>: “You will fight him and we will put poison on the sword and in his drink too.” <br>
                    <br><small><b><i><span class=”directions”>[Gertude enters and sits in the right side of the stage. Claudius goes in the right side of the stage, sitting next to Gertrude, while Hamlet goes in the middle and starts fighting Laertes with swords]</span></i></b></small><br>
                    <br><b>Narrator 4</b>: “Laertes and Hamlet fight. Laertes cuts Hamlet, but in the fight Hamlet takes Laertes’ sword and cuts him with it too!” <br>
                    <br><small><b><i><span class=”directions”>[Laertes cuts Hamlet. Hamlet touches the cut on his body, takes Laertes' sword and cuts him. Laertes lays down and slowly dies]</span></i></b></small><br>
                    <br><b>Gertrude</b>: “Here, Hamlet, drink this.” <br>
                    <br><small><b><i><span class=”directions”>[Gertrude takes a cup in her hand]</span></i></b></small><br>
                    <br><b>Hamlet</b>: “No, thank you, Mother. I’m not thirsty.” <br>
                    <br><small><b><i><span class=”directions”>[Gertrude drinks from the cup. Claudius looks at her]</span></i></b></small><br>
                    <br><b>Claudius</b>: “NO, don’t!” <br>
                    <br><small><b><i><span class=”directions”>[Gertrude suffocates and dies]</span></i></b></small><br>
                    <br><b>Hamlet</b>: “It was him! He poisoned us all!” <br>
                    <b>Narrator 4</b>: “Finally, Hamlet knows he must stop Claudius.” <br>
                    <br><small><b><i><span class=”directions”>[Hamlet goes to Claudius and kills him with the sword. Claudius dies. Hamlet falls on his knees and lays down pushing the hands on the cut on his body. Horatio enters the scene running to help Hamlet. He sits down next to Hamlet and touches his hands]</span></i></b></small><br>
                    <br><b>Narrator 4</b>: “All the royal family are now poisoned and Hamlet tells his friend that there must be a new king.”<br>
                    <b>Horatio</b>: “Goodbye, my prince.” <br>
                    <br><small><b><i><span class=”directions”>[Curtain closes]</span></i></b></small>                
                </p>
            </div>  
        </div>    
    </div>
    `;
}