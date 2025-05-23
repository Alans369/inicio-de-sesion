

const {GoogleGenAI,Type} = require('@google/genai')

const setLightValuesFunctionDeclaration = {
  name: 'set_light_values',
  description: 'Sets the brightness and color temperature of a light.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      brightness: {
        type: Type.NUMBER,
        description: 'Light level from 0 to 100. Zero is off and 100 is full brightness',
      },
      color_temp: {
        type: Type.STRING,
        enum: ['daylight', 'cool', 'warm'],
        description: 'Color temperature of the light fixture, which can be `daylight`, `cool` or `warm`.',
      },
    },
    required: ['brightness', 'color_temp'],
  },
};

function setLightValues(brightness, color_temp) {
  return {
    brightness: brightness,
    colorTemperature: color_temp
  };
}




// Generation Config with Function Declaration
const config = {
  tools: [{
    functionDeclarations: [setLightValuesFunctionDeclaration]
  }]
};

// Configure the client
const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

// Define user prompt
const contents = [
  {
    role: 'user',
    parts: [{ text: 'Turn the lights down to a romantic level' }]
  }
];

// Send request with function declarations
async function main() {
  try {
        const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: contents,
        config: config
        });

        // Extract tool call details
        const tool_call = response.functionCalls[0]

        let result;
        if (tool_call.name === 'set_light_values') {
        result = setLightValues(tool_call.args.brightness, tool_call.args.color_temp);
        console.log(`Function execution result: ${JSON.stringify(result)}`);

        // Create a function response part
        const function_response_part = {
        name: tool_call.name,
        response: { result }
        }

        // Append function call and result of the function execution to contents
        contents.push({ role: 'model', parts: [{ functionCall: tool_call }] });
        contents.push({ role: 'user', parts: [{ functionResponse: function_response_part }] });

        // Get the final response from the model
        const final_response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: contents,
        config: config
        });

        console.log(final_response.text);
}
    

    // Log the response
    console.log('Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();