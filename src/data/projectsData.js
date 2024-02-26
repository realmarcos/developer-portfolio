import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import matchPlayer from '../assets/png/projects/matchplayer-partidas.png'
import markpres from '../assets/png/projects/login-markpres.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Oibot - Chatbot & Multi Atendimentos',
        projectDesc: ' OiBot é um sistema gerenciador de múltiplos usuários e múltiplos números do WhatsApp.',
        tags: ['ReactJS', 'NodeJS' ,'Typescript', 'NextJS'],
        code: 'https://github.com/#',
        demo: 'https://oibot.com.br/',
        image: "https://oibot.com.br/wp-content/uploads/2023/11/Dashboard-de-resultados2.svg"
    },
    {
        id: 2,
        projectName: 'MatchPlayer – App para encontros esportivos',
        projectDesc: 'O aplicativo MatchPlayer tem como objetivo facilitar aos usuários a realizarem encontros esportivos, onde os usuários pode encontrar locais para praticar seu esporte favorito e encontrar pessoas com o mesmo interesse esportivo em comum. APP construído como requisito para conclusão do curso de Sistemas de Informação.',
        tags: ['React Native', 'Typesript','NodeJS', 'Express'],
        code: 'https://github.com/realmarcos/MatchPlayer',
        demo: 'https://github.com/realmarcos/MatchPlayer',
        image: matchPlayer
    },
    {
        id: 3,
        projectName: 'Sistema para aferição de presença - Markpres',
        projectDesc: 'Um Sistema Web criado para aferir presença de participantes de uma ou mais palestras online ou presencial.',
        tags: ['Laravel', 'PHP', 'HTML', "CSS"],
        code: 'https://github.com/IFTO-Sistemas/MarkPress',
        demo: 'https://github.com/IFTO-Sistemas/MarkPress',
        image: markpres
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/