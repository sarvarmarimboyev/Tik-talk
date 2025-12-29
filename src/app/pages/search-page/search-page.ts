import {Component} from '@angular/core';
import {ProfileCard} from '../../common-ui/profile-card/profile-card';
import {Profile} from '../../data/interfaces/profile.interface';
import {inject} from '@angular/core';
import {ProfileService} from '../../data/services/profile.service';

@Component({
  selector: 'app-search-page',
  imports: [ ProfileCard ],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage {

  profileService = inject(ProfileService);

  profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val) => {
      this.profiles = val;
    });
  }

}
