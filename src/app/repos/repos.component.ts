import { Component, OnInit } from '@angular/core';
import {LandingPageService} from '../service/landing-page.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers: [LandingPageService]
})
export class ReposComponent implements OnInit {
  repos: Repos;
  constructor(private LandingPageService: LandingPageService, public repositoryService: LandingPageService) { }

  ngOnInit() {

  }

}
