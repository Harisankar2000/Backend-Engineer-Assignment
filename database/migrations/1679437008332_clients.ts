import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('client_number').notNullable()
      table.string('legal_name').notNullable()
      table.string('client_type').notNullable()
      table.string('email').nullable().defaultTo(null)
      table.string('phone').nullable().defaultTo(null)
      table.string('gstin').nullable().defaultTo(null)
      table.string('pan').nullable().defaultTo(null)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
