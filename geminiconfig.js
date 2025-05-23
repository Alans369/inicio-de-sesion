// src/config/geminiConfig.js
const { GoogleGenAI } = require( "@google/genai");

// Configuración base para todos los agentes

const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });
// Configuración común para todos los modelos
const baseConfig = {
  model: "gemini-2.0-flash",
  generationConfig: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 2048,
  },
};

// Configuración específica para el Inspector (más determinístico)
const inspectorConfig = {
  ...baseConfig,
  generationConfig: {
    ...baseConfig.generationConfig,
    temperature: 0.1, // Menos creativo, más preciso
  }
};

// Configuración para agentes de formulario (creatividad moderada)
const formularioConfig = {
  ...baseConfig,
  generationConfig: {
    ...baseConfig.generationConfig,
    temperature: 0.5,
  }
};

// Configuración para explicador (más creativo para lenguaje natural)
const explicadorConfig = {
  ...baseConfig,
  generationConfig: {
    ...baseConfig.generationConfig,
    temperature: 0.8,
  }
};

// Función para crear cliente con configuración específica
export const createGeminiClient = (configType = 'base') => {
  let config;
  
  switch(configType) {
    case 'inspector':
      config = inspectorConfig;
      break;
    case 'formulario':
      config = formularioConfig;
      break;
    case 'explicador':
      config = explicadorConfig;
      break;
    default:
      config = baseConfig;
  }
  
  return ai.getGenerativeModel(config);
};

export { ai };