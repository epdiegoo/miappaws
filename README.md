# Aprendiendo Docker

Basicamente es un proyecto para jugar con Docker Compose. Tiene un backend con ElysiaJS y un frontend con TypeScript y Bun, los dos corriendo en contenedores y coordinados con Docker Compose. Nada complicado, solo lo esencial para aprender como funciona esto.

## Que hay aqui

- **mi-api**: Backend en ElysiaJS
- **mi-front**: Frontend en TypeScript + Bun

Docker Compose se encarga de levantarlos juntos, nada mas.

## Que necesitas

> [!IMPORTANT]
> Tener Docker Desktop instalado en tu PC. Docker Compose viene incluido con el.

- Docker Desktop

## Para empezar

Solo corre esto y listo:

```bash
docker compose up
```

Levanta los dos servicios automaticamente. Espera a que terminen y ya esta.

### Donde esta todo

- **Frontend**: http://localhost:3001
- **Backend**: http://localhost:3000

## Los Servicios

### Backend (mi-api)

Es el API en ElysiaJS. Nada del otro mundo.

- Puerto: 3000
- Hecho con: ElysiaJS
- En: TypeScript

Mira [mi-api/README.md](mi-api/README.md) si quieres saber mas.

### Frontend (mi-front)

La interfaz de usuario. TypeScript + Bun basicamente.

- Puerto: 3001
- Hecho con: TypeScript y Bun

Si quieres mas info, chequea [mi-front/README.md](mi-front/README.md)

## Docker Compose

El frontend espera a que el backend este listo antes de arrancar. Docker Compose lo maneja todo.

Nada complicado, solo dos servicios que se hablan entre si.

> [!TIP]
> Usa `docker compose logs -f` si quieres ver que estan haciendo los contenedores en tiempo real. Bastante util cuando experimentas.

## Para apagar todo

```bash
docker compose down
```

Listo, los contenedores desaparecen.

## Cosas para tener en mente

> [!WARNING]
> A veces los contenedores no se hablan entre si. Verifica que esten en la misma red de Docker. Compose lo hace automaticamente, pero a veces hay que revisar.

Es basicamente un proyecto para jugar y aprender. Cambiale lo que quieras, experimenta, rompe cosas. Para eso es.