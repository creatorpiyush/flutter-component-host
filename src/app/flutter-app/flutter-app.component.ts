import { Component, OnInit } from '@angular/core';

declare var _flutter: any;

@Component({
  selector: 'app-flutter-app',
  templateUrl: './flutter-app.component.html',
  styleUrl: './flutter-app.component.css'
})
export class FlutterAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Listen to the event emitted by Flutter
    console.log("Hello");
    window.addEventListener("load", function (ev) {
    _flutter.loader.loadEntrypoint({
    entrypointUrl: "../../assets/web/main.dart.js",
        onEntrypointLoaded: async function(engineInitializer: any) {
          let appRunner = await engineInitializer.initializeEngine({
            // Pass a reference to "div#flutter_host" into the Flutter engine.
            hostElement: document.querySelector("#flutter_host")
          });
          await appRunner.runApp();
        }
      });
    });
  }
}

