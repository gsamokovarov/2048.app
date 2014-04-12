var gui = require ('nw.gui');

function Application() {
  var menubar = new gui.Menu({ type: 'menubar' });

  // See https://github.com/rogerwang/node-webkit/issues/743 to get an idea of
  // of how to get the ordering right.
  gui.Window.get().menu = menubar;

  var gameMenu = new gui.Menu;
  gameMenu.append(new gui.MenuItem({
    label: 'New Game',
    click: function() { this.gameManager.restart(); }.bind(this)
  }));

  gameMenu.append(new gui.MenuItem({ type: 'separator' }));

  gameMenu.append(new gui.MenuItem({
    label: 'Quit',
    click: function() { window.close() }
  }));

  menubar.insert(new gui.MenuItem({
    label: 'Game',
    submenu: gameMenu
  }), 1);

  this.gameManager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
}

Application.run = function () {
  window.requestAnimationFrame(function () { new Application; });
}

Application.run();
