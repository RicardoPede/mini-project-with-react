# Aplicación de Administración

La Aplicación de Administración es una mini aplicación web desarrollada en React que permite a los usuarios gestionar una lista de elementos, estos elementos pueden ser reemplazados según lo que se desee administrar. Cada elemento, para este caso específico, tiene varias propiedades, incluyendo un nombre, una descripción, un responsable, una prioridad, un nivel y una fecha.

## Características

- **Lista de elementos**: Los usuarios pueden ver todos los elementos en una lista. Cada elemento se muestra en su propia tarjeta con todos sus detalles.

- **Editar elementos**: Al hacer clic en el botón "Editar" en la tarjeta de un elemento, los usuarios son redirigidos a una página de edición donde pueden modificar los detalles del elemento.

- **Eliminar elementos**: Los usuarios pueden eliminar elementos de la lista haciendo clic en el botón "Eliminar" en la tarjeta del elemento.

## Código

El código de la aplicación se divide en varios componentes de React:

- `Element`: Este componente representa una tarjeta de elemento individual en la lista. Recibe un objeto `element` como prop y muestra sus detalles. También maneja la redirección a la página de edición y la eliminación del elemento.

- `List`: Este componente mapea un array de elementos y renderiza un componente `Element` para cada uno.

- `ElementProvider`: Este componente proporciona el estado de los elementos a través del contexto de React. Utiliza el hook personalizado `useLocalStorage` para persistir el estado de los elementos en el almacenamiento local del navegador.

## Uso

Para usar la aplicación, simplemente se navega a la página principal para ver la lista de elementos. Se puede hacer clic en "Editar" para modificar un elemento o en "Eliminar" para eliminarlo de la lista.

___
***

# Configuración del Proyecto

Este proyecto se inició utilizando [Create React App](https://create-react-app.dev/), una herramienta que configura automáticamente un entorno de desarrollo de React. Los pasos que se sigue para configurar el proyecto:

## Instalación

Primero, necesitamos instalar Node.js y npm en nuestro sistema. Se puede descargar Node.js desde su [sitio web oficial](https://nodejs.org/).

Una vez que Node.js está instalado, se puede verificar la instalación ejecutando los comandos en tu terminal:

```bash
node --version
npm --version
```

Estos comandos deben mostrar las versiones de Node.js y npm, respectivamente.
Si ya está instalando, se salta este paso.

## Creación del Proyecto

Para crear el proyecto, ejecutamos el siguiente comando en la terminal:

```bash
npx create-react-app library-with-react
```

Este comando crea un nuevo proyecto de React con el nombre "library-with-react" e instala todas las dependencias necesarias.

## Dependencias Adicionales

Además de las dependencias que Create React App instala automáticamente, también se necesita contar con algunas dependencias adicionales para este proyecto. Se ejecutan los comandos para instalarlas:

```bash
npm install --save bootstrap react-bootstrap react-router-dom sweetalert2 sass
```

- `bootstrap` y `react-bootstrap`: 
Proporcionan componentes de Bootstrap listos para usar en React.
- `react-router-dom`: 
Permite manejar el enrutamiento en nuestra aplicación de React.
- `sweetalert2`: 
Esta biblioteca permite mostrar alertas bonitas y personalizables.
- `sass`: 
Esta biblioteca permite escribir estilos utilizando Sass, un preprocesador de CSS.

## Ejecución del Proyecto

Para ejecutar el proyecto, puedes usar el siguiente comando en la terminal:

```bash
npm start
```
___
***

# Hooks Utilizados

En este proyecto, se utilizaron varios Hooks de React para manejar el estado y los efectos secundarios:

- **useState**: Este Hook se utiliza para manejar el estado local en los componentes. En nuestro componente `Element`, por ejemplo, usamos `useState` para manejar el estado de `shouldRedirect`.

- **useEffect**: Este Hook se utiliza para manejar los efectos secundarios en los componentes. En este proyecto, `useEffect` podría ser utilizado para realizar operaciones como la carga inicial de los elementos desde una API o el almacenamiento local.

- **useContext**: Este Hook se utiliza para acceder al contexto de React. En este proyecto, usamos `useContext` para acceder al estado de los elementos proporcionado por `ElementProvider`.

- **useLocalStorage**: Este es un Hook personalizado que utilizamos para persistir el estado de los elementos en el almacenamiento local del navegador. Este Hook utiliza `useState` y `useEffect` para manejar el estado y sincronizarlo con el almacenamiento local.

## Adaptación a Proyectos Más Complejos

Este proyecto se puede adaptar fácilmente a proyectos más complejos:

- **Manejo de errores**: Se podría agregar un manejo de errores más robusto, por ejemplo, mostrando mensajes de error al usuario cuando una operación falla.

- **Autenticación**: Se podría agregar autenticación para restringir el acceso a ciertas partes de la aplicación.

- **APIs**: En lugar de almacenar los elementos en el almacenamiento local, se podría almacenarlos en una base de datos y acceder a ellos a través de una API.

- **Rutas protegidas**: se podría utilizar rutas protegidas para asegurarnos de que solo los usuarios autenticados puedan acceder a ciertas páginas.




