import { addObserver, addListener, addSubject } from './rx'

export default class CustomFunctions {
    static rxObserver = (observer) => addObserver(observer)
    static rxAddListener = (element, event) => addListener(element, event);
    static rxAddSubject = () => addSubject();
}