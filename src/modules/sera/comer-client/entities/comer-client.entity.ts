import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("comer_clientes", { schema: "sera" })
export class ComerClientEntity {
  @ApiProperty({ example: "No. Cliente" })
  @PrimaryGeneratedColumn({
    name: "id_cliente",
  })
  id: number;

  @Column("character varying", { name: "nom_razon", length: 100 })
  reasonName: string;

  @Column("character varying", { primary: true, name: "rfc", length: 20 })
  rfc: string;

  @Column("numeric", {
    name: "id_vendedor",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  sellerId: number | null;

  @Column("character varying", { name: "calle", nullable: true, length: 80 })
  street: string | null;

  @Column("character varying", { name: "ciudad", nullable: true, length: 60 })
  city: string | null;

  @Column("character varying", { name: "colonia", nullable: true, length: 60 })
  colony: string | null;

  @Column("character varying", {
    name: "delegacion",
    nullable: true,
    length: 49,
  })
  delegation: string | null;

  @Column("character varying", { name: "cp", nullable: true, length: 6 })
  zipCode: string | null;

  @Column("character varying", { name: "pais", nullable: true, length: 22 })
  country: string | null;

  @Column("character varying", { name: "fax", nullable: true, length: 20 })
  fax: string | null;

  @Column("character varying", { name: "telefono", nullable: true, length: 60 })
  phone: string | null;

  @Column("character varying", {
    name: "correoweb",
    nullable: true,
    length: 60,
  })
  mailWeb: string | null;

  @Column("character varying", { name: "estado", nullable: true, length: 31 })
  state: string | null;

  @Column("character varying", { name: "curp", nullable: true, length: 20 })
  curp: string | null;

  @Column("character varying", {
    name: "lista_negra",
    nullable: true,
    length: 2,
    default: () => "'N'",
  })
  blackList: string | null;

  @Column("character varying", {
    name: "apellido_paterno",
    nullable: true,
    length: 60,
  })
  paternalSurname: string | null;

  @Column("character varying", {
    name: "apellido_materno",
    nullable: true,
    length: 60,
  })
  maternalSurname: string | null;

  @Column("numeric", {
    name: "muni_id",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  municipalityId: number | null;

  @Column("numeric", {
    name: "esta_id",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  stateId: number | null;

  @Column({ type: Date, name: "fecha_lista_negra", nullable: true })
  blackListDate: Date | null;

  @Column({ type: Date, name: "fecha_liberacion", nullable: true })
  releaseDate: Date | null;

  @Column("numeric", { name: "id_penalizacion", nullable: true })
  penaltyId: number | null;

  @Column("character varying", {
    name: "tipo_persona",
    nullable: true,
    length: 1,
  })
  personType: string | null;

  @Column("character varying", {
    name: "rfc_homologado",
    nullable: true,
    length: 15,
  })
  approvedRfc: string | null;

  @Column("character varying", {
    name: "usu_libera",
    nullable: true,
    length: 30,
  })
  userFree: string | null;

  @Column({ type: Date, name: "fec_libera", nullable: true })
  freeDate: Date | null;

  @Column("numeric", { name: "no_registro", nullable: true })
  registerNumber: number | null;

  @Column("character varying", {
    name: "cve_act_economica",
    nullable: true,
    length: 20,
  })
  economicAgreementKey: string | null;

  @Column("numeric", {
    name: "tipo_identificacion",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  identificationType: number | null;

  @Column("character varying", {
    name: "num_identificacion",
    nullable: true,
    length: 50,
  })
  identificationNumber: string | null;

  @Column("numeric", {
    name: "id_representante",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  agentId: number | null;

  @Column("character varying", {
    name: "no_exterior",
    nullable: true,
    length: 40,
  })
  outsideNumber: string | null;

  @Column("character varying", {
    name: "no_interior",
    nullable: true,
    length: 40,
  })
  insisdeNumber: string | null;

  @Column("character varying", { name: "password", nullable: true, length: 50 })
  password: string | null;

  @Column("character varying", { name: "usuario", nullable: true, length: 50 })
  user: string | null;

  @Column("character varying", {
    name: "clabe_interbancaria",
    nullable: true,
    length: 18,
  })
  interbankKey: string | null;

  @Column("character varying", { name: "banco", nullable: true, length: 3 })
  bank: string | null;

  @Column("character varying", { name: "sucursal", nullable: true, length: 10 })
  branch: string | null;

  @Column("character varying", {
    name: "cuenta_cheques",
    nullable: true,
    length: 11,
  })
  checksAccount: string | null;

  @Column({ type: Date, name: "fec_ini_penalizacion", nullable: true })
  penaltyInitDate: Date | null;

  @Column({ type: Date, name: "fec_fin_penalizacion", nullable: true })
  penaltyEndDate: Date | null;

  @Column("character varying", {
    name: "usu_penaliza",
    nullable: true,
    length: 30,
  })
  penalizeUser: string | null;
}
