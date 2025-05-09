/**
 * Calcula el promedio de un arreglo de calificaciones numéricas.
 * Itera sobre el arreglo para sumar todos los scores y luego divide el total por la cantidad de scores.
 *
 * @param {number[]} scores - Un arreglo de números que representan las calificaciones.
 * @returns {number} El promedio calculado de las calificaciones.
 */
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

/**
 * Convierte un score numérico a su calificación de letra correspondiente según un esquema predefinido.
 * Utiliza una serie de sentencias condicionales para determinar el rango del score y asignar la letra correcta.
 *
 * @param {number} score - El score numérico del estudiante (se espera un valor entre 0 y 100).
 * @returns {string} La calificación de letra correspondiente ("A++", "A", "B", "C", "D", "F").
 */
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/**
 * Verifica si un score numérico corresponde a una calificación aprobatoria.
 * Una calificación se considera aprobatoria si no es una "F" según la función `getGrade`.
 *
 * @param {number} score - El score numérico del estudiante.
 * @returns {boolean} Retorna `true` si la calificación es aprobatoria, `false` en caso contrario.
 */
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

/**
 * Genera un mensaje de texto personalizado para un estudiante con sus resultados académicos.
 * El mensaje incluye el promedio de la clase, la calificación de letra del estudiante y una indicación de si aprobó o reprobó el curso.
 *
 * @param {number[]} totalScores - Un arreglo con todas las calificaciones de la clase para calcular el promedio.
 * @param {number} studentScore - La calificación individual del estudiante.
 * @returns {string} El mensaje formateado listo para mostrar al estudiante.
 */
function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);
  let message = "Class average: " + average + ". Your grade: " + grade + ". ";

  if (passed) {
    message = message + "You passed the course.";
  } else {
    message = message + "You failed the course.";
  }
  return message;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
