import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const filterBy = args[0].toLocaleLowerCase();
    return value.filter((item) => item.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
