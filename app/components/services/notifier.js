
'use strict';

// Display a warning toast, with no title
//toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

// Display a success toast, with a title
//toastr.success('Have fun storming the castle!', 'Miracle Max Says')

// Display an error toast, with a title
//toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

// Clears the current list of toasts
//toastr.clear()

var notifier = function (toastr) {
    var toastr = toastr;
    return {
        success: function (text) {
            toastr.success(text,"Success", { closeButton : true});
        },
        error: function (text) {
            toastr.error(text, "Error",{ closeButton : true});
        },
        info: function (text) {
            toastr.info(text, "Info",{ closeButton : true});
        }
    };
};

module.exports = notifier;