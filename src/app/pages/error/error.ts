import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [RouterLink],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class Error implements OnInit {
  errorCode = '404';
  errorTitle = 'Page Not Found';
  errorMessage = 'The page you are looking for does not exist or has been moved.';

  ngOnInit() {
    // You can customize error messages based on navigation state
  }
}
