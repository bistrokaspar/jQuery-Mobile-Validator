/**
 * jQuery Mobile extensions for the jQuery validate plugin.
 * Lee Powers March 2012
 */
(function ($) {
    // Handle specially-formatted jQuery mobile form elements
    jQuery.validator.setDefaults({
        errorPlacement: function (label, element) {
            switch (element[0].tagName.toUpperCase()) {
                case 'SELECT':
                    // Insert label at the end of the select's parent UI
                    label.appendTo(element.closest('.ui-select'));
                    break;
                default:
                    // Use default functionality
                    label.insertAfter(element);
            }
        }
    });
})(jQuery);