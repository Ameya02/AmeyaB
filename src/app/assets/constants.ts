import { CSS3, ChakraUI, HTML5, JS, MongoDB, NodeJS, OracleSQL, ReactJS, Tailwind, Redux, Python } from "./index";
import { ChatApp, FileHosting, MeetX, MusicPlayer } from "./projects";

export const skills = [
  {
    name: "HTML 5",
    img: HTML5,
  },
  {
    name: "CSS 3",
    img: CSS3,
  },
  {
    name: "JavaScript",
    img: JS,
  },
  {
    name: "NodeJS",
    img: NodeJS,
  },
  {
    name: "ReactJS",
    img: ReactJS,
  },
 
  {
    name: "MongoDB",
    img: MongoDB,
  },
  {
    name:"Tailwind CSS",
    img:Tailwind,
},
{
    name:"Oracle SQL",
    img:OracleSQL,
},
{
  name:"Redux",
  img:Redux,
},  
{
    name:"ChakraUI",
    img:ChakraUI,
},
{
  name:"Python",
  img:Python,
}
];


export const links = [{
  name:"About",
  link:"#about"
},
{
  name:"Skills",
  link:"#skills"
},
{
  name:"Projects",
  link:"#projects"
},
{
  name:"Contact",
  link:"#contacts"
},
]


export const projects_data = [
  {
  project_img: FileHosting,
  project_name: "File Hosting",
  project_stack:"React | AWS |",
  project_link:"projects/file-hosting",
},
{
  project_img: ChatApp,
  project_name:"Chat Application",
  project_stack:"React | Mongo | Chakra UI | Tailwind",
  project_link:"projects/chat-application",
},
{
  project_img: MeetX,
  project_name:"Google Meet Clone",
  project_stack:"React | Tailwind | PeerJS | Chakra UI ",
  project_link:"projects/meet-clone",
},
{
  project_img:MusicPlayer,
  project_name:"Music Player",
  project_stack:"React | Shazam API | Tailwind",
  project_link:"projects/music-app",
},

]