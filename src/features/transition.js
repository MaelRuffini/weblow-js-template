function transition ()
{
    
    let transitionTrigger = $(".transition_trigger");
    let introDurationMS = 0;
    let exitDurationMS = 1200;
    let excludedClass = "no-transition";
      
    // On Page Load
    if (transitionTrigger.length > 0) {
        transitionTrigger.click();
    }
    
    // On Link Click
    $("a").on("click", function (e) {
      if ($(this).prop("hostname") == window.location.host && $(this).attr("href").indexOf("#") === -1 &&
          !$(this).hasClass(excludedClass) && $(this).attr("target") !== "_blank" && transitionTrigger.length > 0) {
        e.preventDefault();
        let transitionURL = $(this).attr("href");
        transitionTrigger.click();
        setTimeout(function () {window.location = transitionURL;}, exitDurationMS);
      }
    });
    
    // On Back Button Tap
    window.onpageshow = function(event) {if (event.persisted) {window.location.reload()}};
    // Hide Transition on Window Width Resize
    setTimeout(() => {$(window).on("resize", function () {
    setTimeout(() => {$(".transition_wrapper").css("display", "none");}, 50);});
    }, introDurationMS);
    
    
    // Disable scroll 
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.menu-toggle').forEach(trigger => {
            trigger.addEventListener('click', function(){ 
                this.x = ((this.x || 0) + 1)%2; 
               if(this.x){ 
              document.querySelectorAll('body').forEach(target => target.classList.add('disable-scroll'));
          }
          else{ 
              document.querySelectorAll('body').forEach(target => target.classList.remove('disable-scroll'));
          } 
        });
     });
    });

}
  
export default transition