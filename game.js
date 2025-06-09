// Estado del juego
let gameState = {
    selectedCharacter: null,
    currentLevel: null,
    currentQuestion: 0,
    score: 0,
    totalPoints: 0,
    levelScores: {},
    activityScores: {},
    currentActivity: null
};

// Datos de los cuestionarios
const quizData = {
    1: {
        title: "Nivel 1: Conociendo los Alimentos",
        maxPoints: 70,
        questions: [
            {
                question: "¿Por qué es importante comer sano?",
                options: [
                    "Para quedarte sentado todo el día",
                    "Para tener energía para jugar y aprender",
                    "Para comer solo dulces",
                    "Para no beber agua"
                ],
                correct: 1,
                points: 7
            },
            {
                question: "¿A qué se parece comer alimentos saludables?",
                options: [
                    "A ponerle gasolina vieja a un coche",
                    "A darle el mejor combustible a un cohete",
                    "A apagar un cohete",
                    "A no usar combustible"
                ],
                correct: 1,
                points: 7
            },
            {
                question: "¿Qué hacen los alimentos saludables por tu cuerpo?",
                options: [
                    "Lo hacen más lento",
                    "Lo mantienen fuerte, sano y feliz",
                    "Lo hacen sentir cansado",
                    "Nada, no son importantes"
                ],
                correct: 1,
                points: 7
            },
            {
                question: "¿Qué colores debes incluir en tu plato con frutas y verduras?",
                options: [
                    "Solo blanco y negro",
                    "Todos los colores del arcoíris",
                    "Solo azul y morado",
                    "Ningún color"
                ],
                correct: 1,
                points: 7
            },
            {
                question: "¿Qué alimento ayuda a tu corazón?",
                options: [
                    "Brócoli",
                    "Tomates",
                    "Plátanos",
                    "Cebolla"
                ],
                correct: 1,
                points: 7
            },
            {
                question: "¿Qué color tienen las zanahorias, que son buenas para tu piel y ojos?",
                options: [
                    "Verde",
                    "Naranja/Amarillo",
                    "Azul",
                    "Blanco"
                ],
                correct: 1,
                points: 7
            },
            {
                question: "¿Qué verdura te hace súper fuerte?",
                options: [
                    "Coliflor",
                    "Espinacas",
                    "Uvas",
                    "Maíz"
                ],
                correct: 1,
                points: 7
            },
            {
                question: "¿Qué alimento es súper para tu cerebro?",
                options: [
                    "Arándanos",
                    "Zanahorias",
                    "Fresas",
                    "Coliflor"
                ],
                correct: 0,
                points: 7
            },
            {
                question: "¿Qué verdura fortalece tus huesos?",
                options: [
                    "Berenjena",
                    "Coliflor",
                    "Tomate",
                    "Plátano"
                ],
                correct: 1,
                points: 7
            },
            {
                question: "¿Qué verdura te ayuda a combatir resfriados?",
                options: [
                    "Cebolla",
                    "Arándanos",
                    "Brócoli",
                    "Naranja"
                ],
                correct: 0,
                points: 7
            }
        ]
    },
    2: {
        title: "Nivel 2: Grupos Alimenticios y Pirámide Nutricional",
        maxPoints: 96,
        questions: [
            {
                question: "¿Qué son los carbohidratos para tu cuerpo?",
                options: [
                    "Como un escudo protector",
                    "Como la batería que te da energía",
                    "Como un villano que te cansa",
                    "Como dulces que comes todo el día"
                ],
                correct: 1,
                points: 8
            },
            {
                question: "¿Qué alimento es un ejemplo de carbohidratos?",
                options: [
                    "Pollo",
                    "Pan integral",
                    "Aguacate",
                    "Fresas"
                ],
                correct: 1,
                points: 8
            },
            {
                question: "¿Qué hacen las proteínas en tu cuerpo?",
                options: [
                    "Construyen tus músculos",
                    "Te hacen sentir cansado",
                    "Dan color a tu piel",
                    "Apagan tu cerebro"
                ],
                correct: 0,
                points: 8
            },
            {
                question: "¿Cuál de estos alimentos es rico en proteínas?",
                options: [
                    "Arroz",
                    "Pescado",
                    "Plátano",
                    "Aceite de oliva"
                ],
                correct: 1,
                points: 8
            },
            {
                question: "¿Qué te dan las legumbres como las lentejas?",
                options: [
                    "Solo dulzura",
                    "Energía y fuerza al mismo tiempo",
                    "Solo color",
                    "Nada importante"
                ],
                correct: 1,
                points: 8
            },
            {
                question: "¿Cuál es un ejemplo de legumbres?",
                options: [
                    "Manzana",
                    "Garbanzos",
                    "Queso",
                    "Pasta"
                ],
                correct: 1,
                points: 8
            },
            {
                question: "¿Qué hacen las grasas saludables en tu cuerpo?",
                options: [
                    "Te hacen más lento",
                    "Protegen tu corazón y cerebro",
                    "Te quitan energía",
                    "No sirven para nada"
                ],
                correct: 1,
                points: 8
            },
            {
                question: "¿Cuál es un ejemplo de grasa saludable?",
                options: [
                    "Papas fritas",
                    "Aguacate",
                    "Dulces",
                    "Refresco"
                ],
                correct: 1,
                points: 8
            },
            {
                question: "¿Qué vitaminas te dan las frutas y verduras?",
                options: [
                    "Vitaminas que te hacen dormir",
                    "Vitaminas que fortalecen tu sistema inmune",
                    "Vitaminas que te hacen más alto",
                    "No tienen vitaminas"
                ],
                correct: 1,
                points: 8
            },
            {
                question: "¿En qué parte de la pirámide nutricional están los dulces?",
                options: [
                    "En la base",
                    "En la punta (comer muy poco)",
                    "En el medio",
                    "No están en la pirámide"
                ],
                correct: 1,
                points: 8
            },
            {
                question: "¿Qué alimentos deben estar en la base de la pirámide?",
                options: [
                    "Dulces y refrescos",
                    "Cereales integrales y agua",
                    "Solo carne",
                    "Solo frutas"
                ],
                correct: 1,
                points: 8
            },
            {
                question: "¿Cuántas porciones de frutas y verduras debes comer al día?",
                options: [
                    "1 porción",
                    "5 porciones",
                    "10 porciones",
                    "Ninguna"
                ],
                correct: 1,
                points: 8
            }
        ]
    },
    3: {
        title: "Nivel 3: Creación de Menús Saludables",
        maxPoints: 100,
        questions: [
            {
                question: "¿Qué debe incluir un desayuno saludable?",
                options: [
                    "Solo dulces",
                    "Avena con fresas y zumo natural",
                    "Papas fritas",
                    "Refresco"
                ],
                correct: 1,
                points: 10
            },
            {
                question: "¿Qué es un buen ejemplo de merienda saludable?",
                options: [
                    "Yogur con fruta",
                    "Pastel de chocolate",
                    "Refresco azucarado",
                    "Papas fritas"
                ],
                correct: 0,
                points: 10
            },
            {
                question: "¿Cuántas veces al día debes comer para mantener tu energía?",
                options: [
                    "1 vez",
                    "5 veces",
                    "10 veces",
                    "Nunca"
                ],
                correct: 1,
                points: 10
            },
            {
                question: "¿Qué te ayuda a mantenerte activo además de comer sano?",
                options: [
                    "Dormir todo el día",
                    "Jugar, correr y bailar",
                    "Comer dulces",
                    "Ver televisión"
                ],
                correct: 1,
                points: 10
            },
            {
                question: "¿Por qué el agua es la bebida de los campeones?",
                options: [
                    "Porque tiene azúcar",
                    "Porque te da energía y mantiene tu cerebro brillante",
                    "Porque es de colores",
                    "Porque no necesitas beberla"
                ],
                correct: 1,
                points: 10
            },
            {
                question: "¿Cuánto de tu cuerpo está hecho de agua?",
                options: [
                    "10%",
                    "60%",
                    "90%",
                    "0%"
                ],
                correct: 1,
                points: 10
            },
            {
                question: "¿Qué debe tener un almuerzo equilibrado?",
                options: [
                    "Solo carne",
                    "Proteína, verduras, carbohidratos y fruta",
                    "Solo dulces",
                    "Solo bebidas"
                ],
                correct: 1,
                points: 10
            },
            {
                question: "¿Cuál es la mejor cena para dormir bien?",
                options: [
                    "Comida muy pesada",
                    "Cena ligera con verduras y proteína",
                    "Solo dulces",
                    "No cenar"
                ],
                correct: 1,
                points: 10
            },
            {
                question: "¿Qué bebida debes evitar antes de dormir?",
                options: [
                    "Agua",
                    "Bebidas con cafeína",
                    "Leche",
                    "Té de hierbas"
                ],
                correct: 1,
                points: 10
            },
            {
                question: "¿Cómo debe ser un menú semanal saludable?",
                options: [
                    "Igual todos los días",
                    "Variado con diferentes alimentos",
                    "Solo comida rápida",
                    "Sin frutas ni verduras"
                ],
                correct: 1,
                points: 10
            }
        ]
    },
    4: {
        title: "Nivel 4: Hábitos de Alimentación e Higiene",
        maxPoints: 109,
        questions: [
            {
                question: "¿Qué debemos hacer antes de comer o manipular alimentos?",
                options: [
                    "Lavarnos las manos con agua y jabón",
                    "Limpiarnos las manos con un pañuelo",
                    "No es necesario hacer nada especial",
                    "Lavarnos solo con agua"
                ],
                correct: 0,
                points: 9
            },
            {
                question: "¿Cuántas comidas principales se recomienda hacer al día?",
                options: [
                    "2 comidas",
                    "3 comidas principales y 2 tentempiés",
                    "1 comida grande",
                    "Comer cada vez que tengamos hambre"
                ],
                correct: 1,
                points: 9
            },
            {
                question: "¿Qué debemos hacer con las frutas y verduras antes de comerlas?",
                options: [
                    "Lavarlas bien con agua",
                    "Comerlas directamente",
                    "Pelarlas siempre",
                    "Cocinarlas todas"
                ],
                correct: 0,
                points: 9
            },
            {
                question: "¿Qué debemos hacer si encontramos un alimento con moho?",
                options: [
                    "Quitar solo la parte con moho y comer el resto",
                    "Lavarlo bien y comerlo",
                    "Tirarlo a la basura",
                    "Dárselo a las mascotas"
                ],
                correct: 2,
                points: 9
            },
            {
                question: "¿Cuál es la mejor forma de mantener una alimentación equilibrada?",
                options: [
                    "Comer solo un tipo de alimento",
                    "Variar los alimentos y comer de todos los grupos",
                    "Comer solo cuando tengas mucha hambre",
                    "Evitar completamente las grasas"
                ],
                correct: 1,
                points: 9
            },
            {
                question: "¿Qué es más importante para tener una vida saludable?",
                options: [
                    "Solo comer bien",
                    "Solo hacer ejercicio",
                    "Combinar buena alimentación, ejercicio y descanso",
                    "Solo dormir mucho"
                ],
                correct: 2,
                points: 9
            },
            {
                question: "¿Cuál es la mejor actitud hacia la comida?",
                options: [
                    "Comer muy rápido siempre",
                    "Tener miedo a todos los alimentos",
                    "Disfrutar de la comida saludable y probar cosas nuevas",
                    "Comer solo lo que me gusta"
                ],
                correct: 2,
                points: 9
            },
            {
                question: "¿Qué debes hacer si te sobra comida de una comida?",
                options: [
                    "Dejarla fuera hasta la próxima comida",
                    "Guardarla en el refrigerador inmediatamente",
                    "Tirarla siempre",
                    "Dársela a las mascotas"
                ],
                correct: 1,
                points: 9
            },
            {
                question: "¿Qué es lo más importante al planificar las comidas de la semana?",
                options: [
                    "Que sean todas iguales",
                    "Que incluyan variedad de alimentos saludables",
                    "Que sean solo comidas rápidas",
                    "Que tengan muchos dulces"
                ],
                correct: 1,
                points: 10
            },
            {
                question: "¿Cuáles son buenos hábitos durante las comidas?",
                options: [
                    "Comer muy rápido",
                    "Masticar bien y comer sin distracciones",
                    "Ver televisión mientras comes",
                    "Usar el móvil en la mesa"
                ],
                correct: 1,
                points: 9
            },
            {
                question: "¿Cómo debemos conservar los alimentos?",
                options: [
                    "Dejar todo fuera del refrigerador",
                    "Guardar en el refrigerador y revisar fechas de caducidad",
                    "Mezclar alimentos crudos y cocinados",
                    "No importa cómo se conserven"
                ],
                correct: 1,
                points: 9
            },
            {
                question: "¿Qué hábitos NO son saludables durante las comidas?",
                options: [
                    "Comer despacio",
                    "Ver televisión y usar el móvil mientras comemos",
                    "Conversar tranquilamente",
                    "Masticar bien"
                ],
                correct: 1,
                points: 9
            }
        ]
    }
};

// Datos de las actividades
const activityData = {
    clasificacion: {
        title: "Clasificación de Alimentos",
        description: "Arrastra cada alimento a su grupo correspondiente",
        foods: [
            { name: "Manzana", group: "frutas" },
            { name: "Brócoli", group: "verduras" },
            { name: "Pollo", group: "proteinas" },
            { name: "Arroz", group: "cereales" },
            { name: "Leche", group: "lacteos" },
            { name: "Plátano", group: "frutas" },
            { name: "Zanahoria", group: "verduras" },
            { name: "Pescado", group: "proteinas" },
            { name: "Pan", group: "cereales" },
            { name: "Yogur", group: "lacteos" },
            { name: "Naranja", group: "frutas" },
            { name: "Espinacas", group: "verduras" }
        ],
        groups: {
            frutas: "Frutas",
            verduras: "Verduras",
            proteinas: "Proteínas",
            cereales: "Cereales",
            lacteos: "Lácteos"
        }
    },
    piramide: {
        title: "Construye la Pirámide Nutricional",
        description: "Coloca cada alimento en el nivel correcto de la pirámide",
        foods: [
            { name: "Agua", level: "base" },
            { name: "Pan integral", level: "base" },
            { name: "Arroz", level: "base" },
            { name: "Manzana", level: "segundo" },
            { name: "Brócoli", level: "segundo" },
            { name: "Zanahoria", level: "segundo" },
            { name: "Pollo", level: "tercero" },
            { name: "Pescado", level: "tercero" },
            { name: "Leche", level: "tercero" },
            { name: "Aceite de oliva", level: "cuarto" },
            { name: "Dulces", level: "cima" },
            { name: "Refrescos", level: "cima" }
        ],
        levels: {
            base: "Base - Consumir diariamente",
            segundo: "Frutas y Verduras - 5 porciones al día",
            tercero: "Proteínas y Lácteos - 2-3 porciones al día",
            cuarto: "Grasas saludables - Con moderación",
            cima: "Dulces y procesados - Ocasionalmente"
        }
    }
};

// Funciones principales
function selectCharacter(character) {
    gameState.selectedCharacter = character;
    document.getElementById('player-avatar').src = character + '.png';
    document.getElementById('player-name').textContent = character === 'niño' ? 'Niño' : 'Niña';
    
    // Cargar progreso guardado
    loadProgress();
    
    showMainMenu();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showMainMenu() {
    updateTotalPoints();
    showScreen('main-menu');
}

function showLevelMenu() {
    showScreen('level-menu');
}

function showActivityMenu() {
    showScreen('activity-menu');
}

function showProgress() {
    updateProgressScreen();
    showScreen('progress-screen');
}

function startLevel(level) {
    gameState.currentLevel = level;
    gameState.currentQuestion = 0;
    gameState.score = 0;
    
    const quiz = quizData[level];
    document.getElementById('quiz-title').textContent = quiz.title;
    
    showScreen('quiz-screen');
    showQuestion();
}

function showQuestion() {
    const quiz = quizData[gameState.currentLevel];
    const question = quiz.questions[gameState.currentQuestion];
    
    document.getElementById('question-counter').textContent = 
        `Pregunta ${gameState.currentQuestion + 1} de ${quiz.questions.length}`;
    
    const progress = ((gameState.currentQuestion) / quiz.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
    });
    
    document.getElementById('next-button').style.display = 'none';
}

function selectOption(selectedIndex) {
    const quiz = quizData[gameState.currentLevel];
    const question = quiz.questions[gameState.currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach((option, index) => {
        option.onclick = null;
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && index !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (selectedIndex === question.correct) {
        gameState.score += question.points;
    }
    
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    gameState.currentQuestion++;
    const quiz = quizData[gameState.currentLevel];
    
    if (gameState.currentQuestion < quiz.questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quiz = quizData[gameState.currentLevel];
    const percentage = (gameState.score / quiz.maxPoints) * 100;
    
    document.getElementById('score-text').textContent = 
        `Puntuación: ${gameState.score} de ${quiz.maxPoints} puntos (${percentage.toFixed(1)}%)`;
    
    let medal, medalText;
    if (percentage >= 85) {
        medal = '🥇';
        medalText = '¡Medalla de Oro! ¡Excelente trabajo!';
        document.getElementById('medal-icon').className = 'medal-gold';
    } else if (percentage >= 70) {
        medal = '🥈';
        medalText = '¡Medalla de Plata! ¡Muy bien!';
        document.getElementById('medal-icon').className = 'medal-silver';
    } else if (percentage >= 50) {
        medal = '🥉';
        medalText = '¡Medalla de Bronce! ¡Buen trabajo!';
        document.getElementById('medal-icon').className = 'medal-bronze';
    } else {
        medal = '📚';
        medalText = '¡Sigue aprendiendo! Puedes intentarlo de nuevo.';
        document.getElementById('medal-icon').className = 'medal-none';
    }
    
    document.getElementById('medal-text').textContent = medalText;
    document.getElementById('medal-icon').textContent = medal;
    
    // Guardar progreso
    gameState.levelScores[gameState.currentLevel] = gameState.score;
    saveProgress();
    
    showScreen('results-screen');
}

function startActivity(activityType) {
    gameState.currentActivity = activityType;
    const activity = activityData[activityType];
    
    document.getElementById('activity-title').textContent = activity.title;
    
    showScreen('activity-screen');
    
    if (activityType === 'clasificacion') {
        setupClassificationActivity();
    } else if (activityType === 'piramide') {
        setupPyramidActivity();
    } else if (activityType === 'menu') {
        setupMenuActivity();
    } else if (activityType === 'diario') {
        setupDiaryActivity();
    }
}

function setupClassificationActivity() {
    const activity = activityData.clasificacion;
    const container = document.getElementById('activity-container');
    
    container.innerHTML = `
        <h3>${activity.description}</h3>
        <div class="drag-container">
            <div class="food-items">
                <h4>Alimentos</h4>
                <div id="food-list"></div>
            </div>
            <div class="drop-zones">
                <h4>Grupos de Alimentos</h4>
                <div id="group-zones"></div>
            </div>
        </div>
        <button onclick="checkClassification()" style="margin-top: 20px;">Verificar Respuestas</button>
    `;
    
    // Crear elementos de comida
    const foodList = document.getElementById('food-list');
    activity.foods.forEach((food, index) => {
        const foodElement = document.createElement('div');
        foodElement.className = 'food-item';
        foodElement.textContent = food.name;
        foodElement.draggable = true;
        foodElement.dataset.group = food.group;
        foodElement.dataset.index = index;
        
        foodElement.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', index);
            foodElement.classList.add('dragging');
        });
        
        foodElement.addEventListener('dragend', () => {
            foodElement.classList.remove('dragging');
        });
        
        foodList.appendChild(foodElement);
    });
    
    // Crear zonas de drop
    const groupZones = document.getElementById('group-zones');
    Object.entries(activity.groups).forEach(([key, name]) => {
        const zone = document.createElement('div');
        zone.className = 'drop-zone';
        zone.dataset.group = key;
        zone.innerHTML = `<h4>${name}</h4>`;
        
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            
            const foodIndex = e.dataTransfer.getData('text/plain');
            const foodElement = document.querySelector(`[data-index="${foodIndex}"]`);
            
            if (foodElement) {
                zone.appendChild(foodElement);
            }
        });
        
        groupZones.appendChild(zone);
    });
}

function checkClassification() {
    const activity = activityData.clasificacion;
    let correct = 0;
    let total = activity.foods.length;
    
    document.querySelectorAll('.drop-zone').forEach(zone => {
        const groupKey = zone.dataset.group;
        const foodsInZone = zone.querySelectorAll('.food-item');
        
        foodsInZone.forEach(food => {
            const correctGroup = food.dataset.group;
            if (correctGroup === groupKey) {
                correct++;
                food.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
            } else {
                food.style.background = 'linear-gradient(135deg, #f56565, #e53e3e)';
            }
        });
    });
    
    const score = Math.round((correct / total) * 100);
    gameState.activityScores.clasificacion = score;
    saveProgress();
    
    alert(`¡Actividad completada! Puntuación: ${correct}/${total} (${score}%)`);
}

function setupPyramidActivity() {
    const activity = activityData.piramide;
    const container = document.getElementById('activity-container');
    
    container.innerHTML = `
        <h3>${activity.description}</h3>
        <div class="pyramid-container">
            <div class="food-items">
                <h4>Alimentos</h4>
                <div id="pyramid-food-list"></div>
            </div>
            <div class="pyramid-levels">
                <h4>Pirámide Nutricional</h4>
                <div id="pyramid-zones"></div>
            </div>
        </div>
        <button onclick="checkPyramid()" style="margin-top: 20px;">Verificar Pirámide</button>
    `;
    
    // Crear elementos de comida
    const foodList = document.getElementById('pyramid-food-list');
    activity.foods.forEach((food, index) => {
        const foodElement = document.createElement('div');
        foodElement.className = 'food-item';
        foodElement.textContent = food.name;
        foodElement.draggable = true;
        foodElement.dataset.level = food.level;
        foodElement.dataset.index = index;
        
        foodElement.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', index);
            foodElement.classList.add('dragging');
        });
        
        foodElement.addEventListener('dragend', () => {
            foodElement.classList.remove('dragging');
        });
        
        foodList.appendChild(foodElement);
    });
    
    // Crear niveles de la pirámide
    const pyramidZones = document.getElementById('pyramid-zones');
    Object.entries(activity.levels).forEach(([key, name]) => {
        const zone = document.createElement('div');
        zone.className = 'drop-zone';
        zone.dataset.level = key;
        zone.innerHTML = `<h4>${name}</h4>`;
        
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            
            const foodIndex = e.dataTransfer.getData('text/plain');
            const foodElement = document.querySelector(`[data-index="${foodIndex}"]`);
            
            if (foodElement) {
                zone.appendChild(foodElement);
            }
        });
        
        pyramidZones.appendChild(zone);
    });
}

function checkPyramid() {
    const activity = activityData.piramide;
    let correct = 0;
    let total = activity.foods.length;
    
    document.querySelectorAll('.drop-zone').forEach(zone => {
        const levelKey = zone.dataset.level;
        const foodsInZone = zone.querySelectorAll('.food-item');
        
        foodsInZone.forEach(food => {
            const correctLevel = food.dataset.level;
            if (correctLevel === levelKey) {
                correct++;
                food.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
            } else {
                food.style.background = 'linear-gradient(135deg, #f56565, #e53e3e)';
            }
        });
    });
    
    const score = Math.round((correct / total) * 100);
    gameState.activityScores.piramide = score;
    saveProgress();
    
    alert(`¡Pirámide completada! Puntuación: ${correct}/${total} (${score}%)`);
}

function setupMenuActivity() {
    const container = document.getElementById('activity-container');
    
    container.innerHTML = `
        <h3>Diseña tu Menú Semanal Saludable</h3>
        <p>Planifica un menú equilibrado para toda la semana. Incluye desayuno, almuerzo, merienda y cena para cada día.</p>
        <div class="menu-planner">
            <div class="days-grid">
                ${['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map(day => `
                    <div class="day-card">
                        <h4>${day}</h4>
                        <div class="meal-inputs">
                            <input type="text" placeholder="Desayuno" data-day="${day}" data-meal="desayuno">
                            <input type="text" placeholder="Almuerzo" data-day="${day}" data-meal="almuerzo">
                            <input type="text" placeholder="Merienda" data-day="${day}" data-meal="merienda">
                            <input type="text" placeholder="Cena" data-day="${day}" data-meal="cena">
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <button onclick="saveMenu()" style="margin-top: 20px;">Guardar Menú</button>
    `;
}

function saveMenu() {
    const menuData = {};
    document.querySelectorAll('.meal-inputs input').forEach(input => {
        const day = input.dataset.day;
        const meal = input.dataset.meal;
        const value = input.value.trim();
        
        if (!menuData[day]) menuData[day] = {};
        menuData[day][meal] = value;
    });
    
    // Calcular puntuación basada en completitud
    let filledMeals = 0;
    let totalMeals = 0;
    
    Object.values(menuData).forEach(day => {
        Object.values(day).forEach(meal => {
            totalMeals++;
            if (meal && meal.length > 0) filledMeals++;
        });
    });
    
    const score = Math.round((filledMeals / totalMeals) * 100);
    gameState.activityScores.menu = score;
    saveProgress();
    
    alert(`¡Menú guardado! Completitud: ${filledMeals}/${totalMeals} comidas (${score}%)`);
}

function setupDiaryActivity() {
    const container = document.getElementById('activity-container');
    
    container.innerHTML = `
        <h3>Diario de Hábitos Saludables</h3>
        <p>Registra tus hábitos saludables de hoy. Marca las actividades que has realizado.</p>
        <div class="habits-checklist">
            <div class="habit-item">
                <input type="checkbox" id="wash-hands">
                <label for="wash-hands">Me lavé las manos antes de comer</label>
            </div>
            <div class="habit-item">
                <input type="checkbox" id="eat-fruits">
                <label for="eat-fruits">Comí al menos 2 frutas</label>
            </div>
            <div class="habit-item">
                <input type="checkbox" id="eat-vegetables">
                <label for="eat-vegetables">Comí verduras en el almuerzo o cena</label>
            </div>
            <div class="habit-item">
                <input type="checkbox" id="drink-water">
                <label for="drink-water">Bebí suficiente agua (6-8 vasos)</label>
            </div>
            <div class="habit-item">
                <input type="checkbox" id="no-junk">
                <label for="no-junk">Evité la comida chatarra</label>
            </div>
            <div class="habit-item">
                <input type="checkbox" id="exercise">
                <label for="exercise">Hice ejercicio o jugué activamente</label>
            </div>
            <div class="habit-item">
                <input type="checkbox" id="good-sleep">
                <label for="good-sleep">Dormí las horas suficientes</label>
            </div>
            <div class="habit-item">
                <input type="checkbox" id="family-meal">
                <label for="family-meal">Comí al menos una comida en familia</label>
            </div>
        </div>
        <div class="reflection-section">
            <h4>Reflexión del día</h4>
            <textarea placeholder="¿Qué hábito saludable te gustó más hoy? ¿Cuál te gustaría mejorar mañana?" rows="4" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc;"></textarea>
        </div>
        <button onclick="saveDiary()" style="margin-top: 20px;">Guardar Diario</button>
    `;
}

function saveDiary() {
    const checkedHabits = document.querySelectorAll('.habits-checklist input:checked').length;
    const totalHabits = document.querySelectorAll('.habits-checklist input').length;
    const reflection = document.querySelector('.reflection-section textarea').value.trim();
    
    let score = Math.round((checkedHabits / totalHabits) * 100);
    if (reflection.length > 20) score += 10; // Bonus por reflexión
    
    gameState.activityScores.diario = Math.min(score, 100);
    saveProgress();
    
    alert(`¡Diario guardado! Hábitos completados: ${checkedHabits}/${totalHabits} (${score}%)`);
}

function updateTotalPoints() {
    let total = 0;
    
    // Sumar puntos de cuestionarios
    Object.values(gameState.levelScores).forEach(score => {
        total += score;
    });
    
    // Sumar puntos de actividades (convertir porcentaje a puntos)
    Object.values(gameState.activityScores).forEach(score => {
        total += Math.round(score / 10); // 100% = 10 puntos
    });
    
    gameState.totalPoints = total;
    document.getElementById('total-points').textContent = total;
    document.getElementById('progress-total-points').textContent = total;
}

function updateProgressScreen() {
    updateTotalPoints();
    
    // Contar niveles completados
    const completedLevels = Object.keys(gameState.levelScores).length;
    document.getElementById('completed-levels').textContent = completedLevels;
    
    // Contar actividades completadas
    const completedActivities = Object.keys(gameState.activityScores).length;
    document.getElementById('completed-activities').textContent = completedActivities;
    
    // Mostrar progreso por nivel
    const progressList = document.getElementById('level-progress-list');
    progressList.innerHTML = '';
    
    Object.entries(quizData).forEach(([level, data]) => {
        const score = gameState.levelScores[level] || 0;
        const percentage = score > 0 ? Math.round((score / data.maxPoints) * 100) : 0;
        
        const item = document.createElement('div');
        item.className = 'level-progress-item';
        item.innerHTML = `
            <h4>${data.title}</h4>
            <p>Puntuación: ${score}/${data.maxPoints} (${percentage}%)</p>
            <p>Estado: ${score > 0 ? 'Completado' : 'Pendiente'}</p>
        `;
        
        progressList.appendChild(item);
    });
}

function saveProgress() {
    if (gameState.selectedCharacter) {
        const progressKey = `dietetic_game_${gameState.selectedCharacter}`;
        const progressData = {
            levelScores: gameState.levelScores,
            activityScores: gameState.activityScores,
            totalPoints: gameState.totalPoints
        };
        localStorage.setItem(progressKey, JSON.stringify(progressData));
    }
}

function loadProgress() {
    if (gameState.selectedCharacter) {
        const progressKey = `dietetic_game_${gameState.selectedCharacter}`;
        const savedData = localStorage.getItem(progressKey);
        
        if (savedData) {
            const progressData = JSON.parse(savedData);
            gameState.levelScores = progressData.levelScores || {};
            gameState.activityScores = progressData.activityScores || {};
            gameState.totalPoints = progressData.totalPoints || 0;
        }
    }
}

// Inicializar el juego
document.addEventListener('DOMContentLoaded', function() {
    showScreen('start-screen');
});