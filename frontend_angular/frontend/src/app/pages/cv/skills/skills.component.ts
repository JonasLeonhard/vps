import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  activeTabIndex = 0;
  tabs = ['Programming', 'Tools', 'Soft Skills'];

  iconPrefix = '../../../assets/icons/';
  contents = {
    0: 'bootstrap.svg',
    1: 'css.svg',
    2: 'express.svg',
    3: 'git.svg',
    4: 'html.svg',
    5: 'illustrator.svg',
    6: 'indesign.svg',
    7: 'java.svg',
    8: 'js.svg',
    9: 'logo.svg',
    10: 'mysql.svg',
    11: 'nodejs.svg',
    12: 'photoshop.svg',
    13: 'premiere.svg',
    14: 'unity.svg'
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
