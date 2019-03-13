import { from, fromEvent, Observable } from 'rxjs'
import { map, take, scan } from 'rxjs/operators'

export function addObserver(observer) {
    return new Observable(observer)
}

export function addListener(element, event) {
    return fromEvent(element, event)
        .pipe(
            scan(countEvents => countEvents + 1, 0)
        )
        .subscribe((countEvents) => console.log('element -> ', element, 'event -> ', event, 'counted -> ', countEvents));
}

