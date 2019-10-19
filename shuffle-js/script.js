var Shuffle = window.Shuffle;
var element = document.querySelector('.my-shuffle-container');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
    itemSelector: '.picture-item',
    sizer: sizer // could also be a selector: '.my-sizer-element'
});
// shuffleInstance.filter('video');
$("#alle").on("click", function () {
    shuffleInstance.filter();
});
$("#btn-video").on("click", function () {
    shuffleInstance.filter('video');
});
$("#btn-webdesign").on("click", function () {
    shuffleInstance.filter('webdesign');
});
$("#btn-grafiskdesign").on("click", function () {
    shuffleInstance.filter('grafiskdesign');
});
