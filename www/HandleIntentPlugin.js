var exec = require('cordova/exec');

function HandleIntentPlugin() {
    'use strict';
}

/**
 * Send a JSON representation of the cordova intent back to the caller
 * 
 * @param successCallback Function(intendData: IIntentData): void
 * @param errorCallback Function(error: string): void
 */
HandleIntentPlugin.prototype.getCordovaIntent = function(successCallback, failureCallback) {
    'use strict';

    return exec (
        successCallback,
        failureCallback,
        "HandleIntentPlugin",
        "getCordovaIntent",
        []
    );
};

/**
 * Set result for startActivityForResult
 * @param resultCode {EResultCode}
 * @param message {string}
 * @param successCallback Function(): void
 * @param errorCallback Function(error: string): void
 */
HandleIntentPlugin.prototype.setResultAndFinishActivity = function(resultCode, message, successCallback, failureCallback) {
    'use strict';

    return exec (
        successCallback,
        failureCallback,
        "HandleIntentPlugin",
        "setResultAndFinishActivity",
        [resultCode, message]
    );
};

var handleIntentPluginInstance = new HandleIntentPlugin();
module.exports = handleIntentPluginInstance;

// Make plugin work under window.plugins
if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.intentHandler) {
    window.plugins.intentHandler = handleIntentPluginInstance;
}