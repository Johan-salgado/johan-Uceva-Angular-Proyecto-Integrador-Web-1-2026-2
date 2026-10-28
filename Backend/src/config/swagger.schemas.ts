/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastname
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastname:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       description: Representa un evento
 *       properties:
 *         codigo:
 *           type: number
 *           example: 1
 *         nombre:
 *           type: string
 *           example: Festival de Música del Valle
 *         descripcion:
 *           type: string
 *         teatro:
 *           type: string
 *           example: Coliseo de Ferias
 *         ciudad:
 *           type: string
 *           example: Tuluá
 *         fecha_inicio:
 *           type: string
 *           format: date-time
 *         fecha_fin:
 *           type: string
 *           format: date-time
 *         capacidad:
 *           type: number
 *           example: 5000
 *         precio:
 *           type: number
 *           example: 85000
 *         observaciones:
 *           type: string
 *           nullable: true
 *         estado:
 *           type: string
 *           enum: [Programado, En Boleteria, En Vivo, Finalizado, Cancelado]
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     ReservationReport:
 *       type: object
 *       description: Reservación con los datos de su evento
 *       properties:
 *         codigo:
 *           type: number
 *           example: 1
 *         fecha:
 *           type: string
 *           format: date-time
 *         cliente_nombre:
 *           type: string
 *           example: Carlos Ramirez
 *         cliente_correo:
 *           type: string
 *           format: email
 *         entradas:
 *           type: number
 *           example: 2
 *         total:
 *           type: number
 *           example: 170000
 *         observaciones:
 *           type: string
 *           nullable: true
 *         estado:
 *           type: string
 *           enum: [Reservada, Confirmada, Cancelada]
 *         evento_codigo:
 *           type: number
 *         evento_nombre:
 *           type: string
 *         evento_ciudad:
 *           type: string
 *         evento_teatro:
 *           type: string
 */
export {};