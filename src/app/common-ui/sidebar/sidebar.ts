import {Component} from '@angular/core';
import {ProfileCard} from "../profile-card/profile-card";
import {Profile} from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-sidebar',
  imports: [ProfileCard],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  profiles: Profile[] = [];
}
