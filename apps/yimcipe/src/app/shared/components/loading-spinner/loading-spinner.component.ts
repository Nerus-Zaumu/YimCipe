import { Component } from '@angular/core';

@Component({
  selector: 'yimcipe-loading-spinner',
  template: `
  <div wire:loading class="z-index-[999] fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
    <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
    <h2 class="text-center text-white text-xl font-semibold">Sending...</h2>
    <p class="w-1/3 text-center text-white">This may take a few seconds, please be patient...</p>
  </div>

  `,
  styles: [`
    .loader {
    border-top-color: #3498db;
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
  }

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  `],
  standalone: true
})
export class LoadingSpinnerComponent {}
