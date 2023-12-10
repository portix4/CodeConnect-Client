# Client routes

| URL                       | Description       | Protected |
|---------------------------|-------------------|-----------|
| `/`                       | Home page         |           |
| `/registro`               | User register     |           |
| `/inicio-sesion`          | Login             |           |
| `/perfil`                 | User profile page |    ✔️      |
| `/perfil/:profile_id      | Teacher page      |    ✔️      |
| `/perfil/editar`          | Edit my profile   |    ✔️      |
| `/clases`                 | All classes       |           |
| `/clase/crear`            | Create a class    |    ✔️      |
| `/clase/:class_id/editar` | Edit a class      |    ✔️      |
| `/clase/:class_id`        | Get class by id   |    ✔️      |
| `/nosotros`               | Our profiles      |           |
| `/como-funciona`          | How it works      |           |
| `/contacto`               | Contact us        |           |
| `*`                       | 404 page          |           |