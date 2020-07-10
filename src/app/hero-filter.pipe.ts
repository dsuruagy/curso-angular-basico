import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';

@Pipe({
  name: 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {

  transform(heroes: Hero[], term: string): Hero[] {
    let nameFilter = '';
    nameFilter = term && term.trim().toLocaleLowerCase();

    if(!nameFilter) {
      return heroes;
    }

    return heroes.filter(
      hero => hero.name.toLocaleLowerCase().indexOf(nameFilter) != -1
    )
  }

}
