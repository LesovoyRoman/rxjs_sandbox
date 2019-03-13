import { observeArray, addListener } from './rx'

export default class CustomFunctions {
    static rxObserveArray = (elements) => observeArray(elements)
    static rxAddListener = (element, event) => addListener(element, event);
}