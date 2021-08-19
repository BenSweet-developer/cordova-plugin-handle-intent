# Cordova plugin for Handle Intent Started by startActivity and set results for startActivityForResults (Android Only)

This plugin allows you to add functionality for receiving Intent data and sent result to launched app.

By default the launch mode of the MainActivity of cordova based applications is set to "singleTop". This is ok for most situations. However you may prefer having the launch mode set to "singleTask" instead. Please read this article to get an idea about the different launch modes: https://www.mobomo.com/2011/06/android-understanding-activity-launchmode/
 
Setting the launch mode to "singleTask" ensures that your app cannot run in multiple instances as it might happen if launch mode is set to "singleTop" for example if your application is already running and you try to share a webpage from the browser to it.

Cordova >= 6.0.0 apparently requires the launchMode to be set in ``config.xml`` as well:
```xml
<platform name="android">
    ...
    <preference name="AndroidLaunchMode" value="singleTask"/>
</platform>
```

## Installation

Add the plugin to your project using Cordova CLI:

```bash
cordova plugin add https://github.com/BenSweet-developer/cordova-plugin-handle-intent.git
```

## Usage

```ts
window.plugins.intentHandler.getCordovaIntent(function (intent) {}, function (error) {});

Callback 2
@param error: string

Callback 1
@param intent: IIntentData
interface IIntentData {
    type?: string,
    action?: string,
    extras?: {[key: string]: any},
    categories?: Set<string>,
    flags?: number,
    component?: string,
    data?: string,
    package?: string,
}
```

#### @param error: string

```ts
window.plugins.intentHandler.setResultAndFinishActivity(resultCode, message, function () {}, function (error) {});

Callback 2
@param error: string

Callback 1
@param resultCode: EResultCode
enum EResultCode {
    RESULT_OK = -1,
    RESULT_CANCELED = 0,
    RESULT_VALIDATION_FAILED = 1
}
@param message: string
```

## Example Intent passed from plugin

```json
{
    "action": "<Somethings>",
    "flags": 0,
    "type": "<something>",
    "component": "ComponentInfo{com.example.myapplication/com.example.myapplication.MainActivity}",
    "extras": {
      "key1": "value1",
      "key2": "value2"
    }
}
```

While this example shows an JSON representation, you'll actually receive a ready-to-use object (of course with the attributes shown above).

## Methods

### getCordovaIntent() - Android
Get limited access to intent properties


### Supported Platforms

- Android (>= API Level 19 / Kitkat)


### Basic example

#### Get cordova intent

```js
document.addEventListener('deviceReady', function(){
    window.plugins.intentHandler.getCordovaIntent(function (Intent) {
        console.log(Intent);
    }, function (error) {
        console.log(`error: ${error}`);
    });
}
```

#### Set result for startActivityForResult and finish
```js
document.addEventListener('deviceReady', function(){
    window.plugins.intentHandler.setResultAndFinishActivity(-1, '<message>', function () {}, function (error) {
      console.log(`error: ${error}`);
    });
}
```

## Limitations

The plugin is a bare-bones implementation to help me with __my__ projects. The intent passed to JavaScript is not a complete serialized object. The code should receive some refactorings and would benefit from a better JSON library like gson or similar.