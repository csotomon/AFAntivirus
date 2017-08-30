import { SafeHtmlPipePipe } from './../../shared/safe-html-pipe.pipe';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { MessagesModule } from 'primeng/primeng';

@Component({
  selector: 'app-automata',
  templateUrl: './automata.component.html',
  styleUrls: ['./automata.component.css']
})
export class AutomataComponent implements OnInit {
  // variable que va recorriendo el archivo
  private contador: number;
  // almacena el contenido en bytes del archivo
  contenidoArchivo: Uint8Array;
  // se encontro un virus
  private encontrado: boolean;
  // variable para mostrar en pantalla el log
  procesado = '';
  // Tipo de virus encontrado
  virus = '';
  // Muestra mensajes en pantalla
  msgs: Message[] = [];
  // variable para mostrar en patalla los estados que se procesaron
  logEstados: string[] = [];

  mostrarLogEstado = true;
  mostrarLogArchivo = true;
  procesandoArchivo = false;

  constructor() { }

  ngOnInit() {
  }

  limpiar() {
    this.procesado = '';
    this.logEstados = [];
    this.contador = 0;
    this.msgs = [];
    this.mostrarLogEstado = true;
    this.mostrarLogArchivo = true;
    this.encontrado = false;
  }

  iniciar() {
    this.limpiar();
    this.procesandoArchivo = true;
    // Mientras  no se lea todo el archivo
    while (this.contador < this.contenidoArchivo.length) {
      this.q0();
    }
    // Si no encontro nada, muestra un mensaje en pantalla
    if (!this.encontrado) {
      this.msgs = [];
      this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'No se encontro virus' });
    }
    this.procesandoArchivo = false;
  }

  private q0() {
    let valor = this.contenidoArchivo[this.contador];
    this.contador++;
    this.logEstados.push('q0');
    if (valor === 15) {
      this.log(valor, true);
      this.q1();
    } else if (valor === 72) {
      this.log(valor, true);
      this.q5();
    } else if (valor === 29) {
      this.log(valor, true);
      this.q7();
    } else {
      this.log(valor, false);
    }
  }

  private q1() {
    this.logEstados.push('q1');
    if (this.contador >= this.contenidoArchivo.length || this.encontrado) {
      return;
    }
    let valor = this.contenidoArchivo[this.contador];
    this.contador++;
    if (valor === 30) {
      this.log(valor, true);
      this.q2();
    } else {
      this.log(valor, false);
    }
  }

  private q2() {
    this.logEstados.push('q2');
    if (this.contador >= this.contenidoArchivo.length || this.encontrado) {
      return;
    }
    let valor = this.contenidoArchivo[this.contador];
    this.contador++;
    if (valor === 15) {
      this.log(valor, true);
      this.q3();
    } else {
      this.log(valor, false);
    }
  }

  private q3() {
    if (this.contador >= this.contenidoArchivo.length || this.encontrado) {
      return;
    }
    this.encontrado = false;
    let valor = this.contenidoArchivo[this.contador];
    this.contador++;
    if (valor === 49) {
      this.log(valor, true);
      this.virus = 'Usama';
      this.q4();
    } else if (valor === 30) {
      this.log(valor, true);
      this.q2();
    } else {
      this.log(valor, false);
    }
  }

  private q4() {
    this.logEstados.push('q4');
    this.encontrado = true;
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Virus', detail: 'Se encontró el virus: ' + this.virus });
  }

  private q5() {
    this.logEstados.push('q5');
    if (this.contador >= this.contenidoArchivo.length || this.encontrado) {
      return;
    }
    let valor = this.contenidoArchivo[this.contador];
    this.contador++;
    if (valor === 15) {
      this.log(valor, true);
      this.q9();
    } else if (valor === 72) {
      this.q5();
    } else {
      this.log(valor, false);
    }
  }

  private q7() {
    this.logEstados.push('q7');
    if (this.contador >= this.contenidoArchivo.length || this.encontrado) {
      return;
    }
    let valor = this.contenidoArchivo[this.contador];
    this.contador++;
    if (valor === 32) {
      this.log(valor, true);
      this.q8();
    } else {
      this.log(valor, false);
    }
  }

  private q8() {
    if (this.contador >= this.contenidoArchivo.length || this.encontrado) {
      return;
    }
    this.encontrado = false;
    let valor = this.contenidoArchivo[this.contador];
    this.contador++;
    if (valor === 53) {
      this.log(valor, true);
      this.q10();
    } else {
      this.log(valor, false);
    }
  }

  private q9() {
    if (this.contador >= this.contenidoArchivo.length || this.encontrado) {
      return;
    }
    this.encontrado = false;
    let valor = this.contenidoArchivo[this.contador];
    this.contador++;
    if (valor === 30) {
      this.log(valor, true);
      this.q2();
    }else if (valor === 29) {
      this.log(valor, true);
      this.virus = 'Amtrax';
      this.q4();
    } else {
      this.log(valor, false);
    }
  }

  private q10() {
    if (this.contador >= this.contenidoArchivo.length || this.encontrado) {
      return;
    }
    this.encontrado = false;
    let valor = this.contenidoArchivo[this.contador];
    this.contador++;
    if (valor === 29) {
      this.log(valor, true);
      this.virus = 'Ébola';
      this.q4();
    } else {
      this.log(valor, false);
    }
  }

  /**
   * Muestra en pantalla la lectura del archivo
   * @param valor valor a mostrar en pantalla
   * @param resaltar true para resaltar en rojo
   */
  private log(valor: any, resaltar: boolean) {
    if (resaltar) {
      this.procesado += '<span style="color: red"> ' + valor + '</span>';
    } else {
      this.procesado += ' ' + valor;
    }
  }
}
