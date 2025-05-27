

    function enviarmensaje(mensaje){
         $.ajax({
        url: '/chat2',
        type: 'GET',
        data: { message: mensaje },
        success: function(response) {
            console.log('Respuesta del servidor:', response);
            addMessage('ai', response);
        },
        error: function(xhr, status, error) {
            console.error('Error en la solicitud AJAX:', error);
            addMessage('ai', 'Lo siento, ha ocurrido un error al procesar tu mensaje.');
        }
    });

    }
    
    

    let chatHistory = [
        { id: 1, title: "Conversación General", preview: "¿Cómo puedo ayudarte hoy?", active: true },
        { id: 2, title: "Programación Web", preview: "Ayuda con HTML y CSS..." },
        { id: 3, title: "Recetas de Cocina", preview: "Ideas para cenas saludables..." },
        { id: 4, title: "Consejos de Estudio", preview: "Técnicas de memorización..." }
    ];

    let currentMessages = [
        { type: 'ai', content: '¡Hola! 👋 Soy tu asistente de IA. ¿En qué puedo ayudarte hoy? Puedo responder preguntas, ayudarte con tareas, generar contenido creativo y mucho más.' }
    ];

    function sendMessage() {
        const $input = $('#messageInput');
        const message = $input.val().trim();

        if (message) {
            addMessage('user', message);
            console.log("Mensaje que el usuario escribió:", message);
            $input.val('');
            enviarmensaje(message);

            // addMessage('ai', `<a href="https://www.ejemplo.com"
            //     style="text-decoration: none; color: blue;">
            //         Pasa el ratón aquí (usando JavaScript)
            //     </a>`);
                        }
       }

    function addMessage(type, content) {
        const $messagesContainer = $('#chatMessages');
        const $messageDiv = $('<div>').addClass(`message ${type}`);

        // Si el contenido es HTML (como un enlace), usar .html(), si no, usar .text()
        if (content.startsWith('<a')) {
            $messageDiv.append(content);
        } else {
            $messageDiv.append(content);
        }

        $messagesContainer.append($messageDiv);
        $messagesContainer.scrollTop($messagesContainer[0].scrollHeight);

        currentMessages.push({ type, content });
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    }


    function updateChatHistory() {
        const $historyContainer = $('#chatHistory');
        $historyContainer.empty();

        chatHistory.forEach(chat => {
            const $chatItem = $('<div>')
                .addClass(`chat-item${chat.active ? ' active' : ''}`)
                .append(`<div class="chat-title">${chat.title}</div>`)
                .append(`<div class="chat-preview">${chat.preview}</div>`)
                .click(() => selectChat(chat.id));
            $historyContainer.append($chatItem);
        });
    }

    function selectChat(chatId) {
        chatHistory.forEach(chat => {
            chat.active = chat.id === chatId;
        });

        updateChatHistory();

        $('#chatMessages').html('<div class="message ai">Has seleccionado un chat del historial. ¿En qué puedo ayudarte?</div>');
    }

    // Auto-resize del textarea
    $(document).ready(function() {
        $('#messageInput').on('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 120) + 'px';
        });

        // Si quieres que Enter funcione igual que antes
        $('#messageInput').on('keypress', handleKeyPress);
    });
