import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: localStorage.getItem('users') ?
            JSON.parse(localStorage.getItem('users')) : [{
                    nrAluno: 11111111,
                    fname: 'User',
                    lname: 'Name',
                    email: 'username@gmail.com',
                    password: 'Esmad_2021',
                    curso: 'TSIW',
                    estado: 'disponivel',
                    type: 'user',
                    cv: '',
                    facebook: '',
                    instagram: '',
                    linkedin: '',
                    photo: '',
                    pontos: 0
                },

                {
                    nrAluno: 10000000,
                    fname: 'Admin',
                    lname: 'Admin',
                    email: 'admin@hotmail.com',
                    password: 'Esmad_2021',
                    curso: '',
                    estado: 'disponivel',
                    type: 'admin',
                    cv: '',
                    facebook: '',
                    instagram: '',
                    linkedin: '',
                    photo: '',
                    pontos: 0
                }
            ],

        loggedUser: sessionStorage.getItem('loggedUser') ? JSON.parse(sessionStorage.getItem('loggedUser')) : '',
        userProfileContent: '',
        companyProfileContent: '',
        eventsProfileContent: '',
        offersProfileContent: '',
        companies: localStorage.getItem('companies') ? JSON.parse(localStorage.getItem('companies')) : [{
            id: 1,
            name: 'Moxy',
            email: 'hello@moxy.studio',
            address: 'Rua do Bonjardim, 672 A, 4000-119 Porto',
            website: 'https://moxy.studio/',
            logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQH7FogRsvO6Vw/company-logo_200_200/0/1519919483039?e=2159024400&v=beta&t=NnmIW8EUdRvyVSp82GK-mAFD7FI_bYhlbiJbBLvgmUs',
            linkedIN: 'https://linkedIn/moxystudio',
            about: "A MOXY é um estúdio de software e design que busca o equilíbrio entre impacto, excelência e pragmatismo. Chamamos a isso de Projeto de Engenharia. Com mais de 30 anos de experiência combinada em desenvolvimento de software e produto na equipa de gestão, uma lista de clientes e parceiros de negócios de alto nível nos setores de entretenimento e tecnologia confirmam que a MOXY é um estúdio de software e design com foco na qualidade e na experiência do utilizador.'//'Tu, um Engenheiro de Full-stack, farás parte de uma equipa que se move rapidamente, com espírito de inovação constante e não tem medo de abraçar novas tecnologias e desafios. Tu farás parte do processo de design e arquitetura de todas as camadas de software, desenvolvendo serviços de alto desempenho e resilientes e construindo interfaces de utilizador ricas e interativas."
        }],

        events: localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [{
            id: 1,
            id_event_type: 1,
            name: 'Front-end For Dummies',
            price: 0,
            description: "In addition to “front-facing” technical capabilities in web development, which affect things that users see and click or tap, there are back-end software development jobs as well.",
            photo: 'https://news.artnet.com/app/news-upload/2017/02/Interior-shot-256x256.jpg',
            date_time_event: '2021-02-20/15:00',
            date_limit: '2021-02-18',
            link: '',
            address: 'Rua D. Sancho I, n.º 981 4480-876 Vila do Conde',
            nrLimit: 100
        }, {
            id: 2,
            id_event_type: 1,
            name: 'Front-end For Dummies',
            price: 0,
            description: "In addition to “front-facing” technical capabilities in web development, which affect things that users see and click or tap, there are back-end software development jobs as well.",
            photo: 'https://news.artnet.com/app/news-upload/2017/02/Interior-shot-256x256.jpg',
            date_time_event: '2021-02-22/15:00',
            date_limit: '2021-02-18',
            link: '',
            address: 'Rua D. Sancho I, n.º 981 4480-876 Vila do Conde',
            nrLimit: 100
        }, {
            id: 3,
            id_event_type: 1,
            name: 'Front-end For Dummies',
            price: 0,
            description: "In addition to “front-facing” technical capabilities in web development, which affect things that users see and click or tap, there are back-end software development jobs as well.",
            photo: 'https://news.artnet.com/app/news-upload/2017/02/Interior-shot-256x256.jpg',
            date_time_event: '2021-02-23/15:00',
            date_limit: '2021-02-18',
            link: '',
            address: 'Rua D. Sancho I, n.º 981 4480-876 Vila do Conde',
            nrLimit: 100
        }, {
            id: 4,
            id_event_type: 1,
            name: 'Front-end For Dummies',
            price: 0,
            description: "In addition to “front-facing” technical capabilities in web development, which affect things that users see and click or tap, there are back-end software development jobs as well.",
            photo: 'https://news.artnet.com/app/news-upload/2017/02/Interior-shot-256x256.jpg',
            date_time_event: '2021-02-24/15:00',
            date_limit: '2021-02-18',
            link: '',
            address: 'Rua D. Sancho I, n.º 981 4480-876 Vila do Conde',
            nrLimit: 100
        }],
        events_type: localStorage.getItem('events-type') ? JSON.parse(localStorage.getItem('events-type')) : [{
                id: 1,
                description: 'Evento'
            },
            {
                id: 2,
                description: 'Workshop'
            },
            {
                id: 3,
                description: 'Curso de Formação'
            },
            {
                id: 4,
                description: 'Curso de Especialização'
            }
        ],
        guests: localStorage.getItem('guests') ? JSON.parse(localStorage.getItem('guests')) : [{
                id: 1,
                idEvent: 1,
                name: 'Tiago Santos',
                company: 'MOXY'
            },
            {
                id: 2,
                idEvent: 1,
                name: 'Pedro Santos',
                company: 'Mindera'
            }
        ],
        enrollments: localStorage.getItem('enrollments') ? JSON.parse(localStorage.getItem('enrollments')) : [],
        offers: localStorage.getItem('offers') ? JSON.parse(localStorage.getItem('offers')) : [{
            id: 1,
            id_Company: 1,
            id_type_offer: 2,
            id_area: 4,
            description: 'Precisa-se de aluno para Estágio profissional.',
            emailContact: 'adminMoxy@moxy.com',
            duration: '6 Meses'
        }, {
            id: 2,
            id_Company: 1,
            id_type_offer: 2,
            id_area: 4,
            description: 'Precisa-se de aluno para Estágio profissional.',
            emailContact: 'adminMoxy@moxy.com',
            duration: '6 Meses'
        }, {
            id: 3,
            id_Company: 1,
            id_type_offer: 2,
            id_area: 4,
            description: 'Precisa-se de aluno para Estágio profissional.',
            emailContact: 'adminMoxy@moxy.com',
            duration: '6 Meses'
        }, {
            id: 4,
            id_Company: 1,
            id_type_offer: 2,
            id_area: 4,
            description: 'Precisa-se de aluno para Estágio profissional.',
            emailContact: 'adminMoxy@moxy.com',
            duration: '6 Meses'
        }],
        offers_type: localStorage.getItem('offers-type') ? JSON.parse(localStorage.getItem('offers-type')) : [{
                id: 1,
                description: 'Oferta Profissional'
            },
            {
                id: 2,
                description: 'Estágio'
            },
            {
                id: 3,
                description: 'Freelance'
            }
        ],
        areas: localStorage.getItem('areas') ? JSON.parse(localStorage.getItem('areas')) : [{
                id: 1,
                description: 'e-commerce'
            },
            {
                id: 2,
                description: 'design'
            },
            {
                id: 3,
                description: 'UI/UX'
            },
            {
                id: 4,
                description: 'WebDev'
            },
            {
                id: 5,
                description: 'Audiovisual'
            }
        ]
    },
    getters: {
        getLoggedUser: (state) => state.loggedUser,
        isLoggedUser: (state) => state.loggedUser == '' ? false : true,
        isLoggedAdmin: (state) => state.loggedUser.type == 'admin' ? true : false
    },
    actions: {
        login(context, payload) {
            //verificar se este user ja existe
            const user = context.state.users.find(user => user.email === payload.email && user.password === payload.password && user.estado == 'disponivel')
            if (user != undefined) {
                //login com sucesso
                context.commit('LOGIN', user)
                sessionStorage.setItem('loggedUser', JSON.stringify(user))
            } else {
                //login sem sucesso
                throw Error('Login Inválido')
            }
        },
        logout(context) {
            context.commit('LOGOUT')
            sessionStorage.removeItem('loggedUser')
        },
        register(context, payload) {
            //verificar se ja existe este user
            const user = context.state.users.find(user => user.email === payload.email)
            if (user == undefined) {
                //registo com sucesso
                context.commit('REGISTER', payload)
                localStorage.setItem('users', JSON.stringify(context.state.users))
            } else {
                //register sem sucesso
                throw Error('Utilizador já existente!')
            }
        },
        editProfile(context, payload) {
            context.commit('EDITPROFILE', payload)
            localStorage.setItem('users', JSON.stringify(context.state.users))
        },
        removeUser(context, payload) {
            context.commit('REMOVEUSER', payload)
            localStorage.setItem('users', JSON.stringify(context.state.users))
        },
        seeMore(context, payload) {
            context.commit('SEEMORE', payload)
        },
        updateStatus(context, payload) {
            context.commit('UPDATESTATUS', payload)
            localStorage.setItem('users', JSON.stringify(context.state.users))
        },
        removeCompany(context, payload) {
            context.commit('REMOVECOMPANY', payload)
            localStorage.setItem('companies', JSON.stringify(context.state.companies))
        },
        addCompany(context, payload) {
            //verificar se ja existe esta empresa
            const company = context.state.companies.find(company => company.name === payload.name)
            if (company == undefined) {
                //criação da empresa com sucesso
                context.commit('ADDCOMPANY', payload)
                localStorage.setItem('companies', JSON.stringify(context.state.companies))
            } else {
                //criação da empresa sem sucesso
                throw Error('Utilizador já existente!')
            }
        },
        seeMoreCompany(context, payload) {
            context.commit('SEEMORECOMPANY', payload)
        },
        editCompany(context, payload) {
            context.commit('EDITCOMPANY', payload)
            localStorage.setItem('companies', JSON.stringify(context.state.companies))
        },
        //eventos
        addEvent(context, payload) {
            //verificar se ja existe este evento
            const event = context.state.events.find(event => event.name === payload.name)
            if (event == undefined) {
                //criação do evento com sucesso
                context.commit('ADDEVENT', payload)
                localStorage.setItem('events', JSON.stringify(context.state.events))
                localStorage.setItem('guests', JSON.stringify(context.state.guests))
            } else {
                //criação do evento sem sucesso
                throw Error('Evento já existente!')
            }
        },
        seeMoreEvent(context, payload) {
            context.commit('SEEMOREEVENT', payload)
        },
        manageEnrollments(context, payload) {
            context.commit('MANAGE_ENROLLMENTS', payload)
        },
        editEvent(context, payload) {
            context.commit('EDITEVENT', payload)
            localStorage.setItem('events', JSON.stringify(context.state.events))
        },
        addGuest(context, payload) {
            context.commit('ADDGUEST', payload)
            localStorage.setItem('guests', JSON.stringify(context.state.guests))
        },
        removeEvent(context, payload) {
            context.commit('REMOVEEVENT', payload)
            localStorage.setItem('events', JSON.stringify(context.state.events))
        },
        enrollEvent(context, payload) {
            const event = context.state.events.find(event => event.id === payload.idEvent)
            if (event.nrLimit > 0) {
                context.commit('ENROLLEVENT', payload)
                localStorage.setItem('enrollments', JSON.stringify(context.state.enrollments))
                localStorage.setItem('events', JSON.stringify(context.state.events))
                localStorage.setItem('users', JSON.stringify(context.state.users))
            } else {
                throw Error('Capacidade máxima de inscrições atingida!')
            }

        },
        acceptEnrollment(context, payload) {
            context.commit('ACCEPT_ENROLLMENT', payload);
        },
        unsubscribeEvent(context, payload) {
            context.commit('UNSUBSCRIBE_EVENT', payload)
            localStorage.setItem('enrollments', JSON.stringify(context.state.enrollments))
            localStorage.setItem('events', JSON.stringify(context.state.events))
            localStorage.setItem('users', JSON.stringify(context.state.users))
        },
        seeMoreOffer(context, payload) {
            context.commit("SEEMOREOFFER", payload);
        },
        editOffer(context, payload) {
            context.commit('EDITOFFER', payload)
            localStorage.setItem('offers', JSON.stringify(context.state.offers))
        },
        addOffer(context, payload) {
            //verificar se ja existe esta oferta
            const offer = context.state.offers.find(offer => offer.description === payload.description)
            if (offer == undefined) {
                //criação do evento com sucesso
                context.commit('ADDOFFER', payload)
                localStorage.setItem('offers', JSON.stringify(context.state.offers))

            } else {
                //criação do evento sem sucesso
                throw Error('Oferta já existente!')
            }
        },
        removeOffer(context, id) {
            context.commit('REMOVEOFFER', id)
            localStorage.setItem('offers', JSON.stringify(context.state.offers))
        }
    },
    mutations: {
        LOGIN(state, user) {
            state.loggedUser = user
        },
        LOGOUT(state) {
            state.loggedUser = ''
        },
        REGISTER(state, user) {
            state.users.push(user)
        },
        REMOVEUSER(state, userEmail) {
            state.users = state.users.filter(user => user.email != userEmail)
        },
        SEEMORE(state, user) {
            state.userProfileContent = user;
        },
        UPDATESTATUS(state, payload) {
            state.users = state.users.map(user => {
                if (user.email == payload.email) {
                    user.estado = payload.statusChange
                }
                return user;
            })
        },
        EDITPROFILE(state, payload) {
            state.users = state.users.map(user => {
                if (user.nrAluno == payload.nrAluno) {
                    user.fname = payload.fname
                    user.lname = payload.lname
                    user.address = payload.address
                    user.email = payload.email
                    user.password = payload.password
                    user.facebook = payload.facebook
                    user.instagram = payload.instagram
                    user.linkedin = payload.linkedin
                    user.logo = payload.logo
                    user.photo = payload.photo
                    user.pontos = payload.pontos
                }
                return user;
            })
        },

        REMOVECOMPANY(state, payload) {
            state.companies = state.companies.filter(company => company.id != payload)
        },
        ADDCOMPANY(state, payload) {
            state.companies.push(payload)
        },
        SEEMORECOMPANY(state, payload) {
            state.companyProfileContent = payload;
        },
        EDITCOMPANY(state, payload) {
            state.companies = state.companies.map(company => {
                if (company.id == payload.id) {
                    company.name = payload.name
                    company.address = payload.address
                    company.email = payload.email
                    company.website = payload.website
                    company.linkedIN = payload.linkedIN
                    company.logo = payload.logo
                }
                return company;
            })
        },
        //eventos
        REMOVEEVENT(state, payload) {
            state.events = state.events.filter(event => event.id != payload)
        },
        ADDEVENT(state, payload) {
            const newEvent = {
                id: payload.id,
                id_event_type: payload.id_event_type,
                name: payload.name,
                price: payload.price,
                description: payload.description,
                photo: payload.photo,
                date_time_event: payload.date_time_event,
                date_limit: payload.date_limit,
                link: payload.link,
                address: payload.address,
                nrLimit: payload.nrLimit
            }
            state.events.push(newEvent)
            state.guests = state.guests.concat(payload.guests)
        },
        SEEMOREEVENT(state, payload) {
            state.eventsProfileContent = payload;
        },
        MANAGE_ENROLLMENTS(state, payload) {
            state.eventsProfileContent = payload;
        },
        EDITEVENT(state, payload) {
            state.events = state.events.map(event => {
                if (event.id == payload.id) {
                    event.name = payload.name
                    event.price = payload.price
                    event.description = payload.description
                    event.photo = payload.photo
                    event.link = payload.link
                    event.date_time_event = payload.date_time_event
                    event.date_limit = payload.date_limit
                    event.address = payload.address
                    event.nrLimit = payload.nrLimit
                }
                return event;
            })
        },
        ADDGUEST(state, payload) {
            state.guests = state.guests.concat(payload);
        },
        ENROLLEVENT(state, payload) {
            state.enrollments.push(payload);
            state.events.map(event => {
                if (event.id == payload.idEvent) {
                    event.nrLimit = event.nrLimit - 1
                }
                return event;
            })
            state.users.map(user => {
                if (user.nrAluno == payload.idUser) {
                    user.pontos = user.pontos + 1
                }
            })
        },
        ACCEPT_ENROLLMENT(state, payload) {
            state.enrollments.map(enroll => {
                if (enroll.idEvent == payload.idEvent && enroll.idUser == payload.idUser) {
                    enroll.state = 'inscrito'
                }
                return enroll;
            })
        },
        UNSUBSCRIBE_EVENT(state, payload) {
            state.enrollments = state.enrollments.filter(enrollment => {
                if (enrollment.idEvent == payload.idEvent) {
                    if (enrollment.idUser == payload.idUser) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            })
            state.events.map(event => {
                if (event.id == payload.idEvent) {
                    event.nrLimit = event.nrLimit + 1
                }
                return event;
            })
            state.users.map(user => {
                if (user.nrAluno == payload.idUser) {
                    user.pontos = user.pontos - 1
                }
            })
        },
        SEEMOREOFFER(state, payload) {
            state.offersProfileContent = payload;
        },
        EDITOFFER(state, payload) {
            state.offers = state.offers.map(offer => {
                if (offer.id == payload.id) {
                    offer.id_Company = payload.id_Company
                    offer.description = payload.description
                    offer.emailContact = payload.emailContact
                    offer.id_type_offer = payload.id_type_offer
                    offer.id_area = payload.id_area
                    offer.duration = payload.duration
                }
                return offer;
            })
        },
        ADDOFFER(state, payload) {
            state.offers.push(payload)
        },
        REMOVEOFFER(state, id) {
            state.offers = state.offers.filter(offer => offer.id != id)
        }
    }
});