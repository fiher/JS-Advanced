/**
 * Created by Lucifer on 24-Oct-16.
 */
function AttachEvents() {
    $('a.button').on('click',buttonClicked);
    function buttonClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}