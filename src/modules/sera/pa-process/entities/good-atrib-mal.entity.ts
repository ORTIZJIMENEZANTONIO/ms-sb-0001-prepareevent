import { Column, Entity, Index } from 'typeorm';

//@Index('bien_atrib_mal_pkey', ['motivo', 'noBien', 'par1', 'par2'], {
//  unique: true,
//})
@Entity('bien_atrib_mal', { schema: 'sera' })
export class GoodAtribMalEntity {
  @Column('numeric', {
    primary: true,
    name: 'no_bien',
    precision: 10,
    scale: 0,
  })
  id: number;

  @Column('character varying', { primary: true, name: 'motivo', length: 1000 })
  reason: string;

  @Column('numeric', { primary: true, name: 'par1', precision: 10, scale: 0 })
  par1: number;

  @Column('numeric', { primary: true, name: 'par2', precision: 10, scale: 0 })
  par2: number;

  @Column('character varying', { name: 'par3', nullable: true, length: 30 })
  par3: string | null;

  @Column('numeric', { name: 'par4', nullable: true, precision: 10, scale: 0 })
  par4: number | null;
}
