//*** APP INIT ***//
const app = Vue.createApp({
    /* -----------------------------------------
    * MISC
    -------------------------------------------*/
    name: 'Boolzapp',


    /* -----------------------------------------
    * DATA
    -------------------------------------------*/
    data() {
        return {

            /* 
            * RENDER
            */
            layoutLeftElem: {
                show: false
            },


            /* 
            * GLOBAL
            */
            currentContactId: null,
            newMessage: '',
            replyTimer: null,
            replyDelay: 1000,
            searchedContactTerm: '',
            searchedMessageTerm: '',
            currentContactIsWriting: false,


            /* 
            * EMOJI
            */
            emojis: [
                { char: '😀', tag: 'face' },
                { char: '😁', tag: 'face' },
                { char: '😂', tag: 'face' },
                { char: '😃', tag: 'face' },
                { char: '😄', tag: 'face' },
                { char: '😅', tag: 'face' },
                { char: '😆', tag: 'face' },
                { char: '😇', tag: 'face' },
                { char: '😈', tag: 'face' },
                { char: '😉', tag: 'face' },
                { char: '😊', tag: 'face' },
                { char: '😋', tag: 'face' },
                { char: '😌', tag: 'face' },
                { char: '😍', tag: 'face' },
                { char: '😎', tag: 'face' },
                { char: '😏', tag: 'face' },
                { char: '😐', tag: 'face' },
                { char: '😑', tag: 'face' },
                { char: '😒', tag: 'face' },
                { char: '😓', tag: 'face' },
                { char: '😔', tag: 'face' },
                { char: '😕', tag: 'face' },
                { char: '😖', tag: 'face' },
                { char: '😗', tag: 'face' },
                { char: '😘', tag: 'face' },
                { char: '😙', tag: 'face' },
                { char: '😚', tag: 'face' },
                { char: '😛', tag: 'face' },
                { char: '😜', tag: 'face' },
                { char: '😝', tag: 'face' },
                { char: '😞', tag: 'face' },
                { char: '😟', tag: 'face' },
                { char: '😠', tag: 'face' },
                { char: '😡', tag: 'face' },
                { char: '😢', tag: 'face' },
                { char: '😣', tag: 'face' },
                { char: '😤', tag: 'face' },
                { char: '😥', tag: 'face' },
                { char: '😦', tag: 'face' },
                { char: '😧', tag: 'face' },
                { char: '😨', tag: 'face' },
                { char: '😩', tag: 'face' },
                { char: '😪', tag: 'face' },
                { char: '😫', tag: 'face' },
                { char: '😬', tag: 'face' },
                { char: '😭', tag: 'face' },
                { char: '😮', tag: 'face' },
                { char: '😯', tag: 'face' },
                { char: '😰', tag: 'face' },
                { char: '😱', tag: 'face' },
                { char: '😲', tag: 'face' },
                { char: '😳', tag: 'face' },
                { char: '😴', tag: 'face' },
                { char: '😵', tag: 'face' },
                { char: '😶', tag: 'face' },
                { char: '😷', tag: 'face' },
                { char: '🙁', tag: 'face' },
                { char: '🙂', tag: 'face' },
                { char: '🙃', tag: 'face' },
                { char: '🙄', tag: 'face' },
                { char: '🤐', tag: 'face' },
                { char: '🤑', tag: 'face' },
                { char: '🤒', tag: 'face' },
                { char: '🤓', tag: 'face' },
                { char: '🤔', tag: 'face' },
                { char: '🤕', tag: 'face' },
                { char: '🤠', tag: 'face' },
                { char: '🤡', tag: 'face' },
                { char: '🤢', tag: 'face' },
                { char: '🤣', tag: 'face' },
                { char: '🤤', tag: 'face' },
                { char: '🤥', tag: 'face' },
                { char: '🤧', tag: 'face' },
                { char: '🤨', tag: 'face' },
                { char: '🤩', tag: 'face' },
                { char: '🤪', tag: 'face' },
                { char: '🤫', tag: 'face' },
                { char: '🤬', tag: 'face' },
                { char: '🤭', tag: 'face' },
                { char: '🤮', tag: 'face' },
                { char: '🤯', tag: 'face' },
                { char: '🧐', tag: 'face' },
                { char: '🐵', tag: 'nature' },
                { char: '🐒', tag: 'nature' },
                { char: '🦍', tag: 'nature' },
                { char: '🐶', tag: 'nature' },
                { char: '🐕', tag: 'nature' },
                { char: '🐩', tag: 'nature' },
                { char: '🐺', tag: 'nature' },
                { char: '🦊', tag: 'nature' },
                { char: '🐱', tag: 'nature' },
                { char: '🐈', tag: 'nature' },
                { char: '🦁', tag: 'nature' },
                { char: '🐯', tag: 'nature' },
                { char: '🐅', tag: 'nature' },
                { char: '🐆', tag: 'nature' },
                { char: '🐴', tag: 'nature' },
                { char: '🐎', tag: 'nature' },
                { char: '🦌', tag: 'nature' },
                { char: '🦄', tag: 'nature' },
                { char: '🐮', tag: 'nature' },
                { char: '🐂', tag: 'nature' },
                { char: '🐃', tag: 'nature' },
                { char: '🐄', tag: 'nature' },
                { char: '🐷', tag: 'nature' },
                { char: '🐖', tag: 'nature' },
                { char: '🐗', tag: 'nature' },
                { char: '🐽', tag: 'nature' },
                { char: '🐏', tag: 'nature' },
                { char: '🐑', tag: 'nature' },
                { char: '🐐', tag: 'nature' },
                { char: '🐪', tag: 'nature' },
                { char: '🐫', tag: 'nature' },
                { char: '🐘', tag: 'nature' },
                { char: '🦏', tag: 'nature' },
                { char: '🐭', tag: 'nature' },
                { char: '🐁', tag: 'nature' },
                { char: '🐀', tag: 'nature' },
                { char: '🐹', tag: 'nature' },
                { char: '🐰', tag: 'nature' },
                { char: '🐇', tag: 'nature' },
                { char: '🐿', tag: 'nature' },
                { char: '🦇', tag: 'nature' },
                { char: '🐻', tag: 'nature' },
                { char: '🐨', tag: 'nature' },
                { char: '🐼', tag: 'nature' },
                { char: '🐾', tag: 'nature' },
            ],
            emojiActiveTag: 'face',


            /* 
            * USER
            */
            user: {
                name: 'Nome Utente',
                avatar: '_io'
            },


            /* 
            * CONTACTS
            */
            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            id: 3,
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            id: 3,
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            id: 2,
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            id: 3,
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            id: 3,
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            id: 3,
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]

        };
    },


    /* -----------------------------------------
    * COMPUTED
    -------------------------------------------*/
    computed: {

        /* 
        * CONTACT
        */
        //*** FILTERED CONTACTS ***//
        // Get filtered contacts by name
        filteredContacts() {
            return this.contacts.filter(({name}) => name.toLowerCase().includes(this.searchedContactTerm.toLowerCase()));
        },

        //*** CURRENT CONTACT ***//
        // Get a reference of the current contact from current contact id
        currentContact() {
            if(!this.currentContactId) return null;
            return this.contacts.find(({id}) => id === this.currentContactId);
        },

        //*** CURRENT MESSAGES ***//
        // Get a current message from current contact
        currentMessages() {
            if(!this.currentContact) return [];
            return this.currentContact.messages;
        },

        //*** FILTERED CONTACT MESSAGES ***//
        // Get filtered contact messages by message text
        filteredContactMessages() {
            return this.currentMessages.filter(({message}) => message.toLowerCase().includes(this.searchedMessageTerm.toLowerCase()));
        },

        //*** LAST ACCESS ***//
        // Get last access based on last received message date or an empty string if not found
        lastAccess() {
            if (!this.currentLastReceivedMessageId) return '';
            return this.currentMessages.find(({id}) => id === this.currentLastReceivedMessageId).date;
        },


        /* 
        * MESSAGE
        */
        //*** CURRENT LAST MESSAGE ID ***//
        // Get last message id of the current contact or 0 if isn't found
        currentLastMessageId() {
            return this.currentMessages.reduce((result, {id}) => id > result ? id: result, 0);
        },


        //*** CURRENT LAST RECEIVED MESSAGE ID ***//
        // Get last message id of the current contact or 0 if isn't found
        currentLastReceivedMessageId() {
            return this.currentMessages.reduce((result, {id, status}) => status === 'received' && id > result ? id: result, 0);
        },


        /* 
        * EMOJI
        */
        //*** FILTERED EMOJI ***//
        // Get emoji list filtered by active tag
        filteredEmojis() {
            return this.emojis.filter(({tag}) => tag === this.emojiActiveTag);
        }

    },


    /* -----------------------------------------
    * METHODS
    -------------------------------------------*/
    methods: {

        /* 
        * UTILS
        */
        //*** GET OBJECT BY ID ***//
        // Get an object from an array of objects based on id argument or undefined if not found
        getObjectById(arr, itemId) {
            return arr.find(({id}) => id === itemId);
        },


        /* 
        * CONTACT
        */
        //*** GET AVATAR URL ***//
        // Get avatar image url
        getAvatarUrl(avatar) {
            return 'img/avatar' + avatar + '.jpg';
        },

        //*** SET CURRENT CONTACT ***//
        // Set current contact from id
        setCurrrentContact(contactId) {
            
            // Change current contact ID
            this.currentContactId = contactId;

            // Reset render
            this.layoutLeftElem.show = false; // Hide sidebar
            this.searchedMessageTerm = ''; // Reset search message
        },

        //*** DELETE CURRENT CONTACT ***//
        // Delete current contact
        deleteCurrentContact() {
            this.contacts = this.contacts.filter(({id}) => id !== this.currentContactId);
            this.currentContactId = null;
        },

        //*** GET CONTACT MESSAGES ***//
        // Get contact messages by contact id or undefined if contact or messages dont exist
        getContactMessages(contactId) {
            const contact = this.getObjectById(this.contacts, contactId);

            if(!contact) return undefined;
            return contact.messages;
        },


        /* 
        * MESSAGE
        */
        //*** ADD MESSAGE ***//
        // Add a message to the current contact message list
        addMessage(message, status) {

            // Get id
            const msgId = this.currentLastMessageId + 1;

            // Create date string
            const dateNow = new Date();
            const dateFormatOptions = {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }
            const msgDate = dateNow.toLocaleString([], dateFormatOptions).replace(',', '');

            // Add message
            this.currentMessages.push({ id: msgId, date: msgDate, message, status });

        },

        //*** DELETE MESSAGE ***//
        // Delete a message from the id
        deleteMessage(messageId) {
            this.currentContact.messages = this.currentContact.messages.filter(({id}) => id !== messageId);
        },

        //*** DELETE ALL MESSAGES ***//
        // Delete a message from the id
        deleteAllMessages() {
            this.currentContact.messages = [];
            this.searchedMessageTerm = ''; // Reset search message
        },

        //*** SEND MESSAGE ***//
        // Send user message from the message input
        sendMessage() {

            // Validation
            if(!this.newMessage) return;

            // add message
            this.addMessage(this.newMessage, 'sent');

            // Reset render
            this.newMessage = '';
            this.$refs.addMessageInput.focus();
            this.searchedMessageTerm = ''; // Reset search message

            // Send CPU reply (cpu wait last message before reply)
            this.currentContactIsWriting = true;

            clearTimeout(this.replyTimer);
            this.replyTimer = setTimeout(() => {

                // Get a random emoji
                const randomMood = Math.floor(Math.random() * this.emojis.length);

                // Reply to user message
                this.addMessage(this.emojis[randomMood].char, 'received');
                this.currentContactIsWriting = false;

            }, this.replyDelay);
        },

        //*** GET LAST MESSAGE TEXT ***//
        // Get last message text from contact messages
        getLastMessageText(contacId) {

            // Check if current contact is writing
            if (contacId === this.currentContactId && this.currentContactIsWriting) return 'Sta Scrivendo...';

            
            // Get last message text
            const contactMessages = this.getContactMessages(contacId);
            
            if(!contactMessages.length) return ''; // No messages
            const lastMessageId = contactMessages.reduce((result, {id}) => id > result ? id: result, 0);

            return this.getObjectById(contactMessages, lastMessageId).message;
        },

        //*** GET LAST MESSAGE DATE ***//
        // Get last message date from contact messages
        getLastMessageDate(contacId) {

            // Get last message text
            const contactMessages = this.getContactMessages(contacId);
            
            if(!contactMessages.length) return '';// No messages
            const lastMessageId = contactMessages.reduce((result, {id}) => id > result ? id: result, 0);

            return this.getObjectById(contactMessages, lastMessageId).date;
        },


        /* 
        * EMOJI
        */
        //*** ADD EMOJI ***//
        // Add emoji char to the text input
        addEmoji(entityDecimal) {
            this.newMessage += entityDecimal;
            this.$refs.addMessageInput.focus();
        },

        //*** SET EMOJI CATEGORY ***//
        // Set Emoji active tag by tag name
        setEmojiActiveTag(emojiTag) {
            this.emojiActiveTag = emojiTag;
        }
    }
});

app.mount('#root');
