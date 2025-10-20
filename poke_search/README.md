# Pokémon Search App

Una aplicación web para buscar y explorar información detallada de Pokémon utilizando la PokeAPI.

## 🎯 Objetivo del Proyecto

Desarrollar una aplicación React que permita a los usuarios buscar Pokémon por nombre y visualizar información detallada incluyendo características y evoluciones.

## 🚀 Tecnologías Utilizadas

- **React** con Vite
- **PokeAPI** (https://pokeapi.co/)
- **JavaScript/TypeScript**
- **CSS/SCSS**
- **Fetch API** para peticiones HTTP
- **POSTMAN** para pruebas de API

## 📋 Funcionalidades

### Fase 1: Búsqueda Básica

- ✅ Barra de búsqueda para ingresar el nombre del Pokémon
- ✅ Búsqueda en tiempo real utilizando PokeAPI
- ✅ Listado de resultados coincidentes

### Fase 2: Detalles del Pokémon

- ✅ Vista detallada del Pokémon seleccionado
- ✅ Información de características (tipo, peso, altura, habilidades)
- ✅ Galería de imágenes:
  - Imagen principal
  - 3 imágenes de evoluciones

## 🛠️ Pasos de Desarrollo

### 1. Preparación del Entorno

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### 2. Exploración de la API con POSTMAN

Antes de comenzar a programar, es importante entender la estructura de la PokeAPI:

#### Endpoints principales:

- **Búsqueda por nombre**: `https://pokeapi.co/api/v2/pokemon/{nombre}`
- **Lista de Pokémon**: `https://pokeapi.co/api/v2/pokemon?limit=1000`
- **Especies**: `https://pokeapi.co/api/v2/pokemon-species/{id}`
- **Cadena de evolución**: `https://pokeapi.co/api/v2/evolution-chain/{id}`

#### Ejemplos de peticiones en POSTMAN:

1. **Obtener información básica de Pikachu**:

   ```
   GET https://pokeapi.co/api/v2/pokemon/pikachu
   ```

2. **Obtener información de especie**:

   ```
   GET https://pokeapi.co/api/v2/pokemon-species/25
   ```

3. **Obtener cadena de evolución**:
   ```
   GET https://pokeapi.co/api/v2/evolution-chain/10
   ```

### 3. Estructura de Componentes

```
src/
├── components/
│   ├── SearchBar.jsx          # Barra de búsqueda
│   ├── PokemonList.jsx        # Lista de resultados
│   ├── PokemonCard.jsx        # Tarjeta individual
│   ├── PokemonDetail.jsx      # Vista detallada
│   └── ImageGallery.jsx       # Galería de imágenes
├── services/
│   └── pokemonAPI.js          # Servicios de API
├── hooks/
│   └── usePokemon.js          # Hook personalizado
└── utils/
    └── helpers.js             # Funciones auxiliares
```

### 4. Implementación del Buscador

#### 4.1 Componente SearchBar

```jsx
// Ejemplo de estructura
const SearchBar = ({ onSearch, loading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  // Render del componente...
};
```

#### 4.2 Servicio de API

```jsx
// services/pokemonAPI.js
export const searchPokemon = async (name) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    if (!response.ok) throw new Error("Pokémon no encontrado");
    return await response.json();
  } catch (error) {
    throw error;
  }
};
```

### 5. Lista de Resultados

#### 5.1 Mostrar resultados de búsqueda

- Implementar PokemonList component
- Mostrar información básica: nombre, imagen, tipo
- Manejar estados de carga y error

### 6. Vista de Detalles

#### 6.1 Información del Pokémon

- **Datos básicos**: Nombre, ID, tipo(s)
- **Estadísticas**: HP, Ataque, Defensa, etc.
- **Características físicas**: Peso, altura
- **Habilidades**: Lista de habilidades especiales

#### 6.2 Galería de Imágenes

1. **Imagen principal**: `sprites.other.official-artwork.front_default`
2. **Evoluciones**: Obtener de la cadena evolutiva
   - Pre-evolución (si existe)
   - Evolución actual
   - Evolución siguiente (si existe)

### 7. Manejo de Evoluciones

```jsx
// Ejemplo de obtención de evoluciones
const getEvolutionChain = async (pokemonId) => {
  // 1. Obtener especie del Pokémon
  const species = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
  );
  const speciesData = await species.json();

  // 2. Obtener cadena evolutiva
  const evolutionChain = await fetch(speciesData.evolution_chain.url);
  const chainData = await evolutionChain.json();

  // 3. Procesar cadena y obtener imágenes
  return processEvolutionChain(chainData);
};
```

## 🎨 Diseño y UX

### Estados de la Aplicación

- **Estado inicial**: Pantalla de bienvenida con buscador
- **Cargando**: Spinner durante búsquedas
- **Resultados**: Lista de Pokémon encontrados
- **Detalle**: Vista completa del Pokémon seleccionado
- **Error**: Manejo de errores (Pokémon no encontrado, error de red)

### Responsive Design

- Diseño adaptable para móviles y desktop
- Uso de CSS Grid/Flexbox
- Imágenes optimizadas

## 📝 Checklist de Desarrollo

### Funcionalidades Básicas

- [x] Configurar proyecto con Vite
- [x] Probar endpoints en POSTMAN
- [x] Implementar componente SearchBar
- [x] Crear servicio de API con fetch
- [-] Implementar lista de resultados
- [x] Agregar navegación a detalles

### Funcionalidades Avanzadas

- [x] Vista detallada del Pokémon
- [x] Mostrar estadísticas y características
- [ ] Implementar galería de imágenes
- [ ] Obtener y mostrar evoluciones
- [ ] Manejo de errores
- [ ] Estados de carga
- [ ] Diseño responsive

### Mejoras Opcionales

- [ ] Búsqueda por tipo
- [ ] Filtros avanzados
- [ ] Favoritos
- [ ] Comparación de Pokémon
- [ ] Animaciones y transiciones

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 📚 Recursos Útiles

- [Documentación PokeAPI](https://pokeapi.co/docs/v2)
- [React Documentation](https://reactjs.org/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Fetch API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

⚡ **¡Feliz coding!** ⚡
