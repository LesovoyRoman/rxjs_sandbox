import { from, fromEvent, Observable, Subject } from 'rxjs'
import { map, take, scan } from 'rxjs/operators'

export function addObserver(observer) {
    return new Observable(observer)
}

export function addSubject() {
    return new Subject()
}

export function addListener(element, event) {
    return fromEvent(element, event)
        .pipe(
            scan(countEvents => countEvents + 1, 0)
        )
        .subscribe((countEvents) => console.log('element -> ', element, 'event -> ', event, 'counted -> ', countEvents));
}

