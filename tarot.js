
 function esPreguntaValida(texto) {
     const textoLimpio = texto.trim();
 
     if (!textoLimpio.endsWith("?")) {
         console.log("No termina en signo de interrogación.");
         return false;
     }
 
     const textoSinInterrogacion = textoLimpio.slice(0, -1).trim();
     const palabras = textoSinInterrogacion.split(/\s+/);
 
     if (palabras.length < 3) {
         console.log("Menos de 3 palabras.");
         return false;
     }
 
     const palabraEsValida = (palabra) => {
         if (palabra.length < 3) return false;
         const vocales = /[aeiouáéíóúü]/i;
         const consonantes = /[bcdfghjklmnñpqrstvwxyz]/i;
         return vocales.test(palabra) && consonantes.test(palabra);
     };
 
     const palabrasValidas = palabras.filter(palabraEsValida);
     if (palabrasValidas.length < Math.ceil(palabras.length / 2)) {
         console.log("No hay suficientes palabras válidas.");
         return false;
     }
 
     console.log("Pregunta válida.");
     return true;
 }
 
 function consultarTarot() {
     const pregunta = document.getElementById("pregunta").value.trim();
     const resultado = document.getElementById("resultado");
 
     resultado.classList.remove("visible");
 
     try {
         if (pregunta === "") {
             throw new Error("⚠️ Debes escribir una pregunta para consultar el tarot.");
         }
 
         if (!esPreguntaValida(pregunta)) {
             throw new Error("❓ La pregunta debe tener al menos 3 palabras válidas y terminar con un signo de interrogación.");
         }
 
         resultado.innerHTML = "Consultando las cartas del destino... 🔮";
         resultado.classList.add("visible");
 
         // Ahora viene el tiempo de espera (simulación)
         setTimeout(() => {
             try {
                 const respuestas = [
                     "🃏 Sí, el universo conspira a tu favor 🌟",
                     "🃏 No, es mejor esperar un poco ⏳",
                     "🃏 Tal vez... el futuro es incierto 🍃",
                     "🃏 La respuesta está en tu interior 🔮"
                 ];
 
                 const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
 
                 resultado.innerHTML = `
                     <strong>${respuesta}</strong><br><br>
                     🔔 Consejo del tarot: Cree en tus instintos y actúa con sabiduría.
                 `;
 
                 // Acá mostramos que la consulta terminó
                 resultado.innerHTML += `<br><br><em>✅ Consulta completada.</em>`;
                 console.log("✅ Consulta completada (dentro del setTimeout).");
 
             } catch (error) {
                 resultado.innerHTML = `<span style="color: yellow;">${error.message}</span>`;
                 console.log("❗ Error dentro del setTimeout.");
             }
         }, 2000);
 
     } catch (error) {
         resultado.innerHTML = `<span style="color: yellow;">${error.message}</span>`;
         resultado.classList.add("visible");
 
         console.log("❗ Error en la validación antes del setTimeout.");
     }
 }