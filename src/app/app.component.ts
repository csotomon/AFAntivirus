// import { Automata } from './../shared/automata';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as vis from 'vis';
import { FileUploadModule } from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // Lista de archivos selecionados
  archivosSubidos: any[] = [];
  //automata: Automata;
  datosProcesados = '';
  constructor() {
  }

  /**
   * Funcion de que corre despues de la inicialización del DOM HTML
   */
  ngAfterViewInit() {
    // Carga el gráfico del del AF
    let container = document.getElementById('mynetwork');
    let nodes = new vis.DataSet([
      { id: 0, label: 'q0', color: 'green' },
      { id: 1, label: 'q1' },
      { id: 2, label: 'q2' },
      { id: 3, label: 'q3' },
      { id: 4, label: 'q4', color: 'red' },
      { id: 5, label: 'q5' },
      { id: 6, label: 'q6' },
      { id: 7, label: 'q7' },
      { id: 8, label: 'q8' },
      { id: 9, label: 'q9' },
      { id: 10, label: 'q10' }
    ]);

    // create an array with edges
    let edges = new vis.DataSet([
      { from: 0, to: 0, arrows: 'to', label: 'Otro' },
      { from: 0, to: 1, arrows: 'to', label: '15' },
      { from: 0, to: 5, arrows: 'to', label: '72' },
      { from: 0, to: 8, arrows: 'to', label: '29' },
      { from: 1, to: 0, arrows: 'to', label: 'Otro' },
      { from: 1, to: 2, arrows: 'to', label: '30' },
      { from: 2, to: 3, arrows: 'to', label: '15' },
      { from: 3, to: 2, arrows: 'to', label: '30' },
      { from: 3, to: 4, arrows: 'to', label: '49' },
      { from: 5, to: 6, arrows: 'to', label: '72' },
      { from: 6, to: 5, arrows: 'to', label: '72' },
      { from: 6, to: 1, arrows: 'to', label: '15' },
      { from: 6, to: 7, arrows: 'to', label: '' },
      { from: 7, to: 4, arrows: 'to', label: '' },
      { from: 7, to: 8, arrows: 'to', label: '' },
      { from: 8, to: 9, arrows: 'to', label: '' },
      { from: 9, to: 10, arrows: 'to', label: '' },
      { from: 10, to: 4, arrows: 'to', label: '' }
    ]);

    // create a network
    let data = {
      nodes: nodes,
      edges: edges
    };
    let options = {
      nodes: {
        borderWidth: 2,
        shadow: true
      },
      edges: {
        width: 2,
        shadow: true
      }
    };
    let network = new vis.Network(container, data, options);
  }

  onArchivoClear(event) {

  }
  /**
   * Procesa la selección del archivo
   * @param event Evento
   */
  onArchivoSelect(event) {
    this.archivosSubidos = [];
    this.archivosSubidos.push(event.files[0]);
  }
  /**
   * Procesa el archivo subido
   * @param event Evento
   */
  archivoUploadHandler(event) {
    let contenido;
    let fr = new FileReader();
    // listener que procesa la lectura del archivo
    fr.onloadend = (e) => {
      contenido = fr.result;
      // Convierte el archivo archivo leido en un array de bytes
      //this.automata = new Automata();
      //this.automata.archivo = new Uint8Array(contenido);
      /*
      this.resultadoArchivo.forEach(element => {
        console.log(element);
      });
      */
      //this.automata.inicio();
    };
    // Lectura del archivo subido
    fr.readAsArrayBuffer(event.files[0]);

  }
}
