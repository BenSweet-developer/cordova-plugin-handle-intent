export interface IIntentData {
    type?: string,
    action?: string,
    extras?: {[key: string]: any},
    categories?: Set<string>,
    flags?: number,
    component?: string,
    data?: string,
    package?: string,
}