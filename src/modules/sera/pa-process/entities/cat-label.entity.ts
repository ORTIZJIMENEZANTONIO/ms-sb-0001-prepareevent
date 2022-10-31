import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cat_etiqueta_bien', { schema: 'sera' })
export class CatLabelEntity {
  @PrimaryGeneratedColumn({ type: 'int4', name: 'no_etiqueta' })
  id: number;
  @Column('character varying', { name: 'descripcion', length: 100 })
  description: string;
}
