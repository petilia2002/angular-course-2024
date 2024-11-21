import { Pipe, PipeTransform } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Pipe({
  name: 'cut',
  standalone: true,
  pure: true,
})
export class CutPipe implements PipeTransform {
  transform(value: string, maxLength: number = 100): string {
    if (value.length <= maxLength) {
      return value;
    } else {
      return value.slice(0, maxLength) + '...';
    }
  }
}
