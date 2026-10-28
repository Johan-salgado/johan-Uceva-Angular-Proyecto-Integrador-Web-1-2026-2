-- Estudiantes
INSERT INTO students_example (nombre, correo) 
VALUES
    ('Carlos Ramirez', 'carlos.example@example.com'),
    ('Laura Gomez', 'laura.example@example.com'),
    ('Andres Martinez', 'andres.example@example.com');

-- Cursos
INSERT INTO courses_example (nombre, creditos) 
VALUES
    ('Bases de Datos', 3),
    ('Programacion Web', 4),
    ('Arquitectura de Software', 3);

-- Matrículas
INSERT INTO enrollments_example (estudiante_id, curso_id, fecha_matricula, nota_final)
VALUES
    (1, 1, CURRENT_DATE, 4.5),
    (1, 2, CURRENT_DATE, 4.2),
    (2, 1, CURRENT_DATE, 3.8),
    (2, 3, CURRENT_DATE, 4.6),
    (3, 2, CURRENT_DATE, 4.0);

-- Eventos
INSERT INTO events (nombre, descripcion, teatro, ciudad, fecha_inicio, fecha_fin, capacidad, precio, observaciones, estado)
VALUES
    ('Festival de Música del Valle', 'Festival con artistas nacionales y locales de diferentes géneros musicales.', 'Coliseo de Ferias', 'Tuluá', '2026-11-15 18:00', '2026-11-15 23:30', 5000, 85000, 'Apertura de puertas a las 5:00 PM.', 'Programado'),
    ('Concierto Sinfónico de Primavera', 'Presentación de la Orquesta Sinfónica del Valle con repertorio clásico y contemporáneo.', 'Teatro Municipal', 'Cali', '2026-11-20 19:00', '2026-11-20 21:30', 1200, 65000, 'Venta de boletería habilitada en puntos autorizados.', 'En Boleteria'),
    ('Rock al Parque Valle', 'Festival de rock con participación de bandas nacionales e internacionales.', 'Estadio Doce de Octubre', 'Tuluá', '2026-10-27 17:00', '2026-10-27 23:00', 8000, 45000, 'Evento actualmente en desarrollo.', 'En Vivo'),
    ('Obra de Teatro: El Principito', 'Adaptación teatral del clásico literario El Principito.', 'Teatro Municipal Enrique Buenaventura', 'Cali', '2026-09-28 19:00', '2026-09-28 21:00', 900, 55000, 'Evento finalizado satisfactoriamente.', 'Finalizado'),
    ('Concierto de Música Urbana', 'Concierto con los principales exponentes de música urbana de la región.', 'Centro de Eventos Valle del Pacífico', 'Cali', '2026-10-10 19:00', '2026-10-10 23:00', 6000, 75000, 'Evento cancelado por motivos logísticos. Se realizará devolución del dinero.', 'Cancelado'),
    ('Noche de Salsa en Palmira', 'Orquestas de salsa en vivo con pista de baile al aire libre.', 'Plaza de Toros', 'Palmira', '2026-12-05 20:00', '2026-12-06 01:00', 3500, 60000, NULL, 'En Boleteria');

-- Reservaciones
INSERT INTO reservations (evento_codigo, cliente_nombre, cliente_correo, fecha, entradas, total, observaciones, estado)
VALUES
    (1, 'Carlos Ramirez', 'carlos.example@example.com', '2026-10-02 10:15', 2, 170000, NULL, 'Confirmada'),
    (1, 'Laura Gomez', 'laura.example@example.com', '2026-10-05 16:40', 4, 340000, 'Silletería juntas', 'Reservada'),
    (2, 'Andres Martinez', 'andres.example@example.com', '2026-10-08 09:05', 3, 195000, NULL, 'Confirmada'),
    (3, 'Carlos Ramirez', 'carlos.example@example.com', '2026-10-12 12:30', 1, 45000, NULL, 'Confirmada'),
    (4, 'Laura Gomez', 'laura.example@example.com', '2026-09-10 18:20', 2, 110000, NULL, 'Confirmada'),
    (5, 'Andres Martinez', 'andres.example@example.com', '2026-10-01 11:00', 2, 150000, 'Devolución en proceso', 'Cancelada'),
    (6, 'Carlos Ramirez', 'carlos.example@example.com', '2026-10-20 15:45', 5, 300000, NULL, 'Reservada'),
    (6, 'Laura Gomez', 'laura.example@example.com', '2026-10-22 08:10', 2, 120000, NULL, 'Confirmada');
