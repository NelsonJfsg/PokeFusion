# ✅ Checklist de Auditoría – Proyecto PokéFusion

## 1. Reto Elegido y Alcance
El proyecto consiste en desarrollar una página web donde **tres Pokémon** sean fusionados y generar una combinación única.  
Además, incluye una sección de **favoritos**, donde se pueden guardar y consultar las fusiones previamente creadas utilizando Local Storage.

---

## 2. Arquitectura y Dependencias
El sistema está organizado en **tres módulos principales**, cada uno con responsabilidades claramente definidas:

- **poke-fusion:** Encargado de toda la lógica para seleccionar y combinar Pokémon.
- **favorites:** Permite visualizar y administrar las fusiones almacenadas en favoritos mediante Local Storage.
- **about:** Contiene información del desarrollador y del proyecto.

La aplicación se diseñó de forma **modular y escalable**, permitiendo añadir o modificar funcionalidades sin afectar otras partes del sistema.

---

## 3. Modelo de Datos
Se manejan dos estructuras de datos principales:

- El modelo nativo retornado por **PokéAPI**.
- Un modelo interno adaptado para las **cards de presentación**, que contiene únicamente la información necesaria para mostrar cada Pokémon o fusión en la UI.

---

## 4. Estado y Navegación
La app utiliza **lazy loading** en cada módulo, optimizando tiempos de carga y manteniendo una estructura limpia y organizada para la navegación entre vistas.

---

## 5. Decisiones Técnicas
- **Arquitectura Modular:** Facilita la escalabilidad y mantenibilidad del proyecto.
- **Shared Module:** Centraliza componentes y utilidades comunes para evitar duplicación de código.
- **Angular Material:** Se utilizó principalmente para íconos y queda preparado para futuros componentes estilizados.

---

## 6. Escalabilidad y Mantenimiento
Gracias a la arquitectura basada en módulos, es posible añadir, editar o eliminar funcionalidades o secciones sin comprometer el funcionamiento general del sistema. La estructura promueve el crecimiento ordenado del proyecto.

---

## 7. Seguridad y Validaciones
No se implementaron validaciones complejas debido a que no se trabajó con formularios.  
La aplicación realiza operaciones de lectura sobre la API y escritura controlada dentro del Local Storage.

---

## 8. Rendimiento
Para mejorar la eficiencia, se utilizó **Promise.all** al solicitar los tres Pokémon simultáneamente, reduciendo tiempos de espera y evitando llamadas secuenciales innecesarias.

---

## 9. Accesibilidad
Se implementó un esquema de colores sencillo, claro y homogéneo que facilita la lectura y mantiene una estética consistente en toda la aplicación.

---

## 10. Uso de IA
Se utilizó **GitHub Copilot** como apoyo para autocompletar código y resolver dudas puntuales.  
La lógica central y las decisiones relacionadas con arquitectura fueron implementadas manualmente.

---

## 11. Limitaciones y Siguientes Pasos
Próximas mejoras contempladas:

- Incorporar un **buscador de Pokémon**.
- Añadir un **editor personalizado** para generar fusiones más complejas.
- Implementar **perfiles de usuario** para ofrecer experiencias y favoritos personalizados.

