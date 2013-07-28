/*
 * Leandigo - Crafting Ideas. Creating Awesome Web Applications.
 * -------------------------------------------------------------
 * elShaker - A jQuery plugin for simple element shaking. Can be
 * used to visualize a wrong input for example.
 */

jQuery.fn.shake = function(options) {
    // Options and Defaults:
    // Total number of shakes
    options.shakes      = options.shakes    || 3;
    // Shake distance
    options.distance    = options.distance  || 10;
    // Total shakes duration
    options.duration    = options.duration  || 500;

    this.each(function() {
        $(this).css('position', 'relative');
        for (var x = 1; x <= options.shakes; x++) {
            $(this).animate({left:(options.distance*-1)}, (((options.duration/options.shakes)/4)))
                   .animate({left:options.distance}, ((options.duration/options.shakes)/2))
                   .animate({left:0}, (((options.duration/options.shakes)/4)));
        }
    });
    return this;
};