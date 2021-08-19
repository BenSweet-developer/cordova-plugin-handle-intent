import { IIntentData } from './IIntentData';
import { EResultCode } from './EResultCode';

/**
 * @name HandleIntent
 * @description
 * Get intent data of activity and set result for the activity
 * 
 * @interface
 * IIntentData
 * 
 * @enum
 * EResultCode
 */
export declare class HandleIntentPlugin {

    constructor();

    /**
     * Send a JSON representation of the cordova intent back to the caller
     */
    getCordovaIntent(): Promise<IIntentData>;

    /**
     * Set result for startActivityForResult
     */
    setResultAndFinishActivity(resultCode: EResultCode, message: string): Promise<void>;
}