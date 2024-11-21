import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/user';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: true,
})
export class SortPipe implements PipeTransform {
  transform(arr: User[], compareField: keyof User): User[] {
    arr.sort(
      (a: User, b: User) => Number(a[compareField]) - Number(b[compareField])
    );
    return arr;
  }
}
