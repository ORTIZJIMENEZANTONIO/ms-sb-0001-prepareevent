import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity('expedientes', { schema: 'sera' })
export class FilesEntity {
  
  @PrimaryGeneratedColumn({
    name: 'no_expediente',
  })
  id: number;

  @Column({ type: Date, name: 'fec_acuerdo_aseg', nullable: true })
  agreementAsegDate: Date | null;

  @Column('character varying', { name: 'prevision', nullable: true, length: 1 })
  foresight: string | null;

  @Column({ type: Date, name: 'fec_prevision', nullable: true })
  foresightDate: Date | null;

  @Column('character varying', {
    name: 'articulo_validado',
    nullable: true,
    length: 1,
  })
  validatedItem: string | null;

  @Column({ type: Date, name: 'fec_fe_ministerial', nullable: true })
  ministerialFeDate: Date | null;

  @Column('character varying', {
    name: 'acta_fe_ministerial',
    nullable: true,
    length: 30,
  })
  ministerialFeAct: string | null;

  @Column({ type: Date, name: 'fec_dictamina', nullable: true })
  dictumDate: Date | null;

  @Column('numeric', {
    name: 'no_bateria',
    nullable: true,
    precision: 5,
    scale: 0,
  })
  bateryNumber: number | null;

  @Column('numeric', {
    name: 'no_casillero',
    nullable: true,
    precision: 5,
    scale: 0,
  })
  lockerNumber: number | null;

  @Column('numeric', {
    name: 'no_estante',
    nullable: true,
    precision: 5,
    scale: 0,
  })
  shelfNumber: number | null;

  @Column('numeric', {
    name: 'no_juzgado',
    nullable: true,
    precision: 5,
    scale: 0,
  })
  judgedNumber: number | null;

  @Column('character varying', {
    name: 'observaciones_prevision',
    nullable: true,
    length: 1000,
  })
  foresighttObservation: string | null;

  @Column('character varying', {
    name: 'insertado_por',
    nullable: true,
    length: 20,
  })
  insertedBy: string | null;

  @Column('character varying', {
    name: 'observaciones',
    nullable: true,
    length: 1000,
  })
  observations: string | null;

  @Column('character varying', {
    name: 'metodo_insercion',
    nullable: true,
    length: 30,
  })
  insertMethod: string | null;

  @Column({ type: Date, name: 'fec_insercion', nullable: true })
  insertDate: Date | null;

  @Column({ type: Date, name: 'fec_recepcion_sera', nullable: true })
  seraReceptionDate: Date | null;

  @Column('character varying', {
    name: 'causa_penal',
    nullable: true,
    length: 40,
  })
  penaltyCause: string | null;

  @Column('character varying', {
    name: 'averiguacion_previa',
    nullable: true,
    length: 200,
  })
  preliminaryInquiry: string | null;

  @Column('character varying', {
    name: 'cve_amparo',
    nullable: true,
    length: 100,
  })
  shelterKey: string | null;

  @Column('character varying', {
    name: 'cve_delito',
    nullable: true,
    length: 15,
  })
  crimeKey: string | null;

  @Column('character varying', {
    name: 'acta_circunstanciada',
    nullable: true,
    length: 30,
  })
  circumstantialRecord: string | null;

  @Column('character varying', {
    name: 'cve_toca_penal',
    nullable: true,
    length: 30,
  })
  penaltyTocaKey: string | null;

  @Column('character varying', {
    name: 'nombre_institucion',
    nullable: true,
    length: 100,
  })
  institutionName: string | null;

  @Column('character varying', {
    name: 'nombre_juzgado',
    nullable: true,
    length: 100,
  })
  judgeName: string | null;

  @Column('character varying', {
    name: 'nombre_mp',
    nullable: true,
    length: 100,
  })
  mpName: string | null;

  @Column('character varying', {
    name: 'cve_guardavalor',
    nullable: true,
    length: 5,
  })
  valueSaveKey: string | null;

  @Column('character varying', {
    name: 'nombre_indiciado',
    nullable: true,
    length: 1000,
  })
  indicatedName: string | null;

  @Column('character varying', {
    name: 'autoridad_ordena_dictamen',
    nullable: true,
    length: 200,
  })
  dictumOrderAuthority: string | null;

  @Column({ type: Date, name: 'fec_notificacion', nullable: true })
  notifyDate: Date | null;

  @Column('character varying', {
    name: 'notificado_a',
    nullable: true,
    length: 100,
  })
  notifyA: string | null;

  @Column('character varying', {
    name: 'lugar_notificacion',
    nullable: true,
    length: 300,
  })
  notifyPlace: string | null;

  @Column({ type: Date, name: 'fec_decomiso_dictaminacion', nullable: true })
  confiscationRulerDate: Date | null;

  @Column({ type: Date, name: 'fec_devolucion_dictaminacion', nullable: true })
  returnRulerDate: Date | null;

  @Column({ type: Date, name: 'fec_enajenacion', nullable: true })
  alienationDate: Date | null;

  @Column('character varying', {
    name: 'cve_entfed',
    nullable: true,
    length: 15,
  })
  entfedKey: string | null;

  @Column({ type: Date, name: 'fec_recrev_dictaminacion', nullable: true })
  rulerRecrevDate: Date | null;

  @Column('numeric', { name: 'no_registro', nullable: true })
  registerNumber: number | null;

  @Column({ type: Date, name: 'fec_destruccion', nullable: true })
  destructionDate: Date | null;

  @Column({ type: Date, name: 'fec_donacion', nullable: true })
  donationDate: Date | null;

  @Column({ type: Date, name: 'fec_acuerdo_inicial', nullable: true })
  initialAgreementDate: Date | null;

  @Column('character varying', {
    name: 'acuerdo_inicial',
    nullable: true,
    length: 1000,
  })
  initialAgreement: string | null;

  @Column('character varying', {
    name: 'estatus_expediente',
    nullable: true,
    length: 10,
  })
  status: string | null;

  @Column('character varying', {
    name: 'identificador',
    nullable: true,
    length: 5,
  })
  identifier: string | null;

  @Column('character varying', { name: 'es_delit', nullable: true, length: 1 })
  esDelit: string | null;

  @Column('numeric', {
    name: 'no_transferente',
    nullable: true,
    precision: 5,
    scale: 0,
  })
  transferentNumber: number | null;

  @Column('character varying', {
    name: 'no_exp_transferentes',
    nullable: true,
    length: 400,
  })
  expTransferentNumber: string | null;

  @Column('character varying', {
    name: 'tipo_expediente',
    nullable: true,
    length: 2,
  })
  type: string | null;

  @Column('numeric', {
    name: 'no_emisora',
    nullable: true,
    precision: 5,
    scale: 0,
  })
  senderNumber: number | null;

  @Column('numeric', {
    name: 'no_autoridad',
    nullable: true,
    precision: 5,
    scale: 0,
  })
  authorityNumber: number | null;

  @Column({ type: Date, name: 'fec_insercion_hc', nullable: true })
  insertHcDate: Date | null;
}
