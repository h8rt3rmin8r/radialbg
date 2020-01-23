/*
 * togglebg.js
 *
 *   Toggle RadialBG background styles
 *   Created on 20200123 by h8rt3rmin8r
 * 
*/

function sleep(ms) {
    /* General "sleep" function
     *
     * USAGE:
     *
     *    sleep(<MS>).then(() => {<STUFF>});
     * 
     *     where "MS" is a number of microseconds, and where "STUFF" is
     *     an action to execute after "MS" (amount of time) has expired
     * 
     */
    return new Promise(resolve => setTimeout(resolve, ms));
}

function lastClassFindRemove() {
    /* Find and remove the last class tag attached to the element with
     * an id of "bgTarget".
     *
     * USAGE:
     * 
     *   lastClassFindRemove();
     *
     */
    function lastClassRemove(rmClass) {
        // remove an input class from the element with an id "bgTarget"
        var element = document.getElementById("bgTarget");
        element.classList.remove(rmClass);
    }
    // find the last class property of the body tag
    var classStr = $('#bgTarget').attr('class'),
        lastClass = classStr.substr(classStr.lastIndexOf(' ') + 1);
    // remove the target class
    lastClassRemove(lastClass);
}

function bgFadeOutRun() {
    /* Append the "transition" class to the HTML element with an id
     * of "bgTarget" (causes fade-out).
     *
     * Requires the following CSS to be defined:
     *   #bgTarget {
     *     display: flex;
     *     justify-content: center;
     *     align-items: center;
     *     -webkit-transition: all 1s linear;
     *     -moz-transition: all 1s linear;
     *     -o-transition: all 1s linear;
     *     transition: all 1s linear;
     *  }
     *
     *  #bgTarget.transition {
     *    background: black;
     *  }
     * 
     * USAGE:
     * 
     *   bgFadeOutRun();
     * 
     */
    $("#bgTarget").toggleClass("transition");
}

function bgFadeIn(newClass) {
    /* Replace "transition" class with an unknown input class
     *
     * USAGE:
     * 
     *   bgFadeIn(<newClass>);
     * 
     *   where "newClass" is the new class tag to substitute in
     *   as a replacement for the class tag "transition".
     */
    var element = document.getElementById("bgTarget");
    element.className = element.className.replace(/\btransition\b/g, newClass);
}

function bgTransition(pendClass) {
    /* Transition the class of the element with an id of "bgTarget" to
     * an unknown input class name ("pendClass").
     * 
     * USAGE:
     * 
     *   onclick='bgTransition("<pendClass>");'
     * 
     *   where "pendClass" is a new class name to transition into
     */
    lastClassFindRemove();
    sleep(200).then(() => {
        bgFadeOutRun();
    });
    sleep(900).then(() => {
        bgFadeIn(pendClass);
    });

}
