import { from, fromEvent } from 'rxjs'
import { map, take, scan } from 'rxjs/operators'

export function observeArray(array) {
    return from(array)
        .subscribe(val => console.log('val -> ', val));
}

export function addListener(element, event) {
    return fromEvent(element, event)
        .pipe(
            scan(countEvents => countEvents + 1, 0)
        )
        .subscribe((countEvents) => console.log('element -> ', element, 'event -> ', event, 'counted -> ', countEvents));
}

