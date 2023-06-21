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
            * GLOBAL
            */
            currentContactId: 1,
            newMessage: '',
            replyTimer: null,
            replyDelay: 1000,


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
                    avatar: '_5',
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
        //*** CURRENT CONTACT ***//
        // Get a reference of the current contact from current contact id
        currentContact() {
            return this.contacts.find(({id}) => id === this.currentContactId);
        },

        //*** CURRENT MESSAGES ***//
        // Get a current message from current contact
        currentMessages() {
            return this.currentContact.messages;
        },


        /* 
        * MESSAGE
        */
        //*** LAST MESSAGE ID ***//
        // Get last message id of the current contact
        lastMessageId() {
            return this.currentMessages.reduce((result, {id}) => id > result ? id: result, 0);
        }

    },


    /* -----------------------------------------
    * METHODS
    -------------------------------------------*/
    methods: {

        /* 
        * CONTACT
        */
        //*** GET AVATAR URL ***//
        // Get avatar image url
        getAvatarUrl(avatar) {
            return 'img/avatar' + avatar + '.jpg';
        },

        //*** SET CURRENT CONTACT ***//
        // Get avatar image url
        setCurrrentContact(contactId) {
            
            this.currentContactId = contactId;
        },


        /* 
        * MESSAGE
        */
        //*** ADD MESSAGE ***//
        // Add a message to the current contact message list
        addMessage(msg, status) {

            // Validation
            if(!msg.length) return;

            // Get id
            const msgId = this.lastMessageId + 1;

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
            this.currentMessages.push({ id:msgId, date: msgDate, message: msg, status: status });

        },

        //*** SENT MESSAGE ***//
        // Sent user message from the message input
        sentMessage() {

            // add message
            this.addMessage(this.newMessage, 'sent');

            // Reset input
            this.newMessage = '';
            this.$refs.addMessageInput.focus();

            // Reset reply timer and set new one (cpu wait last message before reply)
            clearTimeout(this.replyTimer);
            this.replyTimer = setTimeout(this.sentCPUMessage, this.replyDelay);
        },

        //*** SENT CPU MESSAGE ***//
        // Sent CPU reply message with predefined text
        sentCPUMessage() {

            // add message
            this.addMessage('Ok', 'received');

            // Reset input
            this.newMessage = '';
            this.$refs.addMessageInput.focus();
        }
    }
});

app.mount('#root');
