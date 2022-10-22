"use strict";
exports.__esModule = true;
var Computadora = /** @class */ (function () {
    function Computadora() {
        this.prendida = true;
    }
    Computadora.prototype.prenderApagar = function () {
        if (this.prendida) {
            this.prendida = false;
        }
        else {
            this.prendida = true;
        }
    };
    return Computadora;
}());
exports["default"] = Computadora;
