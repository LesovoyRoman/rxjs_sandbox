import { addObserver, addListener } from './rx'

export default class CustomFunctions {
    static rxObserveArray = (observer) => addObserver(observer)
    static rxAddListener = (element, event) => addListener(element, event);
}