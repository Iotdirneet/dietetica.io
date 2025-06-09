// Variables globales
let playerCharacter = '';
let playerScore = 0;
let playerName = '';
let levelsCompleted = [];

// Configuración de niveles
const levels = [
    {
        id: 1,
        title: "Conociendo los Alimentos",
        description: "Aprende sobre los alimentos básicos y su importancia para tu salud.",
        formUrl: "https://forms.gle/DF4mDnwBJ7JYco937", // Reemplazar con URL real
        maxPoints: 70 // Basado en el cuestionario nivel 1 (7 puntos x 10 preguntas)
    },
    {
        id: 2,
        title: "Grupos Alimenticios",
        description: "Descubre los diferentes grupos de alimentos y la pirámide nutricional.",
        formUrl: "https://forms.gle/nivel2", // Reemplazar con URL real
        maxPoints: 80 // Basado en el cuestionario nivel 2 (8 puntos x 10 preguntas)
    },
    {
        id: 3,
        title: "Menús Saludables",
        description: "Aprende a crear menús equilibrados y saludables para cada día.",
        formUrl: "https://forms.gle/nivel3", // Reemplazar con URL real
        maxPoints: 100 // Basado en el cuestionario nivel 3 (10 puntos x 10 preguntas)
    },
    {
        id: 4,
        title: "Hábitos de Alimentación",
        description: "Conoce los buenos hábitos alimenticios e higiénicos para cuidar tu salud.",
        formUrl: "https://forms.gle/nivel4", // Reemplazar con URL real
        maxPoints: 90 // Basado en el cuestionario nivel 4 (9 puntos x 10 preguntas)
    }
];

// Configuración de actividades
const activities = [
    {
        id: "clasificacion",
        title: "Clasificación de Alimentos",
        description: "Clasifica diferentes alimentos según su origen y tipo.",
        url: "https://docs.google.com/clasificacion", // Reemplazar con URL real
        points: 20
    },
    {
        id: "piramide",
        title: "Construye tu Pirámide",
        description: "Coloca los alimentos en el nivel correcto de la pirámide nutricional.",
        url: "https://docs.google.com/piramide", // Reemplazar con URL real
        points: 20
    },
    {
        id: "menu",
        title: "Diseña tu Menú Semanal",
        description: "Crea un menú equilibrado para toda la semana.",
        url: "https://docs.google.com/menu", // Reemplazar con URL real
        points: 25
    },
    {
        id: "diario",
        title: "Diario de Hábitos",
        description: "Registra tus hábitos alimenticios durante una semana.",
        url: "https://docs.google.com/diario", // Reemplazar con URL real
        points: 25
    }
];

// Función para seleccionar personaje
function selectCharacter(character) {
    playerCharacter = character;
    document.getElementById('character-selection').classList.add('hidden');
    document.getElementById('intro').classList.add('hidden');
    
    // Solicitar nombre del jugador
    playerName = prompt('¿Cómo te llamas?', '');
    if (!playerName) playerName = character === 'niño' ? 'Aventurero' : 'Aventurera';
    
    document.getElementById('player-name').textContent = playerName;
    document.getElementById('welcome-message').classList.remove('hidden');
    document.getElementById('game-content').classList.remove('hidden');
    document.getElementById('game-levels').style.display = 'flex';
    document.getElementById('activities').style.display = 'block';
    
    // Guardar datos del jugador
    savePlayerData();
    
    // Actualizar la interfaz con los niveles completados
    updateLevelsUI();
}

// Función para abrir un nivel
function openLevel(levelId) {
    const level = levels.find(l => l.id === levelId);
    if (!level) return;
    
    // Abrir el formulario en una nueva pestaña
    window.open(level.formUrl, '_blank');
    
    // Mostrar instrucciones al usuario
    alert(`Completa el cuestionario "${level.title}" para ganar hasta ${level.maxPoints} puntos. Cuando termines, anota tu puntuación y regresa a esta página para registrarla.`);
    
    // Preguntar por la puntuación cuando el usuario regrese
    setTimeout(() => {
        const userScore = prompt(`¿Cuántos puntos obtuviste en el nivel ${levelId}? (Máximo: ${level.maxPoints})`);
        const score = parseInt(userScore);
        
        if (!isNaN(score) && score >= 0 && score <= level.maxPoints) {
            // Verificar si el nivel ya fue completado
            const levelIndex = levelsCompleted.findIndex(l => l.id === levelId);
            
            if (levelIndex >= 0) {
                // Si ya fue completado, actualizar la puntuación si es mayor
                if (score > levelsCompleted[levelIndex].score) {
                    const oldScore = levelsCompleted[levelIndex].score;
                    levelsCompleted[levelIndex].score = score;
                    updateScore(score - oldScore); // Actualizar solo la diferencia
                    alert(`¡Has mejorado tu puntuación en el nivel ${levelId}! Ganaste ${score - oldScore} puntos adicionales.`);
                } else {
                    alert(`Ya habías completado este nivel con una puntuación mayor o igual. Tu puntuación actual se mantiene.`);
                }
            } else {
                // Si es la primera vez, añadir a niveles completados
                levelsCompleted.push({ id: levelId, score: score });
                updateScore(score);
                alert(`¡Felicidades! Has completado el nivel ${levelId} y ganado ${score} puntos.`);
            }
            
            // Guardar datos y actualizar interfaz
            savePlayerData();
            updateLevelsUI();
        } else if (!isNaN(score)) {
            alert(`La puntuación debe estar entre 0 y ${level.maxPoints}. Inténtalo de nuevo.`);
        }
    }, 1000); // Esperar un segundo para mostrar el prompt
}

// Función para abrir una actividad
function openActivity(activityId) {
    const activity = activities.find(a => a.id === activityId);
    if (!activity) return;
    
    // Abrir la actividad en una nueva pestaña
    window.open(activity.url, '_blank');
    
    // Mostrar instrucciones al usuario
    alert(`Completa la actividad "${activity.title}" para ganar ${activity.points} puntos. Cuando termines, regresa a esta página para registrar tu participación.`);
    
    // Preguntar si completó la actividad cuando el usuario regrese
    setTimeout(() => {
        const completed = confirm(`¿Has completado la actividad "${activity.title}"?`);
        
        if (completed) {
            // Verificar si la actividad ya fue completada
            const activityIndex = playerActivities.findIndex(a => a === activityId);
            
            if (activityIndex < 0) {
                // Si es la primera vez, añadir a actividades completadas
                playerActivities.push(activityId);
                updateScore(activity.points);
                alert(`¡Felicidades! Has completado la actividad "${activity.title}" y ganado ${activity.points} puntos.`);
                
                // Guardar datos y actualizar interfaz
                savePlayerData();
                updateActivitiesUI();
            } else {
                alert(`Ya habías completado esta actividad anteriormente. No se otorgan puntos adicionales.`);
            }
        }
    }, 1000); // Esperar un segundo para mostrar el prompt
}

// Función para actualizar la puntuación
function updateScore(points) {
    playerScore += points;
    document.getElementById('score').textContent = playerScore;
    
    // Actualizar nivel del jugador
    updatePlayerLevel();
}

// Función para actualizar el nivel del jugador basado en su puntuación
function updatePlayerLevel() {
    let level = "Principiante";
    let nextLevel = "Aprendiz";
    let pointsNeeded = 100;
    
    if (playerScore >= 300) {
        level = "Maestro Nutricional";
        nextLevel = "¡Nivel Máximo!";
        pointsNeeded = 0;
    } else if (playerScore >= 200) {
        level = "Experto";
        nextLevel = "Maestro Nutricional";
        pointsNeeded = 300 - playerScore;
    } else if (playerScore >= 100) {
        level = "Aprendiz";
        nextLevel = "Experto";
        pointsNeeded = 200 - playerScore;
    }
    
    document.getElementById('player-level').textContent = level;
    
    if (pointsNeeded > 0) {
        document.getElementById('next-level-info').textContent = 
            `Necesitas ${pointsNeeded} puntos más para alcanzar el nivel "${nextLevel}"`;
    } else {
        document.getElementById('next-level-info').textContent = 
            "¡Has alcanzado el nivel máximo! ¡Felicidades!";
    }
}

// Función para actualizar la interfaz de niveles
function updateLevelsUI() {
    levels.forEach(level => {
        const levelElement = document.querySelector(`.level[data-id="${level.id}"]`);
        if (!levelElement) return;
        
        const completedLevel = levelsCompleted.find(l => l.id === level.id);
        
        if (completedLevel) {
            levelElement.classList.add('completed');
            const scoreElement = levelElement.querySelector('.level-score');
            if (scoreElement) {
                scoreElement.textContent = `${completedLevel.score}/${level.maxPoints} puntos`;
            }
        }
    });
}

// Función para actualizar la interfaz de actividades
function updateActivitiesUI() {
    activities.forEach(activity => {
        const activityElement = document.querySelector(`.activity-card[data-id="${activity.id}"]`);
        if (!activityElement) return;
        
        if (playerActivities.includes(activity.id)) {
            activityElement.classList.add('completed');
        }
    });
}

// Función para guardar datos del jugador en localStorage
function savePlayerData() {
    const playerData = {
        character: playerCharacter,
        name: playerName,
        score: playerScore,
        levelsCompleted: levelsCompleted,
        activities: playerActivities
    };
    
    localStorage.setItem('nutritionGameData', JSON.stringify(playerData));
}

// Función para cargar datos del jugador desde localStorage
function loadPlayerData() {
    const savedData = localStorage.getItem('nutritionGameData');
    
    if (savedData) {
        const playerData = JSON.parse(savedData);
        playerCharacter = playerData.character;
        playerName = playerData.name;
        playerScore = playerData.score;
        levelsCompleted = playerData.levelsCompleted || [];
        playerActivities = playerData.activities || [];
        
        // Actualizar la interfaz con los datos cargados
        document.getElementById('player-name').textContent = playerName;
        document.getElementById('score').textContent = playerScore;
        
        // Actualizar nivel del jugador
        updatePlayerLevel();
        
        // Actualizar interfaz de niveles y actividades
        updateLevelsUI();
        updateActivitiesUI();
        
        // Ocultar selección de personaje y mostrar el juego
        document.getElementById('character-selection').classList.add('hidden');
        document.getElementById('intro').classList.add('hidden');
        document.getElementById('welcome-message').classList.remove('hidden');
        document.getElementById('game-content').classList.remove('hidden');
        document.getElementById('game-levels').style.display = 'flex';
        document.getElementById('activities').style.display = 'block';
        
        return true;
    }
    
    return false;
}

// Función para reiniciar el juego
function resetGame() {
    if (confirm('¿Estás seguro de que quieres reiniciar el juego? Perderás todo tu progreso.')) {
        localStorage.removeItem('nutritionGameData');
        location.reload();
    }
}

// Inicializar variables
let playerActivities = [];

// Verificar si hay datos guardados al cargar la página
window.onload = function() {
    if (!loadPlayerData()) {
        // Si no hay datos guardados, mostrar la selección de personaje
        document.getElementById('character-selection').classList.remove('hidden');
        document.getElementById('intro').classList.remove('hidden');
    }
};