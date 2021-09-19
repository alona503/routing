import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archive-dates',
  templateUrl: './archive-dates.component.html',
  styleUrls: ['./archive-dates.component.css'],
})
export class ArchiveDatesComponent implements OnInit {
  year: any;
  month: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  update() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      {
        this.month = params.get('month');
        this.year = params.get('year');
      }
    });
  }
}
