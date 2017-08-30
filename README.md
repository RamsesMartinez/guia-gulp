# Guia de Desarrollo con GULP

## Requisitos:
- Tener instalado previamente [NodeJS](https://nodejs.org/es/)
- Verificar funcionamiento de NodeJS y Npm
```bash
$ node --version
v6.1.0
$ npm --version
3.5.1
```

## Pasos
1. Instalar gulp globalmente
  `$ npm install -g gulp`
2. Ubicar la carpeta donde estará nuestro proyecto
3. Inicializar el archivo **package.json** con
  `$ npm init -y`
4. Instalar gulp localmente
  `$ npm install --save-dev gulp`

  *Nota: La bandera `--save-dev` indica que sólo se instalará en ambientes de desarrollo, mas no en producción*
5. Crear el archivo **gulpfile.js** que contendrá las taeas
6. Añadir lo siguiente al archivo
```javascript
const gulp = require('gulp');
```

## Funciones elementales de gulp

### gulp.task();
Define las tareas
Primer parámetro: Nombre de la tarea
```javascript
gulp.task('myTask', ()=>
  gulp.src('./origen')
    .pipe(plugin1)
    .pipe(plugin2)
    .pipe(plugin3)
    .pipe(gulp.dest('./destino'));
);
```

### gulp.src();
Ruta de origine: Donde gulp tomará la información con la que trabajará
```javascript
gulp.src('./scss');
```

### gulp.dest();
Lo opuesto a gulp.src() ya que indicará donde colocará la información resultante
```javascript
gulp.dest('./css');
```

### gulp.watch();
Superivsa un directorio constantemente
```javascript
gulp.task('default', () => {
  gulp.watch('./origen', ['myTask']);
});
```
