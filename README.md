# Proyecto Integrador Web I – Laboratorio I

Monorepo con una aplicación **Angular** (Frontend) y una API **Node.js + Express** (Backend) sobre **PostgreSQL**, desarrollado para el Laboratorio I de *Programación en Ambiente Web I* (UCEVA, 2026-2).

- **Estudiante:** Johan Eliu Salgado Castro – 230232033
- **Programa:** Ingeniería de Sistemas, UCEVA
- **Docente:** Jesús David Mejía Vergara

## Funcionalidades del laboratorio

El laboratorio exige dos funcionalidades completas, cada una con tabla en PostgreSQL, API REST y página en Angular.

| # | Funcionalidad | Tabla | API REST | Página Angular |
|---|---------------|-------|----------|----------------|
| 1 | Cartelera de eventos (tarjetas, filtros por ciudad y estado) | `events` | `GET /api/events` | `/client/catalog` |
| 2 | Reporte de reservas (tabla con totales, filtro por estado) | `reservations` | `GET /api/reservations` | `/client/reservation-report` |

### API `GET /api/events`
Lista los eventos ordenados por fecha de inicio. Filtros opcionales por query string:
- `ciudad`: sin distinguir mayúsculas (ej. `?ciudad=Tuluá`).
- `estado`: `Programado`, `En Boleteria`, `En Vivo`, `Finalizado` o `Cancelado`.

### API `GET /api/reservations`
Devuelve las reservaciones junto con los datos de su evento (`JOIN` entre `reservations` y `events`), de la más reciente a la más antigua. Filtro opcional `estado`: `Reservada`, `Confirmada` o `Cancelada`.

Ambas APIs responden `400` si el estado enviado no es válido. La documentación interactiva (Swagger) está en `http://localhost:3000/api/docs`.

## Estructura del proyecto

```
.
├── Backend/
│   ├── src/
│   │   ├── config/          # variables de entorno, conexión a BD, Swagger
│   │   ├── database/        # init.sql (tablas) y seed.sql (datos de prueba)
│   │   ├── domain/          # interfaces y manejo de errores
│   │   ├── presentation/
│   │   │   └── modules/     # event/ y reservation/ (routes, controller, service)
│   │   └── scripts/         # init-db.ts y seed-db.ts
│   └── docker-compose.yml   # PostgreSQL y pgAdmin
└── Frontend/
    └── src/app/
        ├── config/          # URL base de la API
        ├── interfaces/      # modelos tipados
        ├── services/        # event y reservation (HttpClient)
        ├── components/      # navbar, event-card
        └── pages/           # event-catalog, reservation-report y demás
```

El backend sigue la separación **ruta → controlador → servicio**: la ruta define el endpoint, el controlador maneja la petición/respuesta y el servicio ejecuta la consulta SQL.

## Base de datos

Las tablas nuevas están en `Backend/src/database/init.sql`:

- **`events`**: código, nombre, descripción, teatro, ciudad, fechas de inicio y fin, capacidad, precio, observaciones y estado.
- **`reservations`**: código, evento (llave foránea a `events`), datos del cliente, fecha, entradas, total, observaciones y estado.

La relación es 1:N (un evento tiene muchas reservaciones). Los datos de prueba están en `seed.sql`.

## Requisitos

- Node.js y npm
- Docker Desktop (para PostgreSQL y pgAdmin)
- Angular CLI (`npm install -g @angular/cli`)

## Cómo ejecutar el proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/Johan-salgado/johan-Uceva-Angular-Proyecto-Integrador-Web-1-2026-2.git
cd johan-Uceva-Angular-Proyecto-Integrador-Web-1-2026-2
```

### 2. Backend
```bash
cd Backend
docker compose up -d      # levanta PostgreSQL (puerto 5433) y pgAdmin (puerto 8081)
npm install
npm run db:init           # crea las tablas
npm run db:seed           # inserta los datos de prueba
npm start                 # API en http://localhost:3000
```

El archivo `Backend/.env` define el puerto de la API y las credenciales de conexión a la base de datos.

### 3. Frontend
```bash
cd Frontend
npm install
npm start                 # aplicación en http://localhost:4200
```

Las páginas del laboratorio se consultan en:
- `http://localhost:4200/client/catalog`
- `http://localhost:4200/client/reservation-report`

> El backend debe estar en ejecución para que las páginas muestren datos.

## Tecnologías

- **Frontend:** Angular 20, Bootstrap 5, Bootstrap Icons, RxJS
- **Backend:** Node.js, Express 5, TypeScript, `pg`, Swagger (`swagger-jsdoc` y `swagger-ui-express`)
- **Base de datos:** PostgreSQL 15 con Docker

## Convención de commits

Se usa el estándar visto en clase (`feat:`, `fix:`, etc.) con mensajes descriptivos en español.
