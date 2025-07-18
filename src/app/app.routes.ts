import { Routes } from '@angular/router';

import { Home } from './Components/home/home';
import { Projects } from './Components/projects/projects';
import { Contact } from './Components/contact/contact';
import { Skills } from './Components/skills/skills';
import { Resume } from './Components/resume/resume';

export const routes: Routes = [
{
  path:'',
  component:Home
},
{
  path:'skills',
  component:Skills
},
{
  path:'projects',
  component:Projects
},
{
  path:'contact',
  component:Contact
},
{
  path:'resume',
  component:Resume
}

 
];
