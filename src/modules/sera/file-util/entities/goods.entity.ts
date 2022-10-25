import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Entity("bienes", { schema: "sera" })
export class GoodsEntity {
  @PrimaryColumn({
    name: "no_bien",
  })
  id: number;

  @Column("character varying", {
    name: "no_inventario",
    nullable: true,
    length: 30,
  })
  inventoryNumber: string | null;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 1250,
  })
  description: string | null;

  @Column("numeric", {
    name: "cantidad",
    nullable: true,
    precision: 19,
    scale: 3,
  })
  quantity: number | null;

  @Column({ type: Date, name: "fec_entrada", nullable: true })
  dateIn: Date | null;

  @Column({ type: Date, name: "fec_salida", nullable: true })
  dateOut: Date | null;

  @Column({ type: Date, name: "fec_vencim", nullable: true })
  expireDate: Date | null;

  @Column("character varying", {
    name: "tipo_ubicacion",
    nullable: true,
    length: 1,
  })
  ubicationType: string | null;

  @Column("character varying", { name: "estatus", nullable: true, length: 3 })
  status: string | null;

  @Column("character varying", { name: "val1", nullable: true, length: 200 })
  val1: string | null;

  @Column("character varying", { name: "val2", nullable: true, length: 200 })
  val2: string | null;

  @Column("character varying", { name: "val3", nullable: true, length: 80 })
  val3: string | null;

  @Column("character varying", { name: "val4", nullable: true, length: 80 })
  val4: string | null;

  @Column("character varying", { name: "val5", nullable: true, length: 160 })
  val5: string | null;

  @Column("character varying", { name: "val6", nullable: true, length: 80 })
  val6: string | null;

  @Column("character varying", { name: "val7", nullable: true, length: 80 })
  val7: string | null;

  @Column("character varying", { name: "val8", nullable: true, length: 80 })
  val8: string | null;

  @Column("character varying", { name: "val9", nullable: true, length: 80 })
  val9: string | null;

  @Column("character varying", { name: "val10", nullable: true, length: 80 })
  val10: string | null;

  @Column("character varying", { name: "val11", nullable: true, length: 80 })
  val11: string | null;

  @Column("character varying", { name: "val12", nullable: true, length: 80 })
  val12: string | null;

  @Column("character varying", { name: "val13", nullable: true, length: 80 })
  val13: string | null;

  @Column("character varying", { name: "val14", nullable: true, length: 80 })
  val14: string | null;

  @Column("character varying", { name: "val15", nullable: true, length: 80 })
  val15: string | null;

  @Column("character varying", { name: "val16", nullable: true, length: 80 })
  val16: string | null;

  @Column("character varying", { name: "val17", nullable: true, length: 80 })
  val17: string | null;

  @Column("character varying", { name: "val18", nullable: true, length: 80 })
  val18: string | null;

  @Column("character varying", { name: "val19", nullable: true, length: 80 })
  val19: string | null;

  @Column("character varying", { name: "val20", nullable: true, length: 80 })
  val20: string | null;

  @Column("character varying", { name: "val21", nullable: true, length: 80 })
  val21: string | null;

  @Column("character varying", { name: "val22", nullable: true, length: 80 })
  val22: string | null;

  @Column("character varying", { name: "val23", nullable: true, length: 80 })
  val23: string | null;

  @Column("character varying", { name: "val24", nullable: true, length: 80 })
  val24: string | null;

  @Column("character varying", { name: "val25", nullable: true, length: 80 })
  val25: string | null;

  @Column("character varying", { name: "val26", nullable: true, length: 80 })
  val26: string | null;

  @Column("character varying", { name: "val27", nullable: true, length: 200 })
  val27: string | null;

  @Column("character varying", { name: "val28", nullable: true, length: 200 })
  val28: string | null;

  @Column("character varying", { name: "val29", nullable: true, length: 80 })
  val29: string | null;

  @Column("character varying", { name: "val30", nullable: true, length: 80 })
  val30: string | null;

  @Column("character varying", { name: "val31", nullable: true, length: 80 })
  val31: string | null;

  @Column("character varying", { name: "val32", nullable: true, length: 80 })
  val32: string | null;

  @Column("character varying", { name: "val33", nullable: true, length: 80 })
  val33: string | null;

  @Column("character varying", { name: "val34", nullable: true, length: 500 })
  val34: string | null;

  @Column("character varying", { name: "val35", nullable: true, length: 80 })
  val35: string | null;

  @Column("character varying", { name: "val36", nullable: true, length: 80 })
  val36: string | null;

  @Column("character varying", { name: "val37", nullable: true, length: 80 })
  val37: string | null;

  @Column("character varying", { name: "val38", nullable: true, length: 80 })
  val38: string | null;

  @Column("character varying", { name: "val39", nullable: true, length: 80 })
  val39: string | null;

  @Column("character varying", { name: "val40", nullable: true, length: 80 })
  val40: string | null;

  @Column("character varying", {
    name: "clasificacion_bien",
    nullable: true,
    length: 500,
  })
  goodCategory: string | null;

  @Column("character varying", {
    name: "senalamientos_origen",
    nullable: true,
    length: 500,
  })
  originSignals: string | null;

  @Column("character varying", {
    name: "sol_inscr_registro",
    nullable: true,
    length: 1,
  })
  registerInscrSol: string | null;

  @Column({ type: Date, name: "fec_dictamen", nullable: true })
  dateOpinion: Date | null;

  @Column("character varying", {
    name: "perito_dictamen",
    nullable: true,
    length: 30,
  })
  proficientOpinion: string | null;

  @Column("character varying", {
    name: "valuador_dictamen",
    nullable: true,
    length: 60,
  })
  valuerOpinion: string | null;

  @Column("character varying", {
    name: "dictamen",
    nullable: true,
    length: 500,
  })
  opinion: string | null;

  @Column("numeric", {
    name: "valor_avaluo",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  appraisedValue: number | null;

  @Column("numeric", {
    name: "no_gaveta",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  drawerNumber: number | null;

  @Column("numeric", {
    name: "no_boveda",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  vaultNumber: number | null;

  @Column("numeric", {
    name: "no_bien_referencia",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  goodReferenceNumber: number | null;

  @Column("character varying", {
    name: "cve_moneda_avaluo",
    nullable: true,
    length: 15,
  })
  appraisalCurrencyKey: string | null;

  @Column({ type: Date, name: "fec_avaluo_vig", nullable: true })
  appraisalVigDate: Date | null;

  @Column("character varying", {
    name: "aprob_dest_legal",
    nullable: true,
    length: 1,
  })
  legalDestApprove: string | null;

  @Column("character varying", {
    name: "usr_aprobo_dest_legal",
    nullable: true,
    length: 30,
  })
  legalDestApproveUsr: string | null;

  @Column({ type: Date, name: "fec_aprobo_dest_legal", nullable: true })
  legalDestApproveDate: Date | null;

  @Column({ type: Date, name: "fec_cumplimiento_abandono", nullable: true })
  complianceLeaveDate: Date | null;

  @Column({ type: Date, name: "fec_notificacion_abandono", nullable: true })
  complianceNotifyDate: Date | null;

  @Column("character varying", {
    name: "observaciones_abandono",
    nullable: true,
    length: 1000,
  })
  leaveObservations: string | null;

  @Column({ type: Date, name: "fec_conf_abandono_judicial", nullable: true })
  judicialLeaveDate: Date | null;

  @Column({ type: Date, name: "fec_notificacion", nullable: true })
  notifyDate: Date | null;

  @Column("character varying", {
    name: "notificado_a",
    nullable: true,
    length: 100,
  })
  notifyA: string | null;

  @Column("character varying", {
    name: "lugar_notificacion",
    nullable: true,
    length: 300,
  })
  placeNotify: string | null;

  @Column({
    type: Date,
    name: "fec_res_desecha_desech_rec_rev",
    nullable: true,
  })
  discardRevRecDate: Date | null;

  @Column({
    type: Date,
    name: "fec_emision_resolucion_rec_rev",
    nullable: true,
  })
  resolutionEmissionRecRevDate: Date | null;

  @Column({ type: Date, name: "fec_acuerdo_admisorio_rec_rev", nullable: true })
  admissionAgreementDate: Date | null;

  @Column({ type: Date, name: "fec_audiencia_rec_rev", nullable: true })
  audienceRevRecDate: Date | null;

  @Column("character varying", {
    name: "observaciones_rec_rev",
    nullable: true,
    length: 500,
  })
  revRecObservations: string | null;

  @Column("character varying", {
    name: "motivo_abandono",
    nullable: true,
    length: 15,
  })
  leaveCause: string | null;

  @Column("character varying", {
    name: "resolucion",
    nullable: true,
    length: 1000,
  })
  resolution: string | null;

  @Column({ type: Date, name: "fec_incosteabilidad", nullable: true })
  fecUnaffordability: Date | null;

  @Column("character varying", {
    name: "criterio_incosteabilidad",
    nullable: true,
    length: 60,
  })
  unaffordabilityJudgment: string | null;

  @Column("character varying", {
    name: "usr_aprobo_utilizacion",
    nullable: true,
    length: 30,
  })
  userApproveUse: string | null;

  @Column({ type: Date, name: "fec_aprobo_utilizacion", nullable: true })
  useApproveDate: Date | null;

  @Column("character varying", {
    name: "observaciones_utilizacion",
    nullable: true,
    length: 500,
  })
  useObservations: string | null;

  @Column({ type: Date, name: "fec_solic_cambio_numerario", nullable: true })
  dateRequestChangeNumerary: Date | null;

  @Column("character varying", {
    name: "usuario_solic_cambio_numerario",
    nullable: true,
    length: 30,
  })
  numberChangeRequestUser: string | null;

  @Column("character varying", {
    name: "motivo_cambio_numerario",
    nullable: true,
    length: 1000,
  })
  causeNumberChange: string | null;

  @Column("character varying", {
    name: "solicito_cambio_numerario",
    nullable: true,
    length: 1,
  })
  changeRequestNumber: string | null;

  @Column({ type: Date, name: "fec_autoriza_cambio_numerario", nullable: true })
  authNumberChangeDate: Date | null;

  @Column("character varying", {
    name: "usuario_autoriza_cambio_numera",
    nullable: true,
    length: 30,
  })
  authChangeNumberUser: string | null;

  @Column("character varying", {
    name: "autoriza_cambio_numerario",
    nullable: true,
    length: 1,
  })
  authChangeNumber: string | null;

  @Column({ type: Date, name: "fec_ratifica_cambio_numerario", nullable: true })
  numberChangeRatifiesDate: Date | null;

  @Column("character varying", {
    name: "usuario_ratifica_cambio_numera",
    nullable: true,
    length: 30,
  })
  numberChangeRatifiesUser: string | null;

  @Column({ type: Date, name: "fec_notificacion_rec_rev", nullable: true })
  notifyRevRecDate: Date | null;

  @Column("character varying", {
    name: "motivo_rec_rev",
    nullable: true,
    length: 1000,
  })
  revRecCause: string | null;

  @Column("character varying", {
    name: "acuerdo_inicial",
    nullable: true,
    length: 1000,
  })
  initialAgreement: string | null;

  @Column("character varying", {
    name: "observaciones",
    nullable: true,
    length: 600,
  })
  observations: string | null;

  @Column("numeric", {
    name: "no_expediente",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  fileNumber: number | null;

  @Column("numeric", {
    name: "no_exp_asociado",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  associatedFileNumber: number | null;

  @Column("numeric", {
    name: "no_rack",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  rackNumber: number | null;

  @Column("numeric", {
    name: "no_almacen",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  storeNumber: number | null;

  @Column("numeric", {
    name: "no_lote",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  lotNumber: number | null;

  @Column("numeric", { name: "no_clasif_bien", precision: 5, scale: 0 })
  goodClassNumber: number;

  @Column("numeric", {
    name: "no_subdelegacion",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  subDelegationNumber: number | null;

  @Column("numeric", {
    name: "no_delegacion",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  delegationNumber: number | null;

  @Column({ type: Date, name: "fec_recepcion_fisica", nullable: true })
  physicalReceptionDate: Date | null;

  @Column("character varying", {
    name: "estatus_recurso_revision",
    nullable: true,
    length: 45,
  })
  statusResourceReview: string | null;

  @Column({ type: Date, name: "fec_judicial", nullable: true })
  judicialDate: Date | null;

  @Column({ type: Date, name: "fec_vencimiento_abandono", nullable: true })
  abandonmentDueDate: Date | null;

  @Column({ type: Date, name: "fec_aprobo_destruccion", nullable: true })
  destructionApproveDate: Date | null;

  @Column("character varying", {
    name: "usr_aprobo_destruccion",
    nullable: true,
    length: 30,
  })
  destructionApproveUser: string | null;

  @Column("character varying", {
    name: "observaciones_destruccion",
    nullable: true,
    length: 500,
  })
  observationDestruction: string | null;

  @Column("numeric", {
    name: "no_destino",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  destinyNumber: number | null;

  @Column("numeric", { name: "no_registro", nullable: true })
  registryNumber: number | null;

  @Column({ type: Date, name: "fec_acuerdo_aseg", nullable: true })
  agreementDate: Date | null;

  @Column("character varying", {
    name: "tipo_dictamen",
    nullable: true,
    length: 3,
  })
  opinionType: string | null;

  @Column({ type: Date, name: "fec_presentacion", nullable: true })
  presentationDate: Date | null;

  @Column({ type: Date, name: "fec_subsana_rec_rev", nullable: true })
  revRecRemedyDate: Date | null;

  @Column("character varying", {
    name: "estatus_recepcion",
    nullable: true,
    length: 1,
  })
  receptionStatus: string | null;

  @Column("character varying", {
    name: "usuario_promovente_deco_devo",
    nullable: true,
    length: 30,
  })
  promoterUserDecoDevo: string | null;

  @Column({ type: Date, name: "fec_programada_x_deco_devo", nullable: true })
  scheduledDateDecoDev: Date | null;

  @Column("numeric", {
    name: "no_bien_padre_parcializacion",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  goodsPartializationFatherNumber: number | null;

  @Column("character varying", {
    name: "declaracion_abn_sera",
    nullable: true,
    length: 1000,
  })
  seraAbnDeclaration: string | null;

  @Column("character varying", {
    name: "identificador",
    nullable: true,
    length: 5,
  })
  identifier: string | null;

  @Column("character varying", {
    name: "id_inventari_siabi",
    nullable: true,
    length: 30,
  })
  siabiInventoryId: string | null;

  @Column("character varying", {
    name: "id_inmueble_cisi",
    nullable: true,
    length: 20,
  })
  cisiPropertyId: string | null;

  @Column("character varying", {
    name: "id_invactual_siabi",
    nullable: true,
    length: 25,
  })
  siabiInvalidId: string | null;

  @Column({ type: Date, name: "fecha_tesofe", nullable: true })
  tesofeDate: Date | null;

  @Column("character varying", {
    name: "folio_tesofe",
    nullable: true,
    length: 20,
  })
  tesofeFolio: string | null;

  @Column("numeric", {
    name: "situacion",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  situation: number | null;

  @Column("character varying", { name: "val41", nullable: true, length: 200 })
  val41: string | null;

  @Column("character varying", { name: "val42", nullable: true, length: 200 })
  val42: string | null;

  @Column("character varying", { name: "val43", nullable: true, length: 200 })
  val43: string | null;

  @Column("character varying", { name: "val44", nullable: true, length: 200 })
  val44: string | null;

  @Column("character varying", { name: "val45", nullable: true, length: 200 })
  val45: string | null;

  @Column("character varying", { name: "val46", nullable: true, length: 200 })
  val46: string | null;

  @Column("character varying", { name: "val47", nullable: true, length: 200 })
  val47: string | null;

  @Column("character varying", { name: "val48", nullable: true, length: 200 })
  val48: string | null;

  @Column("character varying", { name: "val49", nullable: true, length: 200 })
  val49: string | null;

  @Column("character varying", { name: "val50", nullable: true, length: 200 })
  val50: string | null;

  @Column("numeric", {
    name: "no_etiqueta",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  labelNumber: number | null;

  @Column("numeric", {
    name: "no_volante",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  flyerNumber: number | null;

  @Column({ type: Date, name: "fec_reg_insert", nullable: true })
  insertRegDate: Date | null;

  @Column("numeric", {
    name: "visportal",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  visportal: number | null;

  @Column("character varying", { name: "unidad", nullable: true, length: 10 })
  unit: string | null;

  @Column("numeric", {
    name: "valor_referencia",
    nullable: true,
    precision: 18,
    scale: 3,
  })
  referenceValue: number | null;

  @Column({ type: Date, name: "fec_reg_insert_hc", nullable: true })
  insertHcDate: Date | null;

  @Column("character varying", {
    name: "proceso_ext_dom",
    nullable: true,
    length: 15,
  })
  extDomProcess: string | null;
}
