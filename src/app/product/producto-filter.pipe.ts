import { Pipe, PipeTransform } from '@angular/core';
import { Productos } from './productos';

@Pipe({
  name: 'productoFilter'
})
export class ProductoFilterPipe implements PipeTransform {

  transform(value: Productos[],args: string): Productos[] {
    let filter:string=args ?args.toLocaleLowerCase():"";
    return filter? value.filter((product:Productos)=>product.Marca.toLocaleLowerCase().indexOf(filter)!=-1):value;
  }

}
