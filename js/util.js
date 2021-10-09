$(function () {
  String.prototype.endsWith = function (str) {
    if (
      str == null ||
      str == '' ||
      this.length == 0 ||
      str.length > this.length
    )
      return false;
    if (this.substring(this.length - str.length) == str) return true;
    else return false;
  };
});
var leftMk = [];
var rightMk = [];

var add_img =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEARwBHAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KCcUUjoJUZWGVYYI9RQAuaK/CT/AIJ5/FDxJrX/AAXTs7+61zU5rvxF4r8Q2upuZ2AvoRbX7LC6j5TGrRRFUxtQxR7QNq4/dugAooooA8l/br+O+tfsxfsleOPH3h3SYtb1nwvpxu7azmR3hdtyrvkCEMY4wxlcKVJSNhuXO4fjLd/8HCP7RV1dSSp4k8G26OdyxRaFEUT2G5i2PqSfev30IzWAvwq8Lqcjw3oAPtp8X/xNAH8zHwt/aV8U/Bb9oC1+Kmg3ljB4ss7661OK4mtlltxNcpKkp8s/LgrPJgdsj0r6i0f/AIOK/wBoLR7YLcXnw/1ZknWYm50VkeRApBh/dTIApyGyBvyowcZU8P8AsZada3n/AAWC8MWs1vby2rfEO+jMDxhoyvm3PG3GMDA4+lf0AQfDDw1azxyxeHdDjkhcSRuthErIwOQwO3gggEEdCKAE+GHi268e/Dfw/rl9pN1oN7rGm219PptyczafJLEkjQPwPmRmKHgcqeB0ordooAKR13oRkrkYyOooooA+avhp/wAEmPg18J/2sbr4yaTpOqL4qmvLrUYbaW+L6dY3VyGEs0UOBtY+ZLhSxRPNbaq7U2fS1FFABRRRQB//2Q==';

var jhj_img =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABKCAMAAADufKjSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzg1Q0VGNjQ4NUQ2MTFFOUExNzg5MzkxQjg3RkE2QUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzg1Q0VGNjM4NUQ2MTFFOUExNzg5MzkxQjg3RkE2QUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IjAyQjYyNjVENzVBQTkzMDMyOUZEQjlGQTM5RDJFRjZGIiBzdFJlZjpkb2N1bWVudElEPSIwMkI2MjY1RDc1QUE5MzAzMjlGREI5RkEzOUQyRUY2RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoQJ8x0AAAMAUExURSs3UcbKpRU0bVZoco6ly/L+/nSFlTVKiZSk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';
var fz_img =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBGRTM2Qzg4OUQ1ODExRTlBQjhEOEJBMTRBNEQ4MDMyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBGRTM2Qzg5OUQ1ODExRTlBQjhEOEJBMTRBNEQ4MDMyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEZFMzZDODY5RDU4MTFFOUFCOEQ4QkExNEE0RDgwMzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEZFMzZDODc5RDU4MTFFOUFCOEQ4QkExNEE0RDgwMzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FPwPwAAAExklEQVR42uxbXWgcVRT+7szsz+zu7OanKc1WJdWAFG0ptuIvGKl9KKIPBcEnCYIvCiLig1WhfRDER1FERfHvRQgIitoXoeZBqvgTNZpqTIlt2iTYxP3N7s7snRnPzW41mJlm153dHbZz4OMOyz1373fOveeec2eX2baNjcIYQztk16uF/dS8QdhBmCeMzz+qzaGN8l9uQiR0Tt4jPEUkd1L7CuFNdEFYqx4mzz1LzWME43LfQ5glsoc26E1To20xfIRwlPTe8crDigdGGyI80+ykqP+eBoz5BDV9XnpYwhUmAeGAcED4X7nt8ES/ev6ClpidG6VnxcuJ0Xjx+Jn5qwXEs1fjtjrJ+1NT0w/XnycIP3rI+aA289uT9edJwscdO4d3H7UP179Q8eEq/fL0C+xOrzOtW3xKVsgdQdAKCAeEA8IB4V4RxeHMPe7Qb8zPJFzmLOT4lonHnuew6bS2bHGI+5ew7LJOp58H29LDaYdyO1cG8mX/Ek73tbCkhx2UhYf9THi4FcJL2c2dChV/ByKnOTdMeDHr7OEtqxCLe7vRmQRbkhvqutgKYdPCSw79bq0XEO7n288fgi9/7xnf0LWHwEcPNtTXZc4tlYcivB+73ECRX0+Arf4OLZlqiSivWlBVBfnUbhTTBxrSofKQNVoeelbycaMAW1/BdbtuaFpXTKtQNPBXVkfV5Lhp3zB+WFVR7ETi0UmxyAPZvI6MIEqe7dlMi9OmEyQzOR2W1XqgaybTUhyylmPtyrQqhklEK8gXDE8DutOcGybcjkxrrVRd35+i7dlMS0TIvAhEGR06ebZnMy2TrJPN1fYn550JRF3JtC6dL4rMMNgfXUenpCuZFtPSkEwDJSXVMoGFPFCC2sSq6kKm1U1pJtMK7rR6XYI7reBOC8Gdlu8kuNPqWKbVJelKptVNCTKtINMKCF/BqaWTJOa+eEsuZUaYZT4EbM5ejIERlK45gCENCMnAVQPAHytALAycpVYuXqQxJh3H5okhFEfvgkbl82AC2J6sHTMiezq3Sh30EpIzn7mFoGUrrD7tuYe/mbh74atPj4zT482EUz5wlLhKeZnC0vVff3Tvu21b0qdOPPAdar+LepDwOaHYYaJLhPcJ+2kujxPyzQ7AvPjPAx1b48zibw/KBci8goGYiYtFCVE1jMVyAlYoOklHx5iL7hizzZOaXYQmlZGMmMiWaEmHQljW4+Ch+FnSHfk/1mnbqxbJWItG/pyFvW0bWDyBSFIB4xZss4zI6hlwta/f1eJmVY4u/QKk+sAGkqQbgmTTiuU6lMx5SJKS6HjQ2tKSoahR3rkPiSSDeMMZpuDFdApg4RQq9g7acTznbi3ZqqT3QolJENSErmTWgpZhbyej8TX/EWZy7T62qsPMZVFYM2CVFZia+NVvErakWO66kr0e980qeIZ08xXwMlktFqMPU0LX9h1huZJLRBenUc0v/xNZ1qssghaOo5ze676keUVRSVfOnEOR9tzGKKgpEZSHb4z7jrC6MGUqaytu+xvq4k+u9UxsYaoayl1wMYZOutMF32VaRPY1ah4hnBQXJPWPRRU9Q3iRSB9x0/32g9tFRnIf4RPCJauJl1Di32uvM9O4x0vCzLZ9Xux6LH8LMABwjSYXVaLURQAAAABJRU5ErkJggg==';
var wlmk_img =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABcCAYAAACYyxCUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA3LTAzVDExOjA0OjI2KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA3LTA0VDA5OjA1OjMxKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNy0wNFQwOTowNTozMSswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NDFjZDFmYy1iODhjLWJiNGYtYjcyYi1kNGY1MGI4ZGE4YmUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0M2M1N2Y4NC0xYjZjLWE2NGQtOTcyYy05MDgwNDdkMDRkMDAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NWU3Y2VjNy04N2QyLWFhNGEtYjdkZS0xMWQwZjdkZTc5NmMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU1ZTdjZWM3LTg3ZDItYWE0YS1iN2RlLTExZDBmN2RlNzk2YyIgc3RFdnQ6d2hlbj0iMjAxOS0wNy0wM1QxMTowNDoyNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOTY2MTg4Ni01ODVkLWEwNDktYTFhMC1jZWM2NGNjYWM3YTAiIHN0RXZ0OndoZW49IjIwMTktMDctMDNUMTE6MDQ6MjYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzQxY2QxZmMtYjg4Yy1iYjRmLWI3MmItZDRmNTBiOGRhOGJlIiBzdEV2dDp3aGVuPSIyMDE5LTA3LTA0VDA5OjA1OjMxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+w54RhAAABLpJREFUeJztnU9sG0UUh39rWoIdO9625k9LJISEqDi0qkqFeuAQCCDkFT2hSK3EgRMN5dBDCxwQQr20ueVAFXGCCwVV4gDSWiBUlAPhgJRLMQogLimO4kROYjuOFVdOlwMaa+04trvszLzpvu+06x1l3uTLzLzMenYtz/PA0CGmOwCmnX3iwLIsrJWKJwBMAXgJwH5dQT2INJvNytZW/et0emTyUOaJXcOSGKkscbC+tnICwC8A4grjjBzlcuXXP/78+7TjOG1ShAf/kDUFliEd206/kEolv3Rd1+p23S/kZUUxRZ54/JGzAK51u+YXsq9bASZ8HorFAOB913Xf6rzGWZZeZlzXfdr/AQvRyzCAz/wfsBD9vOq67ivihIXQ4F1xoHUiz/38GwAg++KxnuUKqxu4/VcBjx8awfPPPdWz7PzCIlbWqjj+7ChGHzsQSv0KaGW4WntIbi6P3Fy+b7nCygZyc3nML9zpW3Z+4Q5yc3kUVjZCq18BaXHAQxYxWAgxtM4hY6eODlTucCaNsVNH8eSj6b5ljz1zBAfTwzic6V920PpV4l9c5Bsjilhc/AfLxdW2z7LZrAXwkEUOFkIM5XNIebOO6Ru3UCrXVFfdk4ydxMVz47BTCa1xKO0hVGUAQKlcw/SNWyhv1rXGoayH+GVk7CQuTIwhmRhSVX1PavUGrt+cbUnR2VOUZFmdMigMDZ2ojFFrlmWCDACwUwlcPDeOjJ3UOnxJFWKKDAEFKVKFmCRD0E2KSqQKEdmUKTIEdiqBCxNjAKA8I1SS9pokQ6ArAwyc9oqbOwICN3mUIqv9wYV03NiJnBBJ7Q8shOLStUpktT+wkDfHT4YZh3HIaj+v9hKDhRCDhRCD9Bes35v6KpSf8+kHZ0P5OSrgHkIM0j1EcGXyDOJD97/D7vL0NxKikYsRQuJD+xEfelh3GEoILOTjme/azq9MnvnfwZiErPYHFrJe3QolAFOR1f7AQj58+/Uw4zAOWe0PLKTfV/0fdGS1n9NeYrAQYrAQYrAQYrAQYrAQYgROewur7Zsqo5YGy2p/YCHXPv++7dykJe4wkNX+wEIOjgyHEsAgUFy1ldX+wEKitpjYiaz2k15+j9owCHCWRQ4WQgwWQgwWQgwWQgwWQgzeHxIQo/eHlDfrxu2iqtUbPa8buT/Ev3HSpH2G5c06rt+cBfBfG7oha3+I1AcHmLYtGlATs7YHB1DY930/UPgDkp5lmSKFggxA4bZoylKoyAAUP+KP8uOZAHXPzCLziD9/T6GG7p4hUH4/xE4l8Mk7b6iu1hh46YQYLIQYLIQYLIQYLIQY/P6QAepXCb8/hMb7Q1rwkEUMFkIMfn8IMfj9IRoYaHHR87x7iuOKLDs7e/+qW0Jqta01JdFEHM/zUKlW97zeElJYWv6i2dxRElSUWVpaRqNxd8/rrUm9UqnO5H9fuDQ6esRKj6QQi3ECFhYegO3tbRSLqyiV1nuWbU3qlmXBdd0fALwmP0Smg3o2mx0Gdv8fclVDMAzwozhoE+I4ziyAb1VHE3HuAvhInHSbKM4DKCoLJ9o0AEw4jtNaUNslxHGcIoBxALcVBhY17gH4CcBpx3HaRqTWpM7QgHNbYvwLdfA4IFWPa4AAAAAASUVORK5CYII=';

let defaultPostion_X = 300;
let defaultPostion_Y = 150;

let coordinateLst = [];
let searchLst = [];
let fenzhanStr = '分站';
let wangluolmokuaiStr = '网络模块';

function Generated_HT_TopoMap(pData) {
  //alert(pData);
  var _data1 =
    '192.168.101.3+|添加分站|分站|拓扑定义-添加分站|,192.168.100.203+|添加分站|分站|拓扑定义-添加分站|,192.168.100.130+|添加分站|分站|拓扑定义-添加分站|,0010000|安装位置A|大分站|拓扑定义-分站|,0020000|大分站22222|大分站|拓扑定义-分站|,192.168.101.1+|添加分站|分站|拓扑定义-添加分站|,0030000|333333|大分站|拓扑定义-分站|,192.168.101.4+|添加分站|分站|拓扑定义-添加分站|,192.168.101.2+|添加分站|分站|拓扑定义-添加分站|,192.168.101.9|添加分站|分站|拓扑定义-添加分站|,192.168.101.8|添加分站|分站|拓扑定义-添加分站|,192.168.101.3|7F.09.F6.09.7A.03|网络模块|拓扑定义-网络模块|192.168.101.9#192.168.101.3+#192.168.101.8,192.168.100.130|7F.DD.11.00.0E.08|网络模块|拓扑定义-网络模块|192.168.100.130+,192.168.100.203|7F.DD.11.00.0E.07|网络模块|拓扑定义-网络模块|192.168.100.203+,192.168.101.1|7F.09.F6.09.7A.01|网络模块|拓扑定义-网络模块|0010000#0020000#192.168.101.1+,192.168.101.2|7F.09.F6.09.7A.02|网络模块|拓扑定义-网络模块|192.168.101.2+,192.168.101.4|7F.09.F6.09.7A.04|网络模块|拓扑定义-网络模块|0030000#192.168.101.4+,7f.09.F6.09.7A.O2|101.2|交换机|拓扑定义-交换机|192.168.101.2,7f.09.F6.09.7A.O4|104|交换机|拓扑定义-交换机|192.168.101.4,7f.09.F6.09.7A.O1|101.1|交换机|拓扑定义-交换机|192.168.101.1,54-EE-75-C0-DE-DA|未定义安装位置|交换机|拓扑定义-交换机|192.168.101.3#192.168.100.130#192.168.100.203,00.00.00.00.00.00|添加交换机|交换机|拓扑定义-添加交换机|,xxxxx|添加交换机|交换机|拓扑定义-添加交换机|,yyy|添加交换机|交换机|拓扑定义-添加交换机|sdsdsss';
  if (pData == undefined || pData.trim() == '') {
    pData = _data1;
    //alert("没有数据进来,用的假数据");
  }
  if (pData == undefined || pData.trim() == '') return;
  leftMk = [];
  rightMk = [];
  dataModel = new ht.DataModel();
  graphView = new ht.graph.GraphView(dataModel);
  view = graphView.getView();
  view.className = 'main';
  document.body.appendChild(view);
  window.addEventListener(
    'resize',
    function (e) {
      graphView.invalidate();
    },
    false
  );

  //图元事件
  //停止默认行为
  /*    graphView.setInteractors(null);*/
  graphView.setInteractors(
    new ht.List([
      new ht.graph.ScrollBarInteractor(graphView),
      new ht.graph.SelectInteractor(graphView),
      new ht.graph.MoveInteractor(graphView),
      new ht.graph.DefaultInteractor(graphView),
      new ht.graph.TouchInteractor(graphView),
    ])
  );
  var eventType = ht.Default.isTouchable ? 'touchend' : 'mouseup';

  view.addEventListener(eventType, function (e) {
    var data = graphView.getDataAt(e);

    if (data && ht.Default.isDoubleClick(e)) {
      // alert(data.getName() + ' is double clicked.');
      alert(data.getToolTip());

      //window.external.JSPointEdit(data.getToolTip());
    }
  });

  var _arr = pData.split(',');
  var _result = [];
  _result['fz'] = new Array();
  _result['jhj'] = new Array();
  _result['wl'] = new Array();
  for (let index = 0; index < _arr.length; index++) {
    const element = _arr[index];
    // console.log(element);
    // document.writeln(element + '<br />');
    if (
      element.indexOf('拓扑定义-添加分站') > -1 ||
      element.indexOf('拓扑定义-分站') > -1
    ) {
      _result['fz'].push(element);
    }
    if (
      element.indexOf('拓扑定义-交换机') > -1 ||
      element.indexOf('拓扑定义-添加交换机') > -1
    ) {
      _result['jhj'].push(element);
    }
    if (element.indexOf('拓扑定义-网络模块') > -1) {
      _result['wl'].push(element);
    }
    searchLst.push(element.trim());
  }
  // console.logar);
  GenerateTopoMap(_result);

  //
}

function GenerateTopoMap(pResult) {
  var leftArray = [];
  var rightArray = [];

  if (
    pResult != undefined &&
    pResult['jhj'] != undefined &&
    pResult['jhj'].length > 0
  ) {
    for (let index = 0; index < pResult['jhj'].length; index++) {
      const element = pResult['jhj'][index].trim();
      let bianhao = element.split('|')[0].trim();

      let _index = index;
      let a = Math.floor(_index / 2) + 1;
      let b = (_index % 2) + 1;

      if (b % 2 == 1) {
        var _node = createNode(
          defaultPostion_X * b,
          defaultPostion_Y * a,
          bianhao,
          element,
          jhj_img
        );
        leftArray.push(_node);
      } else {
        var _node = createNode(
          (defaultPostion_X - 70) * b,
          defaultPostion_Y * a,
          bianhao,
          element,
          jhj_img
        );
        rightArray.push(_node);
      }
    }
  }
  GenerateSub(leftArray, rightArray, pResult);
}

function createNode(x, y, name, toolTip, icon) {
  var node = new ht.Node();
  coordinateLst.push(x + '.' + y);
  node.setPosition(x, y);
  if (icon != undefined && icon != '') {
    node.setImage(icon);
    node.setSize(30, 30 | { width: 20, height: 20 });
  }
  // name = name == '00.00.00.00.00.00' ? '+' : name;
  // name = name.endsWith('+') ? '+' : name;

  node.setName(name);
  node.setToolTip(toolTip);

  if (name == '00.00.00.00.00.00' || name.endsWith('+')) {
    node.setImage(add_img);
    node.setName('');
  }

  dataModel.add(node);
  return node;
}

function createNodeAndLink(ele, lst, leftOrRigth, isPush, img) {
  let cnt = 0;
  for (let j = 0; j < lst.length; j++) {
    // 通过mk 取得模块里的完整信息 替代ele.getToolTip()
    var toolTipsDetails = '';
    for (let i = 0; i < searchLst.length; i++) {
      const s = searchLst[i];
      var topoType = '';
      if (isPush == 0) topoType = '分站';
      else topoType = '网络模块';

      if (s.indexOf(lst[j]) > -1 && s.indexOf(topoType) > -1) {
        toolTipsDetails = s;
        break;
      }
    }

    const pos = ele.getPosition();
    if (lst[j] == '') return;
    let _node;
    var _x;
    var _y;
    if (leftOrRigth == 'left') {
      _y = findLast_Y_coordinate(pos.x - 100, pos.y + cnt * 50);
      _node = createNode(pos.x - 100, _y, lst[j], toolTipsDetails, img);
      if (isPush > 0) leftMk.push(_node);
    } else {
      _y = findLast_Y_coordinate(pos.x + 100, pos.y + cnt * 50);
      _node = createNode(pos.x + 100, _y, lst[j], toolTipsDetails, img);
      if (isPush > 0) rightMk.push(_node);
    }
    createEdge(ele, _node);
    // console.log(lst[j]);
    cnt += 1;
  }
}

function findLast_Y_coordinate(x, y) {
  let coordStr = x + '.' + y;
  if (coordinateLst.indexOf(coordStr) > -1) {
    return findLast_Y_coordinate(x, y + 50);
  } else {
    return y;
  }
}

function createEdge(n1, n2, name, background, fixed) {
  // n2.setHost(n1);
  var edge = new ht.Edge(n1, n2);
  edge.setName(name);
  edge.setStyle('edge.gap', 30);
  edge.setStyle('label.position.fixed', fixed);
  edge.setStyle('label.background', background);
  dataModel.add(edge);
  // console.log('=====> ' + n1.getToolTip());
  return edge;
}

function GenerateSub(leftArrayMk, rightArrayMk, _result) {
  if (
    leftArrayMk != undefined &&
    leftArrayMk.length != undefined &&
    leftArrayMk.length > 0
  ) {
    for (let index = 0; index < leftArrayMk.length - 1; index++) {
      createEdge(leftArrayMk[index], leftArrayMk[index + 1]);
    }
  }
  if (
    rightArrayMk != undefined &&
    rightArrayMk.length != undefined &&
    rightArrayMk.length > 0
  ) {
    for (let index = 0; index < rightArrayMk.length - 1; index++) {
      createEdge(rightArrayMk[index], rightArrayMk[index + 1]);
    }
  }
  if (leftArrayMk != undefined && rightArrayMk != undefined) {
    createEdge(leftArrayMk[0], rightArrayMk[0]);
    createEdge(
      leftArrayMk[leftArrayMk.length - 1],
      rightArrayMk[rightArrayMk.length - 1]
    );
  }
  //生成模块
  console.log('==========生成模块=====');
  for (let index = 0; index < leftArrayMk.length; index++) {
    const element = leftArrayMk[index];
    var _name = element.getToolTip().split('|');

    var lst = _name[_name.length - 1].split('#');
    createNodeAndLink(element, lst, 'left', 1, wlmk_img);
  }

  for (let index = 0; index < rightArrayMk.length; index++) {
    const element = rightArrayMk[index];
    var _name = element.getToolTip().split('|');

    var lst = _name[_name.length - 1].split('#');
    createNodeAndLink(element, lst, 'right', 1, wlmk_img);
  }

  //生成分站
  console.log('==========生成分站=====');

  var mkToFz = [];
  for (let j = 0; j < _result['wl'].length; j++) {
    const wl = _result['wl'][j];
    var _name = wl.split('|');
    var lst = _name[_name.length - 1].split('#');
    //mkToFz[_name[0].trim()] = lst;
    for (let i = 0; i < leftMk.length; i++) {
      var left = leftMk[i].getName();
      if (left == _name[0].trim()) {
        // console.log(left);
        createNodeAndLink(leftMk[i], lst, 'left', 0, fz_img);
      }
    }
    for (let i = 0; i < rightMk.length; i++) {
      var right = rightMk[i].getName();
      if (right == _name[0].trim()) {
        // console.log(right);
        createNodeAndLink(rightMk[i], lst, 'right', 0, fz_img);
      }
    }
  }
  // console.log(mkToFz);
}

//自适应 调整图元position  todo
function getValidPostion(searchLst, x, y, tuyuan_type) {
  let postionLst = [];
  let returnX;
  let returnY;

  for (let i = 0; i < searchLst.length; i++) {
    const item = searchLst[i];
    if (item.indexOf(x + '.' + y) > -1) {
    }
  }

  returnX = x;
  returnY = y;

  postionLst.push(returnX);
  postionLst.push(returnY);
  return postionLst;
}
function Queue(size) {
  var list = [];

  //向队列中添加数据
  this.push = function (data) {
    if (data == null) {
      return false;
    }
    //如果传递了size参数就设置了队列的大小
    if (size != null && !isNaN(size)) {
      if (list.length == size) {
        this.pop();
      }
    }
    list.unshift(data);
    return true;
  };

  //从队列中取出数据
  this.pop = function () {
    return list.pop();
  };

  //返回队列的大小
  this.size = function () {
    return list.length;
  };

  //返回队列的内容
  this.quere = function () {
    return list;
  };
}
